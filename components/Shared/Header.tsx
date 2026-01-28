import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import NavbarMobile from "./NavbarMobile";

export default function Header() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/prestations", label: "Prestations" },
    { href: "/contactez-nous", label: "Contactez-nous" },
    // {
    //   href: "/materiaux",
    //   label: "Nos Materiaux",
    //   children: [
    //     { href: "/materiaux/pots", label: "Nos pots" },
    //     { href: "/materiaux/sols", label: "Nos sols" },
    //     { href: "/materiaux/para-horticole", label: "Para-horticole" },
    //     { href: "/materiaux/arrosage", label: "Arrosage" },
    //     { href: "/materiaux/substrat", label: "Substrat" },
    //   ],
    // },
  ];
  return (
    <header className="bg-primary sticky top-0 w-full z-50">
      <div className="hidden lg:block bg-white">
        <Navbar links={links} />
      </div>
      <div className="lg:hidden bg-white px-4 sm:px-16 py-2 flex justify-between items-center">
        <Link href={"/"} className="p-2 rounded-full">
          <Image
            src="/logo/hori/logo_noir_hori.png"
            alt="Logo LVP Service"
            width={110}
            height={40}
            priority
            className="hover:scale-105 transition-all duration-300"
          />
        </Link>
        <NavbarMobile links={links} />
      </div>
    </header>
  );
}
