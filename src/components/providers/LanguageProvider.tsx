
import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = {
  code: string;
  name: string;
};

export const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" }, // Hindi
  { code: "kn", name: "ಕನ್ನಡ" }, // Kannada
  { code: "ta", name: "தமிழ்" }, // Tamil
  { code: "te", name: "తెలుగు" }, // Telugu
  { code: "ml", name: "മലയാളം" }, // Malayalam
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<string, string>> = {
  "en": {
    "home": "Home",
    "explore": "Explore",
    "storyshare": "StoryShare",
    "shoplocal": "MyShop",
    "travelbuddy": "Travel Buddy",
    "badges": "Badges",
    "startexploring": "Start Exploring",
    "footer.discoverheritage": "Discover Hidden Heritage. Empower Communities. Travel with Purpose.",
    "footer.explorehead": "Explore",
    "footer.heritagesites": "Heritage Sites",
    "footer.culturalstories": "Cultural Stories",
    "footer.artisanproducts": "Artisan Products",
    "footer.findcotravelers": "Find Co-Travelers",
    "footer.sustainabletourism": "Sustainable Tourism",
    "footer.resourceshead": "Resources",
    "footer.aboutus": "About Us",
    "footer.ourmission": "Our Mission",
    "footer.termsofservice": "Terms of Service",
    "footer.privacypolicy": "Privacy Policy",
    "footer.contactus": "Contact Us",
    "footer.newsletterhead": "Newsletter",
    "footer.newsletterdesc": "Subscribe to our newsletter for the latest updates on cultural heritage sites and local events.",
    "footer.youremail": "Your email",
    "footer.subscribe": "Subscribe",
    "footer.allrightsreserved": "All rights reserved.",
    "footer.madewith": "Made with 💖 by Team COSMIC",
    // New features translations
    "culturalknowledge": "Cultural Knowledge Graph",
    "interactivemapping": "Interactive Cultural Mapping",
    "educationalnetwork": "Educational Institution Network",
  },
  "hi": {
    "home": "होम",
    "explore": "एक्सप्लोर",
    "storyshare": "कहानियां",
    "shoplocal": "लोकल शॉप",
    "travelbuddy": "यात्रा साथी",
    "badges": "बैज",
    "startexploring": "एक्सप्लोर शुरू करें",
    "footer.discoverheritage": "छुपी विरासत को खोजें। समुदायों को सशक्त बनाएं। उद्देश्य के साथ यात्रा करें।",
    "footer.explorehead": "एक्सप्लोर",
    "footer.heritagesites": "विरासत स्थल",
    "footer.culturalstories": "सांस्कृतिक कहानियां",
    "footer.artisanproducts": "कारीगर उत्पाद",
    "footer.findcotravelers": "सह-यात्री खोजें",
    "footer.sustainabletourism": "सस्टेनेबल पर्यटन",
    "footer.resourceshead": "संसाधन",
    "footer.aboutus": "हमारे बारे में",
    "footer.ourmission": "हमारा मिशन",
    "footer.termsofservice": "सेवा की शर्तें",
    "footer.privacypolicy": "गोपनीयता नीति",
    "footer.contactus": "संपर्क करें",
    "footer.newsletterhead": "न्यूज़लेटर",
    "footer.newsletterdesc": "सांस्कृतिक विरासत स्थलों और स्थानीय कार्यक्रमों के बारे में नवीनतम अपडेट के लिए हमारे न्यूज़लेटर की सदस्यता लें।",
    "footer.youremail": "आपका ईमेल",
    "footer.subscribe": "सदस्यता लें",
    "footer.allrightsreserved": "सर्वाधिकार सुरक्षित।",
    "footer.madewith": "सांस्कृतिक विरासत को संरक्षित करने के लिए 💖 के साथ बनाया गया",
    // New features translations
    "culturalknowledge": "सांस्कृतिक ज्ञान ग्राफ",
    "interactivemapping": "इंटरैक्टिव सांस्कृतिक मैपिंग",
    "educationalnetwork": "शैक्षिक संस्थान नेटवर्क",
  },
  "kn": {
    "home": "ಮುಖಪುಟ",
    "explore": "ಅನ್ವೇಷಿಸಿ",
    "storyshare": "ಕಥೆಗಳು",
    "shoplocal": "ಸ್ಥಳೀಯ ಅಂಗಡಿ",
    "travelbuddy": "ಪ್ರಯಾಣ ಸಂಗಾತಿ",
    "badges": "ಬ್ಯಾಡ್ಜ್‌ಗಳು",
    "startexploring": "ಅನ್ವೇಷಿಸಲು ಪ್ರಾರಂಭಿಸಿ",
    "footer.discoverheritage": "ಅಡಗಿರುವ ಪರಂಪರೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ. ಸಮುದಾಯಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಿ. ಉದ್ದೇಶದೊಂದಿಗೆ ಪ್ರಯಾಣಿಸಿ.",
    "footer.explorehead": "ಅನ್ವೇಷಿಸಿ",
    "footer.heritagesites": "ಪರಂಪರೆಯ ತಾಣಗಳು",
    "footer.culturalstories": "ಸಾಂಸ್ಕೃತಿಕ ಕಥೆಗಳು",
    "footer.artisanproducts": "ಕುಶಲಕರ್ಮಿ ಉತ್ಪನ್ನಗಳು",
    "footer.findcotravelers": "ಸಹ-ಪ್ರಯಾಣಿಕರನ್ನು ಹುಡುಕಿ",
    "footer.sustainabletourism": "ಸುಸ್ಥಿರ ಪ್ರವಾಸೋದ್ಯಮ",
    "footer.resourceshead": "ಸಂಪನ್ಮೂಲಗಳು",
    "footer.aboutus": "ನಮ್ಮ ಬಗ್ಗೆ",
    "footer.ourmission": "ನಮ್ಮ ಮಿಷನ್",
    "footer.termsofservice": "ಸೇವಾ ನಿಯಮಗಳು",
    "footer.privacypolicy": "ಗೌಪ್ಯತಾ ನೀತಿ",
    "footer.contactus": "ಸಂಪರ್ಕಿಸಿ",
    "footer.newsletterhead": "ನ್ಯೂಸ್‌ಲೆಟರ್",
    "footer.newsletterdesc": "ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ತಾಣಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಇತ್ತೀಚಿನ ಅಪ್‌ಡೇಟ್‌ಗಳಿಗಾಗಿ ನಮ್ಮ ನ್ಯೂಸ್‌ಲೆಟರ್‌ಗೆ ಚಂದಾದಾರರಾಗಿ.",
    "footer.youremail": "ನಿಮ್ಮ ಇಮೇಲ್",
    "footer.subscribe": "ಚಂದಾದಾರರಾಗಿ",
    "footer.allrightsreserved": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.madewith": "ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಲು 💖 ನೊಂದಿಗೆ ಮಾಡಲಾಗಿದೆ",
    // New features translations
    "culturalknowledge": "ಸಾಂಸ್ಕೃತಿಕ ಜ್ಞಾನ ಗ್ರಾಫ್",
    "interactivemapping": "ಸಂವಾದಾತ್ಮಕ ಸಾಂಸ್ಕೃತಿಕ ಮ್ಯಾಪಿಂಗ್",
    "educationalnetwork": "ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆ ನೆಟ್ವರ್ಕ್",
  },
  // Add more translations for other languages similarly...
};

// Default fallback for languages that don't have full translations yet
const fallbackLanguages: Record<string, string> = {
  "ta": "en",
  "te": "en",
  "ml": "en"
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  
  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguageCode = localStorage.getItem("vistara-language");
    if (savedLanguageCode) {
      const savedLanguage = languages.find(lang => lang.code === savedLanguageCode);
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    localStorage.setItem("vistara-language", language.code);
    setCurrentLanguage(language);
  };

  const translate = (key: string): string => {
    // First try the current language
    if (translations[currentLanguage.code]?.[key]) {
      return translations[currentLanguage.code][key];
    }
    
    // If not found and there's a fallback language defined, try that
    const fallback = fallbackLanguages[currentLanguage.code];
    if (fallback && translations[fallback]?.[key]) {
      return translations[fallback][key];
    }
    
    // Default to English if all else fails
    if (translations["en"]?.[key]) {
      return translations["en"][key];
    }
    
    // Return the key itself if no translation is found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
