/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-br from-primary/20 to-quater flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        {/* 404 */}
        <h1 className="font-three text-8xl md:text-9xl lg:text-[10rem] text-second mb-4 leading-none">
          404
        </h1>

        {/* Titre */}
        <h2 className="font-two text-3xl md:text-4xl text-noir mb-4">
          Page introuvable
        </h2>

        {/* Description */}
        <p className="font-one text-base md:text-lg text-noir/70 mb-8 leading-relaxed max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          Retournez à l'accueil ou explorez nos services.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-second text-white font-two text-sm md:text-base tracking-wide rounded-sm hover:bg-second/90 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <FaHome className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 pt-8 border-t border-noir/10">
          <p className="font-one text-sm text-noir/60 mb-4">Liens utiles :</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/prestations"
              className="font-one text-sm text-second hover:text-second/80 underline"
            >
              Nos prestations
            </Link>
            <Link
              href="/contactez-nous"
              className="font-one text-sm text-second hover:text-second/80 underline"
            >
              Nous contacter
            </Link>
            <Link
              href="/mentions-legales"
              className="font-one text-sm text-second hover:text-second/80 underline"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
