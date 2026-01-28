import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-noir text-white">
      <div className="wrapper py-12 sm:py-16 lg:py-20">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Colonne 1 - Logo et Description */}
          <div className="lg:col-span-2 text-center md:text-left">
            <Link href="/" className="inline-block mb-4 sm:mb-6 group">
              <Image
                src="/logo/base/Logo_blanc.png"
                alt="Logo LVP Service"
                width={120}
                height={45}
                priority
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto md:mx-0 font-one">
              Prestations de nettoyage et jardinage professionnelles pour
              particuliers et entreprises en région parisienne et en
              Île-de-France.
            </p>
            {/* Ligne décorative */}
            <div className="h-1 w-16 sm:w-20 bg-linear-to-r from-primary via-second to-transparent rounded-xs mx-auto md:mx-0"></div>
          </div>

          {/* Colonne 2 - Navigation rapide */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-two tracking-wider text-base sm:text-lg mb-3 sm:mb-4 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-primary to-second rounded-xs"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block font-one"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/prestations"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block font-one"
                >
                  Prestations
                </Link>
              </li>
              <li>
                <Link
                  href="/contactez-nous"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block font-one"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-two tracking-wider text-base sm:text-lg mb-3 sm:mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-primary to-second rounded-xs"></span>
            </h3>
            <ul className="space-y-4 sm:space-y-3">
              <li className="text-gray-400 text-xs sm:text-sm font-one mt-1">
                <span className="text-primary font-semibold">Téléphone :</span>
                <br />
                <a
                  href="tel:+33123456789"
                  className="hover:text-white transition-colors duration-300"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="text-gray-400 text-xs sm:text-sm font-one">
                <span className="text-primary font-semibold">Email :</span>
                <br />
                <a
                  href="mailto:contact@lvp-service.fr"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  contact@lvp-service.fr
                </a>
              </li>
              <li className="text-gray-400 text-xs sm:text-sm font-one">
                <span className="text-primary font-semibold">Horaires :</span>
                <br />
                Lun - Ven: 8h - 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent my-8 sm:my-10"></div>

        {/* Bas du footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-[10px] sm:text-xs font-one text-center sm:text-left">
            © {currentYear} LVP Service. Tous droits réservés.
          </p>

          {/* Liens légaux */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-[10px] sm:text-xs">
            <Link
              href="/mentions-legales"
              className="text-gray-500 hover:text-white transition-colors duration-300 font-one"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-gray-500 hover:text-white transition-colors duration-300 font-one"
            >
              Confidentialité
            </Link>
            <Link
              target="_blank"
              href="https://www.inthegleam.com"
              className="text-gray-500 hover:text-white transition-colors duration-300 font-one"
            >
              Website by inTheGleam
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
