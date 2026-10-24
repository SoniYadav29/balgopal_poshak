"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import { products, type Product, type ProductCategory } from "@/lib/product";
import { getProductMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import ProductModal from "@/components/ProductModal";

const filters = [
  "All Pieces",
  "Poshak",
  "Jewellery",
  "Pagdi & Mukut",
  "Shringar Sets",
] as const;

type Filter = (typeof filters)[number];

export default function ProductSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Pieces");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const visibleProducts = useMemo(() => {
    const filtered =
      activeFilter === "All Pieces"
        ? products
        : products.filter(
            (product) => product.category === (activeFilter as ProductCategory),
          );

    return filtered;
  }, [activeFilter]);

  return (
    <section id="bestsellers" className="section bg-[#f0e9dc]">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Beloved favourites</p>
            <h2 className="section-heading">
              The <span className="italic">Bestsellers</span>
            </h2>
            <p className="section-description">
              Discover our favourite pieces, thoughtfully chosen for everyday
              devotion and festive moments.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(
              "Hello, please share your complete Laddu Gopal poshak and shringar catalogue.",
            )}
            target="_blank"
            rel="noreferrer"
            className="button button-outline self-start md:self-auto"
          >
            Request Full Catalogue
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div
          className="mt-9 flex gap-2 overflow-x-auto pb-3"
          aria-label="Filter products"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`shrink-0 border px-4 py-3 text-xs transition-colors ${
                  isActive
                    ? "border-[#102d3b] bg-[#102d3b] text-white"
                    : "border-[#c8bda7] text-[#514e45] hover:border-[#a4874b]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-4"
        >
          {visibleProducts.map((product, index) => (
            <motion.article
              layout
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="product-card group min-w-0"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="relative block w-full overflow-hidden bg-[#e4dac8] text-left"
                aria-label={`View details for ${product.name}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 23vw"
                    className="product-image object-cover"
                  />
                </div>

                <span className="absolute left-2 top-2 bg-[#f8f4eb]/95 px-2 py-1.5 text-[9px] uppercase tracking-[0.1em] text-[#76623d] sm:left-3 sm:top-3 sm:px-3">
                  Handcrafted
                </span>

                <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-[#f8f4eb] text-[#102d3b] transition group-hover:bg-[#102d3b] group-hover:text-white">
                  <Plus size={17} />
                </span>
              </button>

              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#8d7954]">
                  {product.category}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="mt-1 text-left font-serif text-xl leading-snug text-[#102d3b] hover:text-[#17665f] sm:text-2xl"
                >
                  {product.name}
                </button>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="font-medium text-[#292923]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <span className="text-[10px] text-[#77736a]">
                    {product.category === "Poshak"
                      ? "Sizes 0–6"
                      : "Details inside"}
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl(getProductMessage(product.name))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 border border-[#b99a5b]/65 px-2 py-3 text-[10px] font-semibold text-[#102d3b] transition hover:bg-[#102d3b] hover:text-white sm:text-xs"
                >
                  <MessageCircle size={15} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {visibleProducts.length === 0 && (
          <p className="py-16 text-center text-sm text-[#77736a]">
            No products in this collection yet. Please check back soon.
          </p>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
