import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";

export default function Cta() {
  return (
    <section className="wrapper py-14 md:py-16 lg:py-20">
      <div className="relative bg-linear-to-r from-second to-second/80 rounded-sm px-6 md:px-10 lg:px-16 py-12 md:py-14 lg:py-20 text-white overflow-hidden">
        {/* Élément décoratif en arrière-plan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -ml-24 -mb-24" />

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icône décorative */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo/symb/logo_beige_jaune.png"
                alt="Logo LVP Service"
                width={64}
                height={80}
                priority
                className="hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Titre */}
            <h2 className="font-three text-3xl md:text-4xl lg:text-4xl text-white mb-4 leading-tight">
              Un besoin, une exigence ?
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg font-one text-white/90 mb-8 leading-relaxed">
              LVP Service vous accompagne avec des solutions adaptées à vos
              attentes. Contactez nos experts pour un devis personnalisé et sans
              engagement.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactez-nous"
                className="inline-block px-8 py-3 bg-second-600 text-white font-two text-sm tracking-wide rounded-sm hover:bg-second-600/90 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
