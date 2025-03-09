"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Editor } from "@monaco-editor/react"
import { useTheme } from "next-themes"

interface CodeEditorProps {
  language: string
  value: string
  onChange: (value: string) => void
  editorRef?: React.MutableRefObject<any>
}

export default function CodeEditor({ language, value, onChange, editorRef }: CodeEditorProps) {
  const { theme } = useTheme()
  const monacoRef = useRef<any>(null)

  // Map language to Monaco language
  const getMonacoLanguage = (lang: string) => {
    const languageMap: Record<string, string> = {
      javascript: "javascript",
      python: "python",
      java: "java",
      cpp: "cpp",
      html: "html",
      css: "css",
      typescript: "typescript",
      rust: "rust",
    }

    return languageMap[lang] || lang
  }

  const handleEditorDidMount = (editor: any, monaco: any) => {
    if (editorRef) {
      editorRef.current = editor
    }
    monacoRef.current = monaco

    // Set editor options
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      wordWrap: "on",
      padding: { top: 16 },
    })
  }

  // Update theme when system theme changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(theme === "dark" ? "vs-dark" : "vs")
    }
  }, [theme])

  return (
    <Editor
      height="100%"
      language={getMonacoLanguage(language)}
      value={value}
      onChange={(value) => onChange(value || "")}
      onMount={handleEditorDidMount}
      theme={theme === "dark" ? "vs-dark" : "vs"}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: "on",
        padding: { top: 16 },
      }}
    />
  )
}

