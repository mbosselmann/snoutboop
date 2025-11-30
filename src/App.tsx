import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "./App.css";

const options: string[] = ["clock", "glitch", "pig"];

function App() {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  return (
    <main>
      <header>
        <DotLottieReact
          src="https://lottie.host/850857d4-5bad-4e15-8412-25b7a20aed81/01sG1gKWau.lottie"
          loop
          autoplay
        />
        <h1>SnoutBoop</h1>
      </header>
      <p>{selectedOption}</p>
      <ul className="list">
        <li>
          <button
            className="list-button"
            type="button"
            onClick={() => setSelectedOption("clock")}
          >
            🕰️
          </button>
        </li>
        <li>
          <button
            className="list-button"
            type="button"
            onClick={() => setSelectedOption("letterGlitch")}
          >
            👾
          </button>
        </li>
        <li>
          <button
            className="list-button"
            type="button"
            onClick={() => setSelectedOption("pig")}
          >
            🐽
          </button>
        </li>
      </ul>
    </main>
  );
}

export default App;
