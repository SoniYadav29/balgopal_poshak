import { Camera, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

import {
  BRAND_NAME,
  BRAND_TAGLINE,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/lib/config";

import { getCallUrl, getGeneralMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop Collection", href: "#bestsellers" },
  { label: "Poshak", href: "#collections" },
  { label: "Jewellery", href: "#collections" },
  { label: "Pagdi & Mukut", href: "#collections" },
  { label: "Shringar Sets", href: "#collections" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const supportLinks = [
  { label: "Size Guide", href: "#size-guide" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Festival Collection", href: "#festivals" },
  { label: "Customer Reviews", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b222d] pb-24 text-white md:pb-0">
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 border-b border-[#b99a5b]/25 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.08em] text-[#e1c98e]">
                {BRAND_NAME}
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.17em] text-white/55">
                {BRAND_TAGLINE}
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Beautiful poshak, jewellery and shringar for your beloved Laddu
              Gopal, chosen with devotion and care.
            </p>

            <a
              href={getWhatsAppUrl(getGeneralMessage())}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-[#b99a5b]/60 px-4 py-3 text-xs text-[#e1c98e] transition hover:bg-[#e1c98e] hover:text-[#102d3b]"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#e1c98e]">Explore</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/60 transition hover:text-[#e1c98e]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#e1c98e]">Customer Care</h3>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/60 transition hover:text-[#e1c98e]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={getWhatsAppUrl(
                    "Hello, please share your delivery options, shipping charges and expected delivery timelines.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-white/60 transition hover:text-[#e1c98e]"
                >
                  Shipping Enquiries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#e1c98e]">
              Stay Connected
            </h3>

            <p className="mt-5 text-xs leading-6 text-white/60">
              Discover new arrivals and find something special for every divine
              occasion.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Instagram"
                className="flex size-11 items-center justify-center border border-white/20 text-[#e1c98e] transition hover:border-[#e1c98e] hover:bg-[#e1c98e] hover:text-[#102d3b]"
              >
                <Camera size={19} />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Facebook"
                className="flex size-11 items-center justify-center border border-white/20 text-[#e1c98e] transition hover:border-[#e1c98e] hover:bg-[#e1c98e] hover:text-[#102d3b]"
              >
                <span
                  className="font-sans text-xl font-bold"
                  aria-hidden="true"
                >
                  f
                </span>
              </a>

              <a
                href={getCallUrl()}
                aria-label="Call the business"
                className="flex size-11 items-center justify-center border border-white/20 text-[#e1c98e] transition hover:border-[#e1c98e] hover:bg-[#e1c98e] hover:text-[#102d3b]"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-lg italic text-[#e1c98e]">
            Made with ♥ for your beloved Laddu Gopal
          </p>
        </div>
      </div>
    </footer>
  );
}
