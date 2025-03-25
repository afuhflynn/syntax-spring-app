import { DebugStyles } from "@/components/debug-styles"

export default function DebugPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Style Debugging</h1>
      <p className="text-muted-foreground mb-8">This page helps debug styling issues in the application.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-xl font-bold mb-2">Card Component</h2>
          <p className="text-muted-foreground">Testing card styling</p>
        </div>

        <div className="p-6 rounded-lg bg-primary text-primary-foreground">
          <h2 className="text-xl font-bold mb-2">Primary Color</h2>
          <p>Testing primary color</p>
        </div>

        <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
          <h2 className="text-xl font-bold mb-2">Secondary Color</h2>
          <p>Testing secondary color</p>
        </div>
      </div>

      <DebugStyles />
    </div>
  )
}

