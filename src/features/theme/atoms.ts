import { atom } from "jotai";
import { ColorSchemePreference, ThemeSettings } from "./types";

const STORAGE_KEY = "nextjs-blog-starter-theme";

// ローカルストレージから初期値を取得する関数
const getInitialTheme = (): ColorSchemePreference => {
  if (typeof window === "undefined") return "light";
  
  const stored = localStorage.getItem(STORAGE_KEY);
  return (stored as ColorSchemePreference) || "light";
};

// テーマ設定のatom
export const themeAtom = atom<ColorSchemePreference>(getInitialTheme());

// 実際のテーマ（themeAtomと同じ値）
export const resolvedThemeAtom = atom((get) => {
  return get(themeAtom);
});

// テーマ変更の副作用
export const themeEffectAtom = atom(
  null,
  (get, set, newTheme: ColorSchemePreference) => {
    set(themeAtom, newTheme);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newTheme);
      
      // DOM更新
      const classList = document.documentElement.classList;
      if (newTheme === "dark") {
        classList.add("dark");
      } else {
        classList.remove("dark");
      }
      document.documentElement.setAttribute("data-mode", newTheme);
    }
  }
);

// テーマ設定全体のatom
export const themeSettingsAtom = atom<ThemeSettings>({
  colorScheme: getInitialTheme(),
});

// テーマ設定変更の副作用
export const updateThemeSettingsAtom = atom(
  null,
  (get, set, newSettings: Partial<ThemeSettings>) => {
    const currentSettings = get(themeSettingsAtom);
    const updatedSettings = { ...currentSettings, ...newSettings };
    
    set(themeSettingsAtom, updatedSettings);
    
    // colorSchemeが変更された場合はthemeAtomも更新
    if (newSettings.colorScheme) {
      set(themeEffectAtom, newSettings.colorScheme);
    }
  }
); 