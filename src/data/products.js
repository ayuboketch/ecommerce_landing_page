export const products = [
  {
    id: 1,
    name: "Minimalist Leather Tote",
    price: 285,
    category: "Bags",
    description: "Handcrafted from premium Italian leather, this tote combines timeless elegance with everyday functionality. Features interior pockets and magnetic closure.",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
    ],
    colors: ["Cognac", "Black", "Cream"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Organic Cotton Sweater",
    price: 145,
    category: "Clothing",
    description: "Luxuriously soft organic cotton sweater with a relaxed fit. Ethically sourced and sustainably produced for conscious comfort.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
    ],
    colors: ["Oatmeal", "Charcoal", "Forest"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Ceramic Pour-Over Set",
    price: 89,
    category: "Home",
    description: "Artisan-crafted ceramic pour-over coffee set. Each piece is hand-thrown and finished with a reactive glaze for unique character.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
    ],
    colors: ["Speckled White", "Matte Black"],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Linen Blend Trousers",
    price: 165,
    category: "Clothing",
    description: "Effortlessly elegant linen-blend trousers with a high waist and wide leg. Perfect for warm weather sophistication.",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"
    ],
    colors: ["Sand", "Navy", "White"],
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Handwoven Wool Throw",
    price: 195,
    category: "Home",
    description: "Traditional handwoven wool throw blanket. Made by skilled artisans using techniques passed down through generations.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80"
    ],
    colors: ["Natural", "Indigo", "Terracotta"],
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Leather Card Wallet",
    price: 75,
    category: "Accessories",
    description: "Slim profile card wallet in vegetable-tanned leather. Ages beautifully with use, developing a unique patina over time.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&q=80"
    ],
    colors: ["Tan", "Black", "Burgundy"],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Silk Scarf",
    price: 120,
    category: "Accessories",
    description: "Hand-printed silk scarf featuring an exclusive botanical design. Lightweight and versatile for year-round styling.",
    images: [
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=800&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80"
    ],
    colors: ["Botanical", "Abstract", "Geometric"],
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Stoneware Vase",
    price: 68,
    category: "Home",
    description: "Modern stoneware vase with organic curves and matte finish. A statement piece for any interior space.",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=800&q=80"
    ],
    colors: ["White", "Sage", "Terracotta"],
    inStock: false,
    featured: false
  }
];

export const categories = ["All", "Clothing", "Bags", "Accessories", "Home"];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category) => 
  category === "All" ? products : products.filter(p => p.category === category);
