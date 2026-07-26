import { STORE } from "@/lib/store";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.28em] text-cream uppercase transition-opacity hover:opacity-80 sm:text-base"
        >
          VDS
        </a>
        <nav className="flex items-center gap-5 text-sm text-mist/80 sm:gap-8">
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
