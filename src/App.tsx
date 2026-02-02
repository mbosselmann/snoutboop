import { useState } from "react";

import "./App.css";
import SplashScreen from "./SplashScreen";
import { ClockIcon, GlitchIcon, PigIcon, FrogIcon } from "./Icons";

type Option = "clock" | "glitch" | "pig" | "pomofroggo";

const options: { id: Option; label: string}[] = [
  { id: "clock", label: "Clock"},
  { id: "glitch", label: "Letter Glitch"},
  { id: "pig", label: "Pig"},
  { id: "pomofroggo", label: "Pomofroggo"},
];

const iconMap: Record<Option, React.FC<{ className?: string }>> = {
  clock: ClockIcon,
  glitch: GlitchIcon,
  pig: PigIcon,
  pomofroggo: FrogIcon,
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedOption, setSelectedOption] = useState<Option>("pomofroggo");

  if (showSplash) {
    return <SplashScreen onLoadingComplete={() => setShowSplash(false)} />;
  }

  return (
    <main className={`main main--${selectedOption}`}>
      {/* Background orbs for glassmorphism effect */}
      <div className="bg-orb bg-orb--1"></div>
      <div className="bg-orb bg-orb--2"></div>
      <div className="bg-orb bg-orb--3"></div>

      <div className="content">
        
        <ul className="card-grid">
          {options.map((option) => {
            const Icon = iconMap[option.id];
            const isSelected = selectedOption === option.id;

            return (
              <li key={option.id}>
                <button
                  className={`glass-card ${isSelected ? `glass-card--${option.id}` : ""}`}
                  type="button"
                  onClick={() => setSelectedOption(option.id)}
                  aria-pressed={isSelected}
                >
                  <div className="card-icon">
                    <Icon className="icon" />
                  </div>
                  <span className="card-label">{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
