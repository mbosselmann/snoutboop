"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { ThemeSelector, type ThemeOption } from "@/components/theme-selector"
import { cn } from "@/lib/utils"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("clock")
  const [isLoaded, setIsLoaded] = useState(false)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme)
  }, [selectedTheme])

  // Trigger fade-in animation after splash
  useEffect(() => {
    if (!showSplash) {
      const timer = setTimeout(() => setIsLoaded(true), 100)
      return () => clearTimeout(timer)
    }
  }, [showSplash])

  const getGradientClass = () => {
    switch (selectedTheme) {
      case "clock":
        return "gradient-clock"
      case "letterGlitch":
        return "gradient-letterGlitch"
      case "pig":
        return "gradient-pig"
      case "pomofroggo":
        return "gradient-pomofroggo"
      default:
        return "gradient-clock"
    }
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <main
        className={cn(
          "min-h-screen flex items-center justify-center p-6 transition-all duration-700",
          getGradientClass(),
          showSplash ? "opacity-0" : "opacity-100",
          !isLoaded && "scale-95"
        )}
      >
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Large blurred orb top-right */}
          <div
            className={cn(
              "absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl transition-colors duration-700",
              selectedTheme === "clock" && "bg-cyan-400",
              selectedTheme === "letterGlitch" && "bg-purple-400",
              selectedTheme === "pig" && "bg-pink-400",
              selectedTheme === "pomofroggo" && "bg-green-400"
            )}
          />
          {/* Large blurred orb bottom-left */}
          <div
            className={cn(
              "absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl transition-colors duration-700",
              selectedTheme === "clock" && "bg-blue-500",
              selectedTheme === "letterGlitch" && "bg-magenta-500",
              selectedTheme === "pig" && "bg-rose-500",
              selectedTheme === "pomofroggo" && "bg-lime-500"
            )}
          />
        </div>

        {/* Main content */}
        <div
          className={cn(
            "relative z-10 w-full max-w-4xl glass rounded-3xl p-8 md:p-12",
            "transition-all duration-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <ThemeSelector
            selectedTheme={selectedTheme}
            onThemeChange={setSelectedTheme}
          />
        </div>
      </main>
    </>
  )
}
