"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  return (
    <motion.a
      href="#contact"
      style={{ opacity }}
      className="glass ember-border fixed bottom-5 right-5 z-50 hidden rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 active:scale-95 sm:block"
    >
      let's talk →
    </motion.a>
  );
}
