/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnimatedButton from "@/components/Shared/AnimatedButton";
import AnimatedImage from "@/components/Shared/AnimatedImage";

export default function Hero() {
  return (
    <section className="wrapper py-2 min-h-[calc(100vh-80px)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 2xl:gap-16 items-center w-full">
        {/* Colonne gauche - Contenu texte */}
        <div className="order-2 lg:order-1 text-center lg:text-left px-4 sm:px-0">
          {/* Label LVP Service */}
          <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-second font-two tracking-widest mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            LVP Service
          </p>

          {/* Titre principal */}
          {/* 2xl:text-6xl */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-three text-noir mb-4 sm:mb-6 md:mb-7 lg:mb-8 2xl:mb-10 leading-tight">
            Plus qu'un service,
            <br />
            un accompagnement
            <br />
            sur mesure
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-gray-600 font-two leading-relaxed mb-6 sm:mb-8 md:mb-9 lg:mb-10 2xl:mb-12 max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
            Prestations de nettoyage et jardinage professionnelles pour
            particuliers et entreprises en région parisienne et en
            Île-de-France.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-3 xl:gap-4 2xl:gap-5 justify-center lg:justify-start">
            <AnimatedButton href="/prestations" variant="primary" delay={0.2}>
              Découvrir nos prestations
            </AnimatedButton>
            <AnimatedButton href="/contactez-nous" variant="tiers" delay={0.4}>
              Demander un devis
            </AnimatedButton>
          </div>
        </div>

        {/* Colonne droite - Image */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <AnimatedImage
            src="/img/home/net.webp"
            alt="Bureau professionnel moderne - LVP Service"
            delay={0.3}
          />

          {/* Décoration - ligne décorative */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-primary/20 to-second/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 bg-linear-to-br from-second/20 to-primary/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
