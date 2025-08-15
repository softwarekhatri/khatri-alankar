import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductsByMetal(metalType: string): Promise<Product[]>;
  getProductsByGender(gender: string): Promise<Product[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    
    // Initialize with sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Diamond Solitaire Ring",
        code: "KA-R001",
        description: "Elegant 1ct diamond ring crafted in premium 18k gold. This timeless piece features a brilliant-cut diamond set in a classic solitaire setting, perfect for engagements or special occasions.",
        category: "Rings",
        metalType: "18K Gold",
        gender: "Female",
        weight: "3.5g",
        price: "125000.00",
        images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
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
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
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
        images: ["https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
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
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
        isNew: false,
        isOnSale: false,
        isFeatured: false,
        availableSizes: ["2.4", "2.6", "2.8"]
      },
      {
        name: "Vintage Gold Ring",
        code: "KA-R002",
        description: "Classic vintage design with emerald stone. A timeless piece that combines traditional craftsmanship with elegant styling.",
        category: "Rings",
        metalType: "18K Gold",
        gender: "Female",
        weight: "4.2g",
        price: "78000.00",
        images: ["https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
        isNew: false,
        isOnSale: false,
        isFeatured: false,
        availableSizes: ["14", "16", "18", "20"]
      },
      {
        name: "Wedding Ring Set",
        code: "KA-R003",
        description: "Matching couple rings in platinum. Perfect for weddings and engagements with elegant design and superior craftsmanship.",
        category: "Rings",
        metalType: "Platinum",
        gender: "Unisex",
        weight: "7g",
        price: "145000.00",
        images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
        isNew: false,
        isOnSale: false,
        isFeatured: true,
        availableSizes: ["14", "16", "18", "20", "22"]
      },
      {
        name: "Pearl Gold Necklace",
        code: "KA-N002",
        description: "Natural pearls with gold setting. This exquisite piece combines the luster of pearls with the richness of gold.",
        category: "Necklaces",
        metalType: "18K Gold",
        gender: "Female",
        weight: "28g",
        price: "98000.00",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
        isNew: true,
        isOnSale: false,
        isFeatured: true,
        availableSizes: ["16", "18", "20"]
      },
      {
        name: "Layered Chain Set",
        code: "KA-N003",
        description: "Modern layered design in 750 gold. A contemporary piece that adds elegance to any outfit.",
        category: "Necklaces",
        metalType: "750 Gold",
        gender: "Female",
        weight: "18g",
        price: "72000.00",
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"],
        isNew: false,
        isOnSale: false,
        isFeatured: false,
        availableSizes: ["16", "18"]
      }
    ];

    sampleProducts.forEach(product => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async getProductsByMetal(metalType: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.metalType === metalType
    );
  }

  async getProductsByGender(gender: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.gender === gender
    );
  }
}

export const storage = new MemStorage();
