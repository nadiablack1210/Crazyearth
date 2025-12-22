import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NEWS } from "@/data/news";
import type { NewsItem } from "@/types/news";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
      {children}
    </span>
  );
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export default function NewsSlugPage({
  params,
}: {
  params: { country: string; slug: string };
}) {
  const country = decodeURIComponent(params.country).toLowerCase();
  const slug = decodeURIComponent(params.slug);

  const item: NewsItem | undefined = NEWS.find(
    (n) => n.country === country && n.slug === slug
  );

  if (!item) return notFound();

  const safeImage =
    item.imageUrl &&
    (item.imageUrl.startsWith("/") || item.imageUrl.startsWith("http"))
      ? item.imageUrl
      : undefined;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <nav className="mb-4 text-sm text-white/60">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/news/${country}`} className="hover:text-white">
          News: {country}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white/80">{item.title}</span>
      </nav>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="relative h-64 w-full bg-black/40">
          {safeImage ? (
            <Image
              src={safeImage}
              alt={item.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/30">
              No image
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <Tag>{item.country.toUpperCase()}</Tag>
            <Tag>{item.category.toUpperCase()}</Tag>
            {(Array.isArray(item.tags) ? item.tags : []).map((t) => (
              <Tag key={t}>{t.toUpperCase()}</Tag>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-white">{item.title}</h1>
          <p className="mt-2 text-sm text-white/60">{formatDate(item.publishedAt)}</p>

          <p className="mt-6 text-base leading-7 text-white/80">
            {item.description}
          </p>

          {item.content ? (
            <div className="mt-6 whitespace-pre-line text-base leading-7 text-white/80">
              {item.content}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
              No full content yet. Add{" "}
              <code className="rounded bg-white/10 px-1">content</code> in{" "}
              <code className="rounded bg-white/10 px-1">src/data/news.ts</code>.
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
