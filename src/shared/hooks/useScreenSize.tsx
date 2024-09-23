import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  height: number;
}

function getScreenSize(): ScreenSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
