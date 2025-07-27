import { Post } from "@/interfaces/post";
import { ArticleCard } from "@/app/components/articles/ArticleCard";
import { MainTitle } from "@/app/components/articles/MainTitle";
import { FilterSearchBar } from "@/app/components/articles/FilterSearchBar";
import { Pagination } from "@/app/components/articles/Pagination";

type Props = {
  posts: Post[];
};

export function ArticlesGrid({ posts }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainTitle />
          <FilterSearchBar />

          {/* 記事グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination />
        </div>
      </main>
    </div>
  );
} 