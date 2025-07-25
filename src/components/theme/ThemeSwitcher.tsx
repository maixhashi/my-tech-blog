"use client";

import styles from "@/components/ui/Switch.module.css";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom, themeEffectAtom, ColorSchemePreference } from "@/features/tags/atoms";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

/**
 * Switch button to quickly toggle user preference.
 */
const Switch = () => {
  const [mode] = useAtom(themeAtom);
  const [, setThemeEffect] = useAtom(themeEffectAtom);

  /** toggle mode */
  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    const newMode = modes[(index + 1) % modes.length];
    setThemeEffect(newMode);
  };

  return (
    <button
      suppressHydrationWarning
      className={styles.switch}
      onClick={handleModeSwitch}
    />
  );
};

/**
 * This component which applies classes and transitions.
 */
export const ThemeSwitcher = () => {
  return <Switch />;
};
