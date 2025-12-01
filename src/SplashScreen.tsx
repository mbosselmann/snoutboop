import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./SplashScreen.css";

interface SplashScreenProps {
  onLoadingComplete: () => void;
  minDisplayTime?: number;
}

function SplashScreen({
  onLoadingComplete,
  minDisplayTime = 5000,
}: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onLoadingComplete]);

  if (!isLoading) return null;

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
      <div className="spinner"></div>
    </main>
  );
}

export default SplashScreen;
