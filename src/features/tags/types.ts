// タグ関連の型定義
export type ColorSchemePreference = "system" | "dark" | "light";

export interface Tag {
  id: string;
  name: string;
  color?: string;
  count?: number;
}

export interface ThemeSettings {
  colorScheme: ColorSchemePreference;
  resolvedTheme: "dark" | "light";
} 