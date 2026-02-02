"use client"

import { useEffect, useState } from "react"
import { SpinnerIcon, FrogIcon } from "./icons"
import { cn } from "@/lib/utils"

interface SplashScreenProps {
  onComplete: () => void
  duration?: number
}

export function SplashScreen({ onComplete, duration = 3000 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, duration - 500)

    const completeTimer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, duration)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 gradient-clock transition-opacity duration-500",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Logo area */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 glass rounded-full flex items-center justify-center">
          <FrogIcon className="w-20 h-20 text-primary animate-pulse" />
        </div>

        <h1
          className="text-5xl md:text-6xl font-bold text-foreground tracking-tight"
          style={{ fontFamily: "'Fredericka the Great', cursive" }}
        >
          SnoutBoop
        </h1>
      </div>

      {/* Loading spinner */}
      <div className="flex flex-col items-center gap-3">
        <SpinnerIcon className="w-8 h-8 text-primary animate-spin-slow" />
        <p className="text-muted-foreground text-sm">Loading your boops...</p>
      </div>
    </div>
  )
}
