"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function FormContact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    typePrestation: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", formData);
    alert("Votre message a été envoyé avec succès !");

    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      adresse: "",
      typePrestation: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom et Prénom */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-two text-noir mb-2"
          >
            Nom <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="prenom"
            className="block text-sm font-two text-noir mb-2"
          >
            Prénom <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm"
              placeholder="Votre prénom"
            />
          </div>
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-two text-noir mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-two text-noir mb-2"
          >
            Téléphone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>
      </div>

      {/* Adresse */}
      <div>
        <label
          htmlFor="adresse"
          className="block text-sm font-two text-noir mb-2"
        >
          Adresse <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm"
            placeholder="Votre adresse complète"
          />
        </div>
      </div>

      {/* Type de prestation */}
      <div>
        <label
          htmlFor="typePrestation"
          className="block text-sm font-two text-noir mb-2"
        >
          Type de prestation <span className="text-red-500">*</span>
        </label>
        <select
          id="typePrestation"
          name="typePrestation"
          value={formData.typePrestation}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm bg-white"
        >
          <option value="">Sélectionnez un type de prestation</option>
          <option value="nettoyage-particulier">
            Nettoyage pour particuliers
          </option>
          <option value="nettoyage-professionnel">
            Nettoyage pour professionnels
          </option>
          <option value="jardinage">Jardinage</option>
          <option value="entretien-regulier">Entretien régulier</option>
          <option value="entretien-ponctuel">Entretien ponctuel</option>
          <option value="sur-mesure">Prestation sur mesure</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-two text-noir mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-second focus:border-transparent font-one text-sm resize-none"
          placeholder="Décrivez votre projet en détail..."
        />
      </div>

      {/* Bouton d'envoi */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-second text-white font-two text-sm tracking-wide rounded-sm hover:bg-second/90 transition-all duration-300 hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer votre demande"}
        </button>
      </div>

      {/* Mention légale */}
      <p className="text-xs text-gray-500 font-one">
        <span className="text-red-500">*</span> Champs obligatoires. Vos données
        personnelles sont traitées conformément à notre{" "}
        <a
          href="/politique-confidentialite"
          className="text-second hover:underline"
        >
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
