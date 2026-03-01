"use client";

import { motion } from "framer-motion";

const points = [
  "Fully trained and SIA-licensed personnel",
  "Strong operational leadership",
  "Tailored security strategies",
  "Reliable and responsive service",
  "Commitment to safety excellence",
];

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-neutral-900 sm:text-4xl"
        >
          Why Choose SOS?
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl space-y-4"
        >
          {points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 py-3 px-4"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full sos-gradient" />
              <span className="text-neutral-700">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
