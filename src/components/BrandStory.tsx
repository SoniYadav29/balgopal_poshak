"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="overflow-hidden bg-[#eee5d4]">
      <div className="container grid items-center gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute -left-4 -top-4 size-24 border-l border-t border-[#b99a5b] md:-left-7 md:-top-7" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#d8cbb5]">
            <Image
              src="/poshak6.jpg"
              alt="Traditional Laddu Gopal shringar presented with care and devotion"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -right-3 bg-[#102d3b] p-5 text-center sm:-right-5 sm:p-7">
            <Heart className="mx-auto text-[#e1c98e]" size={23} />
            <p className="mt-2 font-serif text-xl text-white">Made with love</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/60">
              In every detail
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pt-4 md:pt-0"
        >
          <p className="section-kicker">Our philosophy</p>

          <h2 className="section-heading">
            Made With Devotion,
            <br />
            <span className="italic">Designed With Love</span>
          </h2>

          <div className="gold-divider mt-7" />

          <p className="mt-7 text-sm leading-8 text-[#625e54]">
            Every outfit is more than a dress. It is a little expression of love
            for your Laddu Gopal.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#625e54]">
            From selecting beautiful fabrics to adding delicate embellishments,
            every piece is chosen with care so your beloved Bal Gopal can be
            dressed beautifully for everyday worship and every special occasion.
          </p>

          <div className="mt-8 flex items-start gap-4 border-t border-[#b99a5b]/35 pt-6">
            <Sparkles className="mt-1 shrink-0 text-[#a4874b]" size={20} />

            <div>
              <h3 className="font-serif text-2xl text-[#102d3b]">
                A little more than beautiful
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#77736a]">
                We believe every detail should feel special, from the finishing
                touches to the moment your order arrives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
