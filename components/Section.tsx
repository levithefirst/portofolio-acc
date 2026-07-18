import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  num,
  title,
  kicker,
  children,
}: {
  id: string;
  num: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 md:py-28">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-4 md:mb-14">
          <span className="font-mono text-sm text-hi/80 md:text-base">{num} —</span>
          <div>
            <h2 className="font-display text-3xl font-semibold lowercase tracking-tight text-white md:text-5xl">
              {title}
            </h2>
            {kicker && <p className="mt-2 text-sm text-hi md:text-base">{kicker}</p>}
          </div>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
