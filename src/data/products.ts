import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-1",
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Experience crystal-clear audio with advanced noise cancellation technology. These premium wireless headphones deliver studio-quality sound with up to 30 hours of battery life, comfortable memory foam ear cups, and seamless Bluetooth 5.3 connectivity.",
    price: 299.99,
    priceAfterDiscount: 219.99,
    quantity: 45,
    sold: 312,
    colors: ["#1a1a1a", "#f5f5f0", "#1e3a5f"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-1", title: "Electronics" },
    brand: { id: "brand-1", title: "TechNova" },
    ratingsAverage: 4.7,
    ratingsQuantity: 234,
    specifications: {
      material: "Premium plastic with memory foam cushions",
      usage: "Music, calls, gaming",
      warranty: "2 years manufacturer warranty",
    },
  },
  {
    id: "prod-2",
    title: "Minimalist Leather Backpack",
    description:
      "Crafted from full-grain vegetable-tanned leather, this minimalist backpack combines timeless design with modern functionality. Features a padded 15-inch laptop compartment, multiple interior organizer pockets, and water-resistant lining.",
    price: 189.99,
    priceAfterDiscount: 159.99,
    quantity: 28,
    sold: 156,
    colors: ["#3e2723", "#1a1a1a", "#5d4037"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622560480654-996b3a4db2a4?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-4", title: "Bags" },
    brand: { id: "brand-4", title: "LuxCraft" },
    ratingsAverage: 4.5,
    ratingsQuantity: 89,
    specifications: {
      material: "Full-grain vegetable-tanned leather",
      usage: "Daily commute, travel, work",
      warranty: "5 years craftsmanship warranty",
    },
  },
  {
    id: "prod-3",
    title: "Ultra-Slim Smartwatch Pro",
    description:
      "Stay connected and track your fitness with this ultra-slim smartwatch featuring a vivid AMOLED display, comprehensive health monitoring, GPS navigation, and 7-day battery life. Water resistant to 50 meters.",
    price: 399.99,
    priceAfterDiscount: undefined,
    quantity: 62,
    sold: 478,
    colors: ["#1a1a1a", "#c0c0c0", "#b87333"],
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-5", title: "Watches" },
    brand: { id: "brand-6", title: "ChronoX" },
    ratingsAverage: 4.8,
    ratingsQuantity: 567,
    specifications: {
      material: "Titanium case with sapphire crystal",
      usage: "Fitness tracking, notifications, navigation",
      warranty: "2 years manufacturer warranty",
    },
  },
  {
    id: "prod-4",
    title: "Classic Cotton Crew Neck T-Shirt",
    description:
      "Elevate your everyday style with this premium cotton crew neck t-shirt. Made from 100% organic combed cotton with a relaxed fit, pre-shrunk fabric, and reinforced seams for lasting comfort and durability.",
    price: 49.99,
    priceAfterDiscount: 34.99,
    quantity: 200,
    sold: 890,
    colors: ["#f5f5f0", "#1a1a1a", "#2d4a3e", "#4a3728"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-2", title: "Clothing" },
    brand: { id: "brand-2", title: "UrbanEdge" },
    ratingsAverage: 4.3,
    ratingsQuantity: 412,
    specifications: {
      material: "100% organic combed cotton, 180 GSM",
      usage: "Casual wear, everyday comfort",
      warranty: "30-day return policy",
    },
  },
  {
    id: "prod-5",
    title: "Performance Running Shoes",
    description:
      "Engineered for peak performance with responsive cushioning, breathable mesh upper, and a lightweight carbon fiber plate. These running shoes deliver exceptional energy return and comfort for distances up to marathon level.",
    price: 179.99,
    priceAfterDiscount: 149.99,
    quantity: 75,
    sold: 623,
    colors: ["#1a1a1a", "#ffffff", "#ff4500"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-3", title: "Shoes" },
    brand: { id: "brand-3", title: "SwiftStep" },
    ratingsAverage: 4.6,
    ratingsQuantity: 345,
    specifications: {
      material: "Engineered mesh upper, carbon fiber plate",
      usage: "Running, training, marathons",
      warranty: "1 year manufacturer warranty",
    },
  },
  {
    id: "prod-6",
    title: "Ceramic Pour-Over Coffee Set",
    description:
      "Brew cafe-quality coffee at home with this handcrafted ceramic pour-over set. Includes a dripper with precision-engineered spiral ribs, a double-wall insulated carafe, and a reusable stainless steel filter for a pure, clean taste.",
    price: 79.99,
    priceAfterDiscount: undefined,
    quantity: 38,
    sold: 201,
    colors: ["#f5f5f0", "#3e2723", "#5b7065"],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-6", title: "Home & Kitchen" },
    brand: { id: "brand-5", title: "PureHome" },
    ratingsAverage: 4.9,
    ratingsQuantity: 178,
    specifications: {
      material: "Hand-glazed ceramic, borosilicate glass, stainless steel",
      usage: "Pour-over coffee brewing",
      warranty: "1 year warranty against defects",
    },
  },
  {
    id: "prod-7",
    title: "Portable Bluetooth Speaker",
    description:
      "Take your music anywhere with this rugged, waterproof Bluetooth speaker. Delivers 360-degree immersive sound with deep bass, 20-hour battery life, and IP67 rating for dust and water resistance.",
    price: 129.99,
    priceAfterDiscount: 99.99,
    quantity: 90,
    sold: 534,
    colors: ["#1a1a1a", "#1e3a5f", "#8b0000"],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-1", title: "Electronics" },
    brand: { id: "brand-8", title: "VoltEdge" },
    ratingsAverage: 4.4,
    ratingsQuantity: 289,
    specifications: {
      material: "Recycled plastic with silicone exterior",
      usage: "Outdoor, travel, home audio",
      warranty: "2 years manufacturer warranty",
    },
  },
  {
    id: "prod-8",
    title: "Merino Wool Zip-Up Hoodie",
    description:
      "The ultimate blend of style and performance. This zip-up hoodie is crafted from superfine merino wool, naturally temperature-regulating and odor-resistant. Features a modern slim fit with raglan sleeves and hidden zip pockets.",
    price: 149.99,
    priceAfterDiscount: undefined,
    quantity: 55,
    sold: 267,
    colors: ["#36454f", "#1a1a1a", "#556b2f"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-2", title: "Clothing" },
    brand: { id: "brand-7", title: "AeroFit" },
    ratingsAverage: 4.6,
    ratingsQuantity: 156,
    specifications: {
      material: "100% superfine merino wool, 17.5 micron",
      usage: "Casual, outdoor, travel",
      warranty: "Lifetime quality guarantee",
    },
  },
  {
    id: "prod-9",
    title: "Mechanical Keyboard 75%",
    description:
      "A compact 75% mechanical keyboard with hot-swappable switches, per-key RGB lighting, and a premium aluminum case. Features PBT double-shot keycaps, programmable layers, and USB-C connectivity with wireless Bluetooth option.",
    price: 169.99,
    priceAfterDiscount: 139.99,
    quantity: 42,
    sold: 398,
    colors: ["#1a1a1a", "#f5f5f0"],
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-1", title: "Electronics" },
    brand: { id: "brand-1", title: "TechNova" },
    ratingsAverage: 4.8,
    ratingsQuantity: 423,
    specifications: {
      material: "CNC aluminum case, PBT keycaps",
      usage: "Typing, programming, gaming",
      warranty: "2 years manufacturer warranty",
    },
  },
  {
    id: "prod-10",
    title: "Minimalist Desk Lamp",
    description:
      "Illuminate your workspace with this award-winning minimalist desk lamp. Features stepless dimming, adjustable color temperature (2700K-6500K), a flexible arm, and a built-in USB charging port. Touch-sensitive controls for effortless adjustment.",
    price: 89.99,
    priceAfterDiscount: 69.99,
    quantity: 60,
    sold: 189,
    colors: ["#f5f5f0", "#1a1a1a", "#b87333"],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-6", title: "Home & Kitchen" },
    brand: { id: "brand-5", title: "PureHome" },
    ratingsAverage: 4.5,
    ratingsQuantity: 134,
    specifications: {
      material: "Anodized aluminum, ABS base",
      usage: "Desk lighting, reading, ambient light",
      warranty: "3 years manufacturer warranty",
    },
  },
  {
    id: "prod-11",
    title: "Canvas Tote Bag",
    description:
      "A versatile everyday tote crafted from heavyweight organic canvas with leather handles. Spacious interior with a zippered pocket and magnetic snap closure. Perfect for work, shopping, or weekend outings.",
    price: 59.99,
    priceAfterDiscount: undefined,
    quantity: 110,
    sold: 445,
    colors: ["#f5f5f0", "#2d4a3e", "#1a1a1a"],
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-4", title: "Bags" },
    brand: { id: "brand-4", title: "LuxCraft" },
    ratingsAverage: 4.2,
    ratingsQuantity: 267,
    specifications: {
      material: "18oz organic canvas, vegetable-tanned leather",
      usage: "Daily carry, shopping, work",
      warranty: "2 years craftsmanship warranty",
    },
  },
  {
    id: "prod-12",
    title: "Casual Suede Sneakers",
    description:
      "Step out in style with these handcrafted suede sneakers featuring a cushioned insole, vulcanized rubber outsole, and premium Italian suede upper. A timeless design that pairs perfectly with any casual outfit.",
    price: 129.99,
    priceAfterDiscount: 109.99,
    quantity: 65,
    sold: 312,
    colors: ["#c4a882", "#1a1a1a", "#5d4037"],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    ],
    category: { id: "cat-3", title: "Shoes" },
    brand: { id: "brand-3", title: "SwiftStep" },
    ratingsAverage: 4.4,
    ratingsQuantity: 198,
    specifications: {
      material: "Italian suede upper, vulcanized rubber sole",
      usage: "Casual wear, everyday style",
      warranty: "6 months manufacturer warranty",
    },
  },
];

/* ==============================
   Helper Functions
   ============================== */

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.category.id === categoryId);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) => p.category.id === product.category.id && p.id !== product.id
    )
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return [...products]
    .sort((a, b) => b.ratingsAverage - a.ratingsAverage)
    .slice(0, limit);
}
