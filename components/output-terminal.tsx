"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface OutputTerminalProps {
  output: string;
  className?: string;
}

export default function OutputTerminal({
  output,
  className,
}: OutputTerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div
      ref={terminalRef}
      className={cn(
        "h-full w-full bg-black text-green-400 font-mono text-sm p-1 overflow-auto terminal border-none resize-y",
        className
      )}
    >
      <pre className="whitespace-pre-wrap resize-y">
        {output || "Run your code to see output here..."}
      </pre>
    </div>
  );
}
