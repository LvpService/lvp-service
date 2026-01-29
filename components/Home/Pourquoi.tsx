import AnimatedCard from "@/components/Shared/AnimatedCard";
import {
  FaRuler,
  FaHandshake,
  FaCheckSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Pourquoi() {
  const reasons = [
    {
      icon: <FaRuler className="w-10 h-10" />,
      title: "Accompagnement personnalisé",
      description:
        "Chaque client est unique. Nous adaptons nos prestations à vos besoins spécifiques, qu'il s'agisse d'un entretien régulier ou ponctuel.",
    },
    {
      icon: <FaHandshake className="w-10 h-10" />,
      title: "Équipe expérimentée et qualifiée",
      description:
        "Ponctualité, discrétion et respect de vos espaces sont au cœur de notre approche. Vous bénéficiez d'un service de confiance, en toute sérénité.",
    },
    {
      icon: <FaCheckSquare className="w-10 h-10" />,
      title: "Suivi qualité et réactivité",
      description:
        "Chaque prestation est réalisée avec soin et exigence. Nous accordons une attention particulière aux détails pour garantir le meilleur résultat à chaque intervention.",
    },
    {
      icon: <FaMapMarkerAlt className="w-10 h-10" />,
      title: "Méthodes professionnelles et rigoureuses",
      description:
        "Chaque prestation est réalisée avec soin et exigence. Nous accordons une attention particulière aux détails pour garantir le meilleur résultat à chaque intervention.",
    },
  ];

  return (
    <section className="relative bg-linear-to-br from-[#A39382] to-[#8B7E6E] wrapper py-16 md:py-20 lg:py-24 text-white overflow-hidden">
      {/* Icône décorative en haut à droite */}

      <div className="relative z-10 mx-auto">
        {/* En-tête */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-three mb-3">
            Pourquoi choisir LVP ?
          </h2>
          <p className="text-base md:text-lg font-one opacity-90">
            L&apos;exigence au service de votre sérénité
          </p>
        </div>

        {/* Grille des raisons */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimatedCard
              key={index}
              index={index}
              direction={index % 2 === 0 ? "left" : "right"}
              className="group backdrop-blur-sm p-6 md:p-8 rounded-sm hover:bg-primary/15 hover:border-primary/30 transition-all duration-300"
            >
              {/* Icône */}
              <div className="mb-5 text-white/90 flex justify-center md:justify-start">
                {reason.icon}
              </div>

              {/* Titre */}
              <h3 className="text-lg md:text-xl font-two mb-3 text-center md:text-left">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base font-one leading-relaxed opacity-85 text-center md:text-left">
                {reason.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
