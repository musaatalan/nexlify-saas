"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="cta" className="px-4 pb-20 sm:px-6 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/20 via-card to-secondary/15 px-6 py-14 text-center sm:px-12"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to convert more of your traffic?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join 500+ teams already using Nexlify to launch faster and grow with
            confidence. Start your free trial in under two minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#pricing">
                Create free account
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#product">Watch live demo</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
