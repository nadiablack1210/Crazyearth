import { NEWS } from "@/data/news";
import type { NewsItem } from "@/types/news";

export function hotNews(limit = 6): NewsItem[] {
  return NEWS.filter((n) => n.isHot).slice(0, limit);
}

export function newNews(limit = 6): NewsItem[] {
  return NEWS.filter((n) => n.isNew).slice(0, limit);
}

export function suggestedNews(limit = 6): NewsItem[] {
  return NEWS.filter((n) => n.isSuggested).slice(0, limit);
}

export function latestNews(limit = 12): NewsItem[] {
  return [...NEWS]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}
