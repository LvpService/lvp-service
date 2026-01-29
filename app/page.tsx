import Engagement from "@/components/Home/Engagement";
import Hero from "@/components/Home/Hero";
import Pourquoi from "@/components/Home/Pourquoi";
import Prestations from "@/components/Home/Prestations";
import Quisommenous from "@/components/Home/Quisommenous";
import Zone from "@/components/Home/Zone";
import Cta from "@/components/Shared/Cta";
import AnimatedSection from "@/components/Shared/AnimatedSection";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <AnimatedSection>
        <section className="mt-4">
          <Quisommenous />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="">
          <Prestations />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="">
          <Pourquoi />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="">
          <Engagement />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="">
          <Zone />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="">
          <Cta />
        </section>
      </AnimatedSection>
    </>
  );
}
