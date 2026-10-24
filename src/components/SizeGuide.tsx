"use client";

import { motion } from "framer-motion";
import { MessageCircle, Ruler } from "lucide-react";
import { getSizeHelpMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const sizes = [
  { size: "0", note: "Smallest idol sizes" },
  { size: "1", note: "Small idols" },
  { size: "2", note: "Small to medium" },
  { size: "3", note: "Medium idols" },
  { size: "4", note: "Medium to large" },
  { size: "5", note: "Large idols" },
  { size: "6", note: "Larger idol sizes" },
];

export default function SizeGuide() {
  return (
    <section id="size-guide" className="section bg-[#102d3b] text-white">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker !text-[#e1c98e]">The perfect fit</p>

            <h2 className="section-heading !text-[#fffaf0]">
              A Beautiful Fit
              <br />
              <span className="italic text-[#e1c98e]">for Your Gopal</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/70">
              Laddu Gopal dress sizes can vary by design and seller. Measure
              your idol&apos;s height and confirm the fit with us before
              ordering.
            </p>

            <a
              href={getWhatsAppUrl(getSizeHelpMessage())}
              target="_blank"
              rel="noreferrer"
              className="button button-gold mt-8"
            >
              <MessageCircle size={17} />
              Help Me Choose a Size
            </a>

            <p className="mt-4 text-xs leading-6 text-white/50">
              These size labels are a general guide, not standardized garment
              measurements. Please confirm dimensions before purchase.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="border border-[#b99a5b]/35 bg-white/[0.035] p-4 sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
              <Ruler className="text-[#e1c98e]" size={22} />
              <div>
                <h3 className="font-serif text-2xl">Laddu Gopal Size Guide</h3>
                <p className="mt-1 text-xs text-white/55">
                  Seven commonly used size labels
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {sizes.map((item, index) => (
                <motion.div
                  key={item.size}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="border border-[#b99a5b]/25 px-3 py-5 text-center transition-colors hover:border-[#e1c98e]/70"
                >
                  <p className="font-serif text-4xl text-[#e1c98e]">
                    {item.size}
                  </p>
                  <p className="mt-2 text-[10px] leading-5 text-white/65">
                    {item.note}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 border-l-2 border-[#b99a5b] bg-white/[0.04] p-4">
              <p className="text-xs font-semibold text-[#e1c98e]">
                Before you order
              </p>
              <p className="mt-2 text-xs leading-6 text-white/65">
                Share your idol&apos;s height and, if possible, a photo of your
                current outfit with our team on WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
