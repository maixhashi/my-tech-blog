import { Post } from "@/interfaces/post";
import Link from "next/link";
import DateFormatter from "@/features/articles/components/DateFormatter";

type Props = {
  post: Post;
};

// 絵文字の配列（記事のアイコンとして使用）
const emojis = [
  "🛁", "😉", "💎", "🚢", "💰", "🎈", "風", "🍸", "✏️", 
  "👑", "🍉", "♟️", "🔧", "😎", "🔄"
];

export function ArticleCard({ post }: Props) {
  // ランダムな絵文字を選択（実際の実装では投稿のタグやタイトルに基づいて決定）
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  // タグを取得（実際の実装では投稿データから取得）
  const tags = post.tags || ["技術", "ブログ"];

  return (
    <Link href={`/posts/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
        {/* 絵文字アイコン */}
        <div className="text-4xl mb-4 text-center">
          {randomEmoji}
        </div>
        
        {/* タイトル */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {post.title}
        </h3>
        
        {/* 日付 */}
        <div className="text-sm text-gray-500 mb-4">
          <DateFormatter dateString={post.date} />
        </div>
        
        {/* タグ */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
} 