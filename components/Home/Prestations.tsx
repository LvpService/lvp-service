import Image from "next/image";
import Link from "next/link";
import AnimatedCard from "@/components/Shared/AnimatedCard";
import {
  FaHome,
  FaBuilding,
  FaTree,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";

export default function Prestations() {
  const services = [
    {
      icon: <FaHome className="w-12 h-12" />,
      title: "Nettoyage pour particuliers",
      description:
        "Un service de nettoyage soigné et personnalisé pour votre intérieur.",
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Nettoyage pour professionnels",
      description:
        "Entretien de vos locaux professionnels afin de garantir des espaces propres, sains et accueillants.",
    },
    {
      icon: <FaTree className="w-12 h-12" />,
      title: "Jardinage",
      description:
        "Nous entretenons vos espaces extérieurs pour les maintenir propres et agréables.",
    },
    {
      icon: <FaCalendarAlt className="w-12 h-12" />,
      title: "Entretien régulier ou ponctuel",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
      icon: <FaCog className="w-12 h-12" />,
      title: "Prestations sur mesure",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
  ];

  return (
    <section className="wrapper py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto">
        {/* En-tête */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-three text-noir mb-3">
            Nos Prestations
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-one">
            Des solutions adaptées à chaque besoin.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Première rangée - 3 cartes */}
          {services.slice(0, 3).map((service, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="bg-gray-50 p-8 rounded-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6 text-noir">
                {service.icon}
              </div>
              <h3 className="text-lg font-two text-center mb-4 text-noir">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 font-one text-center leading-relaxed">
                {service.description}
              </p>
            </AnimatedCard>
          ))}

          {/* Deuxième rangée - 2 cartes + 1 image */}
          {services.slice(3, 5).map((service, index) => (
            <AnimatedCard
              key={index + 3}
              index={index + 3}
              className="bg-gray-50 p-8 rounded-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6 text-noir">
                {service.icon}
              </div>
              <h3 className="text-lg font-two text-center mb-4 text-noir">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 font-one text-center leading-relaxed">
                {service.description}
              </p>
            </AnimatedCard>
          ))}

          {/* Image avec CTA */}
          <AnimatedCard
            index={5}
            className="relative overflow-hidden rounded-sm shadow-lg group min-h-55 sm:min-h-65"
          >
            <Image
              src="/img/home/net.webp"
              fill
              alt="Nos prestations"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-noir/60 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-full flex justify-center px-6 sm:px-8">
              <Link
                href="/prestations"
                className="inline-block px-8 py-3 bg-second text-white font-two text-sm tracking-wide rounded-sm hover:bg-second/90 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Découvrir nos prestations
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
