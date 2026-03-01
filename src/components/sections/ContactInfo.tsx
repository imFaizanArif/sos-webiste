"use client";

import { motion } from "framer-motion";

export function ContactInfo() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-red-100 bg-neutral-50/80 p-8 shadow-sm sm:p-12"
        >
          <h2 className="text-2xl font-bold text-neutral-900">Enquiries & quotes</h2>
          <p className="mt-2 text-neutral-600">
            We operate across the United Kingdom. Reach out for enquiries, quotes, or to discuss your
            security requirements. Our team will respond as soon as possible.
          </p>
          <div className="mt-8">
            <a
              href="mailto:info@securityoperationsservices.com"
              className="inline-flex items-center gap-2 rounded-lg sos-gradient px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90"
            >
              <span>Email us</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
