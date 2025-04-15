
import { useState } from "react";
import { travelBuddies } from "@/data/travelBuddies";
import { format } from "date-fns";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import TravelBuddyCard from "@/components/connect/TravelBuddyCard";
import { Search, Filter, MapPin, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Connect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  // Collect all unique interests from travel buddies
  const allInterests = [...new Set(travelBuddies.flatMap(buddy => buddy.interests))].sort();

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const filteredBuddies = travelBuddies.filter((buddy) => {
    // Filter by search term (destination or name)
    const matchesSearch = buddy.destination.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         buddy.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by date if selected
    let matchesDate = true;
    if (selectedDate) {
      const formattedSelectedDate = format(selectedDate, 'MMM d, yyyy');
      const fromDate = new Date(buddy.fromDate);
      const toDate = new Date(buddy.toDate);
      const selectedDateTime = selectedDate.getTime();
      matchesDate = selectedDateTime >= fromDate.getTime() && selectedDateTime <= toDate.getTime();
    }
    
    // Filter by interests if any selected
    let matchesInterests = true;
    if (selectedInterests.length > 0) {
      matchesInterests = selectedInterests.some(interest => buddy.interests.includes(interest));
    }
    
    return matchesSearch && matchesDate && matchesInterests;
  });

  const handleConnectWithBuddy = (id: string) => {
    console.log(`Connected with buddy ${id}`);
    // In a real app, this would send a connection request
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageHeader
          title="Travel Buddy Connector"
          description="Find like-minded travelers to explore cultural destinations together. Share expenses, experiences, and create lasting memories."
          bgImage="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80"
        >
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="relative flex-grow min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Where do you want to go?"
                className="pl-10 bg-white/80 backdrop-blur-sm border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-white/80 backdrop-blur-sm border-white/20 text-foreground min-w-[240px]"
                >
                  <Calendar size={18} className="mr-2" />
                  {selectedDate ? format(selectedDate, "PPP") : "When?"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={date => {
                    setSelectedDate(date);
                    setCalendarOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white/80 backdrop-blur-sm border-white/20 text-foreground">
                  <User size={18} className="mr-2" />
                  Interests {selectedInterests.length > 0 && `(${selectedInterests.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem onClick={() => setSelectedInterests([])}>
                  Clear all
                </DropdownMenuItem>
                {allInterests.map(interest => (
                  <DropdownMenuCheckboxItem
                    key={interest}
                    checked={selectedInterests.includes(interest)}
                    onCheckedChange={() => toggleInterest(interest)}
                  >
                    {interest}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="w-full sm:w-auto">Find Buddies</Button>
          </div>
        </PageHeader>

        <div className="container-custom py-12">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                {filteredBuddies.length > 0 
                  ? `Found ${filteredBuddies.length} travel companions` 
                  : "No travel buddies match your criteria"}
              </h2>
              
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedDate(undefined);
                setSelectedInterests([]);
              }}>
                Clear Filters
              </Button>
            </div>
            
            {selectedInterests.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedInterests.map(interest => (
                  <Badge 
                    key={interest} 
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {interest}
                    <button 
                      className="ml-1 text-muted-foreground hover:text-foreground"
                      onClick={() => toggleInterest(interest)}
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuddies.map((buddy) => (
              <TravelBuddyCard
                key={buddy.id}
                id={buddy.id}
                user={buddy.user}
                destination={buddy.destination}
                fromDate={buddy.fromDate}
                toDate={buddy.toDate}
                interests={buddy.interests}
                message={buddy.message}
                onConnect={handleConnectWithBuddy}
              />
            ))}
          </div>

          {filteredBuddies.length === 0 && (
            <div className="text-center py-16 bg-card rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">No travel buddies found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find compatible travel companions.
              </p>
              <div className="space-y-4">
                <p className="font-medium">Some popular destinations to explore:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Rajasthan", "Kerala", "Varanasi", "Hampi", "Spiti Valley"].map(place => (
                    <Button 
                      key={place} 
                      variant="outline" 
                      onClick={() => setSearchTerm(place)}
                    >
                      {place}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 bg-card rounded-xl shadow-sm border p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Can't find a travel buddy?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Create your own travel plan and let others connect with you! Share your destination, dates, and what you're looking for in a travel companion.
            </p>
            <a href="https://vistara-travel-itinerary-generator.streamlit.app/" rel="noopener noreferrer">
              <Button size="lg">Create Travel Plan</Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Connect;
