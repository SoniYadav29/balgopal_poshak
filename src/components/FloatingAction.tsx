"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCallUrl, getGeneralMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingActions() {
  const [showHint, setShowHint] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <>
      {/* Desktop WhatsApp action */}
      <div className="fixed bottom-7 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="border border-[#b99a5b]/40 bg-[#fffdf8] px-4 py-3 text-xs text-[#102d3b] shadow-lg"
            >
              Need help choosing a dress?
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <a
            href={getCallUrl()}
            aria-label="Call to order"
            className="flex size-12 items-center justify-center border border-[#b99a5b]/50 bg-[#102d3b] text-[#e1c98e] shadow-lg transition hover:bg-[#193f59]"
          >
            <Phone size={19} />
          </a>

          <a
            href={getWhatsAppUrl(getGeneralMessage())}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setShowHint(true)}
            onMouseLeave={() => setShowHint(false)}
            className="flex min-h-14 items-center gap-3 bg-[#17665f] px-5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#12544e]"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Fixed mobile ordering bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#b99a5b]/30 bg-[#f8f4eb]/95 p-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
        <a
          href={getWhatsAppUrl(getGeneralMessage())}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 bg-[#17665f] px-3 text-xs font-semibold text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <a
          href={getCallUrl()}
          className="flex min-h-12 items-center justify-center gap-2 bg-[#102d3b] px-3 text-xs font-semibold text-white"
        >
          <Phone size={17} />
          Call to Order
        </a>
      </div>
    </>
  );
}
