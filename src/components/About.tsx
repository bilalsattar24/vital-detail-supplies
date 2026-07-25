export function About() {
  return (
    <section id="about" className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent-bright uppercase">
            The shop
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-foam sm:text-5xl">
            Advice you can trust, not just shelves of product
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            Customers come for the selection and stay for the guidance. Whether
            you are starting a detailing business or refining a weekend routine,
            the team helps you pick the right products for your paint, process,
            and budget.
          </p>
        </div>

        <div className="flex flex-col justify-end gap-8">
          <div className="border-t border-line pt-6">
            <p className="font-display text-3xl font-semibold tracking-wide text-foam">
              Pros & enthusiasts
            </p>
            <p className="mt-2 text-sm leading-relaxed text-steel sm:text-base">
              Competitive pricing and a layout that makes it easy to find what
              you need—described by regulars as a candy store for detailers.
            </p>
          </div>
          <div className="border-t border-line pt-6">
            <p className="font-display text-3xl font-semibold tracking-wide text-foam">
              Local & in stock
            </p>
            <p className="mt-2 text-sm leading-relaxed text-steel sm:text-base">
              Skip the wait for shipping. Walk out with supplies the same day
              from our Alhambra shop on West Valley Blvd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
