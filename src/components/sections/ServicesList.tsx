"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconVenue,
  IconEvent,
  IconSports,
  IconGov,
  IconConsultancy,
  IconVIP,
} from "@/components/icons";

const services = [
  {
    id: "venue",
    title: "Venue Security",
    description:
      "Comprehensive security for arenas, stadiums, theatres, exhibition centres, and corporate venues.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    Icon: IconVenue,
  },
  {
    id: "event",
    title: "Event Security",
    description:
      "Complete planning and operational execution for community events, concerts, and festivals.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    Icon: IconEvent,
  },
  {
    id: "sports",
    title: "Sports Event Security",
    description:
      "Specialist management of spectator areas, hospitality sections, VIP zones, and perimeter control.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    Icon: IconSports,
  },
  {
    id: "local-authority",
    title: "Local Authority & Public Sector Support",
    description:
      "Crowd control, public reassurance, and emergency service liaison.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    Icon: IconGov,
  },
  {
    id: "consultancy",
    title: "Security Consultancy",
    description:
      "Risk assessments, operational planning, compliance support, and security audits.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    Icon: IconConsultancy,
  },
  {
    id: "close-protection",
    title: "Close Protection & VIP Security",
    description:
      "Discreet and professional protection services for executives and high-profile individuals.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    Icon: IconVIP,
  },
];

export function ServicesList() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ transition: { duration: 0.2 } }}
              className={`flex flex-col gap-8 md:flex-row md:items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 sos-gradient opacity-30" />
              </motion.div>
              <div className="md:w-1/2 md:px-10">
                <div className="mb-4">
                  <service.Icon />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
