"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Professional team"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 sos-gradient opacity-80" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Ready to work with SOS?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-white/90"
        >
          Get in touch for a tailored security solution for your event or venue.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-red-700 transition hover:bg-red-50"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
