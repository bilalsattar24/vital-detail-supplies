import { STORE } from "@/lib/store";

export function Visit() {
  return (
    <section id="visit" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent-deep uppercase">
            Visit the store
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-ink sm:text-5xl">
            Come see us in Alhambra
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate/80 sm:text-lg">
            Stop by for supplies, product recommendations, and the spot-free
            rinse—right on West Valley Blvd.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-wide text-ink uppercase">
                Address
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate">
                {STORE.addressLine1}
                <br />
                {STORE.addressLine2}
              </p>
              <a
                href={STORE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block border-b border-accent-deep/40 pb-0.5 text-sm font-semibold text-accent-deep transition-colors hover:border-accent-deep hover:text-ink"
              >
                Open in Google Maps
              </a>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold tracking-wide text-ink uppercase">
                Phone
              </h3>
              <a
                href={`tel:${STORE.phoneTel}`}
                className="mt-2 inline-block font-display text-2xl font-semibold tracking-wide text-ink transition-colors hover:text-accent-deep"
              >
                {STORE.phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold tracking-wide text-ink uppercase">
              Hours
            </h3>
            <ul className="mt-4 space-y-3">
              {STORE.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/10 pb-3 text-sm sm:text-base"
                >
                  <span className="text-slate">{row.day}</span>
                  <span className="font-medium text-ink">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
