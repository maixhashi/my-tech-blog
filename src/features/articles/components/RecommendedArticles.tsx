import { Post } from "@/interfaces/post";
import { ArticleCard } from "@/features/articles/components/ArticleCard";

type Props = {
  posts: Post[];
};

export function RecommendedArticles({ posts }: Props) {
  return (
    <section className="py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          おすすめの記事
        </h2>
      </div>
      
      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post, index) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
} 