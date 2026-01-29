import React from "react";
import AnimatedCard from "@/components/Shared/AnimatedCard";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactItems = [
  {
    icon: FaPhone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: "contact@lvp-service.fr",
    href: "mailto:contact@lvp-service.fr",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Adresse",
    content: (
      <>
        123 Rue de la République
        <br />
        75001 Paris, France
      </>
    ),
    href: null,
  },
  {
    icon: FaClock,
    title: "Horaires",
    content: (
      <>
        Lundi - Vendredi : 8h - 18h
        <br />
        Samedi : 9h - 17h
        <br />
        Dimanche : Fermé
      </>
    ),
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="font-two text-2xl text-noir mb-4">Nos coordonnées</h3>

      {contactItems.map((item, index) => (
        <AnimatedCard key={index} direction="left" index={index}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-second/10 flex items-center justify-center shrink-0">
              <item.icon className="text-second w-5 h-5" />
            </div>
            <div>
              <h4 className="font-two text-lg text-noir mb-1">{item.title}</h4>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-one text-noir/70 hover:text-second transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="font-one text-noir/70">{item.content}</p>
              )}
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}
