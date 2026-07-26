export function WaterStation() {
  return (
    <section
      id="water"
      className="relative overflow-hidden border-t border-line bg-[linear-gradient(160deg,#121212_0%,#050505_50%,#1a1814_100%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(235,227,212,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(180,200,210,0.08), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-cream uppercase">
            On site
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-foam sm:text-5xl">
            24/7 spot-free water station
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist/80 sm:text-lg">
            Two self-serve hoses with spot-free rinse water—available around the
            clock so you can finish a wash without mineral spots, even after
            hours.
          </p>
        </div>
      </div>
    </section>
  );
}
