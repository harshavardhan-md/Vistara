export interface Story {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: {
    name: string;
    avatar?: string;
  };
  postedAt: string;
  likes: number;
  comments: number;
  categories: string[];
  content?: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
}

export const stories: Story[] = [
  {
    id: "belur-halebidu",
    title: "The Hoysala Marvels: Belur and Halebidu",
    excerpt: "Exploring the intricate stone carvings and architectural splendor of Karnataka's Hoysala temples.",
    thumbnail: "https://cisindus.org/wp-content/uploads/2021/10/Hoysaleshwar-Temple_1-1-scaled.jpeg",
    author: {
      name: "Karthik Gowda",
      avatar: "https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7217.jpg"
    },
    postedAt: "3 days ago",
    likes: 342,
    comments: 28,
    categories: ["Historical", "Architecture"],
    content: "My journey to Belur and Halebidu was like stepping into a stone poetry book. The Chennakeshava Temple at Belur left me speechless with its intricate carvings depicting scenes from the Puranas and Mahabharata. Each bracket figure of celestial maidens (Madanikas) tells a unique story through frozen dance poses. At Halebidu, the Hoysaleswara Temple's star-shaped platform and the detailed depiction of Shiva's life on its walls showcase the pinnacle of Hoysala craftsmanship. The local guide explained how each carving took years to complete, with no two designs being identical among the thousands present. The resilience of these 12th-century masterpieces against invasions and time makes them even more impressive.",
    media: [
      {
        type: "image",
        url: "https://www.india-a2z.com/images/halebidu1.jpg",
        caption: "The magnificent star-shaped platform of Hoysaleswara Temple"
      },
      {
        type: "image",
        url: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2016%2F01%2F18%2F523779.jpg",
        caption: "Intricate stone carvings depicting celestial dancers"
      },
      {
        type: "image",
        url: "https://i0.wp.com/yatrikaone.com/wp-content/uploads/travel/destination/India/Karnataka/Belur/ChennaKeshava/Entrance/East/E_17_1_987_1_east_entrance_1_rs_wm.jpg",
        caption: "The majestic entrance of Chennakeshava Temple"
      }
    ]
  },
  {
    id: "hampi-vijayanagara",
    title: "Lost City of Hampi: Vijayanagara's Legacy",
    excerpt: "Wandering through the boulder-strewn landscape and magnificent temples of Karnataka's UNESCO World Heritage Site.",
    thumbnail: "https://www.worldatlas.com/r/w960-q80/upload/ff/49/57/shutterstock-1509720656.jpg",
    author: {
      name: "Lakshmi Devi",
      avatar: "https://img.freepik.com/premium-photo/25yearold-indian-woman-s-elegance-golden-saree_878783-16771.jpg"
    },
    postedAt: "1 week ago",
    likes: 578,
    comments: 45,
    categories: ["Historical", "Adventure"],
    media: [
      {
        type: "image",
        url: "https://www.indiantempletour.com/wp-content/uploads/2023/05/vijaya-vittala-temple-hampi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
        caption: "The iconic stone chariot at Vittala Temple"
      },
      {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4U-X98wTZKNhBo97qkC9isat4Dokj6dmP2w&s",
        caption: "Ruins of the Virupaksha Bazaar against boulder-strewn hills"
      },
      {
        type: "image",
        url: "https://img.freepik.com/premium-photo/breathtaking-view-majestic-far-eastern-palace-sunset-with-golden-hues-casting-warm-glow_890802-550.jpg?w=360",
        caption: "Sunset casting golden hues over the royal enclosures"
      }
    ]    
  },
  {
    id: "coorg-coffee",
    title: "Misty Mornings in Coorg's Coffee Plantations",
    excerpt: "Experiencing the aroma and culture of Karnataka's coffee country nestled in the Western Ghats.",
    thumbnail: "https://specialplacesofindia.com/wp-content/uploads/2024/01/Homage-to-Coffee-%E2%80%93-Unique-Coffee-Infused-Experiences.jpg",
    author: {
      name: "Arjun Kodava",
      avatar: "https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7218.jpg"
    },
    postedAt: "2 weeks ago",
    likes: 415,
    comments: 32,
    categories: ["Natural", "Cultural"],
    media: [
      {
        type: "image",
        url: "https://cdn.shopify.com/s/files/1/0551/0981/2291/files/Chikmagalur_Karnataka_1024x1024.jpg?v=1713179622",
        caption: "Verdant coffee estates rolling across Coorg’s misty hills"
      },
      {
        type: "image",
        url: "https://images.stockcake.com/public/3/c/c/3cc0a329-0edb-4b7e-8112-9808349f00f7_large/harvesting-coffee-cherries-stockcake.jpg",
        caption: "Freshly plucked coffee cherries being sun-dried"
      },
      {
        type: "image",
        url: "https://media2.thrillophilia.com/images/photos/000/231/182/original/1587117758_192067969.jpg?",
        caption: "A cozy plantation homestay tucked amidst coffee shrubs"
      }
    ]    
  },
  {
    id: "mysore-dasara",
    title: "Celebrating Mysore Dasara: A Royal Affair",
    excerpt: "Witnessing the grandeur of Karnataka's most famous festival with its illuminated palace and majestic processions.",
    thumbnail: "https://i0.wp.com/mysuruinfrahub.com/wp-content/uploads/2023/09/MysuruDasara3.jpg",
    author: {
      name: "Deepa Iyengar",
      avatar: "https://cdn.openart.ai/published/4pSEhEglIwsiwhfTQmbU/qQG-12Dh_9OfU_raw.jpg"
    },
    postedAt: "1 month ago",
    likes: 629,
    comments: 53,
    categories: ["Festival", "Cultural"],
    media: [
      {
        type: "image",
        url: "https://www.drikpanchang.com/images/events/vijaydashami/dasara/mysore_dasara_procession.jpg",
        caption: "The grand Dasara procession with decorated elephants"
      },
      {
        type: "image",
        url: "https://www.shutterstock.com/image-photo/mysore-palace-260nw-724917277.jpg",
        caption: "Mysore Palace illuminated with 100,000 lights during Dasara"
      },
      {
        type: "image",
        url: "https://www.shutterstock.com/image-photo/mysore-india-30-september-2017-260nw-733380193.jpg",
        caption: "Traditional folk performances energize the festive streets"
      }
    ]
    
  },
  {
    id: "gokarna-beaches",
    title: "Hidden Beaches of Gokarna",
    excerpt: "Discovering Karnataka's coastal paradise with its pristine beaches, tranquil waters, and spiritual vibes.",
    thumbnail: "https://static.india.com/wp-content/uploads/2022/07/Paradise-Beach-Gokarna.jpg",
    author: {
      name: "Praveen Kumar",
      avatar: "https://img.freepik.com/premium-photo/young-smart-indian-businessman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142269.jpg"
    },
    postedAt: "2 months ago",
    likes: 382,
    comments: 29,
    categories: ["Adventure", "Spiritual"],
    media: [
      {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZb5zfrOIiku0LPwxFQm7VsXE1hSbcYOPrg&s",
        caption: "The crescent-shaped Om Beach known for its peaceful vibe"
      },
      {
        type: "image",
        url: "https://cdn.shopify.com/s/files/1/0864/5253/5613/files/AdobeStock_179229828_480x480.jpg?v=1722461320",
        caption: "Secluded Paradise Beach accessible only by hike or boat"
      },
      {
        type: "image",
        url: "https://www.holidify.com/images/cmsuploads/compressed/yoga-1996209_960_720_20191223103901.jpg",
        caption: "Kudle Beach – a favorite for yoga, sunsets, and soul searching"
      }
    ]    
  },
  {
    id: "udupi-cuisine",
    title: "Culinary Journey Through Udupi's Traditional Kitchens",
    excerpt: "Exploring the authentic vegetarian delicacies and age-old cooking techniques of coastal Karnataka.",
    thumbnail: "https://thewandertherapy.com/wp-content/uploads/2024/06/9.udupi-cuisine.jpg",
    author: {
      name: "Sumana Hegde",
      avatar: "https://t4.ftcdn.net/jpg/07/98/72/89/360_F_798728945_c7RghNy7K8nSSVYsisEJ7EladuShxT98.jpg"
    },
    postedAt: "3 months ago",
    likes: 287,
    comments: 24,
    categories: ["Cuisine", "Cultural"],
    media: [
      {
        type: "image",
        url: "https://img.freepik.com/premium-photo/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50751.jpg?w=2000",
        caption: "Traditional Udupi meal served on a banana leaf"
      },
      {
        type: "image",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/05/udupi-sambar-recipe-1.jpg",
        caption: "Chefs preparing Udupi sambar and rasam in traditional pots"
      },
      {
        type: "image",
        url: "https://th.bing.com/th/id/OIP.rIz66a_gZftfpc3uiJfS4QHaFj?rs=1&pid=ImgDetMain",
        caption: "Temple-style Udupi thali that reflects devotion and simplicity"
      }
    ]
  },
  {
    id: "badami-caves",
    title: "The Ancient Rock-Cut Caves of Badami",
    excerpt: "Exploring the magnificent sandstone cave temples carved by the early Chalukyan artisans in North Karnataka.",
    thumbnail: "https://turuhi.com/storage/story/1-Badami-Caves.jpg",
    author: {
      name: "Vinay Patil",
      avatar: "https://srmap.edu.in/wp-content/uploads/2021/02/manzoor-hassan-1.jpg"
    },
    postedAt: "4 months ago",
    likes: 342,
    comments: 31,
    categories: ["Historical", "Architecture"],
    media: [
      {
        type: "image",
        url: "https://www.setmytrip.in/wp-content/uploads/2024/08/licensed-image-21.jpeg",
        caption: "The red sandstone cliffs housing Badami’s ancient caves"
      },
      {
        type: "image",
        url: "https://images.stockcake.com/public/1/9/c/19c04d9a-5d9a-4bf7-9fd4-eaedd9a461d5_large/ancient-temple-carvings-stockcake.jpg",
        caption: "Exquisite carvings of deities etched into the cave walls"
      },
      {
        type: "image",
        url: "https://yatrikaone.com/wp-content/uploads/travel/destination/India/Karnataka/Badami/AgastyaLake/india_badami_agastya_lake_3_3_19_838_2_rs_wm_north_side_caves_and_fort.jpg",
        caption: "A panoramic view of Agastya Lake flanked by cave shrines"
      }
    ]    
  },
  {
    id: "jog-falls",
    title: "Monsoon Magic at Jog Falls",
    excerpt: "Witnessing the raw power and majesty of Karnataka's highest waterfall during peak monsoon season.",
    thumbnail: "https://img.veenaworld.com/wp-content/uploads/2024/02/A-Guide-to-Jog-Falls-Karnataka.jpg",
    author: {
      name: "Vani Gowda",
      avatar: "https://i.pinimg.com/736x/91/3f/00/913f00423f75a57b2794d3d039c54e13.jpg"
    },
    postedAt: "5 months ago",
    likes: 405,
    comments: 38,
    categories: ["Natural", "Adventure"],
    media: [
      {
        type: "image",
        url: "https://www.karnataka.com/wp-content/uploads/2009/07/jog-falls-01-1280x720.jpg",
        caption: "The four segmented cascades of Jog Falls in full force"
      },
      {
        type: "image",
        url: "https://img.veenaworld.com/wp-content/uploads/2024/02/A-Guide-to-Jog-Falls-Karnataka.jpg?imwidth=1300",
        caption: "Viewpoint offering a breathtaking panorama of the falls"
      },
      {
        type: "image",
        url: "https://thumbs.dreamstime.com/b/magnificent-view-sharavathi-river-nice-blue-sky-bacground-honnavar-karnataka-india-242182899.jpg",
        caption: "Misty clouds embracing the roaring waters of Sharavathi"
      }
    ]
    
  }
];