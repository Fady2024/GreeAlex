import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { COLORS, MOCK_USER } from "@/lib/constants";
import { 
  Home, 
  Trophy, 
  Award, 
  Gift, 
  Users2, 
  User, 
  Menu, 
  X,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const NavItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="mr-2 h-5 w-5" />,
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <Trophy className="mr-2 h-5 w-5" />,
    },
    {
      name: "Partners",
      path: "/partners",
      icon: <Users2 className="mr-2 h-5 w-5" />,
    },
    {
      name: "Rewards",
      path: "/rewards",
      icon: <Gift className="mr-2 h-5 w-5" />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User className="mr-2 h-5 w-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Toggle Button (Mobile Only) */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col w-64 transition-transform duration-300 bg-white border-r border-gray-200 shadow-sm",
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="px-6 py-6 flex items-center justify-center">
          <div className="text-2xl font-bold text-center">
            <span style={{ color: COLORS.primary }}>Gree</span>
            <span style={{ color: COLORS.secondary }}>Alex</span>
          </div>
        </div>

        <Separator />

        {/* User Info */}
        <div className="px-6 py-4 flex flex-col items-center">
          <Avatar className="h-20 w-20 mb-2">
            <AvatarImage src={MOCK_USER.avatar} alt={MOCK_USER.name} />
            <AvatarFallback style={{ backgroundColor: COLORS.primary }}>
              {MOCK_USER.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="font-semibold text-lg">{MOCK_USER.name}</h3>
            <p className="text-sm text-muted-foreground">{MOCK_USER.ecoTitle}</p>
          </div>
          <div 
            className="mt-2 px-4 py-1 rounded-full text-sm" 
            style={{ backgroundColor: COLORS.accent + '20', color: COLORS.primary }}
          >
            {MOCK_USER.points} Green Points
          </div>
        </div>

        <Separator className="my-2" />

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                currentPath === item.path
                  ? `text-white bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}]`
                  : "text-gray-600 hover:bg-gray-100"
              )}
              style={
                currentPath === item.path
                  ? { 
                      background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
                      color: 'white' 
                    }
                  : {}
              }
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
          <p className="text-xs text-center mt-4 text-muted-foreground">
            © 2023 GreeAlex by AlexBank
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarOpen ? (isMobile ? "ml-0" : "ml-64") : "ml-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}