
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("problem-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-vistara-cream/10 to-background/0 pattern-bg -z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-vistara-maroon/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-vistara-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="text-primary">VISTARA</span>
              <br />
              <span className="text-foreground text-xl md:text-2xl lg:text-6xl">
                Cultural Tourism Platform
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Discover Hidden Heritage. Empower Communities. Travel with Purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="rounded-full">
                <Link to="/explore">Start Exploring</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full"
              >
                <Link to="/stories">View Stories</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <img
              src="/main-hero.gif"
              alt="Indian Heritage"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-medium">Our Pride ❤</h3>
              <p className="text-sm opacity-80">Karnataka, India</p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Discover More</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
