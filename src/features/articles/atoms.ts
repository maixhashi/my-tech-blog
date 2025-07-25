import { atom } from "jotai";

// 検索クエリのatom
export const searchQueryAtom = atom<string>("");

// 検索結果のatom（実際の実装では記事データと連携）
export const searchResultsAtom = atom((get) => {
  const query = get(searchQueryAtom);
  
  // 空のクエリの場合は空配列を返す
  if (!query.trim()) {
    return [];
  }
  
  // ここで実際の記事データを検索する処理を実装
  // 現在はダミーデータを返す
  return [];
});

// 検索の有効/無効状態のatom
export const isSearchActiveAtom = atom((get) => {
  const query = get(searchQueryAtom);
  return query.trim().length > 0;
}); 