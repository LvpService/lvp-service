"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface NavLink {
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
}

export interface NavbarProps {
  links: Array<NavLink>;
}

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  return (
    <nav className="wrapper py-2 flex justify-between items-center">
      <Link href={"/"} className="p-2 rounded-full">
        <Image
          src="/logo/hori/logo_noir_hori.png"
          alt="Logo LVP Service"
          width={120}
          height={40}
          priority
          className="hover:scale-105 transition-all duration-300"
        />
      </Link>

      <ul ref={navRef} className="flex gap-1 2xl:gap-8">
        {links.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={index}
              className={`text-noir font-semibold text-xs px-4 py-2 tracking-widest transition-all duration-300 relative group ${
                isActive ? "font-two" : "font-one"
              }`}
            >
              <Link
                href={link.href}
                className={`relative z-10 flex items-center gap-1 transition-all duration-300 ${
                  isActive ? "scale-105" : "group-hover:scale-105"
                }`}
              >
                {link.label}
                {link.children && <span className="text-[10px]">▾</span>}
              </Link>
              {/* Double barre moderne style tech */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-second transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
              <div
                className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
              {/* Point indicateur */}
              <div
                className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-second transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              ></div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
