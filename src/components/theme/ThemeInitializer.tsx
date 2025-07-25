"use client";

import { memo, useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom, resolvedThemeAtom } from "@/features/tags/atoms";

declare global {
  interface Window {
    updateDOM: () => void;
  }
}

const STORAGE_KEY = "nextjs-blog-starter-theme";

// FOUCを防ぐための初期化スクリプト
const NoFOUCScript = (storageKey: string) => {
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);

    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const mode = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolvedMode = mode === SYSTEM ? systemMode : mode;
    const classList = document.documentElement.classList;
    if (resolvedMode === DARK) classList.add(DARK);
    else classList.remove(DARK);
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };
  
  window.updateDOM();
  media.addEventListener("change", window.updateDOM);
};

const Script = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

// テーマ同期コンポーネント
const ThemeSync = () => {
  const [theme] = useAtom(themeAtom);
  const [resolvedTheme] = useAtom(resolvedThemeAtom);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const classList = document.documentElement.classList;
    if (resolvedTheme === "dark") {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
    document.documentElement.setAttribute("data-mode", theme);
  }, [theme, resolvedTheme]);

  return null;
};

export const ThemeInitializer = () => {
  return (
    <>
      <Script />
      <ThemeSync />
    </>
  );
}; 