"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

type CommunityContextType = {
  // User interactions
  likedItems: Set<string>
  bookmarkedItems: Set<string>
  toggleLike: (itemId: string, itemType: "question" | "discussion" | "snippet" | "response" | "reply") => void
  toggleBookmark: (itemId: string, itemType: "question" | "discussion" | "snippet") => void

  // Filters and sorting
  sortBy: "newest" | "popular" | "votes"
  setSortBy: (sort: "newest" | "popular" | "votes") => void

  // User activity
  recentlyViewed: string[]
  addToRecentlyViewed: (itemId: string, itemType: string, title: string) => void
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined)

export function CommunityProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set())
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "votes">("popular")
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([])

  // Load saved state from localStorage on mount
  useEffect(() => {
    try {
      const savedLikedItems = localStorage.getItem("community-liked-items")
      if (savedLikedItems) {
        setLikedItems(new Set(JSON.parse(savedLikedItems)))
      }

      const savedBookmarkedItems = localStorage.getItem("community-bookmarked-items")
      if (savedBookmarkedItems) {
        setBookmarkedItems(new Set(JSON.parse(savedBookmarkedItems)))
      }

      const savedRecentlyViewed = localStorage.getItem("community-recently-viewed")
      if (savedRecentlyViewed) {
        setRecentlyViewed(JSON.parse(savedRecentlyViewed))
      }
    } catch (error) {
      console.error("Error loading community data from localStorage:", error)
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("community-liked-items", JSON.stringify([...likedItems]))
      localStorage.setItem("community-bookmarked-items", JSON.stringify([...bookmarkedItems]))
      localStorage.setItem("community-recently-viewed", JSON.stringify(recentlyViewed))
    } catch (error) {
      console.error("Error saving community data to localStorage:", error)
    }
  }, [likedItems, bookmarkedItems, recentlyViewed])

  const toggleLike = (itemId: string, itemType: "question" | "discussion" | "snippet" | "response" | "reply") => {
    setLikedItems((prev) => {
      const newSet = new Set(prev)
      const itemKey = `${itemType}-${itemId}`

      if (newSet.has(itemKey)) {
        newSet.delete(itemKey)
        toast({
          title: "Like removed",
          description: `You've unliked this ${itemType}`,
        })
      } else {
        newSet.add(itemKey)
        toast({
          title: "Like added",
          description: `You've liked this ${itemType}`,
        })
      }

      return newSet
    })
  }

  const toggleBookmark = (itemId: string, itemType: "question" | "discussion" | "snippet") => {
    setBookmarkedItems((prev) => {
      const newSet = new Set(prev)
      const itemKey = `${itemType}-${itemId}`

      if (newSet.has(itemKey)) {
        newSet.delete(itemKey)
        toast({
          title: "Bookmark removed",
          description: `${itemType.charAt(0).toUpperCase() + itemType.slice(1)} removed from your bookmarks`,
        })
      } else {
        newSet.add(itemKey)
        toast({
          title: "Bookmark added",
          description: `${itemType.charAt(0).toUpperCase() + itemType.slice(1)} added to your bookmarks`,
        })
      }

      return newSet
    })
  }

  const addToRecentlyViewed = (itemId: string, itemType: string, title: string) => {
    setRecentlyViewed((prev) => {
      const itemKey = `${itemType}-${itemId}`
      const newList = prev.filter((item) => item.split("|")[0] !== itemKey)
      return [`${itemKey}|${title}`, ...newList].slice(0, 10) // Keep only the 10 most recent
    })
  }

  return (
    <CommunityContext.Provider
      value={{
        likedItems,
        bookmarkedItems,
        toggleLike,
        toggleBookmark,
        sortBy,
        setSortBy,
        recentlyViewed,
        addToRecentlyViewed,
      }}
    >
      {children}
    </CommunityContext.Provider>
  )
}

export function useCommunity() {
  const context = useContext(CommunityContext)
  if (context === undefined) {
    throw new Error("useCommunity must be used within a CommunityProvider")
  }
  return context
}
