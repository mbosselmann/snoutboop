import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ClockIcon, GlitchIcon, PigIcon, FrogIcon } from "./Icons";
import "./SplashScreen.css";

interface SplashScreenProps {
  onLoadingComplete: () => void;
  minDisplayTime?: number;
}

function SplashScreen({
  onLoadingComplete,
  minDisplayTime = 4000,
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
    <main className="splash-screen">
      <header className="splash-header">
        <DotLottieReact
          src="https://lottie.host/850857d4-5bad-4e15-8412-25b7a20aed81/01sG1gKWau.lottie"
          loop
          autoplay
        />
        <h1 className="splash-title">SnoutBoop</h1>
      </header>
      
      <div className="icon-spinner">
        <div className="icon-orbit">
          <div className="icon-item icon-clock">
            <ClockIcon />
          </div>
          <div className="icon-item icon-glitch">
            <GlitchIcon />
          </div>
          <div className="icon-item icon-pig">
            <PigIcon />
          </div>
          <div className="icon-item icon-frog">
            <FrogIcon />
          </div>
        </div>
        <div className="spinner-center-dot"></div>
      </div>
    </main>
  );
}

export default SplashScreen;
