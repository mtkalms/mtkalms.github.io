import { useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import {
  TbSun as Sun,
  TbMoon as Moon,
  TbSunMoon as SunMoon,
} from "react-icons/tb";

const MODES = ["dark", "light", "auto"];
type ThemeMode = (typeof MODES)[number];

interface ThemeModeIconProps extends IconBaseProps {
  mode: ThemeMode;
}

function getThemeMode(): ThemeMode {
  return "theme" in localStorage ? localStorage.theme : "auto";
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
    default:
      return <SunMoon {...props} />;
  }
}

function ThemeModeToggle() {
  const [mode, setMode] = useState<ThemeMode>(getThemeMode());

  useEffect(() => {
    if (mode === "auto") {
      let preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      let localTheme = "theme" in localStorage ? localStorage.theme : "light";
      if (preference !== localTheme) {
        applyThemeMode("auto");
      }
    }
  });

  useEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  function toggle() {
    setMode(MODES[(MODES.indexOf(mode) + 1) % MODES.length]);
  }

  return (
    <button type="button" onClick={toggle}>
      <ThemeModeIcon size={30} mode={mode}
        title={mode === "auto" ? "OS default" : "mode"}
        className="stroke-purple-950 dark:stroke-white"
      />
    </button>
  );
}

export default ThemeModeToggle;
