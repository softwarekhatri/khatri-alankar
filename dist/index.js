// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  products;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.initializeProducts();
  }
  initializeProducts() {
    const sampleProducts = [
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
    sampleProducts.forEach((product) => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }
  async getProductsByMetal(metalType) {
    return Array.from(this.products.values()).filter(
      (product) => product.metalType === metalType
    );
  }
  async getProductsByGender(gender) {
    return Array.from(this.products.values()).filter(
      (product) => product.gender === gender
    );
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/products/category/:category", async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "6005", 10);
  server.listen({
    port,
    host: "0.0.0.0"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
