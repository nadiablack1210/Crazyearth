import Link from "next/link";
import Image from "next/image";
import { COUNTRIES, type Country } from "@/config/countries";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Logo / Home link */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt="CrazyEarth"
            width={26}
            height={26}
            priority
          />
          <span className="text-lg font-bold text-white">CrazyEarth</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-white/80">
          {/* NEWS dropdown */}
          <div className="group relative">
            <button className="font-semibold hover:text-white">NEWS</button>

            <div className="absolute left-0 top-full z-50 hidden w-72 rounded-xl border border-white/10 bg-black/80 p-2 shadow-lg backdrop-blur group-hover:block">
              {COUNTRIES.map((c: Country) => (
                <Link
                  key={c.slug}
                  href={`/news/${c.slug}`}
                  className="block rounded-lg px-3 py-2 hover:bg-white/10 hover:text-white"
                >
                  {c.name} News
                </Link>
              ))}
            </div>
          </div>

          {/* TOP CASINO dropdown */}
          <div className="group relative">
            <button className="font-semibold hover:text-white">TOP CASINO</button>

            <div className="absolute left-0 top-full z-50 hidden w-72 rounded-xl border border-white/10 bg-black/80 p-2 shadow-lg backdrop-blur group-hover:block">
              {COUNTRIES.map((c: Country) => (
                <Link
                  key={c.slug}
                  href={`/top-casino/${c.slug}`}
                  className="block rounded-lg px-3 py-2 hover:bg-white/10 hover:text-white"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
