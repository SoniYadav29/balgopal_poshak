"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Phone, Ruler, Heart } from "lucide-react";
import type { Product } from "@/lib/product";
import { getProductMessage, getWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  useEffect(() => {
    setSelectedSize("");
  }, [product?.id]);

  const message = product
    ? `${getProductMessage(product.name)}${
        selectedSize ? ` My preferred size is ${selectedSize}.` : ""
      }`
    : "";

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key={product.id}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#102d3b]/70 backdrop-blur-sm sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{ opacity: 0, y: 28, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.28 }}
            className="relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto bg-[#f8f4eb] sm:max-h-[88vh]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center bg-[#f8f4eb]/95 text-[#102d3b] shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px] bg-[#e4dac8] sm:min-h-[440px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-[#102d3b]/90 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#e1c98e]">
                  Handcrafted with care
                </span>
              </div>

              <div className="p-5 sm:p-8 md:p-10">
                <p className="section-kicker !mb-3">{product.category}</p>

                <h2
                  id="product-modal-title"
                  className="font-serif text-3xl leading-tight text-[#102d3b] sm:text-4xl"
                >
                  {product.name}
                </h2>

                <p className="mt-4 text-2xl font-medium text-[#9c7d43]">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#77736a]">
                  {product.description}
                </p>

                <div className="mt-6 border-y border-[#b99a5b]/30 py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#102d3b]">
                    Select size / fit
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        aria-pressed={selectedSize === size}
                        className={`border px-3 py-2.5 text-xs transition ${
                          selectedSize === size
                            ? "border-[#102d3b] bg-[#102d3b] text-white"
                            : "border-[#c8bda7] text-[#514e45] hover:border-[#a4874b]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      "Hello, I need help selecting the correct Laddu Gopal dress size. Please guide me.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs text-[#17665f] underline underline-offset-4"
                  >
                    <Ruler size={14} />
                    Need help with sizing?
                  </a>
                </div>

                <div className="mt-5 space-y-4 text-xs leading-6 text-[#77736a]">
                  <p>
                    <strong className="text-[#292923]">Material: </strong>
                    {product.material}
                  </p>
                  <p>
                    <strong className="text-[#292923]">Care: </strong>
                    {product.care}
                  </p>
                  <p>
                    <strong className="text-[#292923]">Delivery: </strong>
                    {product.delivery}
                  </p>
                  <p>
                    <strong className="text-[#292923]">Occasion: </strong>
                    {product.occasion}
                  </p>
                </div>

                <div className="mt-7 grid gap-3">
                  <a
                    href={getWhatsAppUrl(message)}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary w-full"
                  >
                    <MessageCircle size={17} />
                    Order on WhatsApp
                  </a>

                  <a
                    href={getCallUrl()}
                    className="button button-outline w-full"
                  >
                    <Phone size={17} />
                    Call to Order
                  </a>
                </div>

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] text-[#77736a]">
                  <Heart size={13} className="text-[#a4874b]" />
                  No online checkout required. Order directly with us.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
