import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import {
  TbSun as Sun,
  TbMoon as Moon,
  TbSunMoon as SunMoon,
} from "react-icons/tb";

const MODES = ["dark", "light", "system"];
type ThemeMode = (typeof MODES)[number];

interface ThemeModeIconProps extends IconBaseProps {
  mode?: ThemeMode;
}

interface ThemeModeToggleProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: number;
}

function getThemeMode(): ThemeMode {
  return "theme" in localStorage ? localStorage.theme : "system";
}

function applyThemeMode(mode: ThemeMode) {
  switch (mode) {
    case "dark":
      localStorage.theme = mode;
      document.documentElement.classList.add("dark");
      break;
    case "light":
      localStorage.theme = mode;
      document.documentElement.classList.remove("dark");
      break;
    default:
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList.add("dark");
      break;
  }
}

function ThemeModeIcon({ mode, ...props }: ThemeModeIconProps) {
  switch (mode) {
    case "dark":
      return <Moon {...props} />;
    case "light":
      return <Sun {...props} />;
    case "system":
    default:
      return <SunMoon {...props} />;
  }
}

function ThemeModeToggle({size = 25, ...props}: ThemeModeToggleProps) {
  const [mode, setMode] = useState<ThemeMode>(getThemeMode());

  useEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  function toggle() {
    setMode(MODES[(MODES.indexOf(mode) + 1) % MODES.length]);
  }

  return (
    <button type="button" onClick={toggle} {...props}>
      <ThemeModeIcon size={25} mode={mode}
        className="stroke-purple-950 dark:stroke-white"
        title={`Toggle theme (${mode})`}
        width={size} height={size}  
        suppressHydrationWarning
      />
    </button>
  );
}

export default ThemeModeToggle;
export type { ThemeModeToggleProps };
