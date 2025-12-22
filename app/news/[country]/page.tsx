import { notFound } from "next/navigation";
import CountryNav from "@/components/CountryNav";
import NewsCard from "@/components/NewsCard";
import { NEWS } from "@/data/news";

export default function NewsCountryPage({
  params,
}: {
  params: { country: string };
}) {
  const slug = decodeURIComponent(params.country).toLowerCase();
  if (!slug) return notFound();

  const items = NEWS.filter((n) => n.country === slug).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold text-white">News: {slug}</h1>
      <p className="mt-2 text-white/70">Showing news posts for this country.</p>

      <CountryNav basePath="/news" activeCountry={slug} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          No posts yet for this country. Add some in <code>src/data/news.ts</code>.
        </p>
      )}
    </main>
  );
}
