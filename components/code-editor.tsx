"use client";

import type React from "react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { type Monaco } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { MainLoader } from "./loader";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  editorRef?: React.MutableRefObject<any>;
  height?: string;
  options?: Record<string, any>;
  className?: string;
}

// Define Monaco Editor themes
const defineMonacoThemes = () => {
  // Only run in browser environment
  if (typeof window !== "undefined") {
    import("@monaco-editor/react").then(({ loader }) => {
      loader.init().then((monaco) => {
        // GitHub theme
        monaco.editor.defineTheme("github", {
          base: "vs",
          inherit: true,
          rules: [],
          colors: {
            "editor.background": "#ffffff",
            "editor.foreground": "#24292e",
            "editor.lineHighlightBackground": "#f1f8ff",
            "editorLineNumber.foreground": "#1b1f234d",
            "editorCursor.foreground": "#24292e",
            "editor.selectionBackground": "#0366d625",
            "editor.inactiveSelectionBackground": "#0366d625",
          },
        });

        // GitHub Dark theme
        monaco.editor.defineTheme("github-dark", {
          base: "vs-dark",
          inherit: true,
          rules: [],
          colors: {
            "editor.background": "#0d1117",
            "editor.foreground": "#c9d1d9",
            "editor.lineHighlightBackground": "#161b22",
            "editorLineNumber.foreground": "#8b949e",
            "editorCursor.foreground": "#c9d1d9",
            "editor.selectionBackground": "#3fb95025",
            "editor.inactiveSelectionBackground": "#3fb95025",
          },
        });

        // Monokai theme
        monaco.editor.defineTheme("monokai", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "#88846f" },
            { token: "string", foreground: "#e6db74" },
            { token: "keyword", foreground: "#f92672" },
            { token: "number", foreground: "#ae81ff" },
            { token: "type", foreground: "#66d9ef" },
          ],
          colors: {
            "editor.background": "#272822",
            "editor.foreground": "#f8f8f2",
            "editor.lineHighlightBackground": "#3e3d32",
            "editorCursor.foreground": "#f8f8f2",
            "editor.selectionBackground": "#49483e",
          },
        });

        // Material Ocean theme
        monaco.editor.defineTheme("material-ocean", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "#546e7a" },
            { token: "string", foreground: "#c3e88d" },
            { token: "keyword", foreground: "#c792ea" },
            { token: "number", foreground: "#f78c6c" },
            { token: "type", foreground: "#82aaff" },
          ],
          colors: {
            "editor.background": "#0f111a",
            "editor.foreground": "#8f93a2",
            "editor.lineHighlightBackground": "#00000030",
            "editorCursor.foreground": "#ffffff",
            "editor.selectionBackground": "#717cb425",
          },
        });

        // Dracula theme
        monaco.editor.defineTheme("dracula", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "#6272a4" },
            { token: "string", foreground: "#f1fa8c" },
            { token: "keyword", foreground: "#ff79c6" },
            { token: "number", foreground: "#bd93f9" },
            { token: "type", foreground: "#8be9fd" },
          ],
          colors: {
            "editor.background": "#282a36",
            "editor.foreground": "#f8f8f2",
            "editor.lineHighlightBackground": "#44475a",
            "editorCursor.foreground": "#f8f8f2",
            "editor.selectionBackground": "#44475a",
          },
        });

        // Nord theme
        monaco.editor.defineTheme("nord", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "#616e88" },
            { token: "string", foreground: "#a3be8c" },
            { token: "keyword", foreground: "#81a1c1" },
            { token: "number", foreground: "#b48ead" },
            { token: "type", foreground: "#8fbcbb" },
          ],
          colors: {
            "editor.background": "#2e3440",
            "editor.foreground": "#d8dee9",
            "editor.lineHighlightBackground": "#3b4252",
            "editorCursor.foreground": "#d8dee9",
            "editor.selectionBackground": "#434c5e",
          },
        });
      });
    });
  }
};

export default function CodeEditor({
  language,
  value,
  onChange,
  editorRef,
  height = "100%",
  className = "",
  options = {},
}: CodeEditorProps) {
  const { theme } = useTheme();
  const monacoRef = useRef<Monaco | null>(null);
  const [editorLoaded, setEditorLoaded] = useState(false);

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
    // configureLanguageFeatures(monaco);

    // Set editor options
    editor.updateOptions({
      fontSize: 16,
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

  // Initialize Monaco themes when component mounts (client-side only)
  useEffect(() => {
    defineMonacoThemes();
    setEditorLoaded(true);
  }, []);

  return (
    <div className="relative h-full w-full">
      <Editor
        height={height}
        language={getMonacoLanguage(language)}
        value={value}
        onChange={(value) => onChange(value || "")}
        onMount={handleEditorDidMount}
        theme={theme === "dark" ? "vs-dark" : "vs"}
        className={className}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          padding: { top: 16 },
          fontFamily: "JetBrains Mono",
          fontWeight: "600",
          ...options,
        }}
        loading={<MainLoader />}
        beforeMount={(monaco) => {
          // Register additional languages if needed
          // This is where you can load language services dynamically
        }}
      />
    </div>
  );
}
