export type CasinoItem = {
  id: string;
  country: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  imageUrl?: string;
  publishedAt?: string;
  rating?: number;
  bonus?: string;
  ctaUrl?: string;
  content?: string;
};
