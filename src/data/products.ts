export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  artisan: {
    name: string;
    location: string;
  };
  category: string;
  likes: number;
  isLiked?: boolean;
  materials?: string[];
  dimensions?: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    "id": "1",
    "category": "Textiles",
    "name": "Kanjeevaram Silk Saree",
    "artisan": {
      "name": "Lakshmi Subramanian",
      "location": "Mysuru , Southern Karnataka"
    },
    "price": 12000,
    "description": "Luxurious silk saree from Tamil Nadu, known for its vibrant colors and intricate gold zari work.",
    "image": "https://www.griiham.in/cdn/shop/files/Kumbarpattu-Kanchipuram-silk-saree-with-copper-work13699N-Saris-Lehengas-Mygriiham.jpg?v=1734599176",
    "gallery": ["Image1"],
    "likes": 45,
    "materials": ["Pure Silk", "Gold Zari"],
    "dimensions": "6.2 meters length x 1.2 meters width"
  },
  {
    "id": "2",
    "category": "Textiles",
    "name": "Bandhani Dupatta",
    "artisan": {
      "name": "Meena Patel",
      "location": "Hampi, Bangalore"
    },
    "price": 1800,
    "description": "Traditional tie-dye technique from Gujarat, featuring vibrant patterns on cotton fabric.",
    "image": "https://www.sindhoipatola.in/cdn/shop/products/NPfGJ4hbi0AjqfPE2kq.jpg?v=1678537471",
    "gallery": [],
    "likes": 30,
    "materials": ["Cotton", "Natural Dyes"],
    "dimensions": "2.5 meters length x 1 meter width"
  },
  {
    "id": "3",
    "category": "Textiles",
    "name": "Chikankari Kurta",
    "artisan": {
      "name": "Farzana Begum",
      "location": "Badami, Bagalkot District"
    },
    "price": 2500,
    "description": "Elegant hand-embroidered kurta from Lucknow, showcasing delicate floral patterns.",
    "image": "https://www.shasakclothing.com/cdn/shop/files/DSC02441.jpg?v=1705066689&width=1946",
    "gallery": [],
    "likes": 38,
    "materials": ["Cotton", "Embroidery Threads"],
    "dimensions": "Available in various sizes"
  },
  {
    "id": "4",
    "category": "Textiles",
    "name": "Pashmina Shawl",
    "artisan": {
      "name": "Abdul Majid",
      "location": "Pattadakal, Bagalkot District"
    },
    "price": 8500,
    "description": "Soft and warm shawl from Kashmir, made from fine Pashmina wool.",
    "image": "https://shoponline.cottageemporium.in/image/cache/catalog/NEW%20SHAWLS/S071D117EA0013003000_A-600x667.jpg",
    "gallery": [],
    "likes": 42,
    "materials": ["Pashmina Wool"],
    "dimensions": "2 meters length x 0.7 meters width"
  },
  {
    "id": "5",
    "category": "Pottery",
    "name": "Terracotta Matka",
    "artisan": {
      "name": "Raju Kumhar",
      "location": "Belur, Hassan District"
    },
    "price": 450,
    "description": "Handcrafted clay pot perfect for storing water in a traditional way.",
    "image": "https://i.etsystatic.com/26470112/r/il/500481/3373548286/il_570xN.3373548286_45h7.jpg",
    "gallery": [],
    "likes": 32,
    "materials": ["Natural Clay"],
    "dimensions": ""
  },
  {
    "id": "6",
    "category": "Pottery",
    "name": "Blue Pottery Vase",
    "artisan": {
      "name": "Salim Khan",
      "location": "Gokarna, Karnataka"
    },
    "price": 1200,
    "description": "Jaipur-style blue pottery with floral motifs.",
    "image": "https://cdn.vibecity.in/providers/61dc119f7864df0011da13c3/13ed9ac8-4a74-4e8f-8966-e0baff65939c_dc64f2b2-d9e1-4eed-a676-b91ebe77e32c-3X.png",
    "gallery": [],
    "likes": 47,
    "materials": ["Quartz", "Katira Gum", "Multani Mitti"],
    "dimensions": ""
  },
  {
    "id": "7",
    "category": "Pottery",
    "name": "Clay Diya Set",
    "artisan": {
      "name": "Sunita Devi",
      "location": "Srirangapatna, Mandya District"
    },
    "price": 250,
    "description": "Decorative handmade diya set for festivals and rituals.",
    "image": "https://www.jiomart.com/images/product/original/rvi4ganivu/mkd2-rise-natural-clay-traditional-diwali-ke-diya-earthen-clay-diya-mitti-ka-diya-diyas-for-pooja-medium-set-of-4-product-images-orvi4ganivu-p593944897-3-202410031459.jpg?im=Resize=(420,420)",
    "gallery": [],
    "likes": 28,
    "materials": ["Terracotta"],
    "dimensions": ""
  },
  {
    "id": "8",
    "category": "Pottery",
    "name": "Glazed Pot Planter",
    "artisan": {
      "name": "Manoj Verma",
      "location": "Sringeri, Chikkamagaluru District"
    },
    "price": 900,
    "description": "Colorful glazed ceramic planter for indoor plants.",
    "image": "https://cdn.pixelspray.io/v2/black-bread-289bfa/TIw66q/wrkr/t.resize(h:620,w:700)/data/Westelm/14may2024/10486560_1.jpg",
    "gallery": [],
    "likes": 36,
    "materials": ["Ceramic", "Glaze"],
    "dimensions": ""
  },
  {
    "id": "9",
    "category": "Painting",
    "name": "Madhubani Painting – Krishna Leela",
    "artisan": {
      "name": "Sita Devi",
      "location": "Dharmasthala, Dakshina Kannada District"
    },
    "price": 2000,
    "description": "Folk painting from Bihar depicting Krishna's childhood.",
    "image": "https://mapacademy.io/wp-content/uploads/2023/04/madhubani-painting-3m.jpg",
    "gallery": [],
    "likes": 61,
    "materials": ["Handmade paper", "Natural dyes"],
    "dimensions": ""
  },
  {
    "id": "10",
    "category": "Painting",
    "name": "Warli Art – Tribal Life",
    "artisan": {
      "name": "Kalu Bhagat",
      "location": "Udupi,  Coastal Karnataka"
    },
    "price": 1500,
    "description": "Traditional Warli painting showcasing tribal village scenes.",
    "image": "https://i.pinimg.com/736x/45/6f/d8/456fd81b33e78fef6cf712601fccfae7.jpg",
    "gallery": [],
    "likes": 34,
    "materials": ["Cow dung base", "White rice paste"],
    "dimensions": ""
  },
  {
    "id": "11",
    "category": "Metalwork",
    "name": "Brass Oil Lamp (Kuthu Vilakku)",
    "artisan": {
      "name": "Rajan Pillai",
      "location": "Banavasi, Uttara Kannada District"
    },
    "price": 1800,
    "description": "Traditional South Indian oil lamp, often used in temples.",
    "image": "https://m.media-amazon.com/images/I/51xyfFKUkKL.jpg",
    "gallery": [],
    "likes": 78,
    "materials": ["Brass"],
    "dimensions": ""
  },
  {
    "id": "12",
    "category": "Metalwork",
    "name": "Dokra Bull Figurine",
    "artisan": {
      "name": "Laxman Murmu",
      "location": "Talakadu, Near Mysuru, on the banks of the Cauvery River"
    },
    "price": 3500,
    "description": "Handcrafted using ancient lost-wax casting by tribal artisans.",
    "image": "https://m.media-amazon.com/images/I/71ghkqhzASL.jpg",
    "gallery": [],
    "likes": 39,
    "materials": ["Brass", "Beeswax"],
    "dimensions": ""
  },
  {
    "id": "13",
    "category": "Metalwork",
    "name": "Bell Metal Utensil Set",
    "artisan": {
      "name": "Dinesh Kumar",
      "location": "Kollur, Udupi District"
    },
    "price": 2400,
    "description": "Durable and traditional dining set made of bell metal.",
    "image": "https://www.mugasilk.in/wp-content/uploads/2017/02/Ethnic-Serving-Bowl-Tray-and-Dish-Set-Of-6-Bell-Metal1.jpg",
    "gallery": [],
    "likes": 26,
    "materials": ["Bell Metal"],
    "dimensions": ""
  },
  {
    "id": "14",
    "category": "Metalwork",
    "name": "Bronze Dancing Shiva",
    "artisan": {
      "name": "Muthu Vel",
      "location": "Hoskote, Bangalore"
    },
    "price": 4800,
    "description": "Exquisite Nataraja sculpture made using bronze casting.",
    "image": "https://i.pinimg.com/736x/d9/20/fe/d920fe2882cef8621c165270cb0763c9.jpg",
    "gallery": [],
    "likes": 50,
    "materials": ["Bronze"],
    "dimensions": ""
  },
  {
    "id": "15",
    "category": "Woodwork",
    "name": "Sandalwood Carved Elephant",
    "artisan": {
      "name": "Ravi Kumar",
      "location": "Mysuru, Karnataka"
    },
    "price": 2200,
    "description": "Intricate hand-carved elephant made from Mysore sandalwood.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/9/345282685/CA/YX/NI/374940/sandalwood-elephant-statues.jpg",
    "gallery": [],
    "likes": 52,
    "materials": ["Sandalwood"],
    "dimensions": ""
  },
  {
    "id": "16",
    "category": "Woodwork",
    "name": "Rosewood Carved Panel",
    "artisan": {
      "name": "Ganesh Acharya",
      "location": "Gokarna, Karnataka"
    },
    "price": 3600,
    "description": "Wall decor panel carved from premium rosewood.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OujPL2UO64lhjTg45K0DfML3PbfruSfx3w&s",
    "gallery": [],
    "likes": 34,
    "materials": ["Rosewood"],
    "dimensions": ""
  },
  {
    "id": "17",
    "category": "Sculpture",
    "name": "Stone Buddha Head",
    "artisan": {
      "name": "Nandakumar",
      "location": "Saundatti, Belagavi District"
    },
    "price": 4200,
    "description": "Carved from black granite, serene expression for meditation spaces.",
    "image": "https://images.pexels.com/photos/18577498/pexels-photo-18577498/free-photo-of-stone-buddha-statue-among-leaves.jpeg",
    "gallery": [],
    "likes": 63,
    "materials": ["Granite"],
    "dimensions": ""
  },
  {
    "id": "18",
    "category": "Sculpture",
    "name": "Terracotta Horse – Bankura Style",
    "artisan": {
      "name": "Pradip Ghosh",
      "location": "Shivagange, Tumakuru"
    },
    "price": 1400,
    "description": "Symbolic ritual sculpture from Bengal, often used in religious offerings.",
    "image": "https://thumbs.dreamstime.com/b/bankura-terracotta-horses-beautiful-clay-produced-panchmura-village-district-west-bengal-arranged-sale-67655448.jpg",
    "gallery": [],
    "likes": 48,
    "materials": ["Terracotta"],
    "dimensions": ""
  },
  {
    "id": "19",
    "category": "Sculpture",
    "name": "Marble Ganesha Idol",
    "artisan": {
      "name": "Naresh Sharma",
      "location": "Lepakshi , Chitradurga"
    },
    "price": 3000,
    "description": "Polished white marble idol with gold embellishments.",
    "image": "https://www.ganeshmoortiart.com/admin/assets/img/8351225940.webp",
    "gallery": [],
    "likes": 51,
    "materials": ["Marble", "Gold Paint"],
    "dimensions": ""
  }
];