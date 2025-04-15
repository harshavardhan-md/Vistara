
import { useState } from "react";
import { places } from "@/data/places";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import PlaceCard from "@/components/explore/PlaceCard";
import { Search, Filter, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredPlaces = places.filter((place) => {
    // Filter by search term
    const matchesSearch = place.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         place.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         place.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === "all" || place.category.toLowerCase() === category.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  // Sort places
  const sortedPlaces = [...filteredPlaces].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "newest") {
      // This would typically use a date field, but we don't have one in our mock data
      return b.id.localeCompare(a.id);
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageHeader
          title="Explore Heritage Places"
          description="Discover hidden cultural and historical gems across India. From ancient temples to serene natural landscapes, uncover the rich tapestry of Indian heritage."
          bgImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
        >
          <div className="flex items-center gap-4 mt-4">
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search places, locations, or experiences..."
                className="pl-10 bg-white/80 backdrop-blur-sm border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="bg-white/80 backdrop-blur-sm border-white/20 text-foreground">
              <MapPin size={18} className="mr-2" />
              Near Me
            </Button>
          </div>
        </PageHeader>

        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setCategory}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="Historical">Historical</TabsTrigger>
                <TabsTrigger value="Natural">Natural</TabsTrigger>
                <TabsTrigger value="Temple">Temples</TabsTrigger>
                <TabsTrigger value="Palace">Palaces</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    <span>Sort: {sortBy === "popular" ? "Most Popular" : sortBy === "rating" ? "Highest Rated" : "Newest"}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy("popular")}>
                    Most Popular
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("rating")}>
                    Highest Rated
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("newest")}>
                    Newest
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {sortedPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPlaces.map((place) => (
                <PlaceCard
                  key={place.id}
                  id={place.id}
                  title={place.title}
                  location={place.location}
                  image={place.image}
                  description={place.description}
                  rating={place.rating}
                  likes={place.likes}
                  category={place.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No places found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
