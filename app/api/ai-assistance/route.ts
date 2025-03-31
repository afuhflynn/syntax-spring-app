import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Allow longer processing time for AI responses
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const {
      prompt,
      code,
      language,
      examples,
      constraints,
      title,
      description,
      difficulty,
      chatHistory,
      modelVersion,
    } = await req.json();

    // Default model if user model does not exist
    const defaultModel = "gemini-2.0-flash";

    // Initialize the Google Generative AI with the API key
    const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

    // Create a system prompt that includes context about the code
    const systemPrompt = `You are an AI coding assistant for the Syntax Spring a modern, interactive coding challenge platform designed to help developers improve their programming skills through hands-on practice. 
    Help users with their coding questions, explain concepts, suggest improvements, 
    and provide code examples but not a direct solution to the problem.

    Make sure to be friendly and respond to greetings with short answers.
    
    Here is the information about the challenge:
    Challenge Title: ${title}
    Challenge Description: ${description}
    Difficulty: ${difficulty}. Let your response nature be based on the DIFFICULTY level (it can be EASY, MEDIUM, HARD)
    constraints: ${constraints}
    Examples of solution behavior: ${examples}

    The user is working with ${language} code. Here is their current code:
    \`\`\`${language}
    ${code}
    \`\`\`
    
    User query: ${prompt}
    
    Based on the above information provide the user with tips, hints, online reference on how to complete the challenge but NOT THE ACTUAL solution. Let the user learn and figure out the solution with your help.
    
    Also provide them with advice on the importance of going thought process and figuring out the answer without using any ai tool or any other code examples out there to provide them solution. They should take their time and learn.

    NB: Only respond to greetings (response should be short), friendly requests, learning, coding and motivation related questions. Else simply say Sorry I can't help out with that.
    
    Every response should be with respect to your chat history so that you don't repeat your self. DO NOT REPEAT YOUR SELF.
    `;

    // Create initial Chatbot history
    const history = chatHistory.map((chat: any) => {
      return {
        role: chat.role,
        parts: [{ text: chat.content }],
      };
    });

    const initialUserChat = {
      role: "user",
      parts: [
        {
          text: "Hello, ai",
        },
      ],
    };

    // Create an initial chat session
    const chat = genAI.chats.create({
      model: modelVersion || defaultModel,
      config: {
        temperature: 0.5,
        maxOutputTokens: 1024,
      },
      history: [initialUserChat, ...history],
    });

    const stream = await chat.sendMessageStream({
      message: systemPrompt,
    });
    for await (const chunk of stream) {
      let text: string | undefined = "";
      if (chunk) {
        text = chunk.text;
      } else {
        throw new Error(
          "Error fetching SyntaxSpring Code Assist response. Try again later"
        );
      }
      if (text) {
        // Send the text to the user
        return NextResponse.json({
          response: text,
        });
      }
    }
  } catch (error) {
    console.error("AI assistance error:", error);
    return NextResponse.json(
      {
        error: "Failed to get AI assistance",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
