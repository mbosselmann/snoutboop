import "./App.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
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
      <ul>
        <li>Clock</li>
        <li>LetterGlitch</li>
        <li>Pig</li>
      </ul>
    </main>
  );
}

export default App;
