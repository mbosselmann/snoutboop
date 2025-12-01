import { useState } from "react";

import "./App.css";
import SplashScreen from "./SplashScreen";

const options: string[] = ["clock", "glitch", "pig"];

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>(options[2]);

  if (showSplash) {
    return <SplashScreen onLoadingComplete={() => setShowSplash(false)} />;
  }

  return (
    <main className={"main--" + selectedOption}>
      <h1>Choose Boop:</h1>
      <ul className="list">
        <li>
          <button
            className={`list-button ${
              selectedOption === "clock" ? "list-button--clock" : ""
            }`}
            type="button"
            onClick={() => setSelectedOption("clock")}
          >
            Clock
          </button>
        </li>
        <li>
          <button
            className={`list-button ${
              selectedOption === "glitch" ? "list-button--glitch" : ""
            }`}
            type="button"
            onClick={() => setSelectedOption("glitch")}
          >
            Glitch
          </button>
        </li>
        <li>
          <button
            className={`list-button ${
              selectedOption === "pig" ? "list-button--pig" : ""
            }`}
            type="button"
            onClick={() => setSelectedOption("pig")}
          >
            Pig
          </button>
        </li>
      </ul>
    </main>
  );
}

export default App;
