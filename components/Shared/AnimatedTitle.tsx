"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedTitle({
  children,
  className = "",
  delay = 0,
}: AnimatedTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
