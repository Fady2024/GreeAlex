import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { COLORS } from "@/lib/constants";
import { Clock } from "lucide-react";

interface RewardCardProps {
  title: string;
  description: string;
  image: string;
  points: number;
  category: string;
  availability: string;
  provider: string;
  expirationDays?: number;
  onClick?: () => void;
  userPoints: number;
}

export function RewardCard({
  title,
  description,
  image,
  points,
  category,
  availability,
  provider,
  expirationDays,
  onClick,
  userPoints,
}: RewardCardProps) {
  const canRedeem = userPoints >= points;
  
  // Get availability badge style
  const getAvailabilityStyle = () => {
    switch(availability) {
      case 'In Stock':
        return { 
          backgroundColor: `${COLORS.success}20`, 
          color: COLORS.success 
        };
      case 'Limited Stock':
      case 'Limited Time':
        return { 
          backgroundColor: `${COLORS.warning}20`, 
          color: COLORS.warning 
        };
      case 'Out of Stock':
        return { 
          backgroundColor: `${COLORS.error}20`, 
          color: COLORS.error 
        };
      default:
        return { 
          backgroundColor: `${COLORS.info}20`, 
          color: COLORS.info 
        };
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-100 h-full">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          {/* Reward Image */}
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundColor: '#e0e0e0' // Fallback color
            }}
          />
          
          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="mb-1 flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              <Badge 
                variant="outline" 
                style={getAvailabilityStyle()}
              >
                {availability}
              </Badge>
            </div>
            
            <p className="text-xs text-muted-foreground mb-1">
              Provided by {provider}
            </p>
            
            <div className="mb-4 flex items-center">
              <div 
                className="font-semibold text-base px-3 py-1 rounded-full"
                style={{ 
                  backgroundColor: COLORS.accent + '20',
                  color: COLORS.primary
                }}
              >
                {points} GP
              </div>
              {expirationDays && (
                <div className="ml-3 flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  Expires in {expirationDays} days
                </div>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-5 flex-1">{description}</p>
            
            {/* Footer */}
            <Button 
              onClick={onClick}
              disabled={!canRedeem}
              className="w-full"
              style={
                canRedeem 
                  ? { backgroundColor: COLORS.primary, color: 'white' }
                  : {} // Use default disabled style
              }
            >
              {canRedeem ? 'Redeem Reward' : `Need ${points - userPoints} more GP`}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}