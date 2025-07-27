export interface Tag {
  id: string;
  name: string;
  color?: string;
  count?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TagFilter {
  search?: string;
  color?: string;
  sortBy?: "name" | "count" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export interface TagStats {
  totalTags: number;
  mostUsedTag?: Tag;
  recentlyAdded: Tag[];
} 