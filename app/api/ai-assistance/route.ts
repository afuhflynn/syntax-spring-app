import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Allow longer processing time for AI responses
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // Expect the full challenge and user code information in the request body:
    const {
      prompt,       // A message (e.g., "Please provide the solution code") – may be empty.
      code,         // The user's code snippet or partial solution (if any).
      language,     // Programming language (e.g., "Python", "JavaScript").
      examples,     // Example input/output or sample cases.
      constraints,  // Any problem constraints.
      title,        // Challenge title (e.g., "Longest Palindromic Substring").
      description,  // Challenge description (problem statement).
      difficulty,   // Difficulty level (e.g., EASY, MEDIUM, or HARD).
      chatHistory = [],
      modelVersion,
    } = await req.json();

    // Validate required challenge details:
    if (
      !title ||
      !description ||
      !code ||
      !language ||
      (typeof prompt === "string" && prompt.trim().length === 0)
    ) {
      throw new Error("Missing required challenge information.");
    }

    // Build a comprehensive system prompt with every piece of challenge info.
    // This prompt instructs the AI to provide hints, tips, and advice only.
    // It emphasizes self-learning, careful analysis, and learning from mistakes.
    const systemPromptText = `
You are SyntaxSpring Code Assist, a dedicated AI coding assistant focused on helping users learn and improve their problem-solving skills. You have full context of the coding challenge provided below:

**Challenge Title:** ${title}
**Challenge Description:** ${description}
**Difficulty Level:** ${difficulty || "Not specified"}
**Programming Language:** ${language}

**User Code Provided:**
\`\`\`${language}
${code}
\`\`\`

**Examples:** ${examples || "None provided"}
**Constraints:** ${constraints || "None provided"}

**Your Role:**
- Provide clear, helpful tips and hints rather than complete solution code.
- Emphasize self-learning, encourage the user to analyze their mistakes, and guide them through the problem-solving process.
- Ask clarifying questions and suggest steps that the user can take to debug and improve their solution.
- Emphasize the importance of understanding underlying concepts and learning by doing.
- When providing code snippets, add comments that explain the logic behind each step.
- Do not reveal the entire solution; instead, offer advice that nudges the user towards discovering the solution on their own.

Use the context above for every response. If the user does not provide additional directions, always refer to this challenge context in your explanations and advice.
    `.trim();

    // Create an initial chat message from the user.
    const initialUserChat = {
      role: "user",
      parts: [{ text: prompt || "Hello, AI" }],
    };

    // Build system instruction with the comprehensive prompt.
    const systemInstruction = {
      role: "system",
      parts: [{ text: systemPromptText }],
    };

    // Default model, if none provided.
    const defaultModel = "gemini-2.0-flash";

    // Initialize the Google Generative AI with the API key.
    const genAI = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    // Start the chat session with full challenge context.
    const chat = genAI.chats.create({
      model: modelVersion || defaultModel,
      history: [initialUserChat, ...chatHistory],
      contents: `This conversation is about ${title}, ${language} coding challenge. Use the provided context for every reply.`,
      config: {
        temperature: 0.5,
        maxOutputTokens: 5000,
systemInstruction,
      },
    });

    // Send the message from the user; stream back the AI's response.
    let response = "";
    try {
      const result = await chat.sendMessageStream({ message: prompt });
      for await (const chunk of result) {
        response += chunk.text;
      }
    } catch (err: any) {
      console.error("Error during sendMessage:", err);
      throw new Error("Error during sendMessage: " + err);
    }

    if (!response) {
      throw new Error("No response received from the AI model.");
    }

    // Return the final response.
    return NextResponse.json({ response: response });
  } catch (error) {
    console.error("AI assistance error:", error);
    return NextResponse.json(
      {
        error: "Failed to get AI assistance.",
        message: "Error during sendMessage: " + error,
      },
      { status: 500 }
    );
  }
}
