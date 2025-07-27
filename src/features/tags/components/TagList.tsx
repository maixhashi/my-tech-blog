import React from "react";

interface Tag {
  id: string;
  name: string;
  color?: string;
}

interface TagListProps {
  tags: Tag[];
  onTagClick?: (tag: Tag) => void;
  className?: string;
}

export const TagList: React.FC<TagListProps> = ({
  tags,
  onTagClick,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onTagClick?.(tag)}
          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          style={tag.color ? { backgroundColor: tag.color } : {}}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}; 