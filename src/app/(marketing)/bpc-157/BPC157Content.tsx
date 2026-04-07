"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import CountUp from "@/components/motion/CountUp";
import Accordion from "@/components/ui/Accordion";

/* ─── Data ────────────────────────────────────────────────────────── */

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    alt: "Woman stretching during workout",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    alt: "Fit person exercising",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&q=80",
    alt: "Person practicing yoga",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    alt: "Person training",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    alt: "Muscular athlete",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
    alt: "Fitness recovery",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&q=80",
    alt: "Active person outdoors",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

const benefits = [
  "Accelerated tissue repair & healing",
  "Clinically studied peptide protocols",
  "No membership or hidden fees \u2014 everything included",
  "Starting at just $149/month + free shipping",
  "HSA/FSA Eligible",
];

const publications = [
  "PubMed",
  "Journal of Physiology",
  "NCBI",
  "Growth Factors",
  "Peptides Journal",
  "Current Pharmaceutical Design",
];

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80",
    price: "Starting at $149",
    title: "BPC-157 Injections",
    desc: "Subcutaneous injection protocol",
    popular: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80",
    price: "Starting at $199",
    title: "BPC-157 + TB-500 Stack",
    desc: "Enhanced recovery protocol",
    popular: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=500&q=80",
    price: "Starting at $249",
    title: "Elite Recovery Protocol",
    desc: "BPC-157 + TB-500 + GHK-Cu",
    popular: false,
  },
];

const testimonials = [
  "After 3 weeks my knee pain was nearly gone. Wish I started sooner.",
  "The gut healing benefits were incredible. I finally feel normal again.",
  "Back to the gym in half the time my doctor predicted. BPC-157 is legit.",
  "Post-surgery recovery was night and day compared to my last procedure.",
  "My shoulder tendinitis that lingered for years finally started to resolve.",
  "The convenience of having everything prescribed and shipped is unbeatable.",
];

const stats = [
  {
    value: 87,
    suffix: "%",
    label: "Reported significant improvement in recovery time",
  },
  { value: 4, suffix: "-6 wks", label: "Average time to notice results" },
  { value: 93, suffix: "%", label: "Would recommend to others" },
  { value: 24, suffix: "/7", label: "Physician support included" },
];

const steps = [
  {
    number: 1,
    title: "Get Approved",
    description:
      "Complete a quick online health evaluation. Our medical team reviews your history and goals to determine if BPC-157 is right for you.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
  },
  {
    number: 2,
    title: "Get Prescribed",
    description:
      "A licensed physician creates your personalized BPC-157 protocol \u2014 dosage, frequency, and duration tailored to your specific recovery needs.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80",
  },
  {
    number: 3,
    title: "Receive your Rx",
    description:
      "Your compounded BPC-157 ships from a licensed US pharmacy directly to your door with everything you need to begin treatment.",
    image:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=500&q=80",
  },
];

const faqItems = [
  {
    question: "What is BPC-157 and how does it work?",
    answer:
      "BPC-157 (Body Protection Compound-157) is a synthetic peptide consisting of 15 amino acids derived from a protective protein found naturally in human gastric juice. It promotes healing by stimulating the formation of new blood vessels (angiogenesis), modulating growth factor expression, and reducing inflammation through multiple signaling pathways. Research has demonstrated its ability to accelerate the repair of tendons, ligaments, muscles, the gut lining, and even nerve tissue.",
  },
  {
    question: "How much does the program cost?",
    answer:
      "BPC-157 injection protocols start at $149/month. Our combination protocols with TB-500 start at $199/month, and our elite recovery protocol including GHK-Cu starts at $249/month. All programs include physician consultation, your prescription medication from a licensed US pharmacy, supplies, free shipping, and unlimited 24/7 provider support. There are no hidden fees, membership dues, or surprise charges.",
  },
  {
    question: "Is BPC-157 safe?",
    answer:
      "BPC-157 has an excellent safety profile based on extensive preclinical research. It is derived from a naturally occurring protective protein in your own body. Side effects are rare and typically mild, including occasional injection site irritation or brief lightheadedness. Your prescribing physician will review your complete health history to ensure BPC-157 is appropriate for you, and our medical team is available 24/7 throughout your treatment.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most patients notice initial improvements within 2-4 weeks, with significant results typically observed by weeks 4-6. The timeline varies based on the condition being treated, its severity, and individual healing capacity. Gut-related benefits often appear sooner, while structural tissue repairs like tendons and ligaments may take the full 8-12 week protocol. Your physician will help set realistic expectations based on your specific situation.",
  },
  {
    question: "Do I need a prescription?",
    answer:
      "Yes. BPC-157 is a prescription medication that requires evaluation by a licensed physician. Our streamlined process makes this simple \u2014 complete a brief online health evaluation, and if approved, a licensed provider will prescribe your personalized protocol. The entire process from application to receiving your medication typically takes 3-5 business days.",
  },
];

const recoveryGoals = [
  "Joint & tendon repair",
  "Post-surgical recovery",
  "Gut health restoration",
  "General healing & wellness",
];

/* ─── Component ───────────────────────────────────────────────────── */

export default function BPC157Content() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* Social proof */}
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Join 2,500+ patients nationwide
            </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.1}>
            <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-forest-900 md:text-5xl lg:text-6xl">
              Finally serious about recovery? So are we. Healing{" "}
              <span className="text-sage">made easy</span> with
              physician-prescribed BPC-157
            </h1>
          </FadeIn>

          {/* Benefits checklist */}
          <FadeIn delay={0.2}>
            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left sm:text-center">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-gray-700 sm:justify-center"
                >
                  <span className="mt-0.5 shrink-0 text-sage">&#10003;</span>
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Link
                href="#recovery-goal"
                className="inline-block rounded-full bg-forest-900 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-forest-800"
              >
                AM I A CANDIDATE?
              </Link>
            </div>
          </FadeIn>

          {/* Photo Mosaic */}
          <FadeIn delay={0.4}>
            <div className="mt-14 hidden grid-cols-5 gap-3 md:grid" style={{ gridAutoRows: "180px" }}>
              {heroImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative overflow-hidden rounded-2xl ${img.colSpan} ${img.rowSpan}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile mosaic — simpler 3-col */}
            <div className="mt-14 grid grid-cols-3 gap-3 md:hidden" style={{ gridAutoRows: "140px" }}>
              {heroImages.slice(0, 6).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 2 ? "row-span-2" : "row-span-1"}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Research Trust Bar ────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white py-8">
        <FadeIn>
          <p className="mb-6 text-center text-sm text-gray-500">
            Backed by peer-reviewed clinical research
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee items-center gap-8 whitespace-nowrap md:gap-12">
              {[...publications, ...publications].map((pub, i) => (
                <span
                  key={i}
                  className="shrink-0 text-lg font-bold text-gray-300 md:text-xl"
                >
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 3: Pricing / Product Cards ──────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading row */}
          <div className="mb-12 items-end justify-between gap-8 md:flex">
            <FadeIn className="max-w-lg">
              <h2 className="text-2xl font-bold md:text-4xl">
                <span className="text-forest-900">Physician-prescribed,</span>
                <br />
                <span className="text-sage">priced for results.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-4 max-w-md md:mt-0">
              <p className="text-gray-600">
                Every protocol includes physician consultation, compounded
                medication from a licensed US pharmacy, supplies, free shipping,
                and unlimited provider support.
              </p>
            </FadeIn>
          </div>

          {/* Product cards */}
          <StaggerChildren
            staggerDelay={0.15}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {products.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-lg"
              >
                {p.popular && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-sage px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
                <div className="relative aspect-square bg-warm-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-white p-6">
                  <p className="text-sm font-semibold text-sage">{p.price}</p>
                  <h3 className="mt-1 text-lg font-bold text-forest-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{p.desc}</p>
                  <Link
                    href="#recovery-goal"
                    className="mt-4 block w-full rounded-full bg-forest-900 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-forest-800"
                  >
                    GET STARTED
                  </Link>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Section 4: Big Testimonial Quote ────────────────────────── */}
      <section className="bg-warm-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              2,500+ Patients Agree
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-4 flex items-center justify-center gap-1 text-4xl text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <blockquote className="mt-6 text-3xl font-bold leading-tight text-forest-900 md:text-5xl">
              &ldquo;When nothing else worked,{" "}
              <span className="italic text-sage">BPC-157 did</span>&rdquo;
            </blockquote>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage text-xs text-white">
                &#10003;
              </span>
              Verified PeptideRx Customer
            </p>
          </FadeIn>
        </div>

        {/* Scrolling mini testimonials */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee gap-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="inline-flex w-64 shrink-0 flex-col rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="mb-2 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-xs">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="flex-1 text-sm text-gray-700">&ldquo;{t}&rdquo;</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sage text-[8px] text-white">
                    &#10003;
                  </span>
                  Verified Customer
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Stats ────────────────────────────────────────── */}
      <section className="bg-forest-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-12 text-center text-2xl font-bold md:text-4xl">
              The numbers speak for themselves.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-sage md:text-5xl">
                    <CountUp end={s.value} duration={2} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/70">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: How It Works Timeline ────────────────────────── */}
      <section className="bg-warm-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-forest-900 md:text-4xl">
              Begin your recovery journey with PeptideRx Direct.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              From evaluation to doorstep delivery, our streamlined process gets
              you started in days, not weeks. Every step is guided by licensed
              physicians who specialize in peptide therapy.
            </p>
          </FadeIn>

          {/* Desktop: two-column with sticky CTA left */}
          <div className="mt-12 gap-12 lg:flex">
            {/* Left sticky CTA (desktop only) */}
            <div className="hidden shrink-0 lg:block lg:w-72">
              <div className="sticky top-32">
                <FadeIn>
                  <p className="mb-4 text-sm text-gray-500">
                    Ready to begin?
                  </p>
                  <Link
                    href="#recovery-goal"
                    className="inline-block rounded-full bg-forest-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-forest-800"
                  >
                    Get Started
                  </Link>
                </FadeIn>
              </div>
            </div>

            {/* Timeline steps */}
            <div className="relative flex-1">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-sage/30 md:block" />

              <div className="space-y-12">
                {steps.map((step, i) => (
                  <FadeIn key={step.number} delay={i * 0.15}>
                    <div className="flex gap-6 md:gap-8">
                      {/* Step number circle */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-bold text-white shadow-md">
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-forest-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {step.description}
                        </p>
                        <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 text-center lg:hidden">
            <Link
              href="#recovery-goal"
              className="inline-block rounded-full bg-forest-900 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-forest-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: Support ──────────────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl items-center gap-12 md:flex">
          <FadeIn className="flex-1">
            <h2 className="text-2xl font-bold text-forest-900 md:text-4xl">
              Unlimited 24/7 support included.
            </h2>
            <p className="mt-4 text-gray-600">
              Your recovery doesn&apos;t stop at 5pm and neither do we. Every
              PeptideRx patient gets unlimited access to our dedicated clinical
              support team \u2014 physicians, nurses, and peptide specialists who
              know your protocol inside and out. Questions about dosing, side
              effects, or optimizing your results? We&apos;re here around the clock.
            </p>
            <Link
              href="#recovery-goal"
              className="mt-6 inline-block rounded-full bg-forest-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-forest-800"
            >
              Start Your Recovery
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} className="relative mt-8 aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl md:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80"
              alt="Medical support team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Section 8: FAQ ──────────────────────────────────────────── */}
      <section className="bg-warm-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-8 text-center text-2xl font-bold text-forest-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion items={faqItems} />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-center text-sm text-gray-500">
              Still have questions?{" "}
              <Link href="/contact" className="font-semibold text-sage underline">
                Talk to our team
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 9: Recovery Goal CTA ────────────────────────────── */}
      <section
        id="recovery-goal"
        className="bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-forest-900">
              What&apos;s your recovery goal?
            </h2>
            <p className="mt-2 text-gray-500">
              Select one to get started with your personalized plan.
            </p>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {recoveryGoals.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => setSelectedGoal(goal)}
                className={`rounded-2xl border-2 p-6 text-center font-semibold transition ${
                  selectedGoal === goal
                    ? "border-sage bg-sage/5 text-sage"
                    : "border-gray-200 text-forest-900 hover:border-sage"
                } cursor-pointer`}
              >
                {goal}
              </button>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3}>
            <div className="mt-8">
              <Link
                href="/intake"
                className="inline-block rounded-full bg-sage px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-sage-600"
              >
                Continue
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
