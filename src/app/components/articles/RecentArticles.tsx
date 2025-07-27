import { Post } from "@/interfaces/post";
import { ArticleCard } from "@/app/components/articles/ArticleCard";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function RecentArticles({ posts }: Props) {
  return (
    <section className="py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          最近公開された記事
        </h2>
      </div>
      
      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {posts.map((post, index) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
      
      {/* すべての記事を見るリンク */}
      <div className="text-center">
        <Link 
          href="/posts" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          すべての記事を見る
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 