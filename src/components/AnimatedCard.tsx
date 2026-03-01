"use client";

import { motion } from "framer-motion";

export function AnimatedCard() {
  return (
    <motion.div
      className="rounded-2xl bg-zinc-100 dark:bg-zinc-800 p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.h2
        className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Framer Motion is ready
      </motion.h2>
      <motion.p
        className="text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Hover or tap this card to see animations. Next.js + TypeScript + Tailwind + Framer Motion.
      </motion.p>
    </motion.div>
  );
}
