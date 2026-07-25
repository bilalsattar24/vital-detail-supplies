import { STORE } from "@/lib/store";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-ink" aria-hidden>
        <div className="hero-glow absolute -left-1/4 top-[-20%] h-[70%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(77,184,199,0.22),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-15%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(47,143,157,0.18),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 40%, rgba(215,226,234,0.06) 50%, transparent 60%), linear-gradient(rgba(215,226,234,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.04) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          }}
        />
        <div className="hero-sheen absolute inset-0 overflow-hidden" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <p className="animate-rise font-display text-5xl leading-[0.92] font-bold tracking-[0.04em] text-foam uppercase sm:text-7xl md:text-8xl lg:text-9xl">
          Vital Detail
          <br />
          Supplies
        </p>

        <h1 className="animate-rise-delay-1 mt-8 max-w-xl font-display text-2xl leading-tight font-semibold tracking-wide text-mist sm:text-3xl">
          Pro detailing supplies for Alhambra and the San Gabriel Valley
        </h1>

        <p className="animate-rise-delay-2 mt-4 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
          Premium chemicals, tools, and coatings for professionals and
          enthusiasts—with guidance from people who know the craft.
        </p>

        <div className="animate-rise-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={STORE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent-bright px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-foam"
          >
            Get directions
          </a>
          <a
            href={`tel:${STORE.phoneTel}`}
            className="inline-flex items-center justify-center border border-mist/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-foam transition-colors hover:border-accent-bright hover:text-accent-bright"
          >
            Call {STORE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
