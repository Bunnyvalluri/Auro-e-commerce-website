import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'products.json');
const products = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// High quality curated Unsplash images categorized by subcategory & keywords
const curatedImages = {
  // Laptops
  "MacBook": [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop"
  ],
  "Dell XPS": [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop"
  ],
  "HP Pavilion": [
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop"
  ],
  "Lenovo Legion": [
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&auto=format&fit=crop"
  ],
  "ASUS ROG": [
    "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop"
  ],

  // Phones
  "iPhone": [
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop"
  ],
  "Samsung Galaxy": [
    "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop"
  ],
  "OnePlus": [
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop"
  ],
  "Redmi": [
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop"
  ],

  // Cameras
  "Canon DSLR": [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop"
  ],
  "Sony Alpha": [
    "https://images.unsplash.com/photo-1512790182412-b19e6d61b39a?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&auto=format&fit=crop"
  ],
  "GoPro": [
    "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=600&auto=format&fit=crop"
  ],

  // Computer Accessories
  "Keyboard": [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop"
  ],
  "Mouse": [
    "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop"
  ],
  "SSD": [
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop"
  ],
  "Monitor": [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=600&auto=format&fit=crop"
  ],
  "Webcam": [
    "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&auto=format&fit=crop"
  ],

  // Audio
  "Earbuds": [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop"
  ],
  "Headphones": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop"
  ],
  "Speakers": [
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop"
  ],
  "Soundbars": [
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop"
  ],

  // Watches
  "Smartwatches": [
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop"
  ],
  "Analog Watches": [
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop"
  ],
  "Luxury Watches": [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop"
  ],

  // Women's Fashion
  "Saree": [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop"
  ],
  "Kurti": [
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop"
  ],
  "Jeans": [
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542272604-780c36856842?w=600&auto=format&fit=crop"
  ],
  "Tops": [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop"
  ],
  "Dresses": [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop"
  ],
  "Handbags": [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop"
  ],
  "Heels": [
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop"
  ],
  "Watches": [
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop"
  ],

  // Men's Fashion
  "Shirts": [
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop"
  ],
  "T-Shirts": [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop"
  ],
  "Hoodies": [
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop"
  ],
  "Jackets": [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop"
  ],
  "Shoes": [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop"
  ],
  "Wallets": [
    "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop"
  ],

  // Kids & Apparel
  "Baby Dresses": ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop"],
  "Kids T-Shirts": ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop"],
  "School Bags": ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop"],
  "Toys": ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop"],
  "Printed Hoodies": ["https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop"],
  "Oversized Hoodies": ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop"],
  "Zip Hoodies": ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop"],

  // Footwear & Accessories
  "Sneakers": ["https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop"],
  "Running Shoes": ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop"],
  "Sandals": ["https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format&fit=crop"],
  "Formal Shoes": ["https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop"],
  "Belts": ["https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop"],
  "Caps": ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop"],
  "Sunglasses": ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop"],
  "Gloves": ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop"],

  // Fresh & Groceries
  "Vegetables": ["https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop"],
  "Fruits": ["https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop"],
  "Dairy": ["https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop"],
  "Grocery": ["https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop"],

  // Health, Safety & Fitness
  "Sanitizers": ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop"],
  "Protein Powder": ["https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&auto=format&fit=crop"],
  "Vitamins": ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop"],
  "Cleaning Items": ["https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&auto=format&fit=crop"],
  "Masks": ["https://images.unsplash.com/photo-1586942593568-29364efbe871?w=600&auto=format&fit=crop"],
  "First Aid Kit": ["https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&auto=format&fit=crop"],
  "Dumbbells": ["https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop"],
  "Yoga Mats": ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop"],
  "Treadmills": ["https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&auto=format&fit=crop"],
  "Protein Shakers": ["https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&auto=format&fit=crop"],

  // Home, Kitchen, Pets & Baby
  "Mixer": ["https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop"],
  "Cookware": ["https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop"],
  "Plates": ["https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=600&auto=format&fit=crop"],
  "Water Bottles": ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop"],
  "Dog Food": ["https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop"],
  "Cat Food": ["https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop"],
  "Leashes": ["https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop"],
  "Baby Diapers": ["https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop"],
  "Baby Milk Bottles": ["https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop"],
  "Strollers": ["https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&auto=format&fit=crop"],

  // Bags, Beauty, Auto & Books
  "Travel Bags": ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop"],
  "Laptop Bags": ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop"],
  "Trolley Bags": ["https://images.unsplash.com/photo-1565026057447-b88efe82abb1?w=600&auto=format&fit=crop"],
  "Face Wash": ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop"],
  "Moisturizer": ["https://images.unsplash.com/photo-1608248597262-838d510b6697?w=600&auto=format&fit=crop"],
  "Lipstick": ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop"],
  "Serum": ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop"],
  "Helmets": ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&auto=format&fit=crop"],
  "Seat Covers": ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop"],
  "Bike Gloves": ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop"],
  "Story Books": ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop"],
  "Coding Books": ["https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop"],
  "Academic Books": ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop"]
};

// Default fallbacks per category
const categoryDefaults = {
  "Laptops & Notebooks": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop",
  "Mobiles & Phones": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop",
  "Cameras & Optics": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop",
  "Computer Accessories": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop",
  "Electronics & Audio": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop",
  "Watches & Horology": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop",
  "Women's Fashion": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
  "Men's Fashion": "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop",
  "Kids' Fashion": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop",
  "Apparel & Hoodies": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop",
  "Shoes & Footwear": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",
  "Clothing Accessories": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop",
  "Amazon Fresh": "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop",
  "Health & Household": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop",
  "Personal Safety": "https://images.unsplash.com/photo-1586942593568-29364efbe871?w=600&auto=format&fit=crop",
  "Home & Kitchen": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop",
  "Pet Supplies": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop",
  "Sports & Fitness": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop",
  "Baby & Toddler": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop",
  "Bags & Luggage": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop",
  "Beauty & Skincare": "https://images.unsplash.com/photo-1608248597262-838d510b6697?w=600&auto=format&fit=crop",
  "Car & Motorbike": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&auto=format&fit=crop",
  "Books & Literature": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop"
};

let updatedCount = 0;

products.forEach((product, idx) => {
  const sub = product.subcategory;
  const cat = product.category;
  
  let imageUrl = null;
  
  if (sub && curatedImages[sub]) {
    const list = curatedImages[sub];
    imageUrl = list[idx % list.length];
  } else if (categoryDefaults[cat]) {
    imageUrl = categoryDefaults[cat];
  } else {
    imageUrl = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop";
  }
  
  product.image = imageUrl;
  updatedCount++;
});

fs.writeFileSync(jsonPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} product images in products.json!`);
