"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingsIcon } from "lucide-react";
import { useStore } from "@/lib/store";

export function Settings() {
  const { editorSettings, updateEditorSettings, aiSettings, updateAISettings } =
    useStore();

  // Local state for settings
  const [fontSize, setFontSize] = useState(editorSettings.fontSize);
  const [tabSize, setTabSize] = useState(editorSettings.tabSize);
  const [wordWrap, setWordWrap] = useState(editorSettings.wordWrap);
  const [minimap, setMinimap] = useState(editorSettings.minimap);
  const [lineNumbers, setLineNumbers] = useState(editorSettings.lineNumbers);
  const [theme, setTheme] = useState(editorSettings.theme);
  const [aiModel, setAIModel] = useState(aiSettings.model);
  const [codeCompletion, setCodeCompletion] = useState(
    aiSettings.codeCompletion
  );
  const [errorDetection, setErrorDetection] = useState(
    aiSettings.errorDetection
  );
  const [codeSuggestions, setCodeSuggestions] = useState(
    aiSettings.codeSuggestions
  );

  // Update store when settings change
  useEffect(() => {
    updateEditorSettings({
      fontSize,
      tabSize,
      wordWrap,
      minimap,
      lineNumbers,
      theme,
    });
  }, [
    fontSize,
    tabSize,
    wordWrap,
    minimap,
    lineNumbers,
    theme,
    updateEditorSettings,
  ]);

  useEffect(() => {
    updateAISettings({
      model: aiModel,
      codeCompletion,
      errorDetection,
      codeSuggestions,
    });
  }, [
    aiModel,
    codeCompletion,
    errorDetection,
    codeSuggestions,
    updateAISettings,
  ]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="editor">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="ai">AI Assistant</TabsTrigger>
          </TabsList>
          <TabsContent value="editor" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="editor-theme">Editor Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="editor-theme">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vs">Light (VS)</SelectItem>
                  <SelectItem value="vs-dark">Dark (VS)</SelectItem>
                  <SelectItem value="github">GitHub Light</SelectItem>
                  <SelectItem value="github-dark">GitHub Dark</SelectItem>
                  <SelectItem value="monokai">Monokai</SelectItem>
                  <SelectItem value="material-ocean">Material Ocean</SelectItem>
                  <SelectItem value="dracula">Dracula</SelectItem>
                  <SelectItem value="nord">Nord</SelectItem>
                  <SelectItem value="abyss" disabled>
                    Abyss-Not available
                  </SelectItem>
                  <SelectItem value="solarized-light" disabled>
                    Solarized Light-Not available
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="font-size">Font Size: {fontSize}px</Label>
              </div>
              <Slider
                id="font-size"
                min={10}
                max={24}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="tab-size">Tab Size: {tabSize}</Label>
              </div>
              <Slider
                id="tab-size"
                min={1}
                max={8}
                step={1}
                value={[tabSize]}
                onValueChange={(value) => setTabSize(value[0])}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="word-wrap">Word Wrap</Label>
                <Switch
                  id="word-wrap"
                  checked={wordWrap}
                  onCheckedChange={setWordWrap}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="minimap">Minimap</Label>
                <Switch
                  id="minimap"
                  checked={minimap}
                  onCheckedChange={setMinimap}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="line-numbers">Line Numbers</Label>
                <Switch
                  id="line-numbers"
                  checked={lineNumbers}
                  onCheckedChange={setLineNumbers}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ai" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="ai-model">AI Model</Label>
              <Select value={aiModel} onValueChange={setAIModel}>
                <SelectTrigger id="ai-model">
                  <SelectValue placeholder="Select AI model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gemini-2.0-flash">Gemini Flash</SelectItem>
                  <SelectItem value="gemini-2.0-pro">Gemini Pro</SelectItem>
                  <SelectItem value="gemini-2.5">Gemini-@-Default</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="code-completion">Code Completion</Label>
                <Switch
                  id="code-completion"
                  checked={codeCompletion}
                  onCheckedChange={setCodeCompletion}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="error-detection">Error Detection</Label>
                <Switch
                  id="error-detection"
                  checked={errorDetection}
                  onCheckedChange={setErrorDetection}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="code-suggestions">Code Suggestions</Label>
                <Switch
                  id="code-suggestions"
                  checked={codeSuggestions}
                  onCheckedChange={setCodeSuggestions}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
