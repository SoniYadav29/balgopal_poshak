export type ProductCategory =
  | "Poshak"
  | "Jewellery"
  | "Pagdi & Mukut"
  | "Shringar Sets";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  material: string;
  sizes: string[];
  handcrafted: boolean;
  featured: boolean;
  care: string;
  delivery: string;
  occasion: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "royal-peacock-poshak",
    name: "Royal Peacock Poshak",
    category: "Poshak",
    price: 1299,
    image: "/poshak1.jpg",
    description:
      "A regal peacock-blue poshak with elegant gold-inspired detailing, designed for a beautiful devotional presentation.",
    material: "Decorative fabric with embroidered detailing",
    sizes: [
      "Size 0",
      "Size 1",
      "Size 2",
      "Size 3",
      "Size 4",
      "Size 5",
      "Size 6",
    ],
    handcrafted: true,
    featured: true,
    care: "Handle gently. Store in a clean, dry place away from direct sunlight.",
    delivery: "Confirm delivery timelines and shipping charges on WhatsApp.",
    occasion: "Festivals, daily shringar and special occasions",
  },
  {
    id: "p2",
    slug: "vrindavan-floral-poshak",
    name: "Vrindavan Floral Poshak",
    category: "Poshak",
    price: 999,
    image: "/poshak2.jpg",
    description:
      "A delicate floral-inspired outfit in soft traditional colours for an elegant Laddu Gopal shringar.",
    material: "Decorative printed fabric with embellishments",
    sizes: [
      "Size 0",
      "Size 1",
      "Size 2",
      "Size 3",
      "Size 4",
      "Size 5",
      "Size 6",
    ],
    handcrafted: true,
    featured: true,
    care: "Keep away from moisture. Clean gently according to the fabric.",
    delivery: "Confirm availability and delivery timelines on WhatsApp.",
    occasion: "Daily shringar, spring celebrations and puja",
  },
  {
    id: "p3",
    slug: "meera-pink-designer-poshak",
    name: "Meera Pink Designer Poshak",
    category: "Poshak",
    price: 1499,
    image: "/poshak3.jpg",
    description:
      "A graceful pink designer poshak with a festive look and delicate ornamental accents.",
    material: "Decorative textile with embellished borders",
    sizes: [
      "Size 0",
      "Size 1",
      "Size 2",
      "Size 3",
      "Size 4",
      "Size 5",
      "Size 6",
    ],
    handcrafted: true,
    featured: true,
    care: "Store flat or fold carefully to protect the embellishments.",
    delivery: "Ask us to confirm stock and dispatch time before ordering.",
    occasion: "Radha Ashtami, Janmashtami and celebrations",
  },
  {
    id: "p4",
    slug: "golden-shringar-set",
    name: "Golden Shringar Set",
    category: "Shringar Sets",
    price: 899,
    image: "/poshak1.jpg",
    description:
      "A coordinated decorative shringar set to complement your favourite Laddu Gopal outfit.",
    material: "Decorative jewellery components and embellishments",
    sizes: ["Please confirm fit"],
    handcrafted: true,
    featured: true,
    care: "Keep dry and store separately to protect delicate details.",
    delivery: "Confirm included pieces and delivery details on WhatsApp.",
    occasion: "Festivals, puja and special shringar",
  },
  {
    id: "p5",
    slug: "royal-blue-pagdi",
    name: "Royal Blue Pagdi",
    category: "Pagdi & Mukut",
    price: 499,
    image: "/poshak1.jpg",
    description:
      "A royal-blue decorative pagdi designed to complement traditional poshak styles.",
    material: "Decorative fabric with ornamental accents",
    sizes: ["Please confirm fit"],
    handcrafted: true,
    featured: true,
    care: "Store in a protective box to maintain its shape.",
    delivery: "Confirm measurements, stock and shipping on WhatsApp.",
    occasion: "Daily shringar and festive occasions",
  },
  {
    id: "p6",
    slug: "radha-krishna-jewellery-set",
    name: "Radha Krishna Jewellery Set",
    category: "Jewellery",
    price: 699,
    image: "/poshak1.jpg",
    description:
      "A traditional jewellery-inspired set that adds a graceful finishing touch to your Laddu Gopal's attire.",
    material: "Decorative jewellery with traditional detailing",
    sizes: ["Please confirm fit"],
    handcrafted: true,
    featured: true,
    care: "Avoid water, perfume and harsh cleaning products.",
    delivery: "Confirm set contents and delivery details before ordering.",
    occasion: "Festivals, gifting and special shringar",
  },
  {
    id: "p7",
    slug: "ivory-pearl-mala",
    name: "Ivory Pearl Mala",
    category: "Jewellery",
    price: 349,
    image: "/poshak1.jpg",
    description:
      "A classic ivory-toned mala designed to coordinate with traditional and contemporary outfits.",
    material: "Decorative beads and jewellery components",
    sizes: ["Please confirm fit"],
    handcrafted: true,
    featured: false,
    care: "Store separately and keep away from moisture.",
    delivery: "Confirm length and availability on WhatsApp.",
    occasion: "Daily shringar and celebrations",
  },
  {
    id: "p8",
    slug: "festive-complete-shringar",
    name: "Festive Complete Shringar",
    category: "Shringar Sets",
    price: 1799,
    image: "/poshak1.jpg",
    description:
      "A festive coordinated collection intended to make occasion styling easier.",
    material: "Decorative fabrics and accessories",
    sizes: ["Please confirm fit"],
    handcrafted: true,
    featured: true,
    care: "Store individual pieces carefully in a dry place.",
    delivery: "Ask for the exact set contents and delivery schedule.",
    occasion: "Janmashtami, Diwali and Janamotsav",
  },
];

export const categories: {
  number: string;
  name: ProductCategory;
  description: string;
  image: string;
}[] = [
  {
    number: "01",
    name: "Poshak",
    description: "Beautiful outfits for every divine occasion.",
    image: "/poshak1.jpg",
  },
  {
    number: "02",
    name: "Jewellery",
    description: "Delicate malas and ornamental accessories.",
    image: "/poshak6.jpg",
  },
  {
    number: "03",
    name: "Pagdi & Mukut",
    description: "Royal finishing touches for your beloved Gopal.",
    image: "/poshak5.jpg",
  },
  {
    number: "04",
    name: "Shringar Sets",
    description: "Coordinated details for a complete look.",
    image: "/poshak4.jpg",
  },
];
