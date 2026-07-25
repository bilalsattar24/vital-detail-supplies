export function WaterStation() {
  return (
    <section
      id="water"
      className="relative overflow-hidden border-t border-line bg-[linear-gradient(160deg,#12202a_0%,#0b1118_45%,#16343a_100%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(77,184,199,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(47,143,157,0.2), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent-bright uppercase">
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
