"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  delay?: number;
}

export default function AnimatedImage({
  src,
  alt,
  delay = 0,
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg aspect-video md:aspect-4/3 lg:aspect-3/4 rounded-xs overflow-hidden max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[80vh]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-right"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
      />
    </motion.div>
  );
}
