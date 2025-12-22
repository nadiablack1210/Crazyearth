import type { NewsItem } from "@/types/news";
import NewsCard from "@/components/NewsCard";

type Props = {
  title: string;
  subtitle?: string;
  items: NewsItem[];
};

export default function NewsSection({ title, subtitle, items }: Props) {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-white/60">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
