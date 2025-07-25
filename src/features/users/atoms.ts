import { atom } from "jotai";

export interface UserSettings {
  fontSize: "small" | "medium" | "large";
  showReadingTime: boolean;
  showTableOfContents: boolean;
  autoSave: boolean;
}

const STORAGE_KEY = "user-settings";

// ローカルストレージから初期値を取得する関数
const getInitialSettings = (): UserSettings => {
  if (typeof window === "undefined") {
    return {
      fontSize: "medium",
      showReadingTime: true,
      showTableOfContents: true,
      autoSave: true,
    };
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // パースに失敗した場合はデフォルト値を返す
    }
  }
  
  return {
    fontSize: "medium",
    showReadingTime: true,
    showTableOfContents: true,
    autoSave: true,
  };
};

// ユーザー設定のatom
export const userSettingsAtom = atom<UserSettings>(getInitialSettings());

// 設定変更の副作用
export const updateUserSettingsAtom = atom(
  null,
  (get, set, newSettings: Partial<UserSettings>) => {
    const currentSettings = get(userSettingsAtom);
    const updatedSettings = { ...currentSettings, ...newSettings };
    
    set(userSettingsAtom, updatedSettings);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSettings));
    }
  }
);

// 個別の設定用のatom
export const fontSizeAtom = atom(
  (get) => get(userSettingsAtom).fontSize,
  (get, set, fontSize: UserSettings["fontSize"]) => {
    set(updateUserSettingsAtom, { fontSize });
  }
);

export const showReadingTimeAtom = atom(
  (get) => get(userSettingsAtom).showReadingTime,
  (get, set, showReadingTime: boolean) => {
    set(updateUserSettingsAtom, { showReadingTime });
  }
);

export const showTableOfContentsAtom = atom(
  (get) => get(userSettingsAtom).showTableOfContents,
  (get, set, showTableOfContents: boolean) => {
    set(updateUserSettingsAtom, { showTableOfContents });
  }
);

export const autoSaveAtom = atom(
  (get) => get(userSettingsAtom).autoSave,
  (get, set, autoSave: boolean) => {
    set(updateUserSettingsAtom, { autoSave });
  }
); 