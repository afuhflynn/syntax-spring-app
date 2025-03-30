"use client";

// Remove static import of the Editor component to avoid SSR issues.
// Import types only (these will not cause server-side issues)
import type { Monaco } from "@monaco-editor/react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { MainLoader } from "./loader";
import { useStore } from "@/lib/store";

// Dynamically import the Editor component only on the client-side.
// We extract the default export from @monaco-editor/react.
const Editor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.default),
  {
    ssr: false, // Disable SSR for Monaco Editor
    loading: () => <MainLoader />, // Show a loader while Monaco loads
  }
);

// Define the props for the CodeEditor component
interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  editorRef?: React.MutableRefObject<any>;
  height?: string;
  options?: Record<string, any>;
  className?: string;
}

/**
 * Define custom themes for Monaco Editor.
 * This function is safe because it runs only in the browser.
 */
const defineMonacoThemes = () => {
  if (typeof window !== "undefined") {
    // Dynamically import the loader and initialize custom themes.
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

/**
 * CodeEditor Component
 *
 * This component wraps the Monaco Editor, dynamically loads custom themes,
 * and adapts to the system theme using next-themes.
 */
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
  const { editorSettings } = useStore();
  // Reference to store the Monaco instance for dynamic updates
  const monacoRef = useRef<Monaco | null>(null);
  // State flag to confirm editor has loaded on the client
  const [editorLoaded, setEditorLoaded] = useState(false);

  /**
   * Map generic language strings to Monaco language identifiers.
   * Falls back to the provided language if no match is found.
   */
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

  /**
   * Callback triggered when the editor mounts.
   * It sets up the editor reference and applies initial options.
   */
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    if (editorRef) {
      editorRef.current = editor;
    }
    monacoRef.current = monaco;

    // Set up default editor options, merge with custom options if provided.
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

  // Update the Monaco Editor's theme when the system theme changes.
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(theme === "dark" ? "vs-dark" : "vs");
    }
  }, [theme]);

  // Initialize custom themes and mark the editor as loaded when the component mounts.
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
        onChange={(newValue) => onChange(newValue || "")}
        onMount={handleEditorDidMount}
        className={className}
        options={{
          theme: editorSettings.theme,
          minimap: { enabled: editorSettings.minimap },
          fontSize: editorSettings.fontSize,
          wordWrap: editorSettings.wordWrap ? "on" : "off",
          tabSize: editorSettings.tabSize,
          lineNumbers: editorSettings.lineNumbers ? "on" : "off",
          glyphMargin: true,
          folding: true,
          bracketPairColorization: { enabled: true },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16 },
          fontFamily: "JetBrains Mono",
          fontWeight: "600",
          ...options,
        }}
        beforeMount={(monaco) => {
          // Optionally, register additional languages or services here.
        }}
      />
    </div>
  );
}
