"use client";

import { motion } from "framer-motion";
import { IconTarget, IconShield } from "@/components/icons";

export function MissionVision() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <IconTarget />
              <h3 className="text-xl font-bold text-red-700">Mission</h3>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              To deliver structured, professional, and proactive security solutions that protect people,
              property, and public confidence across the United Kingdom.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-red-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <IconShield />
              <h3 className="text-xl font-bold text-red-700">Vision</h3>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              To become a leading name in UK event and venue security by setting higher standards in
              training, operational planning, and service reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
