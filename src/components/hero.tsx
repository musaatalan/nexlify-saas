"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 glow-orb blur-2xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">Now in public beta</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {siteConfig.name}
            <span className="mt-2 block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              {siteConfig.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#cta">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#product">
                <Play className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/20 via-secondary/10 to-accent/20 blur-xl" />
          <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-glow">
            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-muted-foreground">
                app.nexlify.io / dashboard
              </span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[200px_1fr] sm:p-6">
              <aside className="hidden space-y-2 rounded-lg border border-border bg-surface p-3 sm:block">
                {["Overview", "Funnels", "Workflows", "Insights", "Settings"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-3 py-2 text-sm ${
                        index === 0
                          ? "bg-accent/15 font-medium text-accent"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </aside>
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "MRR", value: "$48.2k", delta: "+12%" },
                    { label: "Activation", value: "64%", delta: "+8%" },
                    { label: "Trials", value: "1,284", delta: "+21%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-border bg-surface p-4"
                    >
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="mt-1 font-display text-xl font-bold">{stat.value}</p>
                      <p className="mt-1 text-xs font-medium text-accent">{stat.delta}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium">Conversion velocity</p>
                    <p className="text-xs text-muted-foreground">Last 30 days</p>
                  </div>
                  <div className="flex h-36 items-end gap-2">
                    {[40, 55, 48, 70, 62, 80, 74, 88, 82, 95, 90, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/70 to-secondary/80"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
