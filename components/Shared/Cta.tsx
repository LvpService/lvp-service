import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="wrapper py-14 md:py-16 lg:py-20">
      <div className="bg-[#A39382] rounded-sm px-6 md:px-10 lg:px-16 py-12 md:py-14 text-center text-white relative overflow-hidden">
        {/* Icône décorative */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo/symb/logo_beige_jaune.png"
            alt="Logo LVP Service"
            width={64}
            height={80}
            priority
            className="hover:scale-105 transition-all duration-300"
          />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-three mb-3">
          Un besoin, une exigence, une question ?
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-one text-white/90 max-w-2xl mx-auto mb-8">
          LVP vous accompagne avec des solutions adaptées à vos attentes.
        </p>

        <Link
          href="/contactez-nous"
          className="w-full sm:w-fit xl:w-full lg:flex-1 px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3 lg:py-3 bg-tiers text-noir font-one text-xs sm:text-sm tracking-wide rounded-sm hover:bg-tiers/80 transition-all duration-300 hover:scale-105 shadow-sm text-center"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
