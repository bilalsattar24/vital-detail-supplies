import { STORE } from "@/lib/store";

export function ComingSoon() {
  return (
    <section id="coming-soon" className="border-t border-line bg-slate">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-16">
        <div className="max-w-xl">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent-bright uppercase">
            Online store
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-foam sm:text-4xl">
            Full store coming soon
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel sm:text-base">
            We are building a complete Shopify shop so you can browse and order
            online. Until then, visit us in Alhambra or give us a call.
          </p>
        </div>
        <a
          href={`tel:${STORE.phoneTel}`}
          className="inline-flex shrink-0 items-center justify-center border border-mist/25 px-6 py-3 text-sm font-semibold tracking-wide text-foam transition-colors hover:border-accent-bright hover:text-accent-bright"
        >
          Call the shop
        </a>
      </div>
    </section>
  );
}
