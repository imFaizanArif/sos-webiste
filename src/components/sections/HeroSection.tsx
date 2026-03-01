"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_DURATION = 5000;

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1761049134691-b1bf8f60f4f2?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Professional security at event",
    subtitle: "Protection with Precision.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Trained security team",
    subtitle: "Preparation. Professionalism. Prevention.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1760228604788-db8a36d5c1a3?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Event security operations",
    subtitle: "Structured. Reliable. SIA-Licensed.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576807100081-6e12175343c6?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Venue and crowd management",
    subtitle: "Your safety is our priority.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [current, next]);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Slide images */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 sos-gradient opacity-75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              SECURITY OPERATIONS
              <br />
              <span className="font-extrabold">SERVICES (SOS)</span>
            </h1>
            <p className="mt-4 text-xl font-medium tracking-wide text-white/95 sm:text-2xl md:text-3xl">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-red-700 shadow-lg transition hover:bg-red-50"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className="group flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
