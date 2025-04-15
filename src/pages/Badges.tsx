
import { useState } from "react";
import { badges, userStats } from "@/data/badges";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import BadgeCard from "@/components/badges/BadgeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, BarChart, Leaf, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Badges = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredBadges = badges.filter((badge) => {
    if (categoryFilter === "all") return true;
    if (categoryFilter === "earned") return badge.isEarned;
    if (categoryFilter === "progress") return !badge.isEarned && badge.progress! > 0;
    return badge.category.toLowerCase() === categoryFilter.toLowerCase();
  });

  const earnedBadges = badges.filter(badge => badge.isEarned);
  const inProgressBadges = badges.filter(badge => !badge.isEarned && badge.progress! > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageHeader
          title="Sustainable Travel & Badges"
          description="Track your eco-conscious travel behavior, earn badges for sustainable practices, and see your impact on preserving cultural heritage."
          bgImage="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80"
        />

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl flex items-center">
                  <Award className="text-vistara-gold mr-2" />
                  <span>{earnedBadges.length}</span>
                  <span className="text-muted-foreground text-sm ml-2">/ {badges.length} Badges Earned</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={(earnedBadges.length / badges.length) * 100} className="h-2 mb-2" />
                <p className="text-sm text-muted-foreground">
                  Keep exploring responsibly to earn more badges!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl flex items-center">
                  <TrendingUp className="text-vistara-maroon mr-2" />
                  <span>{userStats.totalPoints}</span>
                  <span className="text-muted-foreground text-sm ml-2">Sustainability Points</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <BarChart size={16} className="mr-2 text-vistara-maroon" />
                  <span className="text-sm">
                    Rank {userStats.rank} of {userStats.totalUsers} users
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl flex items-center">
                  <Leaf className="text-vistara-olive mr-2" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-vistara-blue mr-2"></div>
                    <span className="text-muted-foreground">Carbon Saved:</span>
                    <span className="ml-1 font-medium">{userStats.carbonSaved} kg</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-vistara-terracotta mr-2"></div>
                    <span className="text-muted-foreground">Plastic Avoided:</span>
                    <span className="ml-1 font-medium">{userStats.plasticAvoided} items</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <Tabs defaultValue="all" onValueChange={setCategoryFilter}>
              <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 mb-6">
                <TabsList className="flex w-max gap-2 rounded-xl border bg-muted p-1">
                  <TabsTrigger className="min-w-max" value="all">All Badges</TabsTrigger>
                  <TabsTrigger className="min-w-max" value="earned">Earned</TabsTrigger>
                  <TabsTrigger className="min-w-max" value="progress">In Progress</TabsTrigger>
                  <TabsTrigger className="min-w-max" value="Sustainability">Sustainability</TabsTrigger>
                  <TabsTrigger className="min-w-max" value="Engagement">Engagement</TabsTrigger>
                  <TabsTrigger className="min-w-max" value="Community Support">Community</TabsTrigger>
                  <TabsTrigger className="min-w-max" value="Conservation">Conservation</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={categoryFilter} className="mt-0">
                {filteredBadges.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBadges.map((badge) => (
                      <BadgeCard
                        key={badge.id}
                        id={badge.id}
                        name={badge.name}
                        icon={badge.icon}
                        description={badge.description}
                        category={badge.category}
                        pointsRequired={badge.pointsRequired}
                        isEarned={badge.isEarned}
                        progress={badge.progress}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-card rounded-xl shadow-sm border">
                    <h3 className="text-xl font-semibold mb-2">No badges found</h3>
                    <p className="text-muted-foreground">
                      No badges match the selected category or status.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

          </div>

          <div className="mt-12 bg-gradient-to-br from-vistara-maroon to-vistara-terracotta text-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <Recycle size={48} className="mb-4" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Sustainable Travel Challenge
                </h3>
                <p className="mb-4 text-white/90">
                  Join our monthly challenge to reduce your travel carbon footprint! Complete eco-friendly activities during your cultural explorations and earn exclusive badges and rewards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-vistara-maroon px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors">
                    Join Challenge
                  </button>
                  <button className="bg-transparent border border-white/60 text-white px-6 py-2.5 rounded-full font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
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

export default Badges;
