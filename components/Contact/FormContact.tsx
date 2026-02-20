"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaImages,
  FaTimes,
} from "react-icons/fa";

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

  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const remainingSlots = 4 - images.length;

    if (fileArray.length > remainingSlots) {
      setSubmitError(
        `Vous ne pouvez ajouter que ${remainingSlots} image(s) supplémentaire(s). Maximum 4 images au total.`,
      );
      return;
    }

    // Vérifier la taille des fichiers (max 5MB par image)
    const maxSize = 5 * 1024 * 1024; // 5MB
    const invalidFiles = fileArray.filter((file) => file.size > maxSize);

    if (invalidFiles.length > 0) {
      setSubmitError(
        "Certaines images sont trop volumineuses. Taille maximale : 5MB par image.",
      );
      return;
    }

    setSubmitError(null);

    // Ajouter les nouvelles images
    const newImages = [...images, ...fileArray];
    setImages(newImages);

    // Créer des aperçus
    const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    // Libérer la mémoire de l'aperçu supprimé
    URL.revokeObjectURL(imagePreviews[index]);

    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      // Créer FormData avec les données et les images
      const data = new FormData();
      data.append("nom", formData.nom);
      data.append("prenom", formData.prenom);
      data.append("email", formData.email);
      data.append("telephone", formData.telephone);
      data.append("adresse", formData.adresse);
      data.append("typePrestation", formData.typePrestation);
      data.append("message", formData.message);

      // Ajouter les images
      images.forEach((image, index) => {
        data.append(`image_${index + 1}`, image);
      });

      // Envoyer à la route API
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitError(
          result.error || "Une erreur est survenue lors de l'envoi.",
        );
        return;
      }

      setSubmitSuccess("Votre message a été envoyé avec succès !");

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

      // Libérer la mémoire des aperçus
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Erreur :", error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi. Merci de réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Images */}
      <div>
        <label className="block text-sm font-two text-noir mb-2">
          Photos (optionnel - max 4 images)
        </label>
        <div className="space-y-4">
          {/* Upload button */}
          {images.length < 4 && (
            <div className="relative">
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-sm cursor-pointer hover:border-second transition-colors duration-300"
              >
                <FaImages className="mr-2 text-gray-400" />
                <span className="text-sm font-one text-gray-600">
                  Cliquez pour ajouter des images ({images.length}/4)
                </span>
              </label>
            </div>
          )}

          {/* Image previews */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Aperçu ${index + 1}`}
                    className="w-full h-32 object-cover rounded-sm border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    aria-label="Supprimer l'image"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 truncate rounded-b-sm">
                    {images[index].name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500 font-one mt-2">
          Formats acceptés : JPG, PNG, GIF. Taille max : 5MB par image.
        </p>
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

      {submitSuccess ? (
        <p className="text-sm text-green-600 font-one">{submitSuccess}</p>
      ) : null}
      {submitError ? (
        <p className="text-sm text-red-600 font-one">{submitError}</p>
      ) : null}

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
