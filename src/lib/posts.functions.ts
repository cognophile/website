export type BlogPost = {
  title: string;
  url: string;
  excerpt: string;
  publishedAt: string | null;
};

export async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}posts.json`);
    if (!response.ok) return [];

    return (await response.json()) as BlogPost[];
  } catch {
    return [];
  }
}
