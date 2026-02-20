/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { Metadata } from "next";
import AnimatedSection from "@/components/Shared/AnimatedSection";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://lvp-service.fr";
const pageUrl = `${siteUrl}/mentions-legales`;
const pageDescription =
  "Mentions legales de LVP Service : informations juridiques, hebergement, responsabilite et proprietes intellectuelles.";
const ogImageUrl = `${siteUrl}/open_graph.png`;

export const metadata: Metadata = {
  title: "Mentions legales | LVP Service",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Mentions legales | LVP Service",
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
    title: "Mentions legales | LVP Service",
    description: pageDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
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
      "@type": "WebPage",
      name: "Mentions legales",
      url: pageUrl,
      description: pageDescription,
      inLanguage: "fr-FR",
      isPartOf: {
        "@type": "WebSite",
        url: siteUrl,
      },
    },
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
      <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center bg-linear-to-br from-second/10 to-primary/10">
        <div className="wrapper text-center">
          <h1 className="font-three text-4xl md:text-5xl lg:text-6xl text-noir mb-6">
            Mentions Légales
          </h1>
          <p className="font-one text-base md:text-lg text-noir/70">
            Informations légales concernant LVP Service
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <AnimatedSection>
        <section className="mx-auto py-16 md:py-24">
          <div className="wrapper max-w-7xl mx-auto">
            {/* 1. Identité de l'entreprise */}
            <div className="mb-12">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                1. Identité de l'entreprise
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  <strong className="text-noir">Nom commercial :</strong> LVP
                  Service
                </p>
                <p>
                  <strong className="text-noir">Forme juridique :</strong> SARL
                  (Société à Responsabilité Limitée)
                </p>
                <p>
                  <strong className="text-noir">Capital social :</strong> À
                  définir
                </p>
                <p>
                  <strong className="text-noir">Siège social :</strong> 123 Rue
                  de la République, 75001 Paris, France
                </p>
                <p>
                  <strong className="text-noir">Numéro SIRET :</strong> À
                  définir
                </p>
                <p>
                  <strong className="text-noir">Numéro TVA :</strong> À définir
                </p>
                <p>
                  <strong className="text-noir">Email :</strong>{" "}
                  contact@lvp-service.fr
                </p>
                <p>
                  <strong className="text-noir">Téléphone :</strong> 01 23 45 67
                  89
                </p>
              </div>
            </div>

            {/* 2. Directeur de la publication */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                2. Directeur de la publication
              </h2>
              <p className="font-one text-noir/80 leading-relaxed">
                Le directeur de la publication est responsable du contenu publié
                sur le site. Vous pouvez nous contacter pour toute question
                concernant le contenu du site.
              </p>
            </div>

            {/* 3. Hébergement */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                3. Hébergement
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Le site est hébergé par Vercel Inc., une plateforme de
                  déploiement et d'hébergement cloud.
                </p>
                <p>
                  <strong className="text-noir">Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong className="text-noir">Adresse :</strong> 340 S Lemon
                  Ave, Walnut, CA 91789, United States
                </p>
              </div>
            </div>

            {/* 4. Propriété intellectuelle */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                4. Propriété intellectuelle
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  L'ensemble du contenu présent sur le site www.lvp-service.fr
                  (textes, images, graphiques, logos, icônes, sons, vidéos) est
                  la propriété exclusive de LVP Service ou de ses partenaires, à
                  l'exception des contenus fournis par des tiers.
                </p>
                <p>
                  Toute reproduction, représentation, modification, adaptation,
                  traduction ou distribution du contenu est strictement
                  interdite sans autorisation préalable écrite de LVP Service.
                </p>
                <p>
                  Les marques, logos et noms de produits mentionnés sur ce site
                  sont la propriété de leurs détenteurs respectifs.
                </p>
              </div>
            </div>

            {/* 5. Conditions d'utilisation */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                5. Conditions d'utilisation
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  LVP Service autorise l'accès et l'utilisation de ce site à
                  titre personnel. Vous acceptez de ne pas utiliser ce site de
                  manière contraire à la loi, notamment en :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    Reproduisant ou distribuant le contenu sans autorisation
                  </li>
                  <li>Transmettant des virus ou codes malveillants</li>
                  <li>Cherchant à accéder sans autorisation à nos systèmes</li>
                  <li>Harassment ou publication de contenu offensant</li>
                  <li>
                    Violation des droits de propriété intellectuelle d'autrui
                  </li>
                </ul>
                <p>
                  Nous nous réservons le droit de suspendre ou de résilier votre
                  accès au site en cas de violation de ces conditions.
                </p>
              </div>
            </div>

            {/* 6. Limitation de responsabilité */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                6. Limitation de responsabilité
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  LVP Service s'efforce de fournir des informations exactes et à
                  jour sur ce site. Cependant, nous ne garantissons pas
                  l'exactitude, l'exhaustivité ou l'actualité du contenu.
                </p>
                <p>
                  LVP Service ne pourra en aucun cas être tenue responsable de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    Les interruptions, erreurs ou dysfonctionnements du site
                  </li>
                  <li>Les pertes de données ou d'informations</li>
                  <li>
                    Les dommages directs ou indirects résultant de l'accès ou de
                    l'utilisation du site
                  </li>
                  <li>Les contenus externes ou liens vers des tiers</li>
                </ul>
                <p>L'accès à ce site se fait à vos risques et périls.</p>
              </div>
            </div>

            {/* 7. Liens externes */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                7. Liens externes
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Ce site peut contenir des liens vers des sites externes. LVP
                  Service n'est pas responsable du contenu, de la disponibilité
                  ou des pratiques de ces sites tiers.
                </p>
                <p>
                  La présence d'un lien ne signifie pas une approbation ou une
                  affiliation avec le site lié. Nous déclinons toute
                  responsabilité pour tout dommage résultant de l'accès à ces
                  sites externes.
                </p>
              </div>
            </div>

            {/* 8. Données personnelles et RGPD */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                8. Données personnelles et RGPD
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  LVP Service collecte et traite vos données personnelles
                  conformément au Règlement Général sur la Protection des
                  Données (RGPD) et à la loi française.
                </p>
                <p>
                  <strong className="text-noir">
                    Responsable de traitement :
                  </strong>{" "}
                  LVP Service
                </p>
                <p>
                  <strong className="text-noir">Données collectées :</strong>{" "}
                  Lorsque vous remplissez le formulaire de contact, nous
                  collectons votre nom, prénom, email, téléphone, adresse et
                  votre message.
                </p>
                <p>
                  <strong className="text-noir">
                    Finalité du traitement :
                  </strong>{" "}
                  Répondre à votre demande de devis ou de renseignements.
                </p>
                <p>
                  <strong className="text-noir">Durée de conservation :</strong>{" "}
                  Les données sont conservées pendant la durée nécessaire au
                  traitement de votre demande, puis supprimées dans un délai de
                  3 ans.
                </p>
                <p>
                  <strong className="text-noir">Vos droits :</strong> Vous avez
                  le droit d'accéder, de rectifier, de supprimer vos données
                  personnelles. Pour exercer ces droits, contactez-nous à
                  contact@lvp-service.fr
                </p>
              </div>
            </div>

            {/* 9. Cookies */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                9. Cookies
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Ce site peut utiliser des cookies pour améliorer votre
                  expérience utilisateur et analyser le trafic. Vous pouvez
                  configurer votre navigateur pour refuser les cookies, mais
                  cela pourrait affecter la fonctionnalité du site.
                </p>
                <p>Les cookies utilisés sur ce site sont :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Cookies analytiques :</strong> Pour analyser
                    l'utilisation du site
                  </li>
                  <li>
                    <strong>Cookies de performance :</strong> Pour améliorer les
                    performances
                  </li>
                  <li>
                    <strong>Cookies essentiels :</strong> Nécessaires au
                    fonctionnement du site
                  </li>
                </ul>
              </div>
            </div>

            {/* 10. Modifications des mentions légales */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                10. Modifications des mentions légales
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  LVP Service se réserve le droit de modifier ces mentions
                  légales à tout moment. Les modifications entreront en vigueur
                  dès leur publication sur le site. Votre utilisation continue
                  du site après la publication des modifications constitue votre
                  acceptation de ces changements.
                </p>
                <p>
                  <strong className="text-noir">
                    Date de dernière mise à jour :
                  </strong>{" "}
                  Janvier 2026
                </p>
              </div>
            </div>

            {/* 11. Loi applicable */}
            <div className="mb-12">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                11. Loi applicable
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Ces mentions légales et l'utilisation de ce site sont régies
                  par la loi française. Tout litige sera soumis à la juridiction
                  compétente en France.
                </p>
                <p>
                  Pour toute question ou réclamation, veuillez nous contacter à
                  contact@lvp-service.fr ou au 01 23 45 67 89.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
