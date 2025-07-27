import React, { useState, KeyboardEvent } from "react";

interface TagInputProps {
  onTagAdd: (tag: string) => void;
  placeholder?: string;
  className?: string;
  maxTags?: number;
  existingTags?: string[];
}

export const TagInput: React.FC<TagInputProps> = ({
  onTagAdd,
  placeholder = "タグを入力...",
  className = "",
  maxTags,
  existingTags = [],
}) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(existingTags);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();
    if (
      trimmedValue &&
      !tags.includes(trimmedValue) &&
      (!maxTags || tags.length < maxTags)
    ) {
      const newTags = [...tags, trimmedValue];
      setTags(newTags);
      onTagAdd(trimmedValue);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <div className={`flex flex-wrap gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center gap-1"
        >
          {tag}
          <button
            onClick={() => removeTag(index)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
          >
            ×
          </button>
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 min-w-0 outline-none bg-transparent"
      />
    </div>
  );
}; 