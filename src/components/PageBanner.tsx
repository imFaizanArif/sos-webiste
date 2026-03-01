"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PageBannerProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageBanner({ title, imageSrc, imageAlt }: PageBannerProps) {
  return (
    <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 sos-gradient opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}
