import { useEffect } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed: number;
}

function useParallax() {
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
}

function Parallax({ children, className }: ParallaxProps) {
  return (
    <div className={`parallax overflow-hidden ${className}`}>{children}</div>
  );
}

function ParallaxLayer({ children, className, speed }: ParallaxLayerProps) {
  return (
    <div
      className={`parallax-layer absolute bottom-0 left-0 w-full h-full will-change-transform ${className}`}
      style={{
        transform: `translateY(calc(var(--scroll-y, 0) * -${speed}px))`,
      }}
    >
      {children}
    </div>
  );
}

Parallax.Layer = ParallaxLayer;

export default Parallax;
export { useParallax };
