"use client";

import { motion } from "framer-motion";

export default function TweetCard({
  label,
  url,
  title,
  index = 0,
}: {
  label: string;
  url: string;
  title?: string;
  index?: number;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass ember-border group flex flex-col justify-between gap-4 rounded-3xl p-5"
    >
      <div>
        <span className="font-mono text-xs text-hi">{label}</span>
        {title && (
          <p className="mt-2 font-display text-base font-medium leading-snug text-white/90 group-hover:text-white">
            {title}
          </p>
        )}
      </div>
      <span className="inline-flex items-center gap-1.5 text-xs text-hi transition-colors group-hover:text-white">
        Read on X <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
      </span>
    </motion.a>
  );
}
