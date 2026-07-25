import { STORE } from "@/lib/store";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-[0.14em] text-foam uppercase transition-colors hover:text-accent-bright"
        >
          {STORE.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mist/80 sm:flex">
          <a href="#products" className="transition-colors hover:text-foam">
            Products
          </a>
          <a href="#visit" className="transition-colors hover:text-foam">
            Visit
          </a>
          <a
            href={STORE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-accent-bright/50 pb-0.5 text-accent-bright transition-colors hover:border-accent-bright hover:text-foam"
          >
            Directions
          </a>
        </nav>
      </div>
    </header>
  );
}
