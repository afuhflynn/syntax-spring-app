"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { Editor, type Monaco } from "@monaco-editor/react";
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
  const monacoRef = useRef<Monaco | null>(null);

  // Map language to Monaco language
  const getMonacoLanguage = (lang: string) => {
    const languageMap: Record<string, string> = {
      javascript: "javascript",
      typescript: "typescript",
      python: "python",
      java: "java",
      cpp: "cpp",
      c: "c",
      csharp: "csharp",
      vbnet: "vb",
      go: "go",
      html: "html",
      css: "css",
      rust: "rust",
    };

    return languageMap[lang.toLowerCase()] || lang;
  };

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    if (editorRef) {
      editorRef.current = editor;
    }
    monacoRef.current = monaco;

    // Configure language features
    configureLanguageFeatures(monaco);

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
    });
  };

  // Configure language features for IntelliSense
  const configureLanguageFeatures = (monaco: Monaco) => {
    // TypeScript/JavaScript configuration
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      reactNamespace: "React",
      allowJs: true,
      typeRoots: ["node_modules/@types"],
    });

    // Add type definitions for better IntelliSense
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      `
      declare class Console {
        log(...data: any[]): void;
        error(...data: any[]): void;
        warn(...data: any[]): void;
        info(...data: any[]): void;
      }
      declare const console: Console;
      `,
      "ts:browser.d.ts"
    );

    // You can add more libraries and type definitions here
  };

  // Update theme when system theme changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(theme === "dark" ? "vs-dark" : "vs");
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
        beforeMount={(monaco) => {
          // Register additional languages if needed
          // This is where you can load language services dynamically
        }}
      />
    </div>
  );
}
