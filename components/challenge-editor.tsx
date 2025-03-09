"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Loader2, Play, HelpCircle, Code, Terminal, Layout } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import CodeEditor from "@/components/code-editor"
import OutputTerminal from "@/components/output-terminal"
import WebPreview from "@/components/web-preview"
import AIHelpModal from "@/components/ai-help-modal"

interface ChallengeEditorProps {
  challenge: any
}

export default function ChallengeEditor({ challenge }: ChallengeEditorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    Object.keys(challenge.defaultCode || {})[0] || "javascript",
  )
  const [code, setCode] = useState<string>(challenge.defaultCode?.[selectedLanguage] || "")
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [output, setOutput] = useState<string>("")
  const [isAIHelpOpen, setIsAIHelpOpen] = useState<boolean>(false)
  const [viewMode, setViewMode] = useState<"split" | "editor" | "output">("split")
  const { toast } = useToast()
  const editorRef = useRef<any>(null)

  // Update code when language changes
  useEffect(() => {
    if (challenge.defaultCode?.[selectedLanguage]) {
      setCode(challenge.defaultCode[selectedLanguage])
    }
  }, [selectedLanguage, challenge.defaultCode])

  const runCode = async () => {
    setIsRunning(true)
    setOutput("Running code...")

    try {
      // In a real app, this would call the Piston API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (selectedLanguage === "javascript") {
        setOutput("Output:\n[0, 1]\n\nExecution completed successfully.")
      } else if (selectedLanguage === "python") {
        setOutput("Output:\n[0, 1]\n\nExecution completed successfully.")
      } else if (selectedLanguage === "html") {
        // For HTML, we don't show output in the terminal
        setOutput("HTML rendered in preview pane.")
      } else {
        setOutput("Output:\n[0, 1]\n\nExecution completed successfully.")
      }

      toast({
        title: "Code executed successfully",
        description: "Your code has been run without errors.",
      })
    } catch (error) {
      setOutput("Error executing code. Please try again.")
      toast({
        title: "Execution failed",
        description: "There was an error running your code.",
        variant: "destructive",
      })
    } finally {
      setIsRunning(false)
    }
  }

  const handleAIHelp = () => {
    setIsAIHelpOpen(true)
  }

  const isWebLanguage = selectedLanguage === "html" || selectedLanguage === "css" || selectedLanguage === "javascript"

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage} className="w-full">
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
            className={viewMode === "editor" ? "bg-muted" : ""}
          >
            <Code className="h-4 w-4 mr-1" />
            Editor
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("output")}
            className={viewMode === "output" ? "bg-muted" : ""}
          >
            {isWebLanguage ? <Layout className="h-4 w-4 mr-1" /> : <Terminal className="h-4 w-4 mr-1" />}
            Output
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("split")}
            className={viewMode === "split" ? "bg-muted" : ""}
          >
            Split
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[600px]">
        {/* Editor */}
        <div
          className={`${
            viewMode === "output"
              ? "hidden md:hidden"
              : viewMode === "split"
                ? "h-1/2 md:h-auto md:w-1/2"
                : "h-full w-full"
          } border-r`}
        >
          <CodeEditor language={selectedLanguage} value={code} onChange={setCode} editorRef={editorRef} />
        </div>

        {/* Output */}
        <div
          className={`${
            viewMode === "editor"
              ? "hidden md:hidden"
              : viewMode === "split"
                ? "h-1/2 md:h-auto md:w-1/2"
                : "h-full w-full"
          }`}
        >
          {isWebLanguage ? <WebPreview code={code} language={selectedLanguage} /> : <OutputTerminal output={output} />}
        </div>
      </div>

      <div className="p-4 border-t flex justify-between items-center">
        <Button variant="outline" onClick={handleAIHelp}>
          <HelpCircle className="h-4 w-4 mr-2" />
          Ask AI for Help
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

      <AIHelpModal
        isOpen={isAIHelpOpen}
        onClose={() => setIsAIHelpOpen(false)}
        challenge={challenge}
        code={code}
        language={selectedLanguage}
      />
    </div>
  )
}

