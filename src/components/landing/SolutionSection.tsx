
import { Brain, Share2, ShoppingBag, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://media.assettype.com/outlooktraveller%2F2024-08-08%2Fixt4yn5a%2Fshutterstock_1837839025.jpg"
              alt="Cultural tourism experience"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="heading-2">How VISTARA Transforms Cultural Tourism</h2>

            <p className="text-lg text-muted-foreground">
              VISTARA connects travelers with authentic cultural experiences while empowering local communities through sustainable tourism practices.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-vistara-maroon/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="text-vistara-maroon h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI-Powered Discovery</h3>
                  <p className="text-muted-foreground">
                    Our intelligent system recommends hidden cultural gems based on your interests and travel patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-vistara-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <Share2 className="text-vistara-terracotta h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Community Storytelling</h3>
                  <p className="text-muted-foreground">
                    Share your cultural experiences and discover stories from fellow travelers to enrich your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-vistara-blue/10 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="text-vistara-blue h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Artisan Marketplace</h3>
                  <p className="text-muted-foreground">
                    Support local artisans by purchasing authentic handcrafted products directly from the source.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-vistara-olive/10 flex items-center justify-center flex-shrink-0">
                  <Award className="text-vistara-olive h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Sustainable Tourism</h3>
                  <p className="text-muted-foreground">
                    Earn badges and rewards for practicing eco-friendly and culturally respectful tourism.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild className="rounded-full mt-6">
              <Link to="/explore">Discover VISTARA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
