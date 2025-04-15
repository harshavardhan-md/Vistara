
export interface Place {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  fullDescription?: string;
  rating: number;
  likes: number;
  category: string;
  highlights?: string[];
  food?: string[];
  crafts?: string[];
  gallery?: string[];
}

export const places: Place[] = [
  {
    "id": "kavaledurga-fort",
    "title": "Kavaledurga Fort",
    "location": "Shimoga, Karnataka",
    "image": "https://www.matthuga.in/kodachadri/img/images/kaveldurga-1.jpg",
    "description": "A 9th-century hilltop fort built by the Keladi Nayakas, offering panoramic views of the Western Ghats.",
    "fullDescription": "Kavaledurga Fort, located near Agumbe in Karnataka, is a historic hilltop structure built in the 9th century by the Keladi Nayakas. It features majestic gateways, temple ruins, and remnants of a palace complex. The fort stands tall amidst dense forests and rice fields, providing visitors with a beautiful trek and scenic views of the Western Ghats.",
    "rating": 4.7,
    "likes": 982,
    "category": "Historical",
    "highlights": [
      "9th-century Keladi Nayaka architecture",
      "Trek through paddy fields and forests",
      "Panoramic Western Ghats views",
      "Temple and palace ruins",
      "Quiet and less crowded heritage spot"
    ],
    "food": [
      "Akki Rotti (Rice flatbread)",
      "Ragi Mudde (Finger millet balls)",
      "Chitranna (Lemon rice)",
      "Kayi Obbattu (Coconut sweet bread)"
    ],
    "crafts": [
      "Wood carving",
      "Terracotta pottery",
      "Local bamboo crafts",
      "Traditional cane baskets"
    ],
    "gallery": [
      "https://avathioutdoors.gumlet.io/travelGuide/dev/shimoga_P4201.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgptAcriL_toKyu3SYjhlHV-L_uhbH1Dc4wBKe_umiM8_UZ2O_YD9MuSDENjsbzQB2GvwPR8XM27Zz6Or_8OxhVtTZgomvV7BN4CT03hUWx7R51P8o2hycoz5GcZs119Jn45mved7nBA15l/w640-h428/dsc_5921.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixFKm7ow3_7ci68lylY9rQm4wP3l0Qm6qEK2ukFsB1BH9Fah2LZPUFP87PmaxlhdYiBmNJgh7lnXEHzarCBFE0I7cvIXZwaT_5FVLykQSbY5MnlOdoZobTNCkRxhSBa0BTWqdUBk98WPOx/w640-h428/dsc_5944_1.JPG"
    ]
  },
  {
    "id": "tipu-sultan-summer-palace",
    "title": "Tipu Sultan's Summer Palace",
    "location": "Bengaluru, Karnataka",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-tipu-sultan-summer-palace-bangalore-karnataka-attr-hero",
    "description": "An 18th-century Indo-Islamic palace built of teak wood, once the summer residence of Tipu Sultan.",
    "fullDescription": "Located in Chamrajpet, Bengaluru, Tipu Sultan's Summer Palace is a remarkable example of 18th-century Indo-Islamic architecture. Built entirely from teak wood, the palace features ornamental arches, floral motifs, and intricate woodwork. It served as Tipu Sultan's summer retreat and today stands as a museum showcasing artifacts from his reign, offering visitors a glimpse into the life of the 'Tiger of Mysore'.",
    "rating": 4.6,
    "likes": 1164,
    "category": "Palaces",
    "highlights": [
      "Teak wood Indo-Islamic architecture",
      "18th-century royal summer residence",
      "Museum with Tipu Sultan artifacts",
      "Intricate floral and ornamental carvings",
      "Peaceful ambience in the heart of Bengaluru"
    ],
    "food": [
      "Bisi Bele Bath",
      "Masala Dosa",
      "Kesari Bath",
      "Filter Coffee"
    ],
    "crafts": [
      "Mysore paintings",
      "Wood carving",
      "Sandalwood artifacts",
      "Silk weaving"
    ],
    "gallery": [
      "https://s7ap1.scene7.com/is/image/incredibleindia/tipu-sultans-summer-palace-bengaluru-karnataka-14-musthead-hero",
      "https://s7ap1.scene7.com/is/image/incredibleindia/tipu-sultans-summer-palace-bengaluru-karnataka-15-musthead-hero",
      "https://s7ap1.scene7.com/is/image/incredibleindia/tipu-sultans-summer-palace-bengaluru-karnataka-3-musthead-hero"
    ]
  },
  {
    "id": "bhoga-nandeeshwara-temple",
    "title": "Bhoga Nandeeshwara Temple",
    "location": "Chikkaballapur, Karnataka",
    "image": "https://stepstogether.in/wp-content/uploads/2021/05/P1120897-01.jpg",
    "description": "A 9th-century temple complex dedicated to Lord Shiva, showcasing beautiful Dravidian architecture.",
    "fullDescription": "Bhoga Nandeeshwara Temple, located at the base of Nandi Hills in Chikkaballapur, is a historic temple dedicated to Lord Shiva. Built in the 9th century, it is one of the oldest temples in Karnataka. The temple features stunning Dravidian-style architecture and has received contributions over centuries from the Ganga, Chola, Hoysala, and Vijayanagara dynasties. The tranquil setting and detailed carvings make it a spiritual and architectural gem.",
    "rating": 4.8,
    "likes": 1342,
    "category": "Temples",
    "highlights": [
      "9th-century origin and historic significance",
      "Dravidian architecture with intricate carvings",
      "Contributions from Cholas, Hoysalas, and Vijayanagara",
      "Located at the base of scenic Nandi Hills",
      "Peaceful temple complex with spiritual ambience"
    ],
    "food": [
      "Puliyogare (Tamarind rice)",
      "Thali meals",
      "Ragi Sangati",
      "Sweet Pongal"
    ],
    "crafts": [
      "Stone sculpture",
      "Brass temple artifacts",
      "Handwoven textiles",
      "Clay lamps"
    ],
    "gallery": [
      "https://vedicfeed.com/wp-content/uploads/2019/08/Bhoga-Nandeeshwara-1024x731.jpg",
      "https://thetempleguru.com/wp-content/uploads/2023/10/Shree-Bhoga-Nandishwara-Temple-13.jpg",
      "https://64.media.tumblr.com/0211203cf3b4c7b6e928a11c00274964/9d0b5e9c238c4ace-ab/s1280x1920/fba56a6fc7692d7aa84dc701cbbc9387330e92f0.jpg"
    ]
  },
  {
    "id": "seshadri-iyer-memorial-hall",
    "title": "Seshadri Iyer Memorial Hall",
    "location": "Bengaluru, Karnataka",
    "image": "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/karnataka/bengaluru/quick-quest-bengalurus-highlights-in-48-hours/1-sheshadri-iyer-memorial-hall-bangalore-karnataka-tri-iter-day1.jpg",
    "description": "A red-painted heritage building from 1915 that houses the State Central Library, set in Cubbon Park.",
    "fullDescription": "Seshadri Iyer Memorial Hall is a prominent red-brick heritage structure located in Cubbon Park, Bengaluru. Built in 1915, it is named after Sir K. Seshadri Iyer, the Dewan of Mysore. The building now functions as the State Central Library and is a landmark of literary and architectural significance. Surrounded by lush greenery, it’s a peaceful hub for book lovers and history enthusiasts alike.",
    "rating": 4.5,
    "likes": 974,
    "category": "Historical",
    "highlights": [
      "Built in 1915, iconic red structure",
      "Named after Dewan Seshadri Iyer",
      "Houses the State Central Library",
      "Located inside Cubbon Park",
      "Peaceful reading and photography spot"
    ],
    "food": [
      "Masala Puri (Chaat)",
      "Vegetable Sandwich",
      "Vada Pav",
      "Cold Coffee"
    ],
    "crafts": [
      "Old book collections",
      "Archival maps and manuscripts",
      "Handmade bookmarks",
      "Heritage posters"
    ],
    "gallery": [
      "https://thumbs.dreamstime.com/b/seshadri-iyer-memorial-hall-bangalore-karnataka-india-seshadri-iyer-memorial-hall-bangalore-karnataka-131949056.jpg",
      "https://www.shutterstock.com/editorial/image-editorial/McT1M6yaMbDfQ0w2NjAxNTg=/seshadri-iyer-memorial-hall-public-library-bengaluru-550nw-13090051l.jpg",
      "https://bangaloremirror.indiatimes.com/thumb/msid-64723757,width-1200,height-900,resizemode-4/.jpg"
    ]
  },
  {
    "id": "bull-temple",
    "title": "Bull Temple (Dodda Basavana Gudi)",
    "location": "Bengaluru, Karnataka",
    "image": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/22/99e6aefa81092caa3f6eda87878ef86a_1000x1000.jpg",
    "description": "A 16th-century temple built by Kempe Gowda I, home to a massive monolithic statue of Nandi the bull.",
    "fullDescription": "Bull Temple, also known as Dodda Basavana Gudi, is a historic Hindu temple located in Basavanagudi, Bengaluru. Built in the 16th century by Kempe Gowda I, the founder of Bengaluru, the temple is famous for its gigantic Nandi statue carved from a single granite rock. At over 4.5 meters tall and 6 meters long, it is one of the largest Nandi statues in the world and draws pilgrims and tourists year-round.",
    "rating": 4.6,
    "likes": 1123,
    "category": "Temples",
    "highlights": [
      "Built in the 16th century by Kempe Gowda I",
      "Massive monolithic Nandi statue",
      "Located in Basavanagudi",
      "Popular pilgrimage site",
      "Annual groundnut fair (Kadalekai Parishe)"
    ],
    "food": [
      "Ragi Mudde with Sambar",
      "Kesari Bath",
      "Filter Coffee",
      "Masala Dosa"
    ],
    "crafts": [
      "Temple souvenirs",
      "Handmade idols",
      "Local stone carvings",
      "Religious bead necklaces"
    ],
    "gallery": [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/70/56/e3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BullTemple1.jpg/250px-BullTemple1.jpg",
      "https://static.toiimg.com/photo/48956176.cms"
    ]
  },
  {
    "id": "manchanabele-dam",
    "title": "Manchanabele Dam",
    "location": "Ramanagara, Karnataka",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fd/5f/c2/view-of-the-dam.jpg",
    "description": "A scenic dam built across the Arkavathi River, surrounded by hills and forests — a perfect natural retreat.",
    "fullDescription": "Manchanabele Dam, located in the Ramanagara District of Karnataka, is a peaceful getaway built on the Arkavathi River. Nestled amidst lush hills and forested surroundings, the dam is a favorite among nature enthusiasts and adventure seekers. Its serene ambiance is complemented by opportunities for kayaking, trekking, and bird watching, making it ideal for a day trip away from the city bustle.",
    "rating": 4.5,
    "likes": 967,
    "category": "Natural",
    "highlights": [
      "Located on the Arkavathi River",
      "Lush green hills and forest",
      "Popular for kayaking and trekking",
      "Ideal for nature photography",
      "Tranquil atmosphere near Bengaluru"
    ],
    "food": [
      "Grilled Corn",
      "Puliyogare (Tamarind rice)",
      "Idli with Chutney",
      "Chitranna (Lemon rice)"
    ],
    "crafts": [
      "Local nature photography prints",
      "Handmade nature-themed souvenirs",
      "Cane baskets",
      "Clay pots"
    ],
    "gallery": [
      "https://praveenmusafir.com/wp-content/uploads/2024/02/Machhable-dam-1024x768.jpg",
      "https://media1.thrillophilia.com/filestore/4e0et0dngly6o1a1fhe5rcqbgzui_shutterstock_1813918580.jpg",
      "https://farm3.staticflickr.com/2149/2132304295_7d05201ccf_z.jpg"
    ]
  },
  {
    "id": "big-banyan-tree",
    "title": "Big Banyan Tree (Dodda Alada Mara)",
    "location": "Ramanagara, Karnataka",
    "image": "https://touringwithpk.com/wp-content/uploads/2021/09/misc-015a.jpg",
    "description": "A 400-year-old sprawling Banyan tree covering over 3 acres, offering a cool, shaded picnic retreat.",
    "fullDescription": "The Big Banyan Tree, also known as Dodda Alada Mara, is located in Ramohalli near Kengeri, around 28 km from Bengaluru. Estimated to be over 400 years old, this Ficus Benghalensis spreads across nearly 3 acres and is considered one of the largest of its kind. The tree symbolizes the Hindu trinity—roots for Brahma, trunk for Vishnu, and branches for Shiva. The site is under the care of the horticulture department and features fenced paths to explore the maze of aerial roots, making it a popular picnic spot with a serene view of Savanadurga and Manchanabele reservoir.",
    "rating": 4.7,
    "likes": 1089,
    "category": "Natural",
    "highlights": [
      "400+ years old Ficus Benghalensis",
      "Sprawls across 3 acres",
      "Symbolic of the Hindu trinity",
      "Scenic backdrop of Savanadurga and Manchanabele",
      "Popular picnic and day trip destination"
    ],
    "food": [
      "Tender Coconut Water",
      "Maddur Vada",
      "Vegetable Upma",
      "Masala Churmuri"
    ],
    "crafts": [
      "Wooden keychains",
      "Local handicrafts",
      "Leaf-based art",
      "Nature-inspired paintings"
    ],
    "gallery": [
      "https://touringwithpk.com/wp-content/uploads/2021/09/misc-015a.jpg",
      "https://www.travelescape.in/wp-content/uploads/2017/08/Big-Banyan-Tree-Bangalore-800x600.jpg",
      "https://static2.tripoto.com/media/filter/nl/img/577668/TripDocument/1634981643_img_20211003_144728_01.jpeg"
    ]
  },
  {
    "id": "chennakeshava-temple",
    "title": "Chennakeshava Temple",
    "location": "Hassan, Karnataka",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Courtyard_of_Chennakesava_Temple_-_Belur.jpg",
    "description": "A 12th-century Hoysala temple known for its intricate carvings and spiritual significance.",
    "fullDescription": "The Chennakeshava Temple, located in Belur of Hassan District, was constructed in the 12th century by the Hoysala Empire. This iconic Hindu temple, dedicated to Lord Vishnu, is famed for its ornate carvings, friezes, and detailed sculptures. It stands as a living testimony to Hoysala craftsmanship and attracts history lovers, art enthusiasts, and devotees alike. The temple complex, rich in cultural and spiritual heritage, is one of the finest examples of temple architecture in South India.",
    "rating": 4.9,
    "likes": 1432,
    "category": "Temples",
    "highlights": [
      "Built by Hoysala rulers in the 12th century",
      "Dedicated to Lord Vishnu",
      "Exquisite stone carvings and sculptures",
      "Historic and architectural significance",
      "Popular pilgrimage and tourist spot"
    ],
    "food": [
      "Ragi Mudde with Sambar",
      "Mysore Pak",
      "Kesari Bath",
      "Filter Coffee"
    ],
    "crafts": [
      "Soapstone sculptures",
      "Traditional temple models",
      "Hoysala-style carvings",
      "Handcrafted stone jewelry"
    ],
    "gallery": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/39/a2/3b/southern-entrance-chennakeshav.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/6f/0c/3e/the-gopuram-leading-to.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/cf/a4/d6/chennakesava-temple.jpg"
    ]
  },
];
