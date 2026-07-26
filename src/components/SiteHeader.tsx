import { BrandLogo } from "@/components/BrandLogo";
import { STORE } from "@/lib/store";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="inline-flex items-center transition-opacity hover:opacity-80">
          <BrandLogo size="header" priority />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mist/80 sm:flex">
          <a href="#products" className="transition-colors hover:text-cream">
            Products
          </a>
          <a href="#visit" className="transition-colors hover:text-cream">
            Visit
          </a>
          <a
            href={STORE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-cream/50 pb-0.5 text-cream transition-colors hover:border-cream hover:text-accent-bright"
          >
            Directions
          </a>
        </nav>
      </div>
    </header>
  );
}
