// 記事関連の型定義
export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  publishedAt: string;
  author?: string;
  tags?: string[];
}

export interface SearchResult {
  articles: Article[];
  totalCount: number;
  query: string;
} 