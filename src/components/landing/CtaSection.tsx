
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">Ready to Discover Hidden Cultural Gems?</h2>
          <p className="subheading max-w-2xl mx-auto mb-8">
            Join VISTARA today and embark on a journey to explore India's rich cultural heritage, support local communities, and travel with purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-full">
              <Link to="/explore">Start Exploring</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link to="/stories">Browse Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
