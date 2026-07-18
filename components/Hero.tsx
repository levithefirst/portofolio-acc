"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const tags = ["copywriting", "content creation", "content strategy", "community management"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[90vw] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(ellipse_at_center,rgba(175,52,51,0.22),rgba(81,80,80,0.14)_45%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(54,51,51,0.6),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-8 flex items-center gap-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://unavatar.io/x/levithefirst"
            alt="Levi's profile picture"
            width={64}
            height={64}
            className="ember-border h-14 w-14 rounded-2xl object-cover shadow-xl shadow-black/50 md:h-16 md:w-16"
          />
          <div>
            <p className="font-display text-lg font-semibold text-white">levi</p>
            <a href="https://x.com/levithefirst" target="_blank" rel="noopener noreferrer" className="text-sm text-hi transition-colors hover:text-white">
              @levithefirst
            </a>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display max-w-4xl text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-melt">jack of all creative trades</span>
          <br />
          <span className="text-white">and master of content.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
          className="mt-6 max-w-xl text-base text-hi md:text-lg"
        >
          copywriting • <span className="text-white/90">i fix the copy that's costing you users.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease }}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {tags.map((t) => (
            <span key={t} className="glass rounded-full px-4 py-2 text-xs text-white/80 md:text-sm">
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease }}
          className="mt-10"
        >
          <a href="#contact" className="ember-border inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-deep via-[#7a3735] to-deep px-8 py-4 text-base font-medium text-white shadow-2xl shadow-black/50 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]">
            Let's Work Together
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass ember-border rounded-3xl p-5 md:p-6">
              <dt className="order-2 mt-1 block text-xs text-hi md:text-sm">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-white md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
