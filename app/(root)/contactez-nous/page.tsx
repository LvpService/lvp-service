import React from "react";
import FormContact from "@/components/Contact/FormContact";
import ContactInfo from "@/components/Contact/ContactInfo";
import AnimatedSection from "@/components/Shared/AnimatedSection";
import Image from "next/image";

export default function page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-linear-to-br from-second/10 to-primary/10">
        <div className="wrapper text-center">
          <h1 className="font-three text-4xl md:text-5xl lg:text-6xl text-noir mb-4">
            Contactez-nous
          </h1>
          <p className="font-one text-base md:text-lg text-noir/70 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous
            accompagner dans vos besoins en nettoyage et jardinage.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-white">
          <div className="wrapper">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Colonne gauche - Informations */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                    Demandez votre devis gratuit
                  </h2>
                  <p className="font-one text-base text-noir/70 leading-relaxed">
                    Remplissez le formulaire ci-contre et notre équipe vous
                    recontactera dans les plus brefs délais pour étudier votre
                    projet et vous proposer une solution adaptée à vos besoins.
                  </p>
                </div>

                {/* Coordonnées */}
                <ContactInfo />

                {/* Image décorative */}
                <div className="hidden lg:block relative h-64 rounded-sm overflow-hidden">
                  <Image
                    src="/img/home/net.webp"
                    alt="Équipe LVP Service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Colonne droite - Formulaire */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-sm">
                <FormContact />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Section engagement */}
      <AnimatedSection>
        <section className="py-16 bg-second/5">
          <div className="wrapper text-center">
            <h2 className="font-two text-2xl md:text-3xl text-noir mb-4">
              Nous nous engageons à vous répondre sous 24h
            </h2>
            <p className="font-one text-base text-noir/70 max-w-2xl mx-auto">
              Votre satisfaction est notre priorité. Notre équipe analyse chaque
              demande avec soin pour vous proposer la meilleure solution adaptée
              à vos besoins.
            </p>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
