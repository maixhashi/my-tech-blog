import { useState, useCallback } from "react";

export interface Tag {
  id: string;
  name: string;
  color?: string;
  count?: number;
}

export const useTags = (initialTags: Tag[] = []) => {
  const [tags, setTags] = useState<Tag[]>(initialTags);

  const addTag = useCallback((tagName: string, color?: string) => {
    const newTag: Tag = {
      id: Date.now().toString(),
      name: tagName,
      color,
    };
    setTags(prev => [...prev, newTag]);
    return newTag;
  }, []);

  const removeTag = useCallback((tagId: string) => {
    setTags(prev => prev.filter(tag => tag.id !== tagId));
  }, []);

  const updateTag = useCallback((tagId: string, updates: Partial<Tag>) => {
    setTags(prev => prev.map(tag => 
      tag.id === tagId ? { ...tag, ...updates } : tag
    ));
  }, []);

  const getTagById = useCallback((tagId: string) => {
    return tags.find(tag => tag.id === tagId);
  }, [tags]);

  const searchTags = useCallback((query: string) => {
    return tags.filter(tag => 
      tag.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [tags]);

  return {
    tags,
    addTag,
    removeTag,
    updateTag,
    getTagById,
    searchTags,
  };
}; 