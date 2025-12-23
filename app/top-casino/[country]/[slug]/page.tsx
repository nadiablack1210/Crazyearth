import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CASINOS } from "@/data/casino";

export default function TopCasinoSlugPage({
  params,
}: {
  params: { country: string; slug: string };
}) {
  const country = decodeURIComponent(params.country).toLowerCase();
  const slug = decodeURIComponent(params.slug);

  const item = CASINOS.find((c) => c.country === country && c.slug === slug);
  if (!item) return notFound();

  const safeImage =
    item.imageUrl &&
    (item.imageUrl.startsWith("/") || item.imageUrl.startsWith("http"))
      ? item.imageUrl
      : undefined;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <nav className="mb-4 text-sm text-white/60">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/top-casino/${country}`} className="hover:text-white">
          Top Casino: {country}
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
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
              {item.country.toUpperCase()}
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
             {(item.category ?? "UNKNOWN").toUpperCase()}

            </span>
            {(item.tags ?? []).map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
                {t.toUpperCase()}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-white">{item.title}</h1>
          <p className="mt-2 text-white/70">{item.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
            {typeof item.rating === "number" ? <span>⭐ Rating: {item.rating}</span> : null}
            {item.bonus ? <span>🎁 Bonus: {item.bonus}</span> : null}
          </div>

          {item.ctaUrl ? (
            <a
              href={item.ctaUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-6 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Visit Casino
            </a>
          ) : null}

          {item.content ? (
            <div className="mt-6 whitespace-pre-line text-base leading-7 text-white/80">
              {item.content}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
              No full content yet. Add <code className="rounded bg-white/10 px-1">content</code> in{" "}
              <code className="rounded bg-white/10 px-1">src/data/casino.ts</code>.
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
