// ユーザー関連の型定義
export interface UserSettings {
  fontSize: "small" | "medium" | "large";
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: UserSettings;
} 