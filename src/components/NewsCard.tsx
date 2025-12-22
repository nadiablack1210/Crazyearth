import Image from "next/image";
import Link from "next/link";

export type NewsItem = {
  id: string;
  country: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  slug: string;
  imageUrl?: string; // "/images/news/xxx.jpg"
  publishedAt: string;
};

export default function NewsCard({ item }: { item: NewsItem }) {
  const tags = Array.isArray(item.tags) ? item.tags : [];

  return (
    <Link
      href={`/news/${item.country}/${item.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
    >
      {/* Image banner */}
      <div className="relative h-44 w-full overflow-hidden bg-black/40">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            No Image
          </div>
        )} 

        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
            {item.country.toUpperCase()}
          </span>

          <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
            {item.category.toUpperCase()}
          </span>

          {tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70"
            >
              {t.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="text-base font-semibold text-white group-hover:underline">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-white/70">
          {item.description}
        </p>

        <p className="mt-3 text-xs text-white/50">
          {new Date(item.publishedAt).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
