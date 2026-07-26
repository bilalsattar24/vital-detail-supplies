const categories = [
  {
    title: "Wash & decontamination",
    detail:
      "Soaps, foam, clay bars, iron removers, and tar solvents for a clean starting surface.",
  },
  {
    title: "Polish & correction",
    detail:
      "Compounds, polishes, and pads to refine paint and restore clarity.",
  },
  {
    title: "Protection & coatings",
    detail:
      "Sealants, waxes, and ceramic coatings that lock in the finish.",
  },
  {
    title: "Interior care",
    detail:
      "Cleaners, dressings, and microfiber built for cabin surfaces that see real use.",
  },
  {
    title: "Tools & equipment",
    detail:
      "Polishers, brushes, towels, and accessories trusted by working detailers.",
  },
  {
    title: "Hard-to-find brands",
    detail:
      "Curated products from names like Adam’s Polishes, Griot’s Garage, Soft99, and more.",
  },
];

export function Products() {
  return (
    <section id="products" className="border-t border-line bg-slate">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-cream uppercase">
            What we carry
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-foam sm:text-5xl">
            Everything for a serious detail
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel sm:text-lg">
            A focused selection for both weekend enthusiasts and full-time
            detailers—quality over clutter, with stock that is often hard to
            find elsewhere.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <li key={item.title} className="border-t border-line pt-5">
              <h3 className="font-display text-xl font-semibold tracking-wide text-foam">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel sm:text-base">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
