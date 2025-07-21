import Container from "@/app/_components/container";
import { ProfileSection } from "@/app/_components/profile-section";
import { RecentArticles } from "@/app/_components/recent-articles";
import { RecommendedArticles } from "@/app/_components/recommended-articles";
import { TagSearch } from "@/app/_components/tag-search";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  // 最近の記事（最新6件）
  const recentPosts = allPosts.slice(0, 6);
  
  // おすすめの記事（次の9件）
  const recommendedPosts = allPosts.slice(6, 15);

  return (
    <main className="min-h-screen">
      <Container>
        <ProfileSection />
        <RecentArticles posts={recentPosts} />
        <RecommendedArticles posts={recommendedPosts} />
        <TagSearch />
      </Container>
    </main>
  );
}
