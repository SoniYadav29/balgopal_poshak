"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/product";

export default function CategorySection() {
  return (
    <section id="collections" className="section bg-[#f8f4eb]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="section-kicker">A world of divine details</p>
            <h2 className="section-heading max-w-2xl">
              Explore Our
              <br />
              <span className="italic">Divine Collection</span>
            </h2>
          </div>

          <p className="section-description mt-0 max-w-sm">
            Thoughtfully selected poshak and shringar pieces to make every
            moment with your Laddu Gopal feel special.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`#bestsellers`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative"
              aria-label={`Explore ${category.name} products`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8dfcf]">
                <Image
                  src={category.image}
                  alt={`${category.name} collection for Laddu Gopal`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  className="product-image object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102d3b]/90 via-[#102d3b]/5 to-transparent" />

                <span className="absolute left-4 top-4 flex size-10 items-center justify-center border border-[#e1c98e]/60 bg-[#102d3b]/55 font-serif text-sm text-[#e1c98e] backdrop-blur-sm">
                  {category.number}
                </span>

                <div className="absolute inset-3 border border-transparent transition-colors duration-300 group-hover:border-[#e1c98e]/75" />

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#e1c98e]">
                    The collection
                  </p>

                  <h3 className="font-serif text-3xl leading-tight">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/75">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4 text-xs">
                    <span>Explore Collection</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
