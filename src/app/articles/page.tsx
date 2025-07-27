import { getAllPosts } from "@/lib/api";
import Container from "@/components/ui/Container";
import { MoreStories } from "@/app/_components/more-stories";
import { Intro } from "@/app/_components/intro";

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