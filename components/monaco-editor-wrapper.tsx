"use client"

import { useEffect, useRef, useState } from "react"
import { Editor, type OnMount } from "@monaco-editor/react"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"

interface MonacoEditorWrapperProps {
  language: string
  value: string
  onChange: (value: string) => void
  height?: string
  options?: Record<string, any>
  onMount?: OnMount
}

export default function MonacoEditorWrapper({
  language,
  value,
  onChange,
  height = "100%",
  options = {},
  onMount,
}: MonacoEditorWrapperProps) {
  const { theme } = useTheme()
  const [isLoaded, setIsLoaded] = useState(false)
  const monacoRef = useRef<any>(null)

  // Map language to Monaco language
  const getMonacoLanguage = (lang: string) => {
    const languageMap: Record<string, string> = {
      javascript: "javascript",
      python: "python",
      java: "java",
      cpp: "cpp",
      c: "c",
      html: "html",
      css: "css",
      typescript: "typescript",
      rust: "rust",
      go: "go",
    }

    return languageMap[lang.toLowerCase()] || lang
  }

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    monacoRef.current = monaco
    setIsLoaded(true)

    // Set editor options
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      wordWrap: "on",
      padding: { top: 16 },
      ...options,
    })

    // Call onMount if provided
    if (onMount) {
      onMount(editor, monaco)
    }
  }

  // Update theme when system theme changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(theme === "dark" ? "vs-dark" : "vs")
    }
  }, [theme])

  return (
    <div className="relative h-full w-full">
      {!isLoaded && (
        <div className="absolute inset-0 p-4 bg-background">
          <Skeleton className="h-full w-full" />
        </div>
      )}
      <Editor
        height={height}
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
          ...options,
        }}
        loading={<Skeleton className="h-full w-full" />}
      />
    </div>
  )
}

