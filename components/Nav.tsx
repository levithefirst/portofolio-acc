"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#services", label: "services" },
  { href: "#series", label: "series" },
  { href: "#highlights", label: "writing" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass ember-border flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="font-display text-base font-semibold lowercase text-white">
          levi<span className="text-ember/80">.</span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            
              key={l.href}
              href={l.href}
              className="text-sm text-hi transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
