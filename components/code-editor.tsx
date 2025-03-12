"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  editorRef?: React.MutableRefObject<any>;
  height?: string;
  options?: Record<string, any>;
}

export default function CodeEditor({
  language,
  value,
  onChange,
  editorRef,
  height = "100%",
  options = {},
}: CodeEditorProps) {
  const { theme } = useTheme();
  const monacoRef = useRef<any>(null);

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
    };

    return languageMap[lang.toLowerCase()] || lang;
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    if (editorRef) {
      editorRef.current = editor;
    }
    monacoRef.current = monaco;

    // Set editor options
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      wordWrap: "on",
      padding: { top: 16 },
      ...options,
    });
  };

  // Update theme when system theme changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(
        theme === "dark" ? "material-theme-ocean-high-contrast" : "vs"
      );
    }
  }, [theme]);

  return (
    <div className="relative h-full w-full">
      <Editor
        height={height}
        language={getMonacoLanguage(language)}
        value={value}
        onChange={(value) => onChange(value || "")}
        onMount={handleEditorDidMount}
        theme={theme === "dark" ? "vs-dark" : "vs"}
        options={{
          fontSize: 16,
          minimap: { enabled: true },
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
  );
}
