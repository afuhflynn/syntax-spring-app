"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import { executeCode, mapLanguageToPiston } from "@/lib/api-service";
import { TerminalIcon, X } from "lucide-react";
import { Tooltip } from "@mui/material";

interface TerminalEntry {
  type: "command" | "output";
  content: string;
}

export function InteractiveTerminal() {
  const {
    language,
    code,
    terminalCommands,
    addTerminalCommand,
    isTerminalVisible,
    setIsTerminalVisible,
  } = useStore();

  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Focus input when terminal is clicked
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Add a command to the terminal history
  const addToHistory = (entry: TerminalEntry) => {
    setTerminalHistory((prev) => [...prev, entry]);
  };

  // Execute code from the editor
  const executeEditorCode = async () => {
    // Simulate typing the run command
    const runCommand = "run";
    addTerminalCommand(runCommand);
    addToHistory({ type: "command", content: runCommand });

    setIsProcessing(true);

    try {
      // Execute code with Piston API
      const pistonLanguage = mapLanguageToPiston(language);
      const result = await executeCode(pistonLanguage, code);

      let output = "";

      if (result.error) {
        output = `Error: ${result.message}`;
      } else if (result.run?.output) {
        output = result.run.output;
      } else if (result.run?.stderr) {
        output = `Error: ${result.run.stderr}`;
      } else if (result.compile?.stderr) {
        output = `Compilation Error: ${result.compile.stderr}`;
      } else {
        output = "No output generated.";
      }

      // Add the output to the terminal history
      addToHistory({ type: "output", content: output });
    } catch (error) {
      addToHistory({
        type: "output",
        content: `Error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    } finally {
      setIsProcessing(false);
    }
  };
  const username = "afuhflynn"; // TODO: Change later to real username
  // Handle command execution
  const executeCommand = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add command to history
    addTerminalCommand(input);
    addToHistory({ type: "command", content: input });

    // Process command
    setIsProcessing(true);

    try {
      if (input === "run") {
        await executeEditorCode();
      } else if (input === "clear") {
        // Clear terminal
        setTerminalHistory([]);
      } else if (input === "help") {
        // Show help
        addToHistory({
          type: "output",
          content: `Available commands:
 run - Execute the current code
 clear - Clear the terminal
 help - Show this help message
 ls - List files (simulated)
 pwd - Print working directory (simulated)
 echo [text] - Print text to terminal`,
        });
      } else if (input.startsWith("echo ")) {
        // Echo command
        const text = input.substring(5);
        addToHistory({ type: "output", content: text });
      } else if (input === "ls") {
        // Simulate ls command
        addToHistory({
          type: "output",
          content: "main.js  package.json  README.md  node_modules/",
        });
      } else if (input === "pwd") {
        // Simulate pwd command
        addToHistory({
          type: "output",
          content: "/home/user/codespark-project",
        });
      } else {
        // Unknown command
        addToHistory({
          type: "output",
          content: `Command not found: ${input}`,
        });
      }
    } catch (error) {
      addToHistory({
        type: "output",
        content: `Error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    } finally {
      setIsProcessing(false);
      setInput("");
    }
  };

  if (!isTerminalVisible) {
    return (
      <Tooltip
        title="Show Terminal"
        aria-label="Show Terminal"
        placement="top"
        arrow
      >
        <Button
          variant="outline"
          size="sm"
          className="w-auto  h-[1.6rem] border-b bg-muted p-2 px-4 rounded-0 absolute bottom-0 right-0"
          onClick={() => setIsTerminalVisible(true)}
        >
          <TerminalIcon className="h-4 w-4 mr-2" /> Show Terminal
        </Button>
      </Tooltip>
    );
  }

  return (
    <Card className="h-full overflow-x-scroll border relative terminal overflow-y-hidden">
      <CardContent className="p-0">
        {/* Terminal header */}
        <div className="flex items-center justify-between h-[1.6rem] overflow-y-hidden border-b bg-muted sticky top-0 right-0 left-0 z-10 px-2">
          <div className="flex items-center gap-2">
            <TerminalIcon className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium">Terminal</h3>
          </div>
          <Tooltip title="Hide Terminal" placement="top" arrow>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsTerminalVisible(false)}
              className="h-7 w-7 p-0 rounded-full"
              aria-label="Hide Terminal"
            >
              <X className="h-4 w-4" />
            </Button>
          </Tooltip>
        </div>
        {/* Terminal body */}
        <div
          className="bg-background font-mono text-xs p-4 flex-1 overflow-y-hidden cursor-text"
          onClick={focusInput}
          ref={terminalRef}
        >
          <div className="mb-2 text-green-400">
            SyntaxSpring Code Terminal v1.0
          </div>
          <div className="mb-2 text-green-400">
            Type 'help' for available commands
          </div>

          {/* Terminal history - commands and outputs in sequence */}
          {terminalHistory.map((entry, index) => (
            <div key={index} className="mb-1">
              {entry.type === "command" ? (
                <div>
                  <span className="text-blue-400">
                    {username}@syntaxspring:~$
                  </span>{" "}
                  {entry.content}
                </div>
              ) : (
                <div className="whitespace-pre-wrap pl-2 text-green-400">
                  {entry.content}
                </div>
              )}
            </div>
          ))}

          {/* Current input line */}
          <div className="flex">
            <span className="text-blue-400">{username}@syntaxspring:~$</span>
            &nbsp;
            <form onSubmit={executeCommand} className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-white w-full"
                disabled={isProcessing}
                autoFocus
              />
            </form>
          </div>
        </div>
        <button
          data-terminal-execute
          className="hidden"
          onClick={executeEditorCode}
        />
      </CardContent>
    </Card>
  );
}
