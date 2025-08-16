import type { Product } from "@shared/schema";

export const sampleProducts: Omit<Product, 'id'>[] = [
  {
    name: "Diamond Solitaire Ring",
    code: "KA-R001",
    description: "Elegant 1ct diamond ring crafted in premium 18k gold. This timeless piece features a brilliant-cut diamond set in a classic solitaire setting, perfect for engagements or special occasions.",
    category: "Rings",
    metalType: "18K Gold",
    gender: "Female",
    weight: "3.5g",
    price: "125000.00",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ],
    isNew: true,
    isOnSale: false,
    isFeatured: false,
    availableSizes: ["14", "16", "18", "20"]
  },
  {
    name: "Traditional Gold Necklace",
    code: "KA-N001",
    description: "Handcrafted 22k gold necklace with intricate traditional patterns. A perfect blend of heritage craftsmanship and contemporary elegance.",
    category: "Necklaces",
    metalType: "22K Gold",
    gender: "Female",
    weight: "45g",
    price: "185000.00",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ],
    isNew: false,
    isOnSale: false,
    isFeatured: true,
    availableSizes: ["16", "18", "20"]
  },
  {
    name: "Chandelier Earrings",
    code: "KA-E001",
    description: "Traditional design with modern elegance. These stunning chandelier earrings feature intricate gold work with precious stone accents.",
    category: "Earrings",
    metalType: "916 Gold",
    gender: "Female",
    weight: "8g",
    price: "65000.00",
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ],
    isNew: false,
    isOnSale: true,
    isFeatured: false,
    availableSizes: ["One Size"]
  },
  {
    name: "Designer Bangles Set",
    code: "KA-B001",
    description: "Set of 4 bangles in 916 gold with contemporary design elements. Perfect for both casual and formal occasions.",
    category: "Bangles",
    metalType: "916 Gold",
    gender: "Female",
    weight: "32g",
    price: "95000.00",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    ],
    isNew: false,
    isOnSale: false,
    isFeatured: false,
    availableSizes: ["2.4", "2.6", "2.8"]
  }
];
