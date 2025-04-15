
export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  pointsRequired: number;
  isEarned?: boolean;
  progress?: number;
}

export const badges: Badge[] = [
  {
    id: "eco-traveler",
    name: "Eco Traveler",
    icon: "/badges/Explorer.jpg",
    description: "Use public transportation for 5 trips to reduce your carbon footprint.",
    category: "Sustainability",
    pointsRequired: 500,
    isEarned: true,
    progress: 500
  },
  {
    id: "heritage-guardian",
    name: "Heritage Guardian",
    icon: "/badges/heritage-guardian.jpg",
    description: "Participate in 3 heritage site conservation activities or clean-up drives.",
    category: "Conservation",
    pointsRequired: 750,
    isEarned: false,
    progress: 500
  },
  {
    id: "artisan-supporter",
    name: "Artisan Supporter",
    icon: "/badges/artisian-helper.jpg",
    description: "Purchase products directly from 5 different local artisans.",
    category: "Community Support",
    pointsRequired: 600,
    isEarned: true,
    progress: 600
  },
  {
    id: "storyteller",
    name: "Cultural Storyteller",
    icon: "/badges/cultural-storyteller.jpg",
    description: "Share 10 authentic stories or experiences from your cultural explorations.",
    category: "Engagement",
    pointsRequired: 1000,
    isEarned: false,
    progress: 700
  },
  {
    id: "plastic-free",
    name: "Plastic-Free Explorer",
    icon: "/badges/Plastic-Free-Explorer.jpg",
    description: "Complete 5 trips without using single-use plastics.",
    category: "Sustainability",
    pointsRequired: 500,
    isEarned: false,
    progress: 300
  },
  {
    id: "local-food",
    name: "Local Food Connoisseur",
    icon: "/badges/Local-Food-Connoisseur.jpg",
    description: "Try 15 different local dishes during your cultural explorations.",
    category: "Community Support",
    pointsRequired: 450,
    isEarned: true,
    progress: 450
  },
  {
    id: "water-conservation",
    name: "Water Guardian",
    icon: "/badges/Water-Guardian.jpg",
    description: "Stay at 3 accommodations that practice water conservation.",
    category: "Sustainability",
    pointsRequired: 400,
    isEarned: false,
    progress: 265
  },
  {
    id: "cultural-performer",
    name: "Cultural Performer",
    icon: "/badges/Cultural-Performer.jpg",
    description: "Participate in 3 local cultural performances or workshops.",
    category: "Engagement",
    pointsRequired: 600,
    isEarned: false,
    progress: 200
  },
  {
    id: "craft-apprentice",
    name: "Craft Apprentice",
    icon: "/badges/Craft-Apprentice.jpg",
    description: "Learn a traditional craft skill from a local artisan.",
    category: "Engagement",
    pointsRequired: 800,
    isEarned: false,
    progress: 400
  }
];

export const userStats = {
  totalPoints: 2250,
  rank: 87,
  badgesEarned: 3,
  totalUsers: 4523,
  carbonSaved: 742, // in kg
  plasticAvoided: 68, // in pieces
  artisansSupported: 7
};
