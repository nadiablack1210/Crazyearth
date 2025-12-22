import Link from "next/link";
import Image from "next/image";
import type { CasinoItem } from "@/types/casino";

export default function CasinoCard({ item }: { item: CasinoItem }) {
  const country = typeof item.country === "string" ? item.country : "";
  const slug = typeof item.slug === "string" ? item.slug : "";
  const href = country && slug ? `/top-casino/${country}/${slug}` : null;

  const tags =
    Array.isArray(item.tags)
      ? item.tags.filter((t): t is string => typeof t === "string" && t.trim().length > 0)
      : [];

  const category = typeof item.category === "string" ? item.category : "";

  const safeImage =
    typeof item.imageUrl === "string" &&
    (item.imageUrl.startsWith("/") || item.imageUrl.startsWith("http"))
      ? item.imageUrl
      : null;

  const baseClass =
    "group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10";

  const CardInner = (
    <>
      <div className="relative h-44 w-full overflow-hidden bg-black/40">
        {safeImage ? (
          <Image
            src={safeImage}
            alt={item.title || "Casino"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {category && (
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
              {category.toUpperCase()}
            </span>
          )}

          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70"
            >
              {t.toUpperCase()}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-white">{item.title}</h2>
        {item.description && (
          <p className="mt-1 text-sm text-white/70">{item.description}</p>
        )}
      </div>
    </>
  );

  // If href is missing, don't render a <Link> (prevents "URL could not be parsed")
  return href ? (
    <Link href={href} className={baseClass}>
      {CardInner}
    </Link>
  ) : (
    <div className={baseClass}>{CardInner}</div>
  );
}
