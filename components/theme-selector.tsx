"use client"

import { ThemeCard } from "./theme-card"
import { ClockIcon, GlitchIcon, PigIcon, FrogIcon } from "./icons"
import { cn } from "@/lib/utils"

export type ThemeOption = "clock" | "letterGlitch" | "pig" | "pomofroggo"

interface ThemeSelectorProps {
  selectedTheme: ThemeOption
  onThemeChange: (theme: ThemeOption) => void
}

const themes: {
  id: ThemeOption
  label: string
  icon: React.ReactNode
  colorClass: string
  description: string
}[] = [
  {
    id: "clock",
    label: "Clock",
    icon: <ClockIcon className="w-full h-full" />,
    colorClass: "bg-cyan-500",
    description: "Time-focused blue theme",
  },
  {
    id: "letterGlitch",
    label: "Letter Glitch",
    icon: <GlitchIcon className="w-full h-full" />,
    colorClass: "bg-purple-500",
    description: "Digital purple aesthetic",
  },
  {
    id: "pig",
    label: "Pig",
    icon: <PigIcon className="w-full h-full" />,
    colorClass: "bg-pink-500",
    description: "Playful pink vibes",
  },
  {
    id: "pomofroggo",
    label: "Pomofroggo",
    icon: <FrogIcon className="w-full h-full" />,
    colorClass: "bg-green-500",
    description: "Fresh green energy",
  },
]

export function ThemeSelector({ selectedTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground"
          style={{ fontFamily: "'Fredericka the Great', cursive" }}
        >
          Choose Your Boop
        </h2>
        <p className="text-muted-foreground text-lg">
          Select a theme that matches your mood
        </p>
      </div>

      {/* Theme cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.id}
            name={theme.id}
            label={theme.label}
            icon={theme.icon}
            isSelected={selectedTheme === theme.id}
            onClick={() => onThemeChange(theme.id)}
            colorClass={theme.colorClass}
          />
        ))}
      </div>

      {/* Current theme info */}
      <div
        className={cn(
          "glass-card rounded-2xl px-6 py-4 text-center max-w-sm",
          "animate-fade-in"
        )}
        key={selectedTheme}
      >
        <p className="text-sm text-muted-foreground">Current theme</p>
        <p className="text-xl font-semibold text-primary mt-1">
          {themes.find((t) => t.id === selectedTheme)?.label}
        </p>
        <p className="text-sm text-foreground/60 mt-1">
          {themes.find((t) => t.id === selectedTheme)?.description}
        </p>
      </div>
    </div>
  )
}
