"use client"

import { useIsMounted } from "@/app/lib/hooks/use-is-mounted"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
}

export function FadeInWrapper({ children }: Props) {
  const isMounted = useIsMounted()

  return (
    <div className={twMerge("transition-all duration-1000 ease-out", isMounted ? "opacity-100" : "opacity-0")}>
      {children}
    </div>
  )
}