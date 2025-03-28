"use client"

import { create } from "zustand"
import { defaultCodeTemplates } from "./languages"

interface EditorSettings {
  fontSize: number
  tabSize: number
  wordWrap: boolean
  minimap: boolean
  lineNumbers: boolean
  theme: string
}

interface AISettings {
  model: string
  codeCompletion: boolean
  errorDetection: boolean
  codeSuggestions: boolean
}

interface EditorState {
  currentFile: string | null
  language: string
  code: string
  editorSettings: EditorSettings
  aiSettings: AISettings
  isWebProject: boolean
  terminalCommands: string[]
  terminalOutput: string
  isTerminalVisible: boolean
  terminalHistory: Array<{ type: "command" | "output"; content: string }>
  setCurrentFile: (file: string | null) => void
  setLanguage: (language: string) => void
  setCode: (code: string) => void
  resetCodeToTemplate: () => void
  updateEditorSettings: (settings: Partial<EditorSettings>) => void
  updateAISettings: (settings: Partial<AISettings>) => void
  setIsWebProject: (isWebProject: boolean) => void
  addTerminalCommand: (command: string) => void
  setTerminalOutput: (output: string) => void
  setIsTerminalVisible: (isVisible: boolean) => void
  addTerminalOutput: (output: string) => void
}

export const useStore = create<EditorState>((set, get) => ({
  currentFile: null,
  language: "javascript",
  code: defaultCodeTemplates.javascript || "// Start coding here",
  editorSettings: {
    fontSize: 14,
    tabSize: 2,
    wordWrap: true,
    minimap: false,
    lineNumbers: true,
    theme: "vs-dark",
  },
  aiSettings: {
    model: "gemini-pro",
    codeCompletion: true,
    errorDetection: true,
    codeSuggestions: true,
  },
  isWebProject: false,
  terminalCommands: [],
  terminalOutput: "",
  isTerminalVisible: true,
  terminalHistory: [],
  setCurrentFile: (file) => set({ currentFile: file }),
  setLanguage: (language) => {
    // Check if this is a web project
    const isWebProject = ["html", "css"].includes(language)

    set({
      language,
      isWebProject,
    })

    // If there's no code or it's just the default template, update to the new language template
    const currentCode = get().code
    const isDefaultTemplate =
      currentCode.trim() === "// Start coding here" || Object.values(defaultCodeTemplates).includes(currentCode)

    if (isDefaultTemplate && defaultCodeTemplates[language]) {
      set({ code: defaultCodeTemplates[language] })
    }
  },
  setCode: (code) => set({ code }),
  resetCodeToTemplate: () => {
    const language = get().language
    set({ code: defaultCodeTemplates[language] || "// Start coding here" })
  },
  updateEditorSettings: (settings) => set({ editorSettings: { ...get().editorSettings, ...settings } }),
  updateAISettings: (settings) => set({ aiSettings: { ...get().aiSettings, ...settings } }),
  setIsWebProject: (isWebProject) => set({ isWebProject }),
  addTerminalCommand: (command) => set({ terminalCommands: [...get().terminalCommands, command] }),
  setTerminalOutput: (output) => set({ terminalOutput: output }),
  setIsTerminalVisible: (isVisible) => set({ isTerminalVisible: isVisible }),
  addTerminalOutput: (output: string) =>
    set((state) => ({
      terminalHistory: [...state.terminalHistory, { type: "output", content: output }],
    })),
}))

