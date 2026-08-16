import { STORE } from "@/lib/store";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.12em] text-cream uppercase">
            {STORE.name}
          </p>
          <p className="mt-1 text-sm text-steel">
            Auto detailing supplies · Rosemead, CA
          </p>
        </div>
        <p className="text-sm text-steel">
          © {year} {STORE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
