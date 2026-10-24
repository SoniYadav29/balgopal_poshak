"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/config";
import { getGeneralMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Size Guide", href: "#size-guide" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#b99a5b]/25 bg-[#f8f4eb]/95 shadow-sm backdrop-blur-xl"
          : "bg-[#f8f4eb]/80 backdrop-blur-md"
      }`}
    >
      <nav
        className="container flex min-h-[76px] items-center justify-between gap-5 transition-all duration-300"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="relative z-50 flex min-w-0 flex-col"
          aria-label={`${BRAND_NAME} home`}
        >
          <span className="font-serif text-2xl tracking-[0.08em] text-[#102d3b]">
            {BRAND_NAME}
          </span>
          <span className="mt-0.5 text-[9px] tracking-[0.16em] text-[#e3a100] sm:text-[10px]">
            {BRAND_TAGLINE}
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium text-[#514e45] transition-colors hover:text-[#a4874b]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={getWhatsAppUrl(getGeneralMessage())}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-11 items-center gap-2 bg-[#19475a] px-4 text-xs font-semibold text-[#e1c98e] transition hover:bg-[#17665f] md:inline-flex"
        >
          <MessageCircle size={16} />
          <span>Order on WhatsApp</span>
        </a>

        <button
          type="button"
          className="relative z-50 flex size-11 items-center justify-center text-[#e1c98e] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#f8f4eb] px-7 pb-12 pt-28 lg:hidden"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#a4874b]">
              Discover the collection
            </p>

            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.045 }}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-[#b99a5b]/25 py-4 font-serif text-2xl text-[#102d3b]"
              >
                {link.label}
                <ChevronDown className="-rotate-90 text-[#b99a5b]" size={17} />
              </motion.a>
            ))}

            <a
              href={getWhatsAppUrl(getGeneralMessage())}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="button button-primary mt-8 w-full"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>

            <p className="mt-auto pt-10 text-center font-serif text-lg italic text-[#897447]">
              Made with devotion, designed with love.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
