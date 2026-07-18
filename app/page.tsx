"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import TweetCard from "./TweetCard";
import {
  services,
  clients,
  stats,
  toolOfTheDay,
  simplified,
  highlights,
  portfolios,
  bountyWins,
  contacts,
} from "@/lib/data";

export function About() {
  return (
    <Section id="about" num="00" title="who i am">
      <Reveal>
        <div className="glass ember-border rounded-4xl p-7 md:p-12">
          <p className="max-w-3xl font-display text-xl leading-relaxed text-white/90 md:text-3xl">
            i'm a jack of all creative trades and master of content. i specialize in{" "}
            <span className="text-melt">copywriting, content creation, content strategy, and community management</span>{" "}
            in Web3.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" num="01" title="what i do">
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="glass ember-border group h-full rounded-4xl p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9">
              <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-hi md:text-base">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Clients() {
  return (
    <Section id="clients" num="02" title="experience & clients" kicker="teams i've written for">
      <div className="flex flex-wrap gap-3">
        {clients.map((c, i) => (
          <Reveal key={c} delay={Math.min(i * 0.04, 0.4)}>
            <span className="glass ember-border block rounded-full px-5 py-2.5 text-sm text-white/85 transition-colors duration-200 hover:text-white md:text-base">
              {c}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Stats() {
  return (
    <Section id="stats" num="03" title="stats & proof">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="glass ember-border rounded-4xl p-6 text-center md:p-8">
              <p className="text-melt font-display text-4xl font-semibold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-hi md:text-sm">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Series() {
  return (
    <Section id="series" num="04" title="featured series">
      <Reveal>
        <h3 className="font-display mb-5 text-xl font-semibold text-white md:text-2xl">
          AI Tool of The Day <span className="text-hi">· Day 1 – 24</span>
        </h3>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {toolOfTheDay.map((t, i) => (
          <TweetCard key={t.url} label={t.label} url={t.url} index={i} />
        ))}
      </div>

      <Reveal>
        <h3 className="font-display mb-5 mt-16 text-xl font-semibold text-white md:text-2xl">
          Simplified Series <span className="text-hi">· defi, explained like you're smart</span>
        </h3>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {simplified.map((t, i) => (
          <TweetCard key={t.url} label={t.label} url={t.url} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function Highlights() {
  return (
    <Section id="highlights" num="05" title="highlighted pieces" kicker="standout content worth a read">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <TweetCard key={h.url} label={h.label} title={h.title} url={h.url} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function BountyWins() {
  return (
    <Section id="bounty-wins" num="06" title="bounty wins">
      <div className="grid gap-4 md:grid-cols-3">
        {bountyWins.map((p, i) => (
          <Reveal key={p.url} delay={i * 0.07}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="glass ember-border group flex h-full flex-col justify-between gap-8 rounded-4xl p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9">
              <h3 className="font-display text-lg font-semibold text-white md:text-xl">{p.title}</h3>
              <span className="inline-flex items-center gap-2 text-sm text-hi transition-colors group-hover:text-white">
                Open link
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Portfolios() {
  return (
    <Section id="portfolios" num="07" title="portfolio links" kicker="full work samples, organized by role">
      <div className="grid gap-4 md:grid-cols-3">
        {portfolios.map((p, i) => (
          <Reveal key={p.url} delay={i * 0.07}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="glass ember-border group flex h-full flex-col justify-between gap-8 rounded-4xl p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9">
              <h3 className="font-display text-lg font-semibold text-white md:text-xl">{p.title}</h3>
              <span className="inline-flex items-center gap-2 text-sm text-hi transition-colors group-hover:text-white">
                Open folder
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" num="08" title="let's work together" kicker="one message. i'll take it from there.">
      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((c, i) => (
          <Reveal key={c.url} delay={i * 0.06}>
            <motion.a
              href={c.url}
              target={c.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="glass ember-border group flex items-center justify-between rounded-4xl p-7 md:p-8"
            >
              <div>
                <p className="text-xs text-hi md:text-sm">{c.label}</p>
                <p className="font-display mt-1 text-lg font-semibold text-white md:text-xl">{c.handle}</p>
              </div>
              <span aria-hidden className="text-hi transition-all duration-200 group-hover:translate-x-1 group-hover:text-white">→</span>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex justify-center">
          <a href="mailto:leviweb3x@gmail.com" className="ember-border inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-deep via-[#7a3735] to-deep px-9 py-4 text-base font-medium text-white shadow-2xl shadow-black/50 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]">
            Let's Talk <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
