"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const highlights = [
  "Live funnel visualization with cohort filters",
  "One-click experiment rollouts",
  "Shared playbooks across product and growth",
  "Native integrations with Slack, HubSpot, and Stripe",
];

export function FeatureHighlight() {
  return (
    <section id="product" className="bg-surface/40 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Product"
          title="See every conversion moment clearly"
          description="A focused workspace that turns product usage into actionable growth loops."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Interactive demo built for decision makers
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Walk stakeholders through activation, retention, and monetization
              without exporting spreadsheets. Share a live view, annotate
              insights, and align the next experiment in minutes.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" asChild>
              <a href="#cta">Explore the demo</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/25 to-secondary/20 blur-xl" />
              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-glow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold">Activation Journey</p>
                  <span className="rounded-md bg-accent/15 px-2 py-1 text-xs font-medium text-accent">
                    Live
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { step: "Signup", value: "100%", width: "100%" },
                    { step: "Onboarding", value: "78%", width: "78%" },
                    { step: "First value", value: "54%", width: "54%" },
                    { step: "Paid", value: "31%", width: "31%" },
                  ].map((row) => (
                    <div key={row.step}>
                      <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                        <span>{row.step}</span>
                        <span>{row.value}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                          style={{ width: row.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs text-muted-foreground">Recommended next action</p>
                  <p className="mt-1 text-sm font-medium">
                    Shorten onboarding checklist from 7 to 4 steps to lift activation by ~9%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-glow-sm">
              <p className="text-sm font-semibold">Weekly revenue pulse</p>
              <div className="mt-6 grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }).map((_, index) => {
                  const height = 30 + ((index * 17) % 70);
                  return (
                    <div key={index} className="flex h-28 items-end">
                      <div
                        className="w-full rounded-sm bg-secondary/70"
                        style={{ height: `${height}%`, opacity: 0.45 + (index % 5) * 0.1 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              From insight to experiment in one screen
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nexlify connects product signals to growth actions. Prioritize the
              highest-leverage experiment, assign owners, and track impact without
              leaving the dashboard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
