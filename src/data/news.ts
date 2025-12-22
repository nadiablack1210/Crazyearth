import type { NewsItem } from "@/types/news";

export const NEWS: NewsItem[] = [
  {
    id: "1",
    country: "poland",
    category: "world",
    tags: ["world", "hot"],
    title: "Poland Market Update: Key Moves This Week",
    description: "A quick snapshot of the biggest developments shaping Poland right now.",
    slug: "poland-market-update-key-moves-this-week",
    imageUrl: "/images/news/poland.jpg",
    publishedAt: "2025-12-14T08:00:00.000Z",
    isHot: true,
    isNew: true,
    isSuggested: false,
    content: `Poland’s market is moving fast this week.

Key takeaways:
- Local SMEs are digitizing fast
- Hiring remains steady in major cities
- Export markets are stabilizing
`,
  },

  {
    id: "2",
    country: "australia",
    category: "business",
    tags: ["business", "new"],
    title: "Australia Business: What’s Driving Growth in 2025",
    description: "Trends analysts are watching and why they matter for everyday people.",
    slug: "australia-business-whats-driving-growth-2025",
    imageUrl: "/images/news/australia.png",
    publishedAt: "2025-12-13T10:00:00.000Z",
    isNew: true,
    isSuggested: true,
    content: `Australia’s business sector is seeing growth driven by consumer demand, AI adoption, and services expansion.

Key takeaways:
- Local SMEs are digitizing fast
- Hiring remains steady in major cities
- Export markets are stabilizing
`,
  },
];
