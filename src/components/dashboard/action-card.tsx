import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";
import { 
  Recycle,
  Bike,
  TreeDeciduous, // Updated from Tree to TreeDeciduous which exists in lucide-react v0.462.0
  Droplets,
  PackageOpen,
  CalendarCheck,
  Trash2,
  ChevronRight,
  Star
} from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  points: number;
  category: string;
  icon: string;
  difficulty: string;
  onClick?: () => void;
}

export function ActionCard({ 
  title, 
  description, 
  points, 
  category, 
  icon, 
  difficulty,
  onClick 
}: ActionCardProps) {
  // Map icon string to Lucide icon component
  const getIcon = () => {
    switch(icon) {
      case 'recycle':
        return <Recycle className="h-5 w-5" />;
      case 'bike':
        return <Bike className="h-5 w-5" />;
      case 'tree':
        return <TreeDeciduous className="h-5 w-5" />; // Updated from Tree to TreeDeciduous
      case 'water':
        return <Droplets className="h-5 w-5" />;
      case 'trash':
        return <Trash2 className="h-5 w-5" />;
      case 'event':
        return <CalendarCheck className="h-5 w-5" />;
      default:
        return <PackageOpen className="h-5 w-5" />;
    }
  };

  // Get difficulty color
  const getDifficultyColor = () => {
    switch(difficulty) {
      case 'easy':
        return '#4CAF50';
      case 'medium':
        return '#FF9800';
      case 'hard':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-100">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          {/* Header with category and icon */}
          <div 
            className="flex items-center justify-between p-4"
            style={{ backgroundColor: COLORS.cardBackground }}
          >
            <div className="flex items-center">
              <div 
                className="p-2 rounded-full mr-3"
                style={{ backgroundColor: `${COLORS.primary}20` }}
              >
                {getIcon()}
              </div>
              <span className="text-sm font-medium">{category}</span>
            </div>
            <div 
              className="flex items-center px-2 py-1 rounded text-xs"
              style={{ 
                backgroundColor: getDifficultyColor() + '20',
                color: getDifficultyColor()
              }}
            >
              <Star className="h-3 w-3 mr-1" />
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 flex-1">
            <h3 className="font-semibold text-base mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <div 
                  className="rounded-full px-3 py-1 text-sm font-medium"
                  style={{ 
                    backgroundColor: COLORS.accent + '20',
                    color: COLORS.primary
                  }}
                >
                  {points} GP
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                className="p-0 h-8 w-8"
                onClick={onClick}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}