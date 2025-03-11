// This is a utility file for interacting with the Piston API
// https://github.com/engineer-man/piston

export interface PistonExecuteRequest {
  language: string
  version: string
  files: {
    name: string
    content: string
  }[]
  stdin: string
  args: string[]
  compile_timeout: number
  run_timeout: number
  compile_memory_limit: number
  run_memory_limit: number
}

export interface PistonExecuteResponse {
  language: string
  version: string
  run: {
    stdout: string
    stderr: string
    output: string
    code: number
    signal: string | null
  }
  compile?: {
    stdout: string
    stderr: string
    output: string
    code: number
    signal: string | null
  }
}

// Map our language names to Piston API language names
const languageMap: Record<string, { language: string; version: string }> = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  cpp: { language: "c++", version: "10.2.0" },
  c: { language: "c", version: "10.2.0" },
  rust: { language: "rust", version: "1.68.2" },
  go: { language: "go", version: "1.16.2" },
}

export async function executeCode(code: string, language: string, input = ""): Promise<PistonExecuteResponse> {
  try {
    // In a real implementation, this would call the actual Piston API
    // For demo purposes, we'll simulate a response

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Map language to Piston language
    const pistonLang = languageMap[language.toLowerCase()] || { language: "javascript", version: "18.15.0" }

    // Simulate successful execution
    return {
      language: pistonLang.language,
      version: pistonLang.version,
      run: {
        stdout: simulateOutput(code, language),
        stderr: "",
        output: simulateOutput(code, language),
        code: 0,
        signal: null,
      },
    }
  } catch (error) {
    console.error("Error executing code:", error)
    throw error
  }
}

// Helper function to simulate output based on language and code
function simulateOutput(code: string, language: string): string {
  // For demo purposes, return some simulated output
  if (language === "javascript" || language === "typescript") {
    if (code.includes("twoSum")) {
      return "[0, 1]\n"
    }
    return "Hello, world!\n"
  } else if (language === "python") {
    if (code.includes("two_sum")) {
      return "[0, 1]\n"
    }
    return "Hello, world!\n"
  } else if (language === "java") {
    return "Hello, world!\n"
  } else if (language === "cpp" || language === "c") {
    return "Hello, world!\n"
  } else if (language === "rust") {
    return "Hello, world!\n"
  } else {
    return "Code executed successfully!\n"
  }
}

