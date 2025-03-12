"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WebPreviewProps {
  code: string;
  language: string;
  className?: string;
}

export default function WebPreview({
  code,
  language,
  className,
}: WebPreviewProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    // For HTML, directly use the code
    if (language === "html") {
      setHtml(code);
    }
    // For CSS, wrap in a basic HTML structure
    else if (language === "css") {
      setHtml(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>${code}</style>
          <title>New Web Document</title>
        </head>
        <body>
          <div class="preview-container" style="padding: 20px; font-family: system-ui, sans-serif;">
            <h1>CSS Preview</h1>
            <p>This is a paragraph to preview your CSS.</p>
            <button>Button Element</button>
            <div class="box" style="margin-top: 20px; padding: 20px; border: 1px solid #ccc;">Div with class "box"</div>
          </div>
        </body>
        </html>
      `);
    }
    // For JavaScript, wrap in a basic HTML structure
    else if (language === "javascript") {
      setHtml(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: system-ui, sans-serif; padding: 20px; }
            #output { border: 1px solid #ddd; padding: 10px; margin-top: 10px; min-height: 100px; }
          </style>
        </head>
        <body>
          <h1>JavaScript Output</h1>
          <div id="output"></div>
          <script>
            // Redirect console.log to the output div
            const output = document.getElementById('output');
            const originalConsoleLog = console.log;
            console.log = function(...args) {
              originalConsoleLog.apply(console, args);
              const text = args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
              ).join(' ');
              output.innerHTML += text + '<br>';
            };
            
            // Run the user code
            try {
              ${code}
            } catch (error) {
              console.log('Error: ' + error.message);
            }
          </script>
        </body>
        </html>
      `);
    }
  }, [code, language]);

  return (
    <div className={cn("h-full w-full bg-white", className)}>
      <iframe
        title="Web Preview"
        srcDoc={html}
        className="h-full w-full border-0"
        sandbox="allow-scripts"
      />
    </div>
  );
}
