
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

// Pages
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import PlaceDetail from "./pages/PlaceDetail";
import Stories from "./pages/Stories";
import Shop from "./pages/Shop";
import Connect from "./pages/Connect";
import Badges from "./pages/Badges";
import NotFound from "./pages/NotFound";
import KnowledgeGraph from "./pages/KnowledgeGraph";
import CulturalMapping from "./pages/CulturalMapping";
import EducationalNetwork from "./pages/EducationalNetwork";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:id" element={<PlaceDetail />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
              <Route path="/cultural-mapping" element={<CulturalMapping />} />
              <Route path="/educational-network" element={<EducationalNetwork />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
