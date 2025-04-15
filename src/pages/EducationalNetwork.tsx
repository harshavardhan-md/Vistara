
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/common/PageHeader';
import { GraduationCap, BookOpen, Globe, School, Video, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/components/providers/LanguageProvider';

const EducationalNetwork = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <PageHeader 
          title="Educational Institution Network" 
          description="Connecting schools and universities worldwide with India's rich cultural heritage through educational resources."
          icon={<GraduationCap className="h-8 w-8 text-primary" />}
        />
        
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Bridging Education and Heritage</h2>
                <p className="text-muted-foreground">
                  Our Educational Network provides curriculum modules, virtual field trips, and interactive 
                  resources for educational institutions worldwide to integrate Indian cultural heritage into their teaching.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Curriculum modules aligned with international educational standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Video className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Virtual field trips to India's most significant cultural sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Connect students globally with India's living heritage traditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <School className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Partnerships with educational institutions in over 30 countries</span>
                  </li>
                </ul>
                <Button className="mt-6">Explore Resources</Button>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border bg-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <School className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-xl font-medium">Educational Dashboard</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Educational Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Curriculum Modules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Comprehensive teaching materials on Indian cultural heritage, designed for different age groups and educational levels.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Elementary school modules</li>
                    <li>• Secondary education resources</li>
                    <li>• University-level course materials</li>
                    <li>• Multilingual content availability</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Browse Modules</Button>
                </CardFooter>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Virtual Field Trips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Immersive virtual experiences that transport students to India's most significant heritage sites and cultural centers.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 360° tours of heritage sites</li>
                    <li>• Interactive historical timelines</li>
                    <li>• Live craftsperson demonstrations</li>
                    <li>• Guided tours with cultural experts</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Virtual Tours</Button>
                </CardFooter>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Cultural Exchange Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Connect your students with peers from India for collaborative projects and cultural exchange opportunities.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Virtual student exchange programs</li>
                    <li>• Collaborative cultural projects</li>
                    <li>• Penpal connections</li>
                    <li>• Joint virtual exhibitions</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Join Exchange Program</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">For Educators</h2>
                <p className="text-muted-foreground mb-6">
                  Join our growing network of educators passionate about integrating global cultural 
                  understanding into their teaching practice.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-medium mb-2">Teacher Training Workshops</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional development opportunities to enhance your teaching of global cultural heritage
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-medium mb-2">Resource Library</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to thousands of lesson plans, activities, and educational materials
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-medium mb-2">Educator Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with like-minded teachers from around the world
                    </p>
                  </div>
                </div>
                <Button className="mt-6">Join Educator Network</Button>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">For Institutions</h2>
                <p className="text-muted-foreground mb-6">
                  Partner with VISTARA to bring comprehensive cultural education resources to your school or university.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-medium mb-2">Institutional Partnerships</h3>
                    <p className="text-sm text-muted-foreground">
                      Formalize a partnership to access premium educational resources and opportunities
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-medium mb-2">Custom Curriculum Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Work with our experts to develop customized cultural education modules
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h3 className="font-medium mb-2">Study Abroad Facilitation</h3>
                    <p className="text-sm text-muted-foreground">
                      Support for institutions looking to develop study abroad programs in India
                    </p>
                  </div>
                </div>
                <Button className="mt-6">Become an Institutional Partner</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Global Classroom</h2>
              <p className="text-muted-foreground mb-8">
                Be part of a global movement to integrate cultural understanding into education.
                Join thousands of schools worldwide already using VISTARA's educational resources.
              </p>
              <Separator className="my-8" />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="default">For Educators</Button>
                <Button size="lg" variant="outline">For Institutions</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EducationalNetwork;
