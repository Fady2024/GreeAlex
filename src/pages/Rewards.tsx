import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { RewardCard } from "@/components/rewards/reward-card";
import { MOCK_REWARDS, MOCK_USER } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Search, Gift, Award } from "lucide-react";
import { COLORS } from "@/lib/constants";

// Get unique categories from rewards
const categories = ["All", ...new Set(MOCK_REWARDS.map(reward => reward.category))];

export default function Rewards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter rewards based on search and category
  const filteredRewards = MOCK_REWARDS.filter(reward => {
    const matchesSearch = reward.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          reward.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || reward.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <Gift className="mr-3 h-7 w-7" style={{ color: COLORS.primary }} />
          Rewards Center
        </h1>
        <p className="text-muted-foreground">
          Redeem your Green Points for exclusive rewards and offers
        </p>
      </div>
      
      {/* User Points Card */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ProgressCircle 
              value={MOCK_USER.points} 
              max={5000}
              size={70}
              color={COLORS.primary}
              backgroundColor={`${COLORS.primary}20`}
              className="mr-4"
            >
              <Award className="h-6 w-6" style={{ color: COLORS.primary }} />
            </ProgressCircle>
            <div>
              <h3 className="text-lg font-semibold">{MOCK_USER.points} Green Points Available</h3>
              <p className="text-sm text-muted-foreground">
                Keep completing eco-actions to earn more points!
              </p>
            </div>
          </div>
          <div 
            className="hidden md:block text-sm font-medium px-3 py-1 rounded-full"
            style={{ backgroundColor: COLORS.accent + '20', color: COLORS.primary }}
          >
            Points History
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
        {/* Category Tabs */}
        <div className="p-6 border-b border-gray-100">
          <TabsList className="w-full overflow-x-auto flex-nowrap">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "font-semibold" : ""}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {/* Search Input */}
        <div className="p-6 border-b border-gray-100">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search rewards..." 
              className="pl-9 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Rewards Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRewards.length > 0 ? (
              filteredRewards.map(reward => (
                <RewardCard
                  key={reward.id}
                  title={reward.title}
                  description={reward.description}
                  image={reward.image}
                  points={reward.points}
                  category={reward.category}
                  availability={reward.availability}
                  provider={reward.provider}
                  expirationDays={reward.expirationDays}
                  userPoints={MOCK_USER.points}
                />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center text-muted-foreground">
                No rewards found matching your search criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}