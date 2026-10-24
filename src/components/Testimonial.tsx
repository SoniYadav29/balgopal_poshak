"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Absolutely beautiful quality. The finishing is even better than the pictures!",
    name: "Priya",
    city: "Mumbai",
  },
  {
    quote:
      "My Laddu Gopal looked so adorable in the dress. The presentation was lovely.",
    name: "Neha",
    city: "Delhi",
  },
  {
    quote:
      "Loved the jewellery and poshak. The details made the whole shringar feel special.",
    name: "Ritu",
    city: "Jaipur",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section bg-[#f8f4eb]">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="section-kicker justify-center">
            Notes from our customers
          </p>
          <h2 className="section-heading">
            What Our <span className="italic">Customers Say</span>
          </h2>
          <p className="section-description mx-auto">
            Every thoughtful detail matters. Here is what our customers have to
            say about their experience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative border border-[#b99a5b]/35 bg-[#fffdf8] p-7 sm:p-9"
            >
              <Quote
                size={27}
                strokeWidth={1.2}
                className="absolute right-7 top-7 text-[#b99a5b]/50"
              />

              <div
                className="flex gap-1 text-[#b99a5b]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="mt-7 min-h-[105px] font-serif text-2xl leading-relaxed text-[#102d3b]">
                “{review.quote}”
              </p>

              <div className="mt-7 border-t border-[#b99a5b]/30 pt-5">
                <p className="text-sm font-semibold text-[#292923]">
                  {review.name}
                </p>
                <p className="mt-1 text-xs text-[#77736a]">{review.city}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
