import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function getLanguageIcon(language: string) {
  // This would return the appropriate icon for each language
  // For now, we'll just return a placeholder
  return "/placeholder.svg?height=20&width=20"
}

export function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "text-difficulty-easy"
    case "medium":
      return "text-difficulty-medium"
    case "hard":
      return "text-difficulty-hard"
    default:
      return "text-muted-foreground"
  }
}

