import { getAllPosts } from "@/lib/api";
import Container from "@/components/ui/Container";
import { MoreStories } from "@/features/articles/components/MoreStories";
import { Intro } from "@/components/intro/Intro";

export default function ArticlesPage() {
  const allPosts = getAllPosts();
  return (
    <main>
      <Container>
        <Intro />
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
} 