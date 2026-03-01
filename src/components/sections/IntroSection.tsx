"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-neutral-900 sm:text-4xl"
        >
          About Security Operations Services (SOS)
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 space-y-4 text-lg leading-relaxed text-neutral-600"
        >
          <p>
            Security Operations Services (SOS) is a professional UK-based security and crowd management
            company committed to delivering reliable, high-standard safety solutions for events, venues,
            organisations, and public authorities.
          </p>
          <p>
            We specialise in providing structured and well-managed security operations supported by
            experienced supervisors, trained stewards, and fully licensed SIA security personnel. Our
            management team combines practical field expertise with strong operational planning to ensure
            every assignment runs smoothly and safely.
          </p>
          <p className="font-medium text-neutral-800">
            At SOS, we believe security is not just about presence — it is about preparation,
            professionalism, and prevention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
