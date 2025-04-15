
import { useParams } from "react-router-dom";
import { useState } from "react";
import { places } from "@/data/places";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, MapPin, Star, Calendar, ArrowLeft, Camera, ChefHat, Hammer, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ReviewSection from "./ReviewSection";

const PlaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const place = places.find((p) => p.id === id);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(place?.likes || 0);

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 container-custom py-16">
          <Link to="/explore" className="flex items-center text-primary mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Explore
          </Link>
          <div className="text-center py-16">
            <h2 className="heading-2 mb-4">Place Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The heritage place you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/explore">Explore Other Places</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <img
            src={place.image}
            alt={place.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container-custom">
              <Badge className="mb-4">{place.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {place.title}
              </h1>
              <div className="flex items-center text-white/90 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{place.location}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center text-white">
                  <Star size={18} className="mr-1 fill-vistara-gold text-vistara-gold" />
                  <span className="font-medium">{place.rating.toFixed(1)}</span>
                  <span className="ml-1 text-white/70">rating</span>
                </div>
                <div className="flex items-center text-white">
                  <Calendar size={18} className="mr-1" />
                  <span className="text-white/70">Best time to visit:</span>
                  <span className="ml-1 font-medium">Oct - Mar</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white",
                    liked && "bg-white/20"
                  )}
                  onClick={handleLikeClick}
                >
                  <Heart
                    size={16}
                    className={cn("mr-2", liked && "fill-current text-primary")}
                  />
                  {likeCount}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="container-custom py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-card rounded-xl shadow-sm border p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">About {place.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {place.fullDescription || place.description}
                </p>
                
                {place.highlights && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {place.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-primary text-xs font-medium">{index + 1}</span>
                          </div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Gallery */}
              {place.gallery && place.gallery.length > 0 && (
                <div className="bg-card rounded-xl shadow-sm border p-6 md:p-8 mb-8">
                  <div className="flex items-center mb-6">
                    <Camera size={20} className="mr-2 text-primary" />
                    <h2 className="text-2xl font-semibold">Gallery</h2>
                  </div>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      {place.gallery.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-0">
                                <img
                                  src={image}
                                  alt={`Gallery image ${index + 1}`}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              )}

              {/* Famous Food and Crafts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {place.food && place.food.length > 0 && (
                  <div className="bg-card rounded-xl shadow-sm border p-6">
                    <div className="flex items-center mb-4">
                      <ChefHat size={20} className="mr-2 text-vistara-terracotta" />
                      <h2 className="text-xl font-semibold">Famous Food</h2>
                    </div>
                    <ul className="space-y-2">
                      {place.food.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-vistara-terracotta mr-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {place.crafts && place.crafts.length > 0 && (
                  <div className="bg-card rounded-xl shadow-sm border p-6">
                    <div className="flex items-center mb-4">
                      <Hammer size={20} className="mr-2 text-vistara-blue" />
                      <h2 className="text-xl font-semibold">Local Crafts</h2>
                    </div>
                    <ul className="space-y-2">
                      {place.crafts.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-vistara-blue mr-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* User Reviews */}
              <ReviewSection/>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-80 lg:w-96 space-y-6">
              {/* Map Card */}
              <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
                <div className="h-56 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                    <span className="ml-2">Map view coming soon</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">
                    {place.title}, {place.location}
                  </h3>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Recommended Products */}
              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Local Artisan Products</h3>
                <div className="space-y-4">

                  {/* Channapatna Toys */}
                  <div className="flex items-center gap-3">
                    <img
                      src="https://theindiacrafthouse.com/cdn/shop/products/Channapatna_20Wooden_20Toy_20-_20Rural_20Couple_20_28Set_20of_202_29_20-_20HSN22_204_1024x1024.jpg"
                      alt="Channapatna Wooden Dolls"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Channapatna Wooden Dolls</h4>
                      <p className="text-muted-foreground text-xs">GI-tagged, eco-friendly toys</p>
                    </div>
                    <div className="text-sm font-medium">₹999</div>
                  </div>

                  {/* Ilkal Saree */}
                  <div className="flex items-center gap-3">
                    <img
                      src="https://goswadeshi.in/cdn/shop/files/GCRSCSLSAA0104_1.jpg"
                      alt="Ilkal Handloom Saree"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Ilkal Handloom Saree</h4>
                      <p className="text-muted-foreground text-xs">Traditional Karnataka weave</p>
                    </div>
                    <div className="text-sm font-medium">₹2,500</div>
                  </div>

                  {/* Mysore Sandal Soap */}
                  <div className="flex items-center gap-3">
                    <img
                      src="https://francky.com.au/cdn/shop/files/23.png"
                      alt="Mysore Sandal Soap"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Mysore Sandal Soap</h4>
                      <p className="text-muted-foreground text-xs">Natural, iconic fragrance</p>
                    </div>
                    <div className="text-sm font-medium">₹75</div>
                  </div>

                  <Button variant="outline" asChild className="w-full">
                    <Link to="/shop">View More Products</Link>
                  </Button>
                </div>
              </div>

              {/* Similar Places */}
              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Similar Places</h3>
                <div className="space-y-4">
                  {places
                    .filter(p => p.id !== place.id && p.category === place.category)
                    .slice(0, 3)
                    .map(p => (
                      <Link
                        key={p.id}
                        to={`/explore/${p.id}`}
                        className="flex items-center gap-3 group"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            {p.location}
                          </p>
                        </div>
                      </Link>
                    ))}
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/explore">Explore More Places</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlaceDetail;
