import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/common/PageHeader';
import { Network, Share, BookOpen, Map, BookMarked } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import CulturalGraphVisualization from '@/components/graph/CulturalGraphVisualization';

const KnowledgeGraph = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <PageHeader 
          title="Cultural Knowledge Graph" 
          description="India's first interconnected map of cultural knowledge showing relationships between traditions across regions."
          icon={<Network className="h-8 w-8 text-primary" />}
        />
        
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Discover Hidden Connections</h2>
                <p className="text-muted-foreground">
                  Our Cultural Knowledge Graph reveals the intricate relationships between traditions, practices, 
                  and cultural expressions across India's diverse regions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Network className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Visualize relationships between cultural traditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Map className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Track the migration and evolution of practices across regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Discover thematic "cultural journeys" that span multiple locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Share className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Contribute your knowledge to expand the cultural graph</span>
                  </li>
                </ul>
                <a href="https://vistara-cultural-connection-graph.streamlit.app/" rel="noopener noreferrer">
                  <Button className="mt-6">Explore the Graph</Button>
                </a>

              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl bg-card border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Network className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-xl font-medium">Interactive Graph Visualization</p>
                    {/* <p className="text-sm text-muted-foreground">Coming Soon</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Cultural Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-primary" />
                    Textile Traditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Explore the interconnected world of Indian textiles, from Banarasi silk to Kanchipuram, 
                    understanding their shared motifs and techniques.
                  </CardDescription>
                  <Button variant="outline" className="mt-4 w-full">View Graph</Button>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-primary" />
                    Dance Forms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Discover how classical and folk dance forms across India share common origins, 
                    movements, and storytelling elements.
                  </CardDescription>
                  <Button variant="outline" className="mt-4 w-full">View Graph</Button>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-primary" />
                    Culinary Traditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Map the journey of flavors, ingredients, and cooking techniques as they traveled 
                    across regions and evolved into distinct cuisines.
                  </CardDescription>
                  <Button variant="outline" className="mt-4 w-full">View Graph</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Contribute to the Knowledge Graph</h2>
              <p className="text-muted-foreground mb-8">
                Our Cultural Knowledge Graph grows stronger with community contributions. Share your cultural 
                knowledge and help preserve India's rich heritage for future generations.
              </p>
              <Button size="lg">Start Contributing</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeGraph;
