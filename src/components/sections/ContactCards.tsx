"use client";

import { motion } from "framer-motion";
import { IconLocation, IconEmail, IconPhone } from "@/components/icons";

const items = [
  {
    icon: IconLocation,
    label: "Location",
    value: "United Kingdom",
    href: null,
  },
  {
    icon: IconEmail,
    label: "Email",
    value: "info@securityoperationsservices.com",
    href: "mailto:info@securityoperationsservices.com",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+44 7424 452729",
    href: "tel:+447424452729",
  },
];

export function ContactCards() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
            {item.href ? (
              <a href={item.href} className="block">
                <item.icon />
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-red-700">
                  {item.label}
                </h3>
                <p className="mt-1 text-neutral-700 hover:text-red-600">{item.value}</p>
              </a>
            ) : (
              <>
                <item.icon />
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-red-700">
                  {item.label}
                </h3>
                <p className="mt-1 text-neutral-700">{item.value}</p>
              </>
            )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
