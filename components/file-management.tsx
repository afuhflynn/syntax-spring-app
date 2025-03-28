"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStore } from "@/lib/store"
import { languages, defaultCodeTemplates } from "@/lib/languages"
import { FileIcon, FolderIcon, Download, Save, Plus, RefreshCw, FileCode } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function FileManagement() {
  const [isNewFileDialogOpen, setIsNewFileDialogOpen] = useState(false)
  const [newFileName, setNewFileName] = useState("")
  const [newFileLanguage, setNewFileLanguage] = useState("javascript")

  const { currentFile, setCurrentFile, code, setCode, setLanguage, resetCodeToTemplate } = useStore()

  const handleCreateNewFile = () => {
    if (newFileName) {
      const fileName = newFileName.includes(".") ? newFileName : `${newFileName}.${getFileExtension(newFileLanguage)}`

      setCurrentFile(fileName)
      setLanguage(newFileLanguage)

      // Use the default template for the selected language
      if (defaultCodeTemplates[newFileLanguage]) {
        setCode(defaultCodeTemplates[newFileLanguage])
      } else {
        setCode("")
      }

      setIsNewFileDialogOpen(false)
      setNewFileName("")

      toast({
        title: "File Created",
        description: `Created new file: ${fileName}`,
      })
    }
  }

  const handleOpenFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      setCurrentFile(file.name)
      setCode(content)

      // Try to detect language from file extension
      const extension = file.name.split(".").pop()?.toLowerCase()
      const detectedLanguage = languages.find((lang) => lang.extensions.includes(`.${extension}`))?.id

      if (detectedLanguage) {
        setLanguage(detectedLanguage)
      }

      toast({
        title: "File Opened",
        description: `Opened file: ${file.name}`,
      })
    }
    reader.readAsText(file)
  }

  const handleDownloadFile = () => {
    if (!currentFile) return

    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = currentFile
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "File Downloaded",
      description: `Downloaded file: ${currentFile}`,
    })
  }

  const handleResetToTemplate = () => {
    resetCodeToTemplate()

    toast({
      title: "Code Reset",
      description: "Code has been reset to the default template",
    })
  }

  const getFileExtension = (lang: string) => {
    const language = languages.find((l) => l.id === lang)
    return language?.extensions[0].replace(".", "") || "txt"
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <FolderIcon className="h-4 w-4 mr-2" />
            File
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuItem onClick={() => setIsNewFileDialogOpen(true)} className="cursor-pointer">
            <Plus className="h-4 w-4 mr-2" />
            New File
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <label className="flex items-center cursor-pointer">
              <FileIcon className="h-4 w-4 mr-2" />
              Open File
              <input
                type="file"
                className="hidden"
                onChange={handleOpenFile}
                accept=".js,.py,.java,.cpp,.ts,.html,.css,.json,.md,.rb,.php,.go,.rs,.cs,.kt,.swift"
              />
            </label>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDownloadFile}
            disabled={!currentFile}
            className={!currentFile ? "opacity-50 pointer-events-none" : "cursor-pointer"}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleResetToTemplate} className="cursor-pointer">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Template
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled className="opacity-50 pointer-events-none">
            <Save className="h-4 w-4 mr-2" />
            Save to Cloud
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isNewFileDialogOpen} onOpenChange={setIsNewFileDialogOpen}>
        <DialogContent className="sm:max-w-[425px] max-w-[90vw]">
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="filename">File Name</Label>
              <Input
                id="filename"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="Enter file name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <div className="relative">
                <select
                  id="language"
                  value={newFileLanguage}
                  onChange={(e) => setNewFileLanguage(e.target.value)}
                  className="w-full p-2 pl-8 border rounded-md bg-background appearance-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                <FileCode className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleCreateNewFile}>Create</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

