import {
  BarChart3,
  Bot,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type {
  FaqItem,
  Feature,
  FooterColumn,
  LogoItem,
  NavLink,
  PricingPlan,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Nexlify",
  tagline: "Ship faster. Convert more.",
  description:
    "The modern SaaS platform that helps teams launch, scale, and convert with clarity — from first click to paid customer.",
  url: "https://nexlify.app",
};

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const logos: LogoItem[] = [
  { name: "Orbit Labs", initials: "OL" },
  { name: "Vertex", initials: "VX" },
  { name: "Northwind", initials: "NW" },
  { name: "Pulse AI", initials: "PA" },
  { name: "Stackly", initials: "ST" },
];

export const features: Feature[] = [
  {
    title: "Lightning Workflows",
    description:
      "Automate repetitive tasks and keep your team focused on high-impact work.",
    icon: Zap,
  },
  {
    title: "AI Copilot",
    description:
      "Get contextual suggestions that help you write, analyze, and ship faster.",
    icon: Bot,
  },
  {
    title: "Realtime Analytics",
    description:
      "Track funnel health, retention, and revenue with live dashboards.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    description:
      "SOC2-ready controls, SSO, and audit logs built for regulated teams.",
    icon: ShieldCheck,
  },
  {
    title: "Modular Toolkit",
    description:
      "Compose features like blocks — activate only what your product needs.",
    icon: Layers,
  },
  {
    title: "Conversion Insights",
    description:
      "Spot drop-offs early and turn experiments into measurable growth.",
    icon: Sparkles,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For founders validating product-market fit.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    cta: "Start free trial",
    features: [
      "Up to 3 team members",
      "Core analytics",
      "Email support",
      "2 active workflows",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams that need speed and depth.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    cta: "Get started",
    popular: true,
    features: [
      "Unlimited team members",
      "Advanced funnels",
      "AI Copilot",
      "Priority support",
      "Custom domains",
    ],
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced security needs.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    cta: "Talk to sales",
    features: [
      "Dedicated success manager",
      "SSO & SCIM",
      "Custom SLAs",
      "On-prem options",
      "Security reviews",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Elena Vargas",
    role: "Head of Growth",
    company: "Orbit Labs",
    quote:
      "Nexlify cut our activation time in half. The conversion insights alone paid for the annual plan in week one.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Founder",
    company: "Pulse AI",
    quote:
      "We replaced three tools with one clean workflow. Our team finally ships without context-switching chaos.",
    rating: 5,
  },
  {
    name: "Sofia Rahman",
    role: "Product Lead",
    company: "Stackly",
    quote:
      "The UI feels premium and the demo experience sells itself. Our trial-to-paid rate jumped 28%.",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Can I try Nexlify before paying?",
    answer:
      "Yes. Every plan includes a 14-day free trial with full Pro features. No credit card required to start.",
  },
  {
    question: "How does yearly billing work?",
    answer:
      "Yearly billing locks in two months free compared to monthly. You can switch billing cycles anytime from your workspace settings.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If Nexlify is not the right fit within the first 30 days of a paid subscription, contact support for a full refund.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use encryption in transit and at rest, role-based access controls, and continuous monitoring. Enterprise plans include SSO and audit logs.",
  },
  {
    question: "Can I migrate from another tool?",
    answer:
      "Absolutely. Our onboarding team helps import users, workflows, and historical analytics so you can go live without downtime.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];
