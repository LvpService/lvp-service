/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Quisommenous() {
  return (
    <section className=" relative bg-linear-to-l from-quater to-tiers wrapper py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Image de fond à gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-100 hidden lg:block">
        <Image
          src="/img/home/hero.jpg"
          fill
          alt="Background"
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="wrapper relative z-10 mx-auto">
        {/* En-tête avec titre et ligne décorative */}
        <div className="lg:ml-auto lg:w-2/3 lg:pl-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-two text-noir mb-10">
              Qui sommes-nous ?
            </h2>
          </div>

          {/* Contenu texte avec style moderne */}
          <article className="space-y-6 text-base md:text-lg text-gray-700 font-one leading-relaxed ">
            <p className="relative sm:pl-6 sm:border-l-2 border-second/30">
              LVP est née d'un besoin essentiel :{" "}
              <span className="font-bold">
                remettre l'accompagnement au cœur du service.
              </span>{" "}
              Forts de nombreuses années d'expérience, nous avons bâti notre
              entreprise sur des valeurs de proximité, de rigueur et d'écoute.
            </p>
            <p className="relative sm:pl-6 sm:border-l-2 border-second/30">
              Chaque intervention est pensée pour vous offrir{" "}
              <span className="font-bold">
                tranquillité, confiance et satisfaction
              </span>
              , grâce à des prestations soignées et un suivi attentif.
            </p>
            <p className="relative sm:pl-6 sm:border-l-2 border-second/30">
              <span className="font-bold">
                Particuliers comme professionnels,
              </span>{" "}
              LVP met tout son savoir-faire à votre service, aussi bien pour le
              nettoyage que pour le jardinage, en région parisienne et sur
              l'ensemble de l'Île-de-France, afin de répondre au mieux à vos
              exigences.
            </p>
          </article>
        </div>

        {/* Galerie d'images - Design épuré et minimaliste */}
        {/* <div className="mt-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto ">
          <div className="relative border-10 border-second overflow-hidden rounded-md hover:shadow-md transition-shadow duration-300 aspect-square">
            <Image
              src="/img/home/net.webp"
              fill
              alt="Équipe LVP"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xs  hover:shadow-md transition-shadow duration-300 aspect-square">
            <Image
              src="/img/home/net.webp"
              fill
              alt="Nos services"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xs  hover:shadow-md transition-shadow duration-300 aspect-square">
            <Image
              src="/img/home/net.webp"
              fill
              alt="Qualité de service"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
