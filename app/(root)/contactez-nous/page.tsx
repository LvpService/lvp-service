import type { Metadata } from "next";
import FormContact from "@/components/Contact/FormContact";
import ContactInfo from "@/components/Contact/ContactInfo";
import AnimatedSection from "@/components/Shared/AnimatedSection";
import Image from "next/image";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://lvp-service.fr";
const pageUrl = `${siteUrl}/contactez-nous`;
const pageDescription =
  "Contactez LVP Service pour un devis gratuit de nettoyage ou jardinage en Ile-de-France. Reponse rapide et accompagnement sur mesure.";
const ogImageUrl = `${siteUrl}/open_graph.png`;

export const metadata: Metadata = {
  title: "Contactez-nous | LVP Service",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Contactez-nous | LVP Service",
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
    title: "Contactez-nous | LVP Service",
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
      "@type": "ContactPage",
      name: "Contactez LVP Service",
      description: pageDescription,
      url: pageUrl,
      inLanguage: "fr-FR",
      mainEntity: {
        "@type": "LocalBusiness",
        name: "LVP Service",
        url: siteUrl,
        telephone: "+33762648767",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7 bis Avenue du petit Marly",
          addressLocality: "Argenteuil",
          postalCode: "95100",
          addressRegion: "Ile-de-France",
          addressCountry: "FR",
        },
      },
      potentialAction: {
        "@type": "ContactAction",
        target: pageUrl,
        name: "Demander un devis",
      },
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
  ];

  return (
    <main className="min-h-screen">
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
