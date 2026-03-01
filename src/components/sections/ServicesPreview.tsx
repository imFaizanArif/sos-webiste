"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Venue Security",
    short: "Arenas, stadiums, theatres, exhibition centres.",
    href: "/services#venue",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    title: "Event Security",
    short: "Community events, concerts, and festivals.",
    href: "/services#event",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    title: "Sports Event Security",
    short: "Spectator areas, VIP zones, perimeter control.",
    href: "/services#sports",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  },
  {
    title: "Close Protection & VIP",
    short: "Discreet protection for executives.",
    href: "/services#close-protection",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-neutral-900 sm:text-4xl"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-center text-neutral-600"
        >
          Comprehensive security and crowd management across the United Kingdom.
        </motion.p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                className="group block overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 sos-gradient opacity-40 transition group-hover:opacity-50" />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-neutral-600">{service.short}</p>
                  <span className="mt-2 inline-block text-sm font-medium text-red-600 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center rounded-lg sos-gradient px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
