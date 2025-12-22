import Link from "next/link";
import { COUNTRIES } from "@/config/countries";

export default function CountryNav({
  basePath,
  activeCountry,
}: {
  basePath: "/news" | "/top-casino";
  activeCountry: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {COUNTRIES.map((c) => {
        const isActive = c.slug === activeCountry;
        return (
          <Link
            key={c.slug}
            href={`${basePath}/${c.slug}`}
            className={[
              "rounded-full border px-3 py-1 text-sm transition",
              isActive
                ? "bg-white text-black"
                : "bg-transparent text-white/80 hover:bg-white/10",
            ].join(" ")}
          >
            {c.name}
          </Link>
        );
      })}
    </div>
  );
}
