// テーマ関連の型定義
export type ColorSchemePreference = "system" | "dark" | "light";

export interface ThemeSettings {
  colorScheme: ColorSchemePreference;
  resolvedTheme: "dark" | "light";
} 