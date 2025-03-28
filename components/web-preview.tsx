"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WebPreviewProps {
  html?: string | undefined;
  js?: string | undefined;
  css?: string | undefined;
  language: string;
  className?: string;
}

export default function WebPreview({
  html,
  js,
  css,
  language,
  className,
}: WebPreviewProps) {
  const [previewHtml, setPreviewHtml] = useState<string>("");

  useEffect(() => {
    // For HTML, directly use the code
    if (html && css && js) {
      setPreviewHtml(`
      ${html.replace("<style></style>", `<style>${css}</style>`).replace("<script></script>", `<script>${js}</script>`)}
      `);
    } else if (html && css) {
      setPreviewHtml(`
      ${html.replace("<style></style>", `<style>${css}</style>`)}
      `);
    } else if (html && js) {
      setPreviewHtml(`
      ${html.replace("<script></script>", `<script>${js}</script>`)}
      `);
    } else if (html) {
      setPreviewHtml(`
      ${html}
      `);
    } else {
      setPreviewHtml(`
      <!DOCTYPE html>
<html>
<head>
  <title>Broken app</title>
</head>
<body>
<h1> Page broken</h1>
</body>
      `);
    }
  }, [language]);

  return (
    <div className={cn("h-full w-full bg-white", className)}>
      <iframe
        title="Web Preview"
        srcDoc={previewHtml}
        className="h-full w-full border-0"
        sandbox="allow-scripts"
      />
    </div>
  );
}
