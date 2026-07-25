import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
    </>
  );
}
