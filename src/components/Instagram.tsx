"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/config";

const gallery = [
  {
    src: "/poshak1.jpg",
    alt: "Royal peacock Laddu Gopal poshak",
  },
  {
    src: "/poshak2.jpg",
    alt: "Beautiful floral Bal Gopal dress",
  },
  {
    src: "/poshak3.jpg",
    alt: "Designer Laddu Gopal outfit",
  },
  {
    src: "/poshak4.jpg",
    alt: "Traditional Laddu Gopal shringar set",
  },
];

function InstagramLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Instagram"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="overflow-hidden bg-[#faf7f0] py-20 md:py-28"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a17a35]">
            <InstagramLogo size={16} />
            Follow our journey
          </span>

          <h2
            id="instagram-heading"
            className="font-serif text-3xl font-medium text-[#17334a] sm:text-4xl md:text-5xl"
          >
            A Little Love on Instagram
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#77716a] sm:text-base">
            Discover handcrafted poshaks, beautiful shringar, and thoughtful
            details made with devotion.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#17334a] transition-colors hover:text-[#a17a35]"
          >
            <InstagramLogo size={18} />
            {INSTAGRAM_HANDLE}
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {gallery.map((item, index) => (
            <motion.a
              key={item.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Instagram to see more: ${item.alt}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm bg-[#eee5d6]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-[#102d43]/0 transition-colors duration-300 group-hover:bg-[#102d43]/45">
                <span className="scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <InstagramLogo size={30} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-[#8b8378]">
          Follow us for new collections, festive inspiration, and handcrafted
          creations.
        </p>
      </div>
    </section>
  );
}
