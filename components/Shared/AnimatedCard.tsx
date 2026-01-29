"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function AnimatedCard({
  children,
  index,
  direction = "up",
  className = "",
}: AnimatedCardProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -30 };
      case "right":
        return { opacity: 0, x: 30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
