"use client";
import { usePathname } from "next/navigation";
import { NavbarProps } from "./Navbar";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

import Image from "next/image";

export default function NavbarMobile({ links }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="flex items-center justify-between text-cuatro-500">
        <button
          onClick={handleOpen}
          className="text-2xl p-2 transition-all duration-300 backdrop-blur-sm"
        >
          <IoIosMenu size={30} className="text-noir" />
        </button>
      </div>

      <div
        ref={navRef}
        className={`fixed inset-0 z-50 w-full h-screen bg-white flex flex-col transition-all duration-700 ease-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Header moderne */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-6 border-b border-gray-100">
          <Link href="/" onClick={handleClose} className="focus:outline-none">
            <Image
              src="/logo/hori/logo_noir_hori.png"
              alt="Logo LVP Service"
              width={150}
              height={60}
              priority
              className="hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <button
            onClick={handleClose}
            className="text-3xl p-3 rounded-full hover:bg-gray-100 hover:rotate-90 transition-all duration-300 text-noir-700 focus:outline-none"
            aria-label="Fermer le menu"
          >
            <MdClose />
          </button>
        </div>

        {/* Navigation links modernisés - centrés verticalement */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10">
          <ul className="w-full max-w-2xl space-y-10">
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <li
                  key={index}
                  className={`text-noir text-2xl sm:text-3xl font-semibold px-6 py-5 tracking-wide transition-all duration-300 relative group ${
                    isActive ? "font-two" : "font-one"
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={handleClose}
                    className={`relative z-10 flex items-center transition-all duration-300 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Double barre moderne style tech */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-second transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                  <div
                    className={`absolute -top-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer minimaliste */}
        <div className="px-6 sm:px-10 py-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center font-one tracking-wider">
            © 2026 LVP Service - Tous droits réservés
          </p>
        </div>
      </div>
    </nav>
  );
}
