
import { MapPin, Film, ShoppingBag, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 mb-4">Core Features</h2>
          <p className="subheading">
            Explore the powerful features that make VISTARA a comprehensive platform for cultural tourism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-vistara-maroon/10 flex items-center justify-center group-hover:bg-vistara-maroon/20 transition-colors">
                <MapPin className="text-vistara-maroon h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Explore Heritage</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Discover hidden cultural gems with our interactive map and personalized recommendations.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/explore">Explore Now</Link>
            </Button>
          </div>

          {/* Feature 2 */}
          <div className="feature-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-vistara-terracotta/10 flex items-center justify-center group-hover:bg-vistara-terracotta/20 transition-colors">
                <Film className="text-vistara-terracotta h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">StoryShare</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Share your travel stories and experiences while exploring authentic narratives from other travelers.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/stories">View Stories</Link>
            </Button>
          </div>

          {/* Feature 3 */}
          <div className="feature-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-vistara-blue/10 flex items-center justify-center group-hover:bg-vistara-blue/20 transition-colors">
                <ShoppingBag className="text-vistara-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Shop Local</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Support local artisans by purchasing authentic handcrafted products from various cultural regions.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Feature 4 */}
          <div className="feature-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-vistara-gold/10 flex items-center justify-center group-hover:bg-vistara-gold/20 transition-colors">
                <Users className="text-vistara-gold h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Travel Buddy</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Connect with like-minded travelers to explore cultural destinations together and share expenses.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/connect">Find Buddies</Link>
            </Button>
          </div>

          {/* Feature 5 */}
          <div className="feature-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-vistara-olive/10 flex items-center justify-center group-hover:bg-vistara-olive/20 transition-colors">
                <Award className="text-vistara-olive h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Badges & Rewards</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Earn badges and rewards for sustainable travel practices and community contributions.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/badges">View Badges</Link>
            </Button>
          </div>

          {/* Feature 6 - CTA Card */}
          <div className="feature-card bg-gradient-to-br from-vistara-maroon to-vistara-terracotta text-white">
            <h3 className="text-xl font-semibold mb-4">Start Your Cultural Journey</h3>
            <p className="mb-6 text-white/90">
              Begin your authentic cultural tourism experience with VISTARA today.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/explore">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
