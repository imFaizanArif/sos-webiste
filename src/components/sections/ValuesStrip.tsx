"use client";

import { motion } from "framer-motion";
import { IconShield, IconTarget } from "@/components/icons";

const values = [
  { icon: IconShield, label: "Preparation", key: "prep" },
  { icon: IconTarget, label: "Professionalism", key: "pro" },
  { icon: IconShield, label: "Prevention", key: "prev" },
];

export function ValuesStrip() {
  return (
    <section className="border-t border-red-100 bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-wider text-red-600"
        >
          What we stand for
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {values.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <item.icon />
              <span className="text-lg font-medium text-neutral-800">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
