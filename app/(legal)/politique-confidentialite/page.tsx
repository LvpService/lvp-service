/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import AnimatedSection from "@/components/Shared/AnimatedSection";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://lvp-service.fr";
const pageUrl = `${siteUrl}/politique-confidentialite`;
const pageDescription =
  "Politique de confidentialite de LVP Service : collecte, usage et protection des donnees personnelles.";
const ogImageUrl = `${siteUrl}/open_graph.png`;

export const metadata: Metadata = {
  title: "Politique de confidentialite | LVP Service",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Politique de confidentialite | LVP Service",
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
    title: "Politique de confidentialite | LVP Service",
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
      "@type": "PrivacyPolicy",
      name: "Politique de confidentialite",
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
          <h1 className="font-three text-4xl md:text-5xl lg:text-6xl text-noir mb-4">
            Politique de Confidentialité
          </h1>
          <p className="font-one text-base md:text-lg text-noir/70">
            Protection de vos données personnelles
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="wrapper max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-2xl md:text-3xl text-noir mb-6">
                Introduction
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  LVP Service (ci-après « nous », « notre » ou « entreprise »)
                  s'engage à protéger votre vie privée. Cette Politique de
                  Confidentialité explique comment nous collectons, utilisons,
                  partageons et protégeons vos informations personnelles.
                </p>
                <p>
                  Nous vous recommandons de lire attentivement cette politique.
                  En utilisant notre site web (www.lvp-service.fr) et nos
                  services, vous consentez à notre collecte et utilisation de
                  vos données personnelles conformément à cette politique.
                </p>
              </div>
            </div>

            {/* 1. Responsable de traitement */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                1. Responsable de traitement
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  <strong className="text-noir">Nom de l'entreprise :</strong>{" "}
                  LVP Service
                </p>
                <p>
                  <strong className="text-noir">Adresse :</strong> 123 Rue de la
                  République, 75001 Paris, France
                </p>
                <p>
                  <strong className="text-noir">Email :</strong>{" "}
                  contact@lvp-service.fr
                </p>
                <p>
                  <strong className="text-noir">Téléphone :</strong> 01 23 45 67
                  89
                </p>
                <p>
                  Le responsable du traitement est la personne qui détermine les
                  finalités et les moyens du traitement de vos données
                  personnelles.
                </p>
              </div>
            </div>

            {/* 2. Données collectées */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                2. Données personnelles collectées
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Nous collectons les données personnelles suivantes auprès de
                  vous :
                </p>
                {/* <div className="bg-gray-50 p-6 rounded-sm">
                  <h3 className="font-two text-lg text-noir mb-4">
                    Données d'identification :
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Nom et Prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                  </ul>
                </div> */}
                <div className="bg-gray-50 p-6 rounded-sm mt-4">
                  <h3 className="font-two text-lg text-noir mb-4">
                    Données de communication :
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      Messages et demandes envoyées via le formulaire de contact
                    </li>
                    <li>Correspondances par email ou téléphone</li>
                    <li>Type de prestation demandée</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-sm mt-4">
                  <h3 className="font-two text-lg text-noir mb-4">
                    Données de navigation :
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Cookies et données de suivi (si consentement donné)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Finalités du traitement */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                3. Finalités du traitement
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    Traiter et répondre à vos demandes de devis ou
                    renseignements
                  </li>
                  <li>
                    Vous fournir des informations sur nos services et
                    prestations
                  </li>
                  <li>Améliorer la qualité de nos services</li>
                  <li>
                    Analyser l'utilisation du site et optimiser son
                    fonctionnement
                  </li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Prévenir la fraude et améliorer la sécurité</li>
                  <li>
                    Vous envoyer des communications marketing (avec votre
                    consentement)
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Base légale du traitement */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                4. Base légale du traitement
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Nous traitons vos données personnelles sur les bases légales
                  suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Consentement :</strong> Pour les communications
                    marketing et les cookies non essentiels
                  </li>
                  <li>
                    <strong>Exécution d'un contrat :</strong> Pour traiter vos
                    demandes de devis et services
                  </li>
                  <li>
                    <strong>Obligation légale :</strong> Pour respecter les
                    obligations fiscales, comptables et légales
                  </li>
                  <li>
                    <strong>Intérêts légitimes :</strong> Pour améliorer nos
                    services et sécuriser notre plateforme
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Partage des données */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                5. Partage des données personnelles
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Vos données personnelles ne sont pas partagées avec des tiers
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Prestataires techniques :</strong> Hébergeurs,
                    fournisseurs de services de communication
                  </li>
                  <li>
                    <strong>Obligations légales :</strong> Autorités publiques
                    si exigé par la loi
                  </li>
                  <li>
                    <strong>Consentement explicite :</strong> Si vous nous
                    l'avez accordé
                  </li>
                </ul>
                <p className="mt-4">
                  Tous nos prestataires sont soumis à des obligations de
                  confidentialité et de protection des données équivalentes aux
                  nôtres.
                </p>
              </div>
            </div>

            {/* 6. Durée de conservation */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                6. Durée de conservation
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Nous conservons vos données personnelles pendant la durée
                  nécessaire pour atteindre les finalités mentionnées ci-dessus,
                  conformément aux obligations légales :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Demandes de devis :</strong> Conservées 3 ans après
                    le dernier contact
                  </li>
                  <li>
                    <strong>Données comptables :</strong> Conservées selon les
                    obligations fiscales (10 ans)
                  </li>
                  <li>
                    <strong>Cookies :</strong> Conservés selon leur type (13
                    mois maximum pour les cookies analytiques)
                  </li>
                  <li>
                    <strong>Données de navigation :</strong> Conservées pendant
                    12 mois
                  </li>
                </ul>
                <p className="mt-4">
                  Après ces délais, vos données sont supprimées ou anonymisées.
                </p>
              </div>
            </div>

            {/* 7. Vos droits RGPD */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                7. Vos droits et libertés
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Droit d'accès :</strong> Consulter toutes vos
                    données personnelles
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> Corriger vos
                    données inexactes ou incomplètes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> Demander la
                    suppression de vos données (« droit à l'oubli »)
                  </li>
                  <li>
                    <strong>Droit à la limitation du traitement :</strong>{" "}
                    Limiter l'utilisation de vos données
                  </li>
                  <li>
                    <strong>Droit à la portabilité des données :</strong>{" "}
                    Recevoir vos données dans un format structuré
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> Vous opposer au
                    traitement de vos données
                  </li>
                  <li>
                    <strong>
                      Droit de ne pas être soumis à une décision automatisée :
                    </strong>{" "}
                    Droit de révision humaine
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Exercer vos droits */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                8. Comment exercer vos droits
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Pour exercer l'un de vos droits mentionnés ci-dessus,
                  contactez-nous par :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Email :</strong> contact@lvp-service.fr
                  </li>
                  <li>
                    <strong>Courrier :</strong> 123 Rue de la République, 75001
                    Paris, France
                  </li>
                  <li>
                    <strong>Téléphone :</strong> 01 23 45 67 89
                  </li>
                </ul>
                <p className="mt-4">
                  Nous vous répondrons dans un délai de 30 jours à compter de la
                  réception de votre demande. Une prolongation de 60 jours peut
                  être nécessaire pour les demandes complexes.
                </p>
              </div>
            </div>

            {/* 9. Sécurité des données */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                9. Sécurité des données personnelles
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  LVP Service met en œuvre des mesures de sécurité appropriées
                  pour protéger vos données personnelles contre l'accès non
                  autorisé, la modification, la divulgation ou la destruction :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Encryption HTTPS/SSL du site</li>
                  <li>Pare-feu et systèmes de détection d'intrusion</li>
                  <li>Accès restreint aux données sensibles</li>
                  <li>Sauvegardes régulières</li>
                  <li>Formations de sécurité du personnel</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
                <p className="mt-4">
                  Malgré ces mesures, aucun système n'est 100 % sécurisé. Si
                  vous avez connaissance d'une violation de sécurité, veuillez
                  nous le signaler immédiatement.
                </p>
              </div>
            </div>

            {/* 10. Transferts internationaux */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                10. Transferts de données internationaux
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Vos données sont traitées et conservées en Europe. Cependant,
                  certains de nos prestataires peuvent être situés en dehors de
                  l'Union Européenne.
                </p>
                <p>
                  Nous garantissons que tout transfert de données vers des pays
                  tiers respecte le RGPD et est protégé par des clauses
                  contractuelles appropriées.
                </p>
              </div>
            </div>

            {/* 11. Cookies */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                11. Cookies et technologies de suivi
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Notre site utilise des cookies et technologies similaires pour
                  améliorer votre expérience :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Cookies essentiels :</strong> Nécessaires au
                    fonctionnement du site
                  </li>
                  <li>
                    <strong>Cookies analytiques :</strong> Pour analyser le
                    trafic et améliorer le contenu
                  </li>
                  <li>
                    <strong>Cookies marketing :</strong> Pour personnaliser
                    votre expérience (avec consentement)
                  </li>
                </ul>
                <p className="mt-4">
                  Vous pouvez configurer votre navigateur pour refuser les
                  cookies ou vous serez notifié avant leur installation.
                </p>
              </div>
            </div>

            {/* 12. Plaintes RGPD */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                12. Droit de plainte
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Si vous estimez que nous ne respectons pas vos droits relatifs
                  à la protection des données, vous avez le droit de déposer une
                  plainte auprès de la Commission Nationale de l'Informatique et
                  des Libertés (CNIL) :
                </p>
                <p>
                  <strong className="text-noir">CNIL</strong>
                </p>
                <p>3 Place de Fontenoy, 75007 Paris, France</p>
                <p>
                  <a
                    href="https://www.cnil.fr"
                    className="text-second hover:underline"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>

            {/* 13. Modifications de cette politique */}
            <div className="mb-12">
              <h2 className="font-two text-3xl md:text-4xl text-noir mb-6">
                13. Modifications de cette politique
              </h2>
              <div className="space-y-4 font-one text-noir/80 leading-relaxed">
                <p>
                  Nous pouvons mettre à jour cette Politique de Confidentialité
                  à tout moment. Les modifications importantes seront notifiées
                  par email ou par un avis sur notre site.
                </p>
                <p>
                  <strong className="text-noir">
                    Date de dernière mise à jour :
                  </strong>{" "}
                  Janvier 2026
                </p>
                <p>
                  Votre utilisation continue du site après les modifications
                  constitue votre acceptation de la nouvelle politique.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
