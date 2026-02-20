/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { Metadata } from "next";
import AnimatedSection from "@/components/Shared/AnimatedSection";
import AnimatedCard from "@/components/Shared/AnimatedCard";
import {
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaLeaf,
  FaBroom,
  FaHome,
} from "react-icons/fa";
import Image from "next/image";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://lvp-service.fr";
const pageUrl = `${siteUrl}/prestations`;
const pageDescription =
  "Découvrez toutes les prestations LVP Service : nettoyage pour particuliers et professionnels, jardinage, entretien regulier ou ponctuel, et services sur mesure en Ile-de-France.";
const ogImageUrl = `${siteUrl}/open_graph.png`;

export const metadata: Metadata = {
  title: "Nos prestations | LVP Service",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nos prestations | LVP Service",
    description: pageDescription,
    url: pageUrl,
    siteName: "LVP Service",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        alt: "LVP Service",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nos prestations | LVP Service",
    description: pageDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  const prestations = [
    {
      id: 1,
      icon: FaBroom,
      title: "Nettoyage Particuliers",
      description:
        "Un service complet de nettoyage pour votre maison ou appartement avec des produits écologiques.",
      details: [
        "Nettoyage en profondeur des surfaces",
        "Désinfection hygiénique",
        "Nettoyage des vitres et fenêtres",
        "Entretien des cuisines et salles de bain",
        "Aspirage et nettoyage des moquettes",
      ],
      benefits: ["Gain de temps", "Environnement sain", "Tarifs flexibles"],
      color: "from-second/50 to-primary/70",
    },
    {
      id: 2,
      icon: FaHome,
      title: "Nettoyage Professionnels",
      description:
        "Nettoyage et entretien adaptés pour les bureaux, commerces et locaux professionnels.",
      details: [
        "Nettoyage des espaces de travail",
        "Entretien des sanitaires professionnels",
        "Nettoyage des vitres et façades",
        "Gestion des déchets et recyclage",
        "Traitement des surfaces spéciales",
      ],
      benefits: ["Image professionnelle", "Régularité garantie", "Discrétion"],
      color: "from-tiers/70 to-tiers/90",
    },
    {
      id: 3,
      icon: FaLeaf,
      title: "Jardinage & Paysagisme",
      description:
        "Entretien et création d'espaces verts pour valoriser votre propriété.",
      details: [
        "Tonte et entretien de pelouse",
        "Taille de haies et arbustes",
        "Plantation et création de massifs",
        "Nettoyage et dégagement d'espaces",
        "Traitement écologique des plantes",
      ],
      benefits: ["Jardin impeccable", "Conseils en paysagisme", "Écologique"],
      color: "from-quater/70 to-quater/90",
    },
    {
      id: 4,
      icon: FaClock,
      title: "Entretien Régulier",
      description:
        "Services d'entretien périodiques pour maintenir vos espaces en parfait état.",
      details: [
        "Contrats d'entretien personnalisés",
        "Visites hebdomadaires ou mensuelles",
        "Maintenance préventive",
        "Adaptabilité aux saisons",
        "Rapports de visite détaillés",
      ],
      benefits: ["Suivi continu", "Économies", "Tranquillité d'esprit"],
      color: "from-quater/70 to-quater/90",
    },
    {
      id: 5,
      icon: FaUsers,
      title: "Entretien Ponctuel",
      description:
        "Interventions ponctuelles pour vos besoins spécifiques et occasionnels.",
      details: [
        "Grands nettoyages saisonniers",
        "Nettoyage après travaux",
        "Préparation d'événements",
        "Nettoyage de fin de bail",
        "Interventions d'urgence",
      ],
      benefits: ["Flexibilité", "Qualité garantie", "Tarifs adaptés"],
      color: "from-second/50 to-primary/70",
    },
    {
      id: 6,
      icon: FaCheckCircle,
      title: "Prestations Sur Mesure",
      description:
        "Solutions personnalisées adaptées à vos besoins spécifiques et contraintes.",
      details: [
        "Audit et diagnostic gratuit",
        "Plans d'action customisés",
        "Équipes dédiées",
        "Suivi de projet détaillé",
        "Optimisation continue",
      ],
      benefits: ["Efficacité maximale", "Rapport qualité-prix", "Partenariat"],
      color: "from-tiers/70 to-tiers/90",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LVP Service",
      url: siteUrl,
      logo: ogImageUrl,
      description: pageDescription,
      sameAs: [
        "https://www.instagram.com/lvpservice",
        "https://www.facebook.com/lvpservice",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33762648767",
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: "French",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "LVP Service",
      url: siteUrl,
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "LVP Service",
      image: ogImageUrl,
      url: siteUrl,
      telephone: "+33762648767",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 bis Avenue du petit Marly",
        addressLocality: "Argenteuil",
        postalCode: "95100",
        addressRegion: "Ile-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.9472,
        longitude: 2.2469,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Ile-de-France",
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage et jardinage",
        },
      },
    },
    ...prestations.map((prestation) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: prestation.title,
      description: prestation.description,
      provider: {
        "@type": "LocalBusiness",
        name: "LVP Service",
        url: siteUrl,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Ile-de-France",
      },
      termsOfService: "Sur devis",
      serviceType: "Nettoyage et jardinage",
    })),
  ];

  return (
    <main className="min-h-screen bg-white">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-linear-to-br from-second/50 to-primary/10">
        <div className="wrapper text-center">
          <h1 className="font-three text-4xl md:text-5xl lg:text-6xl text-noir mb-4">
            Nos Prestations
          </h1>
          <p className="font-one text-base md:text-lg text-noir/70 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos services de nettoyage et jardinage,
            adaptés à vos besoins et budget
          </p>
        </div>
      </section>

      {/* Intro Section */}
      {/* <AnimatedSection>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="wrapper max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="font-two text-3xl md:text-4xl text-noir">
                Des services complets pour tous vos besoins
              </h2>
              <p className="font-one text-base text-noir/70 leading-relaxed">
                Depuis plus de 10 ans, LVP Service propose des solutions de
                nettoyage et de jardinage de qualité professionnelle. Nos
                équipes expérimentées s'adaptent à vos besoins, qu'ils soient
                réguliers ou ponctuels, pour particuliers ou professionnels.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* Prestations Grid */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="wrapper">
            <h2 className="font-two text-3xl md:text-4xl text-noir mb-12 text-center">
              Nos services détaillés
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prestations.map((prestation, index) => (
                <AnimatedCard key={prestation.id} direction="up" index={index}>
                  <div
                    className={`bg-linear-to-br ${prestation.color} rounded-sm p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300`}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <prestation.icon className="w-8 h-8 text-second" />
                    </div>

                    {/* Title */}
                    <h3 className="font-two text-2xl text-noir mb-3">
                      {prestation.title}
                    </h3>

                    {/* Description */}
                    <p className="font-one text-sm text-noir/70 mb-6 leading-relaxed">
                      {prestation.description}
                    </p>

                    {/* Details */}
                    <div className="mb-6 grow">
                      <h4 className="font-two text-sm text-noir mb-3 uppercase tracking-wide">
                        Ce qui est inclus :
                      </h4>
                      <ul className="space-y-2">
                        {prestation.details.slice(0, 3).map((detail, i) => (
                          <li
                            key={i}
                            className="font-one text-xs text-noir/70 flex items-start gap-2"
                          >
                            <span className="text-second mt-1">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="pt-6 border-t border-noir/10">
                      <div className="flex flex-wrap gap-2">
                        {prestation.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 bg-white rounded-full font-one text-xs text-second-600 border border-second/20"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Processus */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="wrapper max-w-4xl mx-auto">
            <h2 className="font-two text-3xl md:text-4xl text-noir mb-12 text-center">
              Notre processus
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Devis gratuit",
                  description: "Contactez-nous pour un audit personnalisé",
                },
                {
                  step: "2",
                  title: "Proposition",
                  description: "Recevez une proposition adaptée à vos besoins",
                },
                {
                  step: "3",
                  title: "Planification",
                  description:
                    "Définissez ensemble la fréquence et les détails",
                },
                {
                  step: "4",
                  title: "Intervention",
                  description:
                    "Nos équipes interviennent avec professionnalisme",
                },
              ].map((item, index) => (
                <AnimatedCard key={index} direction="up" index={index}>
                  <div className="text-center space-y-4">
                    <div className="inline-flex w-16 h-16 rounded-full bg-second text-white items-center justify-center font-three text-2xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-two text-lg text-noir mb-2">
                        {item.title}
                      </h3>
                      <p className="font-one text-sm text-noir/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Avantages LVP */}
      {/* <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="wrapper">
            <h2 className="font-two text-3xl md:text-4xl text-noir mb-12 text-center">
              Pourquoi choisir LVP Service ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Équipes qualifiées",
                  description:
                    "Nos équipes sont formées, vérifiées et expérimentées pour la qualité",
                },
                {
                  title: "Produits écologiques",
                  description:
                    "Nous utilisons des produits respectueux de l'environnement et de votre santé",
                },
                {
                  title: "Garantie de satisfaction",
                  description:
                    "Nous garantissons la qualité de nos prestations ou nous re-intervenons",
                },
                {
                  title: "Tarifs transparents",
                  description:
                    "Pas de frais cachés, devis détaillé et sans engagement",
                },
                {
                  title: "Flexibilité",
                  description:
                    "Services adaptables selon votre disponibilité et votre budget",
                },
                {
                  title: "Suivi régulier",
                  description:
                    "Rapport de visite après chaque intervention pour votre tranquillité",
                },
              ].map((avantage, index) => (
                <AnimatedCard key={index} direction="left" index={index}>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-second/10">
                        <FaCheckCircle className="h-6 w-6 text-second" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-two text-lg text-noir mb-2">
                        {avantage.title}
                      </h3>
                      <p className="font-one text-sm text-noir/70">
                        {avantage.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-second/50">
          <div className="wrapper text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo/symb/logo_beige.png"
                alt="Logo LVP Service"
                width={64}
                height={80}
                priority
                className="hover:scale-105 transition-all duration-300"
              />
            </div>
            <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
              Un besoin, une exigence, une question ?
            </h2>
            <p className="font-one text-base text-second-600 mb-8 leading-relaxed">
              Contactez-nous dès maintenant pour un devis gratuit et sans
              engagement. Nos experts vous conseilleront sur la meilleure
              solution pour vos besoins.
            </p>
            <a
              href="/contactez-nous"
              className="inline-block px-8 py-3 bg-second text-white font-two text-sm tracking-wide rounded-sm hover:bg-second/90 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
