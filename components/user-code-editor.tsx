"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { FileManagement } from "@/components/file-management";
import { ThemeToggle } from "@/components/theme-toggle";
import { Settings } from "@/components/settings";
import { languages } from "@/lib/languages";
import { executeCode, mapLanguageToPiston } from "@/lib/api-service";
import { Loader2, Play, FileCode, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { MainLoader } from "./loader";
import Logo from "./logo";
import dynamic from "next/dynamic";

// Dynamically import the CodeEditor component with no SSR
const CodeEditor = dynamic(() => import("@/components/code-editor"), {
  ssr: false,
  loading: () => <MainLoader />,
});

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

export function TestCodeEditor() {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState<string>("");
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [executionError, setExecutionError] = useState<boolean>(false);
  const [editorLoaded, setEditorLoaded] = useState(true);

  const {
    currentFile,
    language,
    code,
    setCode,
    setLanguage,
    editorSettings,
    isWebProject,
    setIsWebProject,
    isTerminalVisible,
  } = useStore();

  // Initialize Monaco themes when component mounts (client-side only)
  useEffect(() => {
    defineMonacoThemes();
    setEditorLoaded(true);
  }, []);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    setIsEditorReady(true);
  };

  const handleExecuteCode = async () => {
    setIsExecuting(true);

    // Get the terminal component's executeEditorCode function
    // This is a workaround since we can't directly call the function
    // In a real app, you might want to use a more elegant approach like a ref or context
    const terminalElement = document.querySelector(
      "[data-terminal-execute]"
    ) as HTMLButtonElement;
    if (terminalElement) {
      terminalElement.click();
    } else {
      try {
        const pistonLanguage = mapLanguageToPiston(language);
        const result = await executeCode(pistonLanguage, code);
      } catch (error) {}
    }

    setIsExecuting(false);
  };

  // Get the appropriate Monaco Editor theme
  const getEditorTheme = () => {
    if (editorSettings.theme === "vs" || editorSettings.theme === "vs-dark") {
      return theme === "dark" && editorSettings.theme === "vs"
        ? "vs-dark"
        : theme === "light" && editorSettings.theme === "vs-dark"
        ? "vs"
        : editorSettings.theme;
    }
    return editorSettings.theme;
  };

  // Dynamically import the Editor component
  const MonacoEditorComponent = () => {
    const EditorComp = editorLoaded ? CodeEditor : () => <MainLoader />;

    return (
      <EditorComp
        height="100%"
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          theme: getEditorTheme(),
          minimap: { enabled: editorSettings.minimap },
          fontSize: editorSettings.fontSize,
          wordWrap: editorSettings.wordWrap ? "on" : "off",
          automaticLayout: true,
          tabSize: editorSettings.tabSize,
          scrollBeyondLastLine: false,
          lineNumbers: editorSettings.lineNumbers ? "on" : "off",
          glyphMargin: true,
          folding: true,
          bracketPairColorization: { enabled: true },
        }}
      />
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Logo />
            <Badge
              variant="outline"
              className="bg-muted/50 text-muted-foreground hidden sm:inline-flex"
            >
              Beta
            </Badge>
          </motion.div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <FileManagement />
              <Settings />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 container py-4 flex flex-col lg:flex-row gap-4 h-[calc(100vh-4rem)]">
        <div className="lg:flex-1 flex flex-col h-full min-h-[60vh] lg:min-h-0">
          <h1 className="text-xl font-bold tracking-tighter mb-6">
            Experiment, play and get cooked up with any language you want.
          </h1>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative">
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-background border rounded px-2 py-1 text-sm appearance-none pl-8 pr-8"
                        aria-label="Select programming language"
                      >
                        {languages.map((lang) => (
                          <option key={lang.id} value={lang.id}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                      <FileCode className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select programming language</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm text-muted-foreground truncate max-w-[100px] sm:max-w-full">
                {currentFile || "Untitled.js"}
              </span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    onClick={handleExecuteCode}
                    disabled={!isEditorReady || isExecuting}
                    className="gap-2"
                  >
                    {isExecuting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : isWebProject ? (
                      <Globe className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    {isWebProject ? "Update Preview" : "Run"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {isWebProject
                      ? "Update web preview"
                      : "Execute code using Piston API"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Card className="flex-1 overflow-hidden border">
            {MonacoEditorComponent()}
          </Card>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {isTerminalVisible && (
              <div
                className={
                  isWebProject ? "col-span-1" : "col-span-1 lg:col-span-2"
                }
              >
                <InteractiveTerminal />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the component as default as well for dynamic imports
export default CodeEditor;
