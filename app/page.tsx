import NewsSection from "@/components/NewsSection";
import { hotNews, latestNews, newNews, suggestedNews } from "@/lib/news";

export default function HomePage() {
  const latest = latestNews(12);
  const hot = hotNews(6);
  const fresh = newNews(6);
  const suggested = suggestedNews(6);

  return (
    <div>
      <header className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-3xl font-bold text-white">CrazyEarth</h1>
        <p className="mt-2 text-white/70">
          World news on the homepage. Country pages under <b>NEWS</b>, casino pages under <b>TOP CASINO</b>.
        </p>
      </header>

      <NewsSection
        title="Latest News"
        subtitle="Most recent posts across all countries."
        items={latest}
      />

      <NewsSection
        title="Hot News"
        subtitle="Trending / highlighted stories."
        items={hot}
      />

      <NewsSection
        title="New News"
        subtitle="Freshly published posts."
        items={fresh}
      />

      <NewsSection
        title="Suggested"
        subtitle="Recommended reads."
        items={suggested}
      />
    </div>
  );
}
