import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/media-query";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed: number;
}

function Parallax({ children, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const relativeScroll = window.scrollY - el.offsetTop;
      if (prefersReducedMotion) {
        el.style.setProperty("--scroll-y", "0");
      } else {
        el.style.setProperty("--scroll-y", relativeScroll.toString());
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className={`parallax overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function ParallaxLayer({ children, className, speed }: ParallaxLayerProps) {
  return (
    <div
      className={`parallax-layer absolute bottom-0 left-0 h-full w-full will-change-transform ${className}`}
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
