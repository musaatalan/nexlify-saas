"use client";

import { motion } from "framer-motion";
import { logos } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface/60 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground"
        >
          Trusted by 500+ teams
        </motion.p>
        <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex h-16 items-center justify-center rounded-lg border border-border/70 bg-card/50 px-4"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted/50 text-xs font-bold tracking-wide">
                  {logo.initials}
                </span>
                <span className="text-sm font-semibold">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
