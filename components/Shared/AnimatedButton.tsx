"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  delay?: number;
}

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  delay = 0,
}: AnimatedButtonProps) {
  const baseClasses =
    "w-full sm:w-fit xl:w-full lg:flex-1 px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3 lg:py-3 font-one text-xs sm:text-sm tracking-wide rounded-sm transition-all duration-300 hover:scale-105 text-center";

  const variantClasses =
    variant === "primary"
      ? "bg-second text-white hover:bg-second/80 shadow-md"
      : "bg-tiers text-noir hover:bg-tiers/80 shadow-sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </Link>
    </motion.div>
  );
}
