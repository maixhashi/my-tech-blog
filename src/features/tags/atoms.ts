import { atom } from "jotai";

export type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";

// ローカルストレージから初期値を取得する関数
const getInitialTheme = (): ColorSchemePreference => {
  if (typeof window === "undefined") return "system";
  
  const stored = localStorage.getItem(STORAGE_KEY);
  return (stored as ColorSchemePreference) || "system";
};

// テーマ設定のatom
export const themeAtom = atom<ColorSchemePreference>(getInitialTheme());

// 実際のテーマ（systemの場合はシステム設定を反映）
export const resolvedThemeAtom = atom((get) => {
  const theme = get(themeAtom);
  
  if (theme === "system") {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  
  return theme;
});

// テーマ変更の副作用
export const themeEffectAtom = atom(
  null,
  (get, set, newTheme: ColorSchemePreference) => {
    set(themeAtom, newTheme);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newTheme);
      
      // DOM更新
      const updateDOM = () => {
        const resolvedTheme = newTheme === "system" 
          ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
          : newTheme;
        
        const classList = document.documentElement.classList;
        if (resolvedTheme === "dark") {
          classList.add("dark");
        } else {
          classList.remove("dark");
        }
        document.documentElement.setAttribute("data-mode", newTheme);
      };
      
      updateDOM();
    }
  }
); 