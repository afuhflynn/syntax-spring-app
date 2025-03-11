"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// This is a mock function. Replace it with your actual authentication logic.
const useAuth = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
  return { isAuthenticated }
}

export function withAuth(WrappedComponent: React.ComponentType) {
  return function ProtectedRoute(props: any) {
    const router = useRouter()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/auth/login")
      }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
      return null // or a loading spinner
    }

    return <WrappedComponent {...props} />
  }
}

