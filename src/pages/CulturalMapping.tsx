
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/common/PageHeader';
import { MapPin, Map, Layers, Compass, Download, History } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/components/providers/LanguageProvider';

const CulturalMapping = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <PageHeader 
          title="Interactive Cultural Mapping" 
          description="A collaborative map where users can discover and contribute to cultural points of interest across India."
          icon={<MapPin className="h-8 w-8 text-primary" />}
        />
        
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Explore India's Cultural Landscape</h2>
                <p className="text-muted-foreground">
                  Our interactive cultural map allows you to discover hidden cultural gems across India,
                  with layers that reveal different aspects of the country's rich heritage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Toggle between craft traditions, cuisine, architecture, performing arts, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Add your own cultural points of interest with community verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Discover thematic routes connecting related sites across regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Download className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Download maps for offline use during your travels</span>
                  </li>
                </ul>
                <Button className="mt-6">Open Interactive Map</Button>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border bg-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-xl font-medium">Interactive Cultural Map</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Explore by Layer</h2>
            
            <Tabs defaultValue="crafts" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="crafts">Crafts</TabsTrigger>
                <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="performing">Performing Arts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="crafts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Traditional Craft Hubs</CardTitle>
                    <CardDescription>
                      Discover the centers of traditional craft making across India
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] relative rounded-md overflow-hidden border">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Map preview coming soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      <Button variant="outline">North India</Button>
                      <Button variant="outline">Central India</Button>
                      <Button variant="outline">South India</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cuisine" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Culinary Destinations</CardTitle>
                    <CardDescription>
                      Explore India's diverse culinary landscape and regional specialties
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] relative rounded-md overflow-hidden border">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Map preview coming soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      <Button variant="outline">Street Food</Button>
                      <Button variant="outline">Royal Cuisines</Button>
                      <Button variant="outline">Regional Specialties</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="architecture" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Architectural Wonders</CardTitle>
                    <CardDescription>
                      From ancient temples to colonial influences, explore India's architectural heritage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] relative rounded-md overflow-hidden border">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Map preview coming soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      <Button variant="outline">Temples</Button>
                      <Button variant="outline">Palaces & Forts</Button>
                      <Button variant="outline">Colonial Heritage</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performing Arts Centers</CardTitle>
                    <CardDescription>
                      Find where to experience traditional music, dance, and theater forms
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] relative rounded-md overflow-hidden border">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Map preview coming soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      <Button variant="outline">Classical Dance</Button>
                      <Button variant="outline">Folk Traditions</Button>
                      <Button variant="outline">Music Festivals</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Historical Timeline</h2>
              <p className="text-muted-foreground mb-8">
                Use our time slider feature to see how cultural sites and traditions have evolved over centuries.
                Travel from ancient India to contemporary times with our historical timeline.
              </p>
              <div className="flex items-center justify-center gap-4">
                <History className="h-8 w-8 text-primary" />
                <Button size="lg">Explore Timeline</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CulturalMapping;
