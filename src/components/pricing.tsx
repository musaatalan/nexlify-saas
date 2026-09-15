"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans that scale with you"
          description="Start free, upgrade when you are ready. Yearly billing saves two months."
        >
          <div className="mt-8 inline-flex items-center rounded-lg border border-border bg-muted/50 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                billing === "monthly"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                billing === "yearly"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <span className="ml-2 text-xs font-semibold text-accent">-20%</span>
            </button>
          </div>
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-xl border bg-card p-6 sm:p-8",
                  plan.popular
                    ? "border-accent shadow-glow scale-[1.02]"
                    : "border-border"
                )}
              >
                {plan.popular ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Popular
                  </Badge>
                ) : null}

                <div>
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-end gap-1">
                    {typeof price === "number" ? (
                      <>
                        <span className="font-display text-4xl font-bold">
                          ${price}
                        </span>
                        <span className="pb-1 text-sm text-muted-foreground">
                          /month
                        </span>
                      </>
                    ) : (
                      <span className="font-display text-4xl font-bold">
                        Custom
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="#cta">{plan.cta}</a>
                </Button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
