"use client";

import {
  MessageCircle,
  Phone,
  Camera,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import {
  BRAND_NAME,
  BUSINESS_HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_NUMBER,
} from "@/lib/config";

import { getCallUrl, getGeneralMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#102d3b] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 top-0 size-96 rounded-full border border-[#b99a5b]/20"
      />

      <div
        aria-hidden="true"
        className="absolute -right-10 top-10 size-72 rounded-full border border-[#b99a5b]/15"
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="section-kicker !text-[#e1c98e]">
              We would love to hear from you
            </p>

            <h2 className="max-w-2xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Let’s Find Something
              <br />
              <span className="italic text-[#e1c98e]">
                Beautiful for Your Gopal
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-white/65">
              Need help with sizing, selecting a poshak or finding the perfect
              shringar set? Get in touch with us directly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl(getGeneralMessage())}
                target="_blank"
                rel="noreferrer"
                className="button button-gold"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <a
                href={getCallUrl()}
                className="button border border-white/35 text-white hover:border-[#e1c98e] hover:text-[#e1c98e]"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>
          </div>

          <div className="border border-[#b99a5b]/35 bg-white/[0.035] p-6 sm:p-8">
            <p className="mb-6 font-serif text-3xl text-[#e1c98e]">
              Contact Details
            </p>

            <div className="space-y-6">
              <a
                href={getWhatsAppUrl(getGeneralMessage())}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4"
              >
                <MessageCircle
                  className="mt-1 shrink-0 text-[#e1c98e]"
                  size={20}
                />
                <div>
                  <p className="text-xs text-white/50">WhatsApp</p>
                  <p className="mt-1 text-sm">{PHONE_NUMBER}</p>
                </div>
              </a>

              <a href={getCallUrl()} className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-[#e1c98e]" size={19} />
                <div>
                  <p className="text-xs text-white/50">Call to Order</p>
                  <p className="mt-1 text-sm">{PHONE_NUMBER}</p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4"
              >
                <Camera className="mt-1 shrink-0 text-[#e1c98e]" size={20} />
                <div>
                  <p className="text-xs text-white/50">Instagram</p>
                  <p className="mt-1 text-sm">{INSTAGRAM_HANDLE}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 shrink-0 text-[#e1c98e]" size={20} />
                <div>
                  <p className="text-xs text-white/50">Business Hours</p>
                  <p className="mt-1 text-sm leading-6">{BUSINESS_HOURS}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-white/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/45">
                {BRAND_NAME} · Premium Laddu Gopal Shringar
              </p>

              <a
                href={getWhatsAppUrl(getGeneralMessage())}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs text-[#e1c98e] hover:text-white"
              >
                Start a conversation
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
