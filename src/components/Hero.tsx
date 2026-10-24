"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { getGeneralMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: false,
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.85,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#102d3b] text-[#fffdf8] md:min-h-[820px]"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_45%,rgba(185,154,91,0.2),transparent_40%),linear-gradient(110deg,#102d3b_0%,#143b4a_55%,#102d3b_100%)]" />

      <div
        aria-hidden="true"
        className="absolute inset-5 -z-10 border border-[#ee810045] md:inset-8"
      />

      <div
        aria-hidden="true"
        className="absolute -right-28 top-24 -z-10 size-[480px] rounded-full border border-[#ee810045] md:right-[-90px] md:size-[680px]"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 -z-10 size-[420px] rounded-full bg-[#d5b776]/10 blur-[100px] md:size-[600px]"
      />

      <div className="container grid min-h-[760px] items-center gap-8 pb-20 pt-32 md:min-h-[820px] md:grid-cols-[0.95fr_1.05fr] md:pb-16 md:pt-32">
        <div className="relative z-10 max-w-xl">
          <motion.div
            {...reveal(0.12)}
            className="section-kicker !text-[#e1c98e]"
          >
            The art of divine dressing
          </motion.div>

          <motion.h1
            {...reveal(0.24)}
            className="mt-5 font-serif text-[clamp(48px,7vw,86px)] leading-[0.98] tracking-[-0.035em] text-[#fffaf0]"
          >
            Dress Your
            <br />
            Laddu Gopal
            <br />
            <span className="italic text-[#e1c98e]">in Divine Elegance.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.4)}
            className="mt-7 max-w-[430px] text-sm leading-8 text-[#e1dfd5]/80 md:text-base"
          >
            Premium poshak, delicate jewellery and beautiful shringar,
            thoughtfully selected for your beloved Bal Gopal.
          </motion.p>

          <motion.div
            {...reveal(0.54)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#collections" className="button button-gold">
              Explore Collection
              <ArrowUpRight size={17} />
            </a>

            <a
              href={getWhatsAppUrl(getGeneralMessage())}
              target="_blank"
              rel="noreferrer"
              className="button border border-white/30 text-white hover:border-[#e1c98e] hover:text-[#e1c98e]"
            >
              <MessageCircle size={17} />
              Order on WhatsApp
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.68)}
            className="mt-12 flex items-center gap-4 border-t border-[#ee810045] pt-6"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-[#ee810045] font-serif text-xl text-[#e1c98e]">
              ❋
            </span>
            <div>
              <p className="text-xs font-medium tracking-wide text-white">
                A little expression of devotion
              </p>
              <p className="mt-1 text-xs text-white/55">
                Poshak · Jewellery · Shringar
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.15, delay: 0.18 }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <div className="absolute inset-[8%] rounded-full bg-[#d9bb79]/20 blur-[70px]" />

          <div className="absolute inset-[6%] rounded-full border border-[#d6bc7e]/30" />
          <div className="absolute inset-[11%] rounded-full border border-dashed border-[#d6bc7e]/20" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#183b48] md:aspect-[0.88/1]">
            <Image
              src="/poshak1.jpg"
              alt="Laddu Gopal dressed in an elegant traditional poshak with decorative shringar"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 48vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102d3b]/45 via-transparent to-[#102d3b]/10" />

            <div className="absolute bottom-5 left-5 border-l border-[#ee8100] pl-4 md:bottom-8 md:left-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#ee8100]">
                Curated with devotion
              </p>
              <p className="mt-1 font-serif text-2xl text-white md:text-3xl">
                The Divine Edit
              </p>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 3, 0] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-[12%] text-4xl text-[#e1c98e] md:-right-5 md:text-5xl"
          >
            ❋
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-[35%] font-serif text-3xl text-[#e1c98e]/80 md:-left-8 md:text-4xl"
          >
            ✧
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
