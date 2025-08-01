"use client";

import { useAtom } from "jotai";
import { themeAtom, themeEffectAtom, ColorSchemePreference } from "@/features/theme/atoms";

const modes: ColorSchemePreference[] = ["light", "dark"];

/**
 * Theme switcher component with icon and accessibility features.
 */
export const ThemeSwitcher = () => {
  const [mode] = useAtom(themeAtom);
  const [, setThemeEffect] = useAtom(themeEffectAtom);

  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    const newMode = modes[(index + 1) % modes.length];
    setThemeEffect(newMode);
  };

  return (
    <button
      suppressHydrationWarning
      onClick={handleModeSwitch}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "light" ? (
        // Moon icon for dark mode
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        // Sun icon for light mode
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};
