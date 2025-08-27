"use client";

import { useMemo } from "react";
import {
  ArrowRight,
  Mail,
  Calendar,
  Globe,
  Github,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MobileNav } from "@/components/mobile-nav";
import { useIntersectionObserver } from "@/lib/hooks";
import { cn } from "@/lib/utils";

// =====================
// PROFILE
// =====================
const OWNER = {
  name: "Luis Hernandez",
  tag: "Websites, AI automation, and growth systems for small businesses",
  email: "luis@example.com", // set your email
  calendly: "https://calendly.com/your-handle/intro", // optional
  github: "", // optional
  location: "SoCal, USA",
};

// =====================
// PROJECTS (showcase your 2 builds here)
// =====================
const PROJECTS = [
  {
    title: "Legginx — E‑commerce Website",
    live: "https://www.legginx.com/",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop",
    summary:
      "Storefront build with clean product pages and a streamlined checkout path.",
    results: [
      "Fast, mobile‑first UX",
      "Clear product hierarchy",
      "Easy content and product updates",
    ],
    stack: ["React", "Tailwind", "Vercel"],
  },
  {
    title: "Parking Technical Services — Business Site",
    live: "https://www.parkingtechnicalservices.com/",
    cover:
      "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop",
    summary:
      "Informational site with service overview and contact funnel for inquiries.",
    results: [
      "Clear services and CTA",
      "Contact form routed to email",
      "SEO‑friendly structure",
    ],
    stack: ["React", "Tailwind", "Cloudflare Pages"],
  },
];

const LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Stripe.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo-cloudflare-2022.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Maps_Logo_2020.svg",
];

const SERVICES = [
  {
    name: "High‑speed websites",
    desc: "Clean, modern sites that load fast and convert.",
  },
  {
    name: "AI chat + automations",
    desc: "Lead capture, routing, and follow‑up without manual work.",
  },
  {
    name: "Local SEO setup",
    desc: "Maps, reviews, and on‑page basics dialed in.",
  },
  {
    name: "Analytics & A/B",
    desc: "Simple dashboards and tests that improve results weekly.",
  },
];

export default function LeftclickStyle() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [heroRef, isHeroIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [logosRef, isLogosIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [servicesRef, isServicesIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [workRef, isWorkIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [processRef, isProcessIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [ctaRef, isCtaIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <motion.header
        className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-brand" />
            <span className="font-semibold tracking-tight">{OWNER.name}</span>
          </motion.a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <motion.a
              href="#work"
              className="hover:text-brand transition-colors"
              whileHover={{ y: -2 }}
            >
              Work
            </motion.a>
            <motion.a
              href="#services"
              className="hover:text-brand transition-colors"
              whileHover={{ y: -2 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#process"
              className="hover:text-brand transition-colors"
              whileHover={{ y: -2 }}
            >
              Process
            </motion.a>
            <motion.a
              href="#contact"
              className="hover:text-brand transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </nav>
          <div className="flex items-center gap-2">
            {OWNER.github && (
              <motion.a
                href={OWNER.github}
                target="_blank"
                className="p-2 rounded-xl hover:bg-muted transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
            <motion.a
              href={`mailto:${OWNER.email}`}
              className="p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <MobileNav />
          </div>
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <motion.section
          ref={heroRef}
          className="py-20 md:py-32"
          variants={containerVariants}
          initial="hidden"
          animate={isHeroIntersecting ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tighter"
                variants={itemVariants}
              >
                Digital solutions for growing businesses.
              </motion.h1>
              <motion.p
                className="mt-6 text-muted-foreground max-w-prose leading-relaxed"
                variants={itemVariants}
              >
                {OWNER.tag}
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                variants={itemVariants}
              >
                {OWNER.calendly && (
                  <Button asChild className="rounded-lg bg-brand hover:bg-brand/80">
                    <a href={OWNER.calendly} target="_blank">
                      Book intro call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                <Button variant="secondary" asChild className="rounded-lg">
                  <a href="#work">See work</a>
                </Button>
              </motion.div>
              <motion.div
                className="mt-8 text-sm text-muted-foreground"
                variants={itemVariants}
              >
                Based in {OWNER.location}
              </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <div className="aspect-video rounded-lg overflow-hidden border shadow-sm bg-card">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                  alt="Hero visual"
                />
              </div>
            </motion.div>
          </div>

          {/* LOGOS */}
          <motion.div
            ref={logosRef}
            className="mt-20 border rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isLogosIntersecting ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Powering technology for world-class companies
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-8 opacity-70">
              {LOGOS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="logo"
                  className="h-8 object-contain mx-auto"
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* SERVICES */}
        <motion.section
          id="services"
          ref={servicesRef}
          className="py-20 md:py-32 border-t"
          variants={containerVariants}
          initial="hidden"
          animate={isServicesIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Services</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="rounded-lg bg-card h-full border-transparent shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{s.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {s.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WORK */}
        <motion.section
          id="work"
          ref={workRef}
          className="py-20 md:py-32 border-t"
          variants={containerVariants}
          initial="hidden"
          animate={isWorkIntersecting ? "visible" : "hidden"}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Recent work
            </h2>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-brand transition-colors"
            >
              Start a project
            </a>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="overflow-hidden rounded-lg bg-card hover:shadow-md transition-shadow h-full border-transparent shadow-sm">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          className="text-sm inline-flex items-center gap-1.5 hover:text-brand transition-colors"
                        >
                          Visit <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{p.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {p.results.map((r, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-brand" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-muted border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROCESS */}
        <motion.section
          id="process"
          ref={processRef}
          className="py-20 md:py-32 border-t"
          variants={containerVariants}
          initial="hidden"
          animate={isProcessIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple process</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {["Scope", "Build", "Launch + iterate"].map((step, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="rounded-lg bg-card h-full border-transparent shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {i + 1}. {step}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {i === 0 && (
                      <p>
                        We define the smallest version that gets you live results.
                        Clear outcomes, no fluff.
                      </p>
                    )}
                    {i === 1 && (
                      <p>
                        Design and build in a fast stack. You review once
                        mid‑week. We keep scope tight.
                      </p>
                    )}
                    {i === 2 && (
                      <p>
                        Ship, measure, and tune. Optional A/B tests and
                        automations to keep gains compounding.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          id="contact"
          ref={ctaRef}
          className="py-20 md:py-32 border-t"
          initial={{ opacity: 0, y: 20 }}
          animate={isCtaIntersecting ? { opacity: 1, y: 0 } : {}}
        >
          <div className="rounded-lg border p-8 md:p-12 bg-card text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a 15‑minute intro or send a short brief.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              {OWNER.calendly && (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button asChild className="rounded-lg bg-brand hover:bg-brand/80">
                    <a href={OWNER.calendly} target="_blank">
                      Book intro call
                      <Calendar className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              )}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="secondary" asChild className="rounded-lg">
                  <a
                    href={`mailto:${OWNER.email}?subject=Project%20inquiry&body=Goal%3A%20%0ABudget%3A%20%0ATimeline%3A%20%0AExamples%3A%20`}
                  >
                    Email a brief
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span suppressHydrationWarning>
            © {year} {OWNER.name}
          </span>
          <a href="#" className="hover:text-brand transition-colors">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

// Notes
// 1) Replace OWNER fields and the two PROJECTS with your real links and results.
// 2) Drop this into Next.js (app/page.tsx) or any React entry with Tailwind.
// 3) Deploy on Vercel or Cloudflare Pages and point your domain.
