export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function GlitchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4h16v16H4z" />
      <path d="M4 8h16" />
      <path d="M8 4v4" />
      <path d="M4 12h8" />
      <path d="M12 12h8" strokeDasharray="2 2" />
      <path d="M4 16h16" />
      <path d="M16 12v8" />
    </svg>
  )
}

export function PigIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="8" />
      <ellipse cx="9" cy="10" rx="1" ry="1.5" fill="currentColor" />
      <ellipse cx="15" cy="10" rx="1" ry="1.5" fill="currentColor" />
      <ellipse cx="12" cy="14" rx="3" ry="2" />
      <circle cx="10.5" cy="14" r="0.5" fill="currentColor" />
      <circle cx="13.5" cy="14" r="0.5" fill="currentColor" />
      <path d="M6 6c-1-1-2 0-2 1" />
      <path d="M18 6c1-1 2 0 2 1" />
    </svg>
  )
}

export function FrogIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Body */}
      <ellipse cx="12" cy="14" rx="8" ry="6" />
      {/* Left eye */}
      <circle cx="7" cy="8" r="3" />
      <circle cx="7" cy="8" r="1" fill="currentColor" />
      {/* Right eye */}
      <circle cx="17" cy="8" r="3" />
      <circle cx="17" cy="8" r="1" fill="currentColor" />
      {/* Mouth */}
      <path d="M8 16c2 2 6 2 8 0" />
      {/* Legs */}
      <path d="M5 18l-2 3" />
      <path d="M19 18l2 3" />
    </svg>
  )
}

export function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
