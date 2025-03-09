"use client"

import { useEffect, useRef } from "react"

interface OutputTerminalProps {
  output: string
}

export default function OutputTerminal({ output }: OutputTerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  return (
    <div ref={terminalRef} className="h-full w-full bg-black text-green-400 font-mono text-sm p-4 overflow-auto">
      <pre className="whitespace-pre-wrap">{output || "Run your code to see output here..."}</pre>
    </div>
  )
}

