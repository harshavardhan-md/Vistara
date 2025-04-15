
import { AlertTriangle, TrendingDown, Users } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problem-section" className="py-20 bg-card">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 mb-4">The Problem We're Solving</h2>
          <p className="subheading">
            India's rich cultural heritage faces significant challenges in the modern tourism landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-vistara-maroon/10 flex items-center justify-center mb-6">
              <AlertTriangle className="text-vistara-maroon h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Overtourism at Famous Sites</h3>
            <p className="text-muted-foreground">
              Travelers primarily visit only famous destinations, while thousands of equally fascinating cultural sites remain hidden and unexplored.
            </p>
          </div>

          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-vistara-blue/10 flex items-center justify-center mb-6">
              <TrendingDown className="text-vistara-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Declining Local Traditions</h3>
            <p className="text-muted-foreground">
              Traditional arts, crafts, and cultural practices are being forgotten as younger generations move away from heritage occupations.
            </p>
          </div>

          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-vistara-olive/10 flex items-center justify-center mb-6">
              <Users className="text-vistara-olive h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Limited Digital Presence</h3>
            <p className="text-muted-foreground">
              Local artisans and cultural experiences lack digital visibility, making it difficult for travelers to discover and support them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
