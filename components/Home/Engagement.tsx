import React from "react";

export default function Engagement() {
  return (
    <section className="bg-noir wrapper py-16 md:py-20 lg:py-24">
      <div className=" mx-auto">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-three text-white mb-6 md:mb-8 tracking-wider text-center md:text-left">
          Notre engagement
        </h2>

        {/* Texte descriptif */}
        <p className="sm:pl-6 text-sm md:text-lg lg:text-base text-white/90 font-one leading-relaxed text-center md:text-left sm:border-l-2 border-second/30">
          Chez LVP, chaque client bénéficie d&apos;un interlocuteur dédié et
          d&apos;un suivi constant. <br /> <br /> Nous nous engageons à vous
          apporter des prestations fiables, soignées et conformes à vos
          exigences, dans une relation de confiance durable.
        </p>
      </div>
    </section>
  );
}
