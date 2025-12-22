import { notFound } from "next/navigation";
import CountryNav from "@/components/CountryNav";
import CasinoCard from "@/components/CasinoCard";
import { CASINOS } from "@/data/casino";

type Props = {
  params: Promise<{ country: string }>;
};

export default async function TopCasinoCountryPage({ params }: Props) {
  const { country } = await params;
  if (!country) return notFound();

  const slug = decodeURIComponent(country).toLowerCase();
  const items = CASINOS.filter((c) => c.country === slug);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">Top Casino: {slug}</h1>
      <p className="mt-2 text-white/70">Pick a casino for this country.</p>

      <CountryNav basePath="/top-casino" activeCountry={slug} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CasinoCard key={item.id} item={item} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          No casinos yet for this country. Add some in <code>src/data/casino.ts</code>.
        </p>
      )}
    </div>
  );
}
