"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const occasions = [
  {
    name: "Janmashtami",
    subtitle: "Celebrate the birth of Krishna",
    image: "/poshak1.jpg",
  },
  {
    name: "Radha Ashtami",
    subtitle: "Graceful festive adornments",
    image: "/poshak2.jpg",
  },
  {
    name: "Diwali",
    subtitle: "A little extra golden radiance",
    image: "/poshak3.jpg",
  },
  {
    name: "Holi",
    subtitle: "Soft colours, joyful shringar",
    image: "/poshak4.jpg",
  },
  {
    name: "Govardhan Puja",
    subtitle: "Traditional devotional dressing",
    image: "/poshak5.jpg",
  },
  {
    name: "Janamotsav",
    subtitle: "Make a special day memorable",
    image: "/poshak6.jpg",
  },
];

export default function FestivalSection() {
  return (
    <section id="festivals" className="section bg-[#f8f4eb]">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="section-kicker justify-center">
            For every sacred celebration
          </p>

          <h2 className="section-heading">
            Celebrate Every
            <br />
            <span className="italic">Divine Occasion</span>
          </h2>

          <p className="section-description mx-auto">
            From beloved festivals to intimate daily rituals, find thoughtful
            details for every special moment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {occasions.map((occasion, index) => (
            <motion.a
              key={occasion.name}
              href={getWhatsAppUrl(
                `Hello, I am looking for a Laddu Gopal outfit or shringar collection for ${occasion.name}. Please share suitable options.`,
              )}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group relative block aspect-[4/5] overflow-hidden bg-[#e4dac8]"
            >
              <Image
                src={occasion.image}
                alt={`${occasion.name} Laddu Gopal shringar inspiration`}
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 32vw"
                className="product-image object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102d3b]/90 via-[#102d3b]/10 to-transparent" />

              <div className="absolute inset-3 border border-transparent transition-colors duration-300 group-hover:border-[#e1c98e]/80" />

              <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-6 sm:bottom-6">
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#e1c98e] sm:text-[10px]">
                  Made for the moment
                </p>

                <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                  {occasion.name}
                </h3>

                <p className="mt-2 hidden text-xs leading-5 text-white/75 sm:block">
                  {occasion.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-3 text-[10px] sm:text-xs">
                  <span>Explore on WhatsApp</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl(
              "Hello, please share your complete Laddu Gopal festival collection for Janmashtami, Diwali and other special occasions.",
            )}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Explore Festival Collection
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
