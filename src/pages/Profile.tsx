import { MainLayout } from "@/components/layout/main-layout";
import { MOCK_USER, MOCK_USER_HISTORY } from "@/lib/constants";
import { ActivityTimeline } from "@/components/profile/activity-timeline";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  User,
  MapPin,
  Calendar,
  Mail,
  Award,
  BarChart3,
  Clock,
  Settings,
  Edit,
} from "lucide-react";
import { COLORS } from "@/lib/constants";
import { ProgressCircle } from "@/components/ui/progress-circle";

export default function Profile() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <User className="mr-3 h-7 w-7" style={{ color: COLORS.primary }} />
          My Profile
        </h1>
        <p className="text-muted-foreground">
          View and manage your profile information and eco-activities
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-end mb-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={MOCK_USER.avatar} alt={MOCK_USER.name} />
                <AvatarFallback style={{ backgroundColor: COLORS.primary }}>
                  {MOCK_USER.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{MOCK_USER.name}</CardTitle>
              <CardDescription>{MOCK_USER.username}</CardDescription>
              <div 
                className="mt-2 px-4 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: COLORS.accent + '20', color: COLORS.primary }}
              >
                {MOCK_USER.ecoTitle}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mt-4">
              {/* User Information */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{MOCK_USER.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{MOCK_USER.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Joined {MOCK_USER.joinedDate}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Green Points</h3>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Award className="h-3 w-3" />
                    Rank #{MOCK_USER.rank}
                  </Button>
                </div>
                
                <div className="flex items-center mb-6">
                  <ProgressCircle 
                    value={MOCK_USER.points} 
                    max={5000}
                    size={60}
                    color={COLORS.primary}
                    backgroundColor={`${COLORS.primary}20`}
                    showValue={false}
                    className="mr-4"
                  >
                    <div className="text-sm font-semibold">{MOCK_USER.points}</div>
                  </ProgressCircle>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">Next Level at 5000 GP</div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${(MOCK_USER.points / 5000) * 100}%`,
                          backgroundColor: COLORS.primary 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full" style={{ backgroundColor: COLORS.primary }}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Activity and Stats */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="stats">Impact Stats</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="pt-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">Volunteering History</h3>
                    <p className="text-sm text-muted-foreground">
                      Your recent eco-activities and events
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Clock className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
                <ActivityTimeline items={MOCK_USER_HISTORY} />
              </TabsContent>
              
              <TabsContent value="stats" className="pt-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">Environmental Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Metrics showing your contribution to the environment
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <BarChart3 className="h-4 w-4" />
                    View Details
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Impact Stats */}
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">CO₂ Reduced</div>
                    <div className="text-2xl font-semibold">87 kg</div>
                    <div className="text-xs text-green-600">+12% from last month</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Trees Planted</div>
                    <div className="text-2xl font-semibold">5</div>
                    <div className="text-xs text-green-600">+2 from last month</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Plastic Recycled</div>
                    <div className="text-2xl font-semibold">34 kg</div>
                    <div className="text-xs text-green-600">+8% from last month</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Water Saved</div>
                    <div className="text-2xl font-semibold">320 liters</div>
                    <div className="text-xs text-green-600">+15% from last month</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="badges" className="pt-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">Achievement Badges</h3>
                    <p className="text-sm text-muted-foreground">
                      Badges earned through your eco-journey
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Some placeholder badges */}
                  {[
                    { name: "Tree Planter", icon: "🌳", completed: true },
                    { name: "Recycling Pro", icon: "♻️", completed: true },
                    { name: "Water Saver", icon: "💧", completed: true },
                    { name: "Energy Saver", icon: "⚡", completed: false },
                    { name: "Clean-up Hero", icon: "🧹", completed: false },
                    { name: "Eco Volunteer", icon: "🌿", completed: true },
                  ].map((badge, index) => (
                    <div 
                      key={index}
                      className={`p-4 border rounded-lg text-center ${!badge.completed ? "opacity-50" : ""}`}
                    >
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <div className="font-medium text-sm">{badge.name}</div>
                      {badge.completed ? (
                        <div className="text-xs text-green-600 mt-1">Unlocked</div>
                      ) : (
                        <div className="text-xs text-muted-foreground mt-1">Locked</div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </MainLayout>
  );
}