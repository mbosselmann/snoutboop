"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ThemeCardProps {
  name: string
  label: string
  icon: ReactNode
  isSelected: boolean
  onClick: () => void
  colorClass: string
}

export function ThemeCard({
  name,
  label,
  icon,
  isSelected,
  onClick,
  colorClass,
}: ThemeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-300",
        "min-w-[120px] min-h-[140px] cursor-pointer",
        "glass-button",
        isSelected && "glass-button-active scale-105",
        !isSelected && "hover:scale-102"
      )}
    >
      {/* Glow effect on selection */}
      {isSelected && (
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-30 blur-xl -z-10",
            colorClass
          )}
        />
      )}

      {/* Icon container */}
      <div
        className={cn(
          "w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300",
          "bg-white/5",
          isSelected && "bg-primary/20"
        )}
      >
        <div
          className={cn(
            "w-8 h-8 transition-colors duration-300",
            isSelected ? "text-primary" : "text-foreground/70 group-hover:text-foreground"
          )}
        >
          {icon}
        </div>
      </div>

      {/* Label */}
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-300",
          isSelected ? "text-primary" : "text-foreground/70 group-hover:text-foreground"
        )}
      >
        {label}
      </span>

      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary" />
      )}
    </button>
  )
}
