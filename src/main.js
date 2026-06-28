import { algoliasearch } from 'algoliasearch';
import './style.css';

// Initialize the Algolia Search client
const APP_ID = '5TDVBUOR8O';
const SEARCH_KEY = '2fddbb109e269b83aa401f6e4a288909';
const INDEX_NAME = 'products';

const client = algoliasearch(APP_ID, SEARCH_KEY);

// State Management
let currentQuery = '';
let activeCategory = 'all';
let currentSort = 'featured';
let cachedHits = [];
let cartCount = 0;
let activeLayout = 'grid-4';
let filters = {
  inStockOnly: false,
  highlyRated: false,
  under100: false
};

// DOM Elements
const searchBox = document.getElementById('searchBox');
const clearSearch = document.getElementById('clearSearch');
const resultsGrid = document.getElementById('resultsGrid');
const emptyState = document.getElementById('emptyState');
const stats = document.getElementById('stats');
const sortBy = document.getElementById('sortBy');
const categoryButtons = document.querySelectorAll('.filter-btn, [data-category="all"]');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const breadcrumbCategory = document.getElementById('breadcrumbCategory');

const CATEGORY_THEMES = {
  "all": {
    hoverBg: "hover:bg-zinc-100/60",
    hoverText: "hover:text-zinc-900",
    activeClass: "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-sm shadow-violet-250/20",
    badgeInactive: "bg-zinc-100 text-zinc-500",
    badgeActive: "bg-white/20 text-white font-extrabold",
    textColor: "text-violet-600"
  },
  // Fashion (Rose)
  "Women's Fashion": {
    hoverBg: "hover:bg-rose-50",
    hoverText: "hover:text-rose-650",
    activeClass: "bg-rose-50 border border-rose-100/70 text-rose-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600",
    badgeActive: "bg-rose-600 text-white font-semibold",
    textColor: "text-rose-600"
  },
  "Men's Fashion": {
    hoverBg: "hover:bg-rose-50",
    hoverText: "hover:text-rose-650",
    activeClass: "bg-rose-50 border border-rose-100/70 text-rose-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600",
    badgeActive: "bg-rose-600 text-white font-semibold",
    textColor: "text-rose-600"
  },
  "Kids' Fashion": {
    hoverBg: "hover:bg-rose-50",
    hoverText: "hover:text-rose-650",
    activeClass: "bg-rose-50 border border-rose-100/70 text-rose-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600",
    badgeActive: "bg-rose-600 text-white font-semibold",
    textColor: "text-rose-600"
  },
  "Apparel & Hoodies": {
    hoverBg: "hover:bg-rose-50",
    hoverText: "hover:text-rose-650",
    activeClass: "bg-rose-50 border border-rose-100/70 text-rose-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600",
    badgeActive: "bg-rose-600 text-white font-semibold",
    textColor: "text-rose-600"
  },
  "Shoes & Footwear": {
    hoverBg: "hover:bg-rose-50",
    hoverText: "hover:text-rose-650",
    activeClass: "bg-rose-50 border border-rose-100/70 text-rose-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600",
    badgeActive: "bg-rose-600 text-white font-semibold",
    textColor: "text-rose-600"
  },
  "Clothing Accessories": {
    hoverBg: "hover:bg-rose-50",
    hoverText: "hover:text-rose-650",
    activeClass: "bg-rose-50 border border-rose-100/70 text-rose-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600",
    badgeActive: "bg-rose-600 text-white font-semibold",
    textColor: "text-rose-600"
  },
  // Tech (Blue)
  "Mobiles & Phones": {
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-655",
    activeClass: "bg-blue-50 border border-blue-100 text-blue-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-blue-100 group-hover:text-blue-600",
    badgeActive: "bg-blue-600 text-white font-semibold",
    textColor: "text-blue-600"
  },
  "Laptops & Notebooks": {
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-655",
    activeClass: "bg-blue-50 border border-blue-100 text-blue-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-blue-100 group-hover:text-blue-600",
    badgeActive: "bg-blue-600 text-white font-semibold",
    textColor: "text-blue-600"
  },
  "Cameras & Optics": {
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-655",
    activeClass: "bg-blue-50 border border-blue-100 text-blue-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-blue-100 group-hover:text-blue-600",
    badgeActive: "bg-blue-600 text-white font-semibold",
    textColor: "text-blue-600"
  },
  "Computer Accessories": {
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-655",
    activeClass: "bg-blue-50 border border-blue-100 text-blue-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-blue-100 group-hover:text-blue-600",
    badgeActive: "bg-blue-600 text-white font-semibold",
    textColor: "text-blue-600"
  },
  "Electronics & Audio": {
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-655",
    activeClass: "bg-blue-50 border border-blue-100 text-blue-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-blue-100 group-hover:text-blue-600",
    badgeActive: "bg-blue-600 text-white font-semibold",
    textColor: "text-blue-600"
  },
  "Watches & Horology": {
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-655",
    activeClass: "bg-blue-50 border border-blue-100 text-blue-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-blue-100 group-hover:text-blue-600",
    badgeActive: "bg-blue-600 text-white font-semibold",
    textColor: "text-blue-600"
  },
  // Fresh & Healthy (Emerald)
  "Amazon Fresh": {
    hoverBg: "hover:bg-emerald-50",
    hoverText: "hover:text-emerald-650",
    activeClass: "bg-emerald-50 border border-emerald-100 text-emerald-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-emerald-100 group-hover:text-emerald-600",
    badgeActive: "bg-emerald-600 text-white font-semibold",
    textColor: "text-emerald-600"
  },
  "Health & Household": {
    hoverBg: "hover:bg-emerald-50",
    hoverText: "hover:text-emerald-650",
    activeClass: "bg-emerald-50 border border-emerald-100 text-emerald-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-emerald-100 group-hover:text-emerald-600",
    badgeActive: "bg-emerald-600 text-white font-semibold",
    textColor: "text-emerald-600"
  },
  "Personal Safety": {
    hoverBg: "hover:bg-emerald-50",
    hoverText: "hover:text-emerald-650",
    activeClass: "bg-emerald-50 border border-emerald-100 text-emerald-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-emerald-100 group-hover:text-emerald-600",
    badgeActive: "bg-emerald-600 text-white font-semibold",
    textColor: "text-emerald-600"
  },
  // Home & Lifestyle (Amber)
  "Home & Kitchen": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-650",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Pet Supplies": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Sports & Fitness": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Baby & Toddler": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Bags & Luggage": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Beauty & Skincare": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Car & Motorbike": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  },
  "Books & Literature": {
    hoverBg: "hover:bg-amber-50",
    hoverText: "hover:text-amber-655",
    activeClass: "bg-amber-50 border border-amber-100 text-amber-700",
    badgeInactive: "bg-zinc-100 text-zinc-500 group-hover:bg-amber-100 group-hover:text-amber-600",
    badgeActive: "bg-amber-600 text-white font-semibold",
    textColor: "text-amber-600"
  }
};

function applyCategoryStyles() {
  categoryButtons.forEach(btn => {
    const cat = btn.dataset.category;
    const theme = CATEGORY_THEMES[cat];
    if (!theme) return;
    const isAll = cat === 'all';
    const badge = btn.querySelector('span:last-child');
    
    if (cat === activeCategory) {
      if (isAll) {
        btn.className = `group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${theme.activeClass} active-category cursor-pointer`;
      } else {
        btn.className = `group flex items-center justify-between w-full px-3 py-2 text-left rounded-xl text-xs font-semibold transition-all duration-200 ${theme.activeClass} active-category cursor-pointer`;
      }
      if (badge) badge.className = `text-[10px] px-2 py-0.5 rounded-full ${theme.badgeActive}`;
    } else {
      if (isAll) {
        btn.className = `group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${theme.hoverBg} text-zinc-600 ${theme.hoverText} cursor-pointer`;
      } else {
        btn.className = `group flex items-center justify-between w-full px-3 py-2 text-left rounded-xl text-xs font-medium transition-all duration-200 ${theme.hoverBg} text-zinc-600 ${theme.hoverText} cursor-pointer`;
      }
      if (badge) badge.className = `text-[10px] px-2 py-0.5 rounded-full ${theme.badgeInactive}`;
    }
  });

  if (breadcrumbCategory) {
    const activeTheme = CATEGORY_THEMES[activeCategory] || CATEGORY_THEMES["all"];
    breadcrumbCategory.className = activeTheme.textColor;
  }
}

// Layout Controls
const viewGrid3 = document.getElementById('viewGrid3');
const viewGrid4 = document.getElementById('viewGrid4');
const viewList = document.getElementById('viewList');

// Quick Filter Chips
const chipInStock = document.getElementById('chipInStock');
const chipHighlyRated = document.getElementById('chipHighlyRated');
const chipUnder100 = document.getElementById('chipUnder100');
const chipClearAll = document.getElementById('chipClearAll');

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
const sidebar = document.getElementById('sidebar');

// Custom Toast system
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-center gap-3.5 px-5 py-4 bg-zinc-900/95 backdrop-blur-md text-white rounded-2xl shadow-xl border border-zinc-800 text-xs font-semibold min-w-[300px] max-w-sm animate-toast-in';
  toast.innerHTML = `
    <div class="w-5.5 h-5.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center rounded-xl shrink-0">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
      </svg>
    </div>
    <span class="flex-1 leading-relaxed text-zinc-105">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('animate-toast-in');
    toast.classList.add('animate-toast-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 2800);
}

// Shopping Cart actions
function handlePurchase(product) {
  cartCount++;
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(badge => {
    badge.textContent = cartCount;
    badge.classList.remove('scale-0');
    badge.classList.add('scale-100');
  });
  showToast(`Added <strong>${product.name}</strong> to cart!`);
}

// Update category counts based on current search results (unfiltered by category selection)
function updateCategoryCounts(hits) {
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Kids' Fashion",
    "Apparel & Hoodies",
    "Shoes & Footwear",
    "Clothing Accessories",
    "Mobiles & Phones",
    "Laptops & Notebooks",
    "Cameras & Optics",
    "Computer Accessories",
    "Electronics & Audio",
    "Watches & Horology",
    "Amazon Fresh",
    "Health & Household",
    "Personal Safety",
    "Home & Kitchen",
    "Pet Supplies",
    "Sports & Fitness",
    "Baby & Toddler",
    "Bags & Luggage",
    "Beauty & Skincare",
    "Car & Motorbike",
    "Books & Literature"
  ];
  const counts = { all: hits.length };
  categories.forEach(cat => counts[cat] = 0);

  hits.forEach(hit => {
    if (counts[hit.category] !== undefined) {
      counts[hit.category]++;
    }
  });

  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = counts.all;
  
  categories.forEach(cat => {
    // Strip apostrophes, strip ampersands, replace spaces with single hyphens
    const idSafeCategoryName = cat.replace(/'/g, '').replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    const el = document.getElementById(`count-${idSafeCategoryName}`);
    if (el) el.textContent = counts[cat];
  });
}

// Render logic
function processAndRender(searchTimeMs = 0) {
  const startTime = performance.now();

  // 1. Category Filtering
  let items = [...cachedHits];
  if (activeCategory !== 'all') {
    items = items.filter(item => item.category === activeCategory);
  }

  // 2. Quick Filters
  if (filters.inStockOnly) {
    items = items.filter(item => item.stock > 0);
  }
  if (filters.highlyRated) {
    items = items.filter(item => item.rating >= 4.5);
  }
  if (filters.under100) {
    items = items.filter(item => item.price < 100);
  }

  // 3. Sorting
  if (currentSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating-desc') {
    items.sort((a, b) => b.rating - a.rating);
  }

  const renderTimeMs = (performance.now() - startTime).toFixed(1);
  const totalTimeStr = searchTimeMs > 0 ? `${searchTimeMs}ms search + ${renderTimeMs}ms render` : `${renderTimeMs}ms render`;

  // 4. Update UI states (using Tailwind class triggers)
  if (items.length === 0) {
    stats.innerHTML = 'No products found';
    resultsGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    emptyState.classList.add('flex');
  } else {
    stats.innerHTML = `Showing <span class="font-bold text-slate-800">${items.length}</span> product${items.length > 1 ? 's' : ''} <span class="text-slate-300 mx-1.5">|</span> <span class="text-slate-400 font-medium text-[11px]">${totalTimeStr}</span>`;
    resultsGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');
  }

  // 5. Grid View Configuration
  if (activeLayout === 'grid-3') {
    resultsGrid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8";
  } else if (activeLayout === 'grid-4') {
    resultsGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8";
  } else if (activeLayout === 'list') {
    resultsGrid.className = "flex flex-col gap-4.5";
  }

  // 6. Render product cards
  resultsGrid.innerHTML = items.map(item => {
    // Support Algolia highlight markers if present
    const name = item._highlightResult?.name?.value || item.name;
    const description = item._highlightResult?.description?.value || item.description;
    const brand = item._highlightResult?.brand?.value || item.brand || 'Premium';
    const subcategory = item.subcategory || '';
    const price = item.price.toFixed(2);
    const originalPrice = (item.price * 1.25).toFixed(2);
    const rating = item.rating ? item.rating.toFixed(1) : '5.0';
    const stock = item.stock !== undefined ? item.stock : 10;
    const discount = 20;

    if (activeLayout === 'list') {
      return `
        <div class="group flex flex-col sm:flex-row bg-white border border-zinc-200/60 rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-violet-200 transition-all duration-300 p-5 gap-6">
          <div class="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-zinc-50 overflow-hidden border border-zinc-100 rounded-2xl">
            <img class="img-zoom-hover w-full h-full object-cover" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop';" />
            <span class="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-white/40 text-[9px] font-bold tracking-widest uppercase text-zinc-800 px-2.5 py-1 rounded-xl shadow-2xs select-none">${item.category}</span>
          </div>
          <div class="flex-1 flex flex-col justify-between py-1">
            <div class="flex flex-col gap-1">
              <div class="flex justify-between items-center gap-2 select-none">
                <span class="text-[9px] font-bold tracking-widest uppercase text-zinc-400">${brand}${subcategory ? ` • <span class="text-violet-650 font-bold">${subcategory}</span>` : ''}</span>
                <span class="flex items-center gap-1 text-xs font-bold text-zinc-700 bg-zinc-50 px-2.5 py-1 rounded-xl border border-zinc-100">
                  <span class="text-amber-500">★</span> ${rating}
                </span>
              </div>
              <h4 class="font-bold text-zinc-800 text-base md:text-lg leading-snug group-hover:text-violet-600 transition-colors duration-200 mt-1">${name}</h4>
              <p class="text-xs text-zinc-500 leading-relaxed mt-2">${description}</p>
            </div>
            
            <div class="flex items-center gap-3.5 mt-4 select-none">
              <span class="text-[10px] ${stock < 15 ? 'text-rose-600 font-bold bg-rose-50 border border-rose-100' : 'text-zinc-500 bg-zinc-50 border border-zinc-150/80'} px-3 py-1 rounded-xl">${stock} in stock</span>
              ${stock < 15 ? `<span class="text-[10px] text-rose-600 font-extrabold animate-pulse">Low Stock Warning</span>` : ''}
            </div>
          </div>
          
          <div class="w-full sm:w-44 border-t sm:border-t-0 sm:border-l border-zinc-150/80 pt-4 sm:pt-0 sm:pl-5 flex sm:flex-col justify-between sm:justify-center items-center sm:items-stretch gap-4 shrink-0">
            <div class="flex flex-col sm:gap-0.5">
              <div class="flex items-baseline gap-1.5">
                <span class="text-2xl font-extrabold text-zinc-900 leading-none">$${price}</span>
                <span class="text-[9px] text-violet-650 font-bold bg-violet-50 px-2 py-0.5 rounded-lg">-${discount}%</span>
              </div>
              <span class="text-xs text-zinc-400 line-through mt-1">$${originalPrice}</span>
            </div>
            <button class="px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-2xl text-xs font-bold shadow-md shadow-violet-200/30 hover:shadow-lg transition-all buy-btn cursor-pointer flex items-center justify-center gap-2" data-id="${item.objectID}">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      `;
    }

    return `
      <div class="group flex flex-col bg-white border border-zinc-200/60 rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg hover:shadow-violet-200/10 hover:border-violet-200/70 hover:-translate-y-1 transition-all duration-300 relative">
        <div class="relative aspect-square bg-zinc-50 overflow-hidden border-b border-zinc-100 flex items-center justify-center">
          <img class="img-zoom-hover absolute inset-0 w-full h-full object-cover" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop';" />
          <span class="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-white/40 text-[9px] font-bold tracking-widest uppercase text-zinc-800 px-2.5 py-1 rounded-xl shadow-2xs select-none">${item.category}</span>
          ${stock < 15 ? `<span class="absolute top-3 right-3 bg-rose-600 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-xl shadow-2xs animate-pulse select-none">Low Stock</span>` : ''}
        </div>
        <div class="p-5 flex flex-col gap-2.5 flex-1">
          <div class="flex justify-between items-center gap-2 select-none">
            <span class="text-[9px] font-bold tracking-widest uppercase text-zinc-400 leading-none">${brand}${subcategory ? ` • <span class="text-violet-650 font-bold">${subcategory}</span>` : ''}</span>
            <span class="flex items-center gap-1 text-xs font-bold text-zinc-705 bg-zinc-50 px-2.5 py-1 border border-zinc-100 rounded-xl">
               <span class="text-amber-500">★</span> ${rating}
            </span>
          </div>
          
          <h4 class="font-bold text-zinc-800 leading-snug group-hover:text-violet-655 transition-colors duration-200 line-clamp-2 text-[15px] h-10 mt-1" title="${item.name}">${name}</h4>
          
          <p class="text-xs text-zinc-500 leading-relaxed line-clamp-2">${description}</p>
          
          <div class="flex items-center gap-2.5 mt-1 select-none">
            <span class="text-[10px] ${stock < 15 ? 'text-rose-600 font-bold bg-rose-50 border border-rose-100' : 'text-zinc-405 bg-zinc-50 border border-zinc-150/80'} px-2.5 py-1 rounded-xl">${stock} in stock</span>
          </div>
        </div>
        <div class="px-5 pb-5 pt-0 flex justify-between items-center mt-auto">
          <div class="flex flex-col">
            <div class="flex items-baseline gap-1">
              <span class="text-lg font-extrabold text-zinc-900 leading-none">$${price}</span>
              <span class="text-[9px] text-violet-600 font-bold bg-violet-50 px-1.5 py-0.5 rounded-lg">-${discount}%</span>
            </div>
            <span class="text-[10px] text-zinc-450 line-through mt-1">$${originalPrice}</span>
          </div>
          <button class="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-750 hover:to-fuchsia-600 active:scale-95 text-white rounded-2xl text-xs font-bold shadow-md shadow-violet-200/30 hover:shadow-lg transition-all buy-btn cursor-pointer flex items-center gap-1.5" data-id="${item.objectID}">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
            </svg>
            <span>Cart</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers to buy buttons
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.dataset.id;
      const product = items.find(item => item.objectID === prodId);
      if (product) {
        handlePurchase(product);
      }
    });
  });
}

// Fetch Search Results from Algolia
async function fetchResults() {
  const startTime = performance.now();
  try {
    const { results } = await client.search({
      requests: [
        {
          indexName: INDEX_NAME,
          query: currentQuery,
          hitsPerPage: 500, // Return all results to filter locally
        }
      ]
    });

    const searchTimeMs = (performance.now() - startTime).toFixed(0);
    cachedHits = results[0]?.hits || [];

    updateCategoryCounts(cachedHits);
    processAndRender(searchTimeMs);
  } catch (error) {
    console.error('Error fetching search results from Algolia:', error);
    stats.innerHTML = '<span class="text-red-500 font-medium">Failed to connect to search service.</span>';
  }
}

// Event Listeners
searchBox.addEventListener('input', (e) => {
  currentQuery = e.target.value;
  if (currentQuery.length > 0) {
    clearSearch.classList.remove('hidden');
    clearSearch.classList.add('flex');
  } else {
    clearSearch.classList.add('hidden');
    clearSearch.classList.remove('flex');
  }
  fetchResults();
});

clearSearch.addEventListener('click', () => {
  searchBox.value = '';
  currentQuery = '';
  clearSearch.classList.add('hidden');
  clearSearch.classList.remove('flex');
  searchBox.focus();
  fetchResults();
});

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.category;
    if (breadcrumbCategory) {
      breadcrumbCategory.textContent = activeCategory === 'all' ? 'All Products' : activeCategory;
    }
    
    applyCategoryStyles();
    
    // Auto-close mobile drawer after category select
    closeMobileMenu();
    processAndRender();
  });
});

sortBy.addEventListener('change', (e) => {
  currentSort = e.target.value;
  processAndRender();
});

// Layout Toggles Listeners
function updateLayoutButtons() {
  if (!viewGrid3 || !viewGrid4 || !viewList) return;
  // Reset all
  [viewGrid3, viewGrid4, viewList].forEach(btn => {
    btn.className = "p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/50 active:scale-95 transition-all cursor-pointer";
  });
  // Highlight active
  if (activeLayout === 'grid-3') {
    viewGrid3.className = "p-1.5 rounded-lg bg-white text-violet-605 shadow-2xs active:scale-95 transition-all cursor-pointer border border-zinc-200/40";
  } else if (activeLayout === 'grid-4') {
    viewGrid4.className = "p-1.5 rounded-lg bg-white text-violet-605 shadow-2xs active:scale-95 transition-all cursor-pointer border border-zinc-200/40";
  } else if (activeLayout === 'list') {
    viewList.className = "p-1.5 rounded-lg bg-white text-violet-605 shadow-2xs active:scale-95 transition-all cursor-pointer border border-zinc-200/40";
  }
}

if (viewGrid3) {
  viewGrid3.addEventListener('click', () => {
    activeLayout = 'grid-3';
    updateLayoutButtons();
    processAndRender();
  });
}
if (viewGrid4) {
  viewGrid4.addEventListener('click', () => {
    activeLayout = 'grid-4';
    updateLayoutButtons();
    processAndRender();
  });
}
if (viewList) {
  viewList.addEventListener('click', () => {
    activeLayout = 'list';
    updateLayoutButtons();
    processAndRender();
  });
}

// Quick Filter Chips Styling & Listeners
function updateChipUI() {
  if (!chipInStock || !chipHighlyRated || !chipUnder100 || !chipClearAll) return;
  
  function setChipState(el, active) {
    if (active) {
      el.className = "px-3.5 py-1.5 border border-violet-200 rounded-xl text-violet-655 bg-violet-50 font-bold text-xs transition-all cursor-pointer select-none shadow-sm";
    } else {
      el.className = "px-3.5 py-1.5 border border-zinc-200 rounded-xl text-zinc-650 hover:border-zinc-300 hover:bg-zinc-100/40 text-xs font-medium transition-all cursor-pointer bg-white shadow-3xs select-none";
    }
  }
  
  setChipState(chipInStock, filters.inStockOnly);
  setChipState(chipHighlyRated, filters.highlyRated);
  setChipState(chipUnder100, filters.under100);

  const hasActiveFilters = filters.inStockOnly || filters.highlyRated || filters.under100;
  if (hasActiveFilters) {
    chipClearAll.classList.remove('hidden');
  } else {
    chipClearAll.classList.add('hidden');
  }
}

function toggleFilter(key) {
  filters[key] = !filters[key];
  updateChipUI();
  processAndRender();
}

if (chipInStock) chipInStock.addEventListener('click', () => toggleFilter('inStockOnly'));
if (chipHighlyRated) chipHighlyRated.addEventListener('click', () => toggleFilter('highlyRated'));
if (chipUnder100) chipUnder100.addEventListener('click', () => toggleFilter('under100'));
if (chipClearAll) {
  chipClearAll.addEventListener('click', () => {
    filters.inStockOnly = false;
    filters.highlyRated = false;
    filters.under100 = false;
    updateChipUI();
    processAndRender();
  });
}

// Mobile Menu Toggle logic
function openMobileMenu() {
  if (sidebar && mobileDrawerBackdrop) {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    mobileDrawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    mobileDrawerBackdrop.classList.add('opacity-100', 'pointer-events-auto');
  }
}

function closeMobileMenu() {
  if (sidebar && mobileDrawerBackdrop) {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
    mobileDrawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
    mobileDrawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
  }
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileMenu);

// Logo Reset Trigger
const logoBtn = document.getElementById('logoBtn');
if (logoBtn) {
  logoBtn.addEventListener('click', resetFilters);
}

function resetFilters() {
  searchBox.value = '';
  currentQuery = '';
  clearSearch.classList.add('hidden');
  clearSearch.classList.remove('flex');
  activeCategory = 'all';
  if (breadcrumbCategory) breadcrumbCategory.textContent = 'All Products';
  
  applyCategoryStyles();

  currentSort = 'featured';
  sortBy.value = 'featured';

  filters.inStockOnly = false;
  filters.highlyRated = false;
  filters.under100 = false;
  
  updateChipUI();
  closeMobileMenu();
  fetchResults();
}

resetSearchBtn.addEventListener('click', resetFilters);

// Keyboard Shortcut: '/' to focus search
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchBox) {
    e.preventDefault();
    searchBox.focus();
    searchBox.select();
  }
});

// App Startup
updateLayoutButtons();
updateChipUI();
applyCategoryStyles();
fetchResults();

