"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DebugStyles() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <Button className="fixed bottom-4 right-4 z-50" onClick={() => setIsOpen(true)} variant="outline">
        Debug Styles
      </Button>
    )
  }

  // Get all CSS variables from :root
  const cssVars = Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules)
      } catch (e) {
        return []
      }
    })
    .filter((rule) => rule.type === CSSRule.STYLE_RULE && rule.selectorText === ":root")
    .flatMap((rule) => Array.from((rule as CSSStyleRule).style))
    .filter((name) => name.startsWith("--"))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[80vh] overflow-auto rounded-lg border bg-card p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">CSS Variables Debug</h2>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 rounded bg-primary text-primary-foreground">Primary</div>
            <div className="p-4 rounded bg-secondary text-secondary-foreground">Secondary</div>
            <div className="p-4 rounded bg-accent text-accent-foreground">Accent</div>
            <div className="p-4 rounded bg-muted text-muted-foreground">Muted</div>
            <div className="p-4 rounded bg-destructive text-destructive-foreground">Destructive</div>
            <div className="p-4 rounded border bg-card text-card-foreground">Card</div>
          </div>

          <div className="mt-4">
            <h3 className="font-medium mb-2">CSS Variables:</h3>
            <div className="bg-muted p-4 rounded text-xs font-mono h-60 overflow-auto">
              {cssVars.map((name) => {
                const value = getComputedStyle(document.documentElement).getPropertyValue(name)
                return (
                  <div key={name} className="mb-1">
                    <span className="text-primary">{name}</span>: {value};
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

