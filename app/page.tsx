import type { Metadata } from "next";
import Engagement from "@/components/Home/Engagement";
import Hero from "@/components/Home/Hero";
import Pourquoi from "@/components/Home/Pourquoi";
import Prestations from "@/components/Home/Prestations";
import Quisommenous from "@/components/Home/Quisommenous";
import Zone from "@/components/Home/Zone";
import Cta from "@/components/Shared/Cta";
import AnimatedSection from "@/components/Shared/AnimatedSection";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://lvp-service.fr";
const siteDescription =
  "Entreprise de nettoyage et jardinage en Ile-de-France. Prestations professionnelles pour particuliers et entreprises, devis rapide et sur mesure.";
const ogImageUrl = `${siteUrl}/open_graph.png`;

export const metadata: Metadata = {
  title: "LVP Service | Nettoyage et jardinage en Ile-de-France",
  description: siteDescription,
  keywords: [
    "LVP Service",
    "nettoyage",
    "jardinage",
    "Ile-de-France",
    "Paris",
    "entretien",
    "particuliers",
    "entreprises",
    "devis",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "LVP Service | Nettoyage et jardinage en Ile-de-France",
    description: siteDescription,
    url: siteUrl,
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
    title: "LVP Service | Nettoyage et jardinage en Ile-de-France",
    description: siteDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LVP Service",
    url: siteUrl,
    logo: ogImageUrl,
    description: siteDescription,
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
      addressRegion: "Île-de-France",
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
      name: "Île-de-France",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Nettoyage et jardinage",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nettoyage pour particuliers",
    description:
      "Un service de nettoyage soigne et personnalise pour votre interieur.",
    provider: {
      "@type": "LocalBusiness",
      name: "LVP Service",
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ile-de-France",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nettoyage pour professionnels",
    description:
      "Entretien de vos locaux professionnels afin de garantir des espaces propres, sains et accueillants.",
    provider: {
      "@type": "LocalBusiness",
      name: "LVP Service",
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ile-de-France",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jardinage",
    description:
      "Nous entretenons vos espaces exterieurs pour les maintenir propres et agreables.",
    provider: {
      "@type": "LocalBusiness",
      name: "LVP Service",
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ile-de-France",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Entretien regulier ou ponctuel",
    description:
      "Prestations d'entretien regulier ou ponctuel selon vos besoins.",
    provider: {
      "@type": "LocalBusiness",
      name: "LVP Service",
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ile-de-France",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prestations sur mesure",
    description:
      "Des prestations sur mesure adaptees a vos besoins specifiques.",
    provider: {
      "@type": "LocalBusiness",
      name: "LVP Service",
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ile-de-France",
    },
  },
];

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
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
