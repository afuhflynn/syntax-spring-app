"use client";

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
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CodeEditor from "@/components/code-editor";
import OutputTerminal from "@/components/output-terminal";
import WebPreview from "@/components/web-preview";
import AIHelpModal from "@/components/ai-help-modal";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { cn } from "@/lib/utils";
import type { Challenge } from "@/lib/challenges";

interface ChallengeEditorProps {
  challenge: Challenge;
}

export default function ChallengeEditor({ challenge }: ChallengeEditorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    Object.keys(challenge.defaultCode || {})[0] || "javascript"
  );

  const storageKey = `code-${challenge.slug}-${selectedLanguage}`;
  const [code, setCode] = useLocalStorage<string>(
    storageKey,
    challenge.defaultCode?.[selectedLanguage] || ""
  );

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");
  const [isAIHelpOpen, setIsAIHelpOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"split" | "editor" | "output">(
    "split"
  );
  const { toast } = useToast();
  const editorRef = useRef<any>(null);

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
      setOutput(
        `Output for ${challenge.title} in ${selectedLanguage}:\n\nExecution completed successfully.`
      );
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

  const isWebLanguage =
    selectedLanguage === "html" ||
    selectedLanguage === "css" ||
    selectedLanguage === "javascript";

  return (
    <div className="border rounded-lg overflow-hidden bg-card shadow-sm h-[90%] w-full">
      <div className="py-2 px-4 flex justify-between items-center border-b w-full">
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
            className={cn(viewMode === "editor" ? "bg-muted" : "")}
            aria-label="Editor view"
          >
            <Code className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Editor</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("output")}
            className={cn(viewMode === "output" ? "bg-muted" : "")}
            aria-label="Output view"
          >
            {isWebLanguage ? (
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
            className={cn(viewMode === "split" ? "bg-muted" : "")}
            aria-label="Split view"
          >
            <span className="hidden sm:inline">Split</span>
            <span className="sm:hidden">⚌</span>
          </Button>
          <Button onClick={runCode} disabled={isRunning}>
            {isRunning ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Run Code
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[600px]">
        <div
          className={cn(
            viewMode === "output"
              ? "hidden md:hidden"
              : viewMode === "split"
              ? "h-1/2 md:h-auto md:w-1/2"
              : "h-full w-full",
            "border-r"
          )}
        >
          <CodeEditor
            language={selectedLanguage}
            value={code}
            onChange={setCode}
            editorRef={editorRef}
          />
        </div>

        <div
          className={cn(
            viewMode === "editor"
              ? "hidden md:hidden"
              : viewMode === "split"
              ? "h-1/2 md:h-auto md:w-1/2"
              : "h-full w-full"
          )}
        >
          {isWebLanguage ? (
            <WebPreview code={code} language={selectedLanguage} />
          ) : (
            <OutputTerminal output={output} />
          )}
        </div>
      </div>

      <div className="py-2 px-4 border-t flex justify-between items-center">
        <Button variant="secondary" onClick={handleAIHelp}>
          <HelpCircle className="h-4 w-4 mr-2" />
          Ask AI for Help
        </Button>

        <Button disabled={isRunning}>
          <CheckCircle2 className="h-4 w-4 mr-2" />
          Submit
        </Button>
      </div>

      <AIHelpModal
        isOpen={isAIHelpOpen}
        onClose={() => setIsAIHelpOpen(false)}
        challenge={challenge}
        code={code}
        language={selectedLanguage}
      />
    </div>
  );
}
