import { MainLayout } from "@/components/layout/main-layout";
import { LeaderboardRow } from "@/components/leaderboard/leaderboard-row";
import { MOCK_LEADERBOARD, MOCK_USER } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Trophy } from "lucide-react";
import { COLORS } from "@/lib/constants";
import { useState } from "react";

export default function Leaderboard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter leaderboard based on search
  const filteredLeaderboard = searchQuery
    ? MOCK_LEADERBOARD.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : MOCK_LEADERBOARD;

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <Trophy className="mr-3 h-7 w-7" style={{ color: COLORS.primary }} />
          Leaderboard
        </h1>
        <p className="text-muted-foreground">
          See where you stand among eco-warriors around the world!
        </p>
      </div>
      
      {/* Tabs for different periods */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm mb-8">
        <Tabs defaultValue="global" className="w-full">
          <div className="px-6 pt-6">
            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
              <TabsTrigger value="global">Global</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Search Input */}
          <div className="p-6 pt-4 border-b border-gray-100">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search users..." 
                className="pl-9 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Leaderboard Content */}
          <TabsContent value="global" className="p-0 m-0">
            <div className="py-2">
              {filteredLeaderboard.map((user) => (
                <LeaderboardRow
                  key={user.id}
                  rank={user.rank}
                  name={user.name}
                  username={user.username}
                  avatar={user.avatar}
                  points={user.points}
                  isCurrentUser={user.id === MOCK_USER.id}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="p-0 m-0">
            <div className="p-6 text-center text-muted-foreground">
              Monthly leaderboard data would display here
            </div>
          </TabsContent>
          
          <TabsContent value="weekly" className="p-0 m-0">
            <div className="p-6 text-center text-muted-foreground">
              Weekly leaderboard data would display here
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Your Position Card */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Your Position</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
              style={{ backgroundColor: `${COLORS.primary}20` }}
            >
              <span className="text-xl font-bold" style={{ color: COLORS.primary }}>
                {MOCK_USER.rank}
              </span>
            </div>
            <div>
              <p className="font-medium">{MOCK_USER.ecoTitle}</p>
              <p className="text-sm text-muted-foreground">
                You're in the top 5% of eco-warriors!
              </p>
            </div>
          </div>
          <div>
            <Button style={{ backgroundColor: COLORS.primary }}>
              Share Achievement
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}