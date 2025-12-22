import type { CasinoItem } from "@/types/casino";
export const CASINOS: CasinoItem[] = [
  {
    id: "c1",
    country: "australia",
    category: "slots",
    tags: ["recommended", "fast-withdrawal"],
    title: "AussieSpin Casino",
    description: "Solid slots library + quick payouts + mobile-friendly UI.",
    slug: "aussiespin-casino",
    imageUrl: "/images/casino/aussiespin.png",
    publishedAt: "2025-12-13T10:00:00.000Z",
    rating: 4.6,
    bonus: "100% up to $500",
    ctaUrl: "https://example.com",
    content: `AussieSpin overview...

Pros:
- Fast withdrawals
- Good RTP slots

Cons:
- Limited providers on weekends`,
  },

  // add at least 1 for malaysia so your page isn't empty:
  {
    id: "m1",
    country: "malaysia",
    category: "slots",
    tags: ["recommended", "mobile"],
    title: "MY Spin Hub",
    description: "SEA-friendly lobby, smooth mobile UX, fast deposits.",
    slug: "my-spin-hub",
    imageUrl: "/images/casino/my-spin-hub.png",
    publishedAt: "2025-12-13T10:00:00.000Z",
    rating: 4.4,
    bonus: "150% up to $600",
    ctaUrl: "https://example.com",
    content: `MY Spin Hub overview...

Pros:
- Mobile-first UI
- Fast deposits

Cons:
- Limited promos on weekdays`,
  },
];
