import { About } from "@/components/About";
import { ComingSoon } from "@/components/ComingSoon";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Visit } from "@/components/Visit";
import { WaterStation } from "@/components/WaterStation";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <About />
        <WaterStation />
        <Visit />
        <ComingSoon />
      </main>
      <SiteFooter />
    </>
  );
}
