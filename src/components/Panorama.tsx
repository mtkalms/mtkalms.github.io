import { useEffect } from "react";
import "./Panorama.css";

interface PanoramaProps {
  children: React.ReactNode;
  className?: string;
}

interface PanoramaLayerProps {
  children: React.ReactNode;
  className?: string;
  speed: number;
}

function Panorama({ children, className }: PanoramaProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-y",
        scrollY.toString(),
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`panorama overflow-hidden ${className}`}>{children}</div>
  );
}

function PanoramaLayer({ children, className, speed }: PanoramaLayerProps) {
  return (
    <div
      className={`panorama-layer absolute bottom-0 left-0 w-full h-full will-change-transform ${className}`}
      style={{
        transform: `translateY(calc(var(--scroll-y, 0) * -${speed}px))`,
      }}
    >
      {children}
    </div>
  );
}

Panorama.Layer = PanoramaLayer;

export default Panorama;
