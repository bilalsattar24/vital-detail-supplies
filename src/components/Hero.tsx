import { BrandLogo } from "@/components/BrandLogo";
import { STORE } from "@/lib/store";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-ink" aria-hidden>
        <div className="hero-glow absolute -left-1/4 top-[-20%] h-[70%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(235,227,212,0.16),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-15%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(235,227,212,0.08),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 40%, rgba(235,227,212,0.05) 50%, transparent 60%), linear-gradient(rgba(235,227,212,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(235,227,212,0.035) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          }}
        />
        <div className="hero-sheen absolute inset-0 overflow-hidden" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
        <div className="animate-rise">
          <BrandLogo size="hero" priority />
        </div>

        <h1 className="animate-rise-delay-1 mt-8 max-w-xl font-display text-2xl leading-tight font-semibold tracking-wide text-cream sm:mt-10 sm:text-3xl">
          Pro detailing supplies for Alhambra and the San Gabriel Valley
        </h1>

        <p className="animate-rise-delay-2 mt-4 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
          Premium chemicals, tools, and coatings for professionals and
          enthusiasts—with guidance from people who know the craft.
        </p>

        <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <a
            href={STORE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-cream px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-accent-bright"
          >
            Get directions
          </a>
          <a
            href={`tel:${STORE.phoneTel}`}
            className="inline-flex items-center justify-center border border-cream/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/5"
          >
            Call {STORE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
