// This hook is adapted from shadcn/ui toast component
// https://ui.shadcn.com/docs/components/toast

import { useToast as useToastPrimitive } from "@/components/ui/use-toast"
import type { Toast } from "@/components/ui/use-toast"

export const useToast = useToastPrimitive

export type { Toast }

