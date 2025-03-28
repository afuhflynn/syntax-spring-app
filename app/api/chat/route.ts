import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages, data } = await req.json()

  // Extract code context if provided in the data
  const codeContext = data?.prompt || ""

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system: `You are an AI coding assistant for the CodeSpark AI editor. 
    Help users with their coding questions, explain concepts, suggest improvements, 
    and provide code examples. When appropriate, format code blocks with proper syntax highlighting.
    
    ${codeContext ? "The user has shared their current code context. Use this to provide more relevant assistance." : ""}`,
  })

  return result.toDataStreamResponse()
}

