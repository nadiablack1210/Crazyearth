export type NewsItem = {
  id: string;
  country: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  publishedAt: string;

  // optional flags
  isHot?: boolean;
  isNew?: boolean;
  isSuggested?: boolean;

  // ✅ full article body
  content?: string;
};
