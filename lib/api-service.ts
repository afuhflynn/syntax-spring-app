/**
 * API service for code execution and AI assistance
 */

// Piston API for code execution
export async function executeCode(language: string, code: string) {
  try {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        version: "*", // Use the latest version
        files: [
          {
            name: getFileName(language),
            content: code,
          },
        ],
        stdin: "",
        args: [],
        compile_timeout: 10000,
        run_timeout: 5000,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error executing code:", error)
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

// Google Gemini AI for assistance
export async function getAIAssistance(prompt: string, code: string, language: string) {
  try {
    const response = await fetch("/api/ai-assistance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        code,
        language,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error getting AI assistance:", error)
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

// Helper function to get the appropriate file name based on language
function getFileName(language: string): string {
  const extensions: Record<string, string> = {
    javascript: "script.js",
    typescript: "script.ts",
    python: "script.py",
    java: "Main.java",
    cpp: "main.cpp",
    csharp: "Program.cs",
    go: "main.go",
    rust: "main.rs",
    ruby: "script.rb",
    php: "index.php",
    swift: "main.swift",
    kotlin: "Main.kt",
    dart: "main.dart",
  }

  return extensions[language] || `script.${language}`
}

// Map language IDs to Piston API language names
export function mapLanguageToPiston(language: string): string {
  const languageMap: Record<string, string> = {
    javascript: "javascript",
    typescript: "typescript",
    python: "python3",
    java: "java",
    cpp: "cpp",
    csharp: "csharp",
    go: "go",
    rust: "rust",
    ruby: "ruby",
    php: "php",
    swift: "swift",
    kotlin: "kotlin",
    dart: "dart",
  }

  return languageMap[language] || language
}

