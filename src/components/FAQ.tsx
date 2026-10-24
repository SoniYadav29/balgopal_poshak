"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const questions = [
  {
    question: "What sizes are available?",
    answer:
      "Our sample size guide includes Size 0 through Size 6 for poshak. Availability and actual measurements can vary by design, so please confirm the correct size with us before ordering.",
  },
  {
    question: "How do I select the correct Laddu Gopal size?",
    answer:
      "Measure your idol's height and compare it with the seller's sizing guidance. If you are unsure, contact us on WhatsApp and we can help you understand which measurements to check.",
  },
  {
    question: "Can I order through WhatsApp?",
    answer:
      "Yes. Open any product and select Order on WhatsApp. A message containing the product name will be prepared for you. You can confirm availability, sizing, pricing and delivery with our team.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Please contact us with your delivery PIN code to confirm whether your location is serviceable and what shipping charges apply.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on product availability, preparation and destination. Please confirm the expected dispatch and delivery dates before placing your order.",
  },
  {
    question: "Can I customize a dress?",
    answer:
      "Customization depends on the design and current availability. Contact us on WhatsApp with your preferred colours, size and occasion to discuss the options.",
  },
  {
    question: "Can I order jewellery separately?",
    answer:
      "Yes, you can enquire about individual jewellery pieces and accessories. Please ask us to confirm availability and the contents of any set before ordering.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Contact us through the same WhatsApp conversation used to place your order. We can share the latest available order and shipment updates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Please confirm the currently accepted payment methods with our team before making a payment. Never share your banking password, PIN or OTP in a chat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-[#eee5d4]">
      <div className="container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="section-kicker">A little guidance</p>

          <h2 className="section-heading">
            Frequently
            <br />
            <span className="italic">Asked Questions</span>
          </h2>

          <p className="section-description">
            Everything you need to know before choosing something beautiful for
            your beloved Laddu Gopal.
          </p>

          <div className="mt-8 border border-[#b99a5b]/35 bg-[#f8f4eb] p-6">
            <p className="font-serif text-2xl text-[#102d3b]">
              Still have a question?
            </p>
            <p className="mt-2 text-xs leading-6 text-[#77736a]">
              We are happy to help you find the right size, style or set.
            </p>
            <a
              href={getWhatsAppUrl(
                "Hello, I have a question about your Laddu Gopal poshak and shringar collection.",
              )}
              target="_blank"
              rel="noreferrer"
              className="button button-primary mt-5 w-full"
            >
              <MessageCircle size={17} />
              Ask Us on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-[#b99a5b]/35">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-answer-${index}`;

            return (
              <div key={item.question} className="border-b border-[#b99a5b]/35">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="font-serif text-xl text-[#102d3b] sm:text-2xl">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-[#a4874b] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#6e695f]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
