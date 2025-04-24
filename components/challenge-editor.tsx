"use client";

import dynamic from "next/dynamic";
import * as monaco_editor from "monaco-editor";
import { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  Play,
  HelpCircle,
  Code,
  Terminal,
  Layout,
  CheckCircleIcon,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WebPreview from "@/components/web-preview";
import AIHelpModal from "@/components/ai-help-modal";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { cn } from "@/lib/utils";
import { configureMonacoLanguages } from "@/utils/monaco-languages";
import type { Monaco } from "@monaco-editor/react";
import { Challenge } from "@/TYPES";
import { InteractiveTerminal } from "./interactive-terminal";
import { Tooltip } from "@mui/material";

const CodeEditor = dynamic(() => import("@/components/code-editor"), {
  ssr: false,
});
interface ChallengeEditorProps {
  challenge: Challenge;
}

export default function ChallengeEditor({ challenge }: ChallengeEditorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    Object.keys(challenge.defaultCode || {})[0]
  );

  const storageKey = `code-${challenge.slug}-${selectedLanguage}`;

  const [code, setCode] = useLocalStorage<string>(
    storageKey,
    challenge.defaultCode?.[selectedLanguage] || ""
  );

  const [isWebChallenge, setIsWebChallenge] = useState<null | boolean>(null);
  const [html, setHtml] = useState(
    challenge.defaultCode && challenge.defaultCode["html"]
  );
  const [css, setCss] = useState(
    challenge.defaultCode && challenge.defaultCode["css"]
  );
  const [js, setJs] = useState(
    challenge.defaultCode && challenge.defaultCode["javascript"]
  );

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");
  const [isAIHelpOpen, setIsAIHelpOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"split" | "editor" | "output">(
    "split"
  );
  const { toast } = useToast();
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<Monaco | null>(null);

  useEffect(() => {
    if (challenge.defaultCode?.[selectedLanguage]) {
      const savedCode = localStorage.getItem(
        `code-${challenge.slug}-${selectedLanguage}`
      );
      if (savedCode) {
        setCode(JSON.parse(savedCode));
      } else {
        setCode(challenge.defaultCode[selectedLanguage]);
      }
    }
  }, [selectedLanguage, challenge.defaultCode, challenge.slug, setCode]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running code...");

    try {
      // In a real app, this would call an API to execute the code
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setOutput(`Output for ${challenge.title} in ${selectedLanguage}:

Execution completed successfully.`);
      toast({
        title: "Code executed successfully",
        description: "Your code has been run without errors.",
      });
    } catch (error) {
      setOutput("Error executing code. Please try again.");
      toast({
        title: "Execution failed",
        description: "There was an error running your code.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleAIHelp = () => {
    setIsAIHelpOpen(true);
  };

  // Current challenge languages
  const currentChallengeLangs = Object.keys(challenge.defaultCode || {});
  useEffect(() => {
    for (let index = 0; index < currentChallengeLangs.length - 1; index++) {
      if (
        ["html", "css"].includes(
          currentChallengeLangs[index].toLocaleLowerCase()
        )
      ) {
        setIsWebChallenge(true);
        break;
      } else {
        setIsWebChallenge(false);
        break;
      }
    }
  }, []);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Configure language services
    configureMonacoLanguages(monaco);
  };

  // Initialize Monaco with language services
  useEffect(() => {
    handleEditorDidMount(editorRef, monaco_editor);
  }, []);

  // Update the web view components based on lang type and if code changes
  const handleCodeChange = (value: string) => {
    setCode(value);
    if (selectedLanguage.toLowerCase() === "html") {
      setHtml(value);
    } else if (selectedLanguage.toLowerCase() === "css") {
      setCss(value);
    } else if (selectedLanguage.toLowerCase() === "javascript") {
      setJs(value);
    }
  };

  return (
    <div className="flex-1 border rounded-lg overflow-hidden bg-card shadow-sm w-full h-full py-1 mt-4">
      <div className="px-4 py-2 h-auto flex justify-between items-center border-border">
        <div className="flex items-center gap-2">
          <Tabs
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
            className="w-full"
          >
            <TabsList>
              {Object.keys(challenge.defaultCode || {}).map((lang) => (
                <TabsTrigger key={lang} value={lang} className="capitalize">
                  {lang}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("editor")}
            className={`hidden w-auto p-0 px-1 md:flex flex-row items-center justify-center md:p-2 ${cn(
              viewMode === "editor" ? "bg-muted" : ""
            )}`}
            aria-label="Editor view"
          >
            <Code className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Editor</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("output")}
            className={`hidden w-auto p-0 px-1 md:flex flex-row items-center justify-center md:p-2 ${cn(
              viewMode === "output" ? "bg-muted" : ""
            )}`}
            aria-label="Output view"
          >
            {isWebChallenge ? (
              <Layout className="h-4 w-4 mr-1" />
            ) : (
              <Terminal className="h-4 w-4 mr-1" />
            )}
            <span className="hidden sm:inline">Output</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("split")}
            className={`hidden w-auto p-0 px-1 md:flex flex-row items-center justify-center md:p-2 ${cn(
              viewMode === "split" ? "bg-muted" : ""
            )}`}
            aria-label="Split view"
          >
            <span className="hidden sm:inline">Split</span>
            <span className="sm:hidden">⚌</span>
          </Button>
          {!isWebChallenge && (
            <Button
              onClick={runCode}
              disabled={isRunning}
              className="w-auto p-0 px-1 flex flex-row items-center justify-center md:p-2"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  <span className="hidden md:flex">Running...</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  <span className="hidden md:flex">Run Code</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      {isWebChallenge ? (
        <div className="flex flex-row md:h-[435px] h-screen">
          <div
            className={`border-none resize-x ${cn(
              viewMode === "editor"
                ? "w-full"
                : viewMode === "split"
                ? "w-1/2"
                : "hidden"
            )}`}
          >
            <CodeEditor
              language={selectedLanguage}
              value={code}
              onChange={handleCodeChange}
              editorRef={editorRef}
              className="resize-x"
            />
          </div>

          <div
            className={`border-none resize-x ${cn(
              viewMode === "editor"
                ? "hidden md:hidden"
                : viewMode === "split"
                ? "w-1/2"
                : "w-full"
            )}`}
          >
            <WebPreview
              language={selectedLanguage}
              html={html}
              js={js}
              css={css}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:h-[435px] flex-1">
          <div
            className={`w-full ${cn(
              viewMode === "output"
                ? "hidden md:hidden"
                : viewMode === "split"
                ? "h-[70%]"
                : "h-full",
              "border-r"
            )}`}
          >
            <CodeEditor
              language={selectedLanguage}
              value={code}
              onChange={handleCodeChange}
              editorRef={editorRef}
              className="resize-x"
            />
          </div>

          <div
            className={`w-full border-none relative ${cn(
              viewMode === "editor"
                ? "hidden md:hidden"
                : viewMode === "split"
                ? "h-[30%] "
                : "h-full"
            )}`}
          >
            <InteractiveTerminal currentLangsExtensions={challenge.languages} />
          </div>
        </div>
      )}

      <div className="px-4 py-2 flex border-t border-white border-opacity-20 justify-between items-center">
        <Tooltip title="Ask AI for help" placement="top" arrow>
          <Button
            variant="outline"
            onClick={handleAIHelp}
            aria-label="Ask AI for help"
          >
            <Sparkles className="h-4 w-4 mr-2" />
          </Button>
        </Tooltip>

        <Button disabled={isRunning}>
          <CheckCircleIcon className="h-4 w-4 mr-2" />
          Submit
        </Button>
      </div>

      <AIHelpModal
        isOpen={isAIHelpOpen}
        onClose={() => setIsAIHelpOpen(false)}
        examples={challenge.examples}
        constraints={challenge.constraints}
        difficulty={challenge.difficulty}
        title={challenge.title}
        description={challenge.description}
        code={code}
        language={selectedLanguage}
      />
    </div>
  );
}
