import Container from "@/components/ui/Container";
import { ProfileSection } from "@/features/users/components/ProfileSection";
import { RecentArticles } from "@/features/articles/components/RecentArticles";
import { RecommendedArticles } from "@/features/articles/components/RecommendedArticles";
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
      </Container>
    </main>
  );
}
