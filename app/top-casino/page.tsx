import Link from "next/link";
import { COUNTRIES } from "@/config/countries";

export default function TopCasinoIndexPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold text-white">Top Casino</h1>
      <p className="mt-2 text-white/70">Pick a country.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {COUNTRIES.map((c) => (
          <Link
            key={c.slug}
            href={`/top-casino/${c.slug}`}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-white hover:bg-white/10"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
