# 🛍️ AuraStore — Premium E-Commerce Search Experience

[![Vite](https://img.shields.io/badge/Vite-8.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Algolia](https://img.shields.io/badge/Algolia-Search-003DFF?style=for-the-badge&logo=algolia&logoColor=white)](https://www.algolia.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**AuraStore** is a next-generation, high-performance e-commerce product browsing and search portal. Built with **Vite**, **Tailwind CSS v4**, and **Algolia Search**, it provides a hyper-responsive storefront interface featuring instant indexing, intelligent faceted search filters, and an elegant, modern UI.

🌐 **Live Demo:** [aurastore-2026.netlify.app](https://aurastore-2026.netlify.app/)

---

## ✨ Premium Features

*   ⚡ **Instant Algolia Search**: Typo-tolerant, lightning-fast product lookup powered by Algolia API.
*   🗂️ **Faceted Sidebar Navigation**: Dynamically updated category list with real-time product counts for each department.
*   📐 **Dynamic Layout Controller**: Toggle seamlessly between **3-Column Grid**, **4-Column Grid**, or **List View** layouts.
*   🏷️ **Smart Filter Chips**: Single-tap quick filters for:
    *   *In Stock Only*
    *   *Highly Rated (★ 4.5+)*
    *   *Under $100 budget*
*   📶 **Live Search Stats**: View exact latency stats showing the speed of Algolia API search queries and local rendering in milliseconds.
*   🛒 **Interactive Shopping Cart**: Quick add-to-cart workflow with animated numeric badge updates.
*   🔔 **Custom Toast Alerts**: Fluid micro-animated toast notification system using glassmorphism.
*   📱 **Responsive Mobile Drawer**: Off-canvas sliding filter menu for a native-app-like mobile browsing experience.
*   ⌨️ **Keyboard Shortcut Support**: Press `/` from anywhere on the page to instantly focus the search input.

---

## 🛠️ Technology Stack

*   **Bundler & Core**: [Vite 8](https://vitejs.dev/) & Vanilla ES6+ JavaScript.
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using advanced grid configurations, glassmorphism filters, and smooth micro-animations).
*   **Search Engine**: [Algolia Client SDK](https://www.algolia.com/) (real-time query request processing).
*   **Fonts**: *Plus Jakarta Sans* via Google Fonts for sleek, modern typography.
*   **Icons**: Handcrafted custom inline SVG icons.

---

## 📂 Project Structure

```bash
search-enigee-pj/
├── .netlify/              # Netlify local configuration
├── dist/                  # Built files for production distribution
├── public/                # Static assets (favicons, icons)
├── src/
│   ├── assets/            # Project assets (images, stylesheets)
│   ├── main.js            # Core App controller, event handlers & rendering engine
│   └── style.css          # Core CSS variables, Tailwind imports, and custom keyframes
├── index.html             # Main storefront index document
├── products.json          # Local raw product catalog database (235 items)
├── seed.js                # Algolia database importer utility
├── vite.config.js         # Bundler config
├── package.json           # Dependecy manager manifest
└── README.md              # Beautiful project documentation
```

---

## 🚀 Setup & Installation

Follow these steps to run the storefront on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/Bunnyvalluri/Auro-e-commerce-website.git
cd Auro-e-commerce-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate a production-ready build:
```bash
npm run build
```
Vite will output the optimized, minified files in the `/dist` directory.

---

## 💾 Seeding Algolia Database

AuraStore comes with a built-in seeding script to populate your Algolia index from the local `products.json` file.

1. Ensure your Algolia App ID and credentials are set in `seed.js`:
   ```javascript
   const APP_ID = 'YOUR_ALGOLIA_APP_ID';
   const WRITE_API_KEY = 'YOUR_ALGOLIA_WRITE_API_KEY';
   const INDEX_NAME = 'products';
   ```
2. Execute the seeding script:
   ```bash
   node seed.js
   ```
This will clear your existing index and batch-upload all 235 product records containing categories, pricing, ratings, images, and description text to Algolia.

---

## 🎨 Aesthetic Highlights

*   **Sleek Palette**: A sophisticated color scheme leveraging deep slate text (`slate-800`), clean white surfaces, and vibrant Indigo (`indigo-600`) as the primary interactive accent.
*   **Card Hovers**: Cards smoothly lift (`-translate-y-1`) and transition shadow depths (`shadow-2xs` to `shadow-xl`) on hover.
*   **Interactive Focus Rings**: Smooth transitions on inputs using a custom Indigo-100 ring blur to ensure high accessibility.
*   **Micro-interactions**: Buying badges, active category indicators, and quick filters instantly change status with fluid 200ms ease-out transitions.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with 💜 by [Bunnyvalluri](https://github.com/Bunnyvalluri).
