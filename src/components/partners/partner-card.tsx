import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { COLORS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  category: string;
  supportedActivities: string[];
  website: string;
  onClick?: () => void;
}

export function PartnerCard({
  name,
  logo,
  description,
  category,
  supportedActivities,
  website,
  onClick,
}: PartnerCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-100 h-full">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          {/* Partner Logo */}
          <div className="h-40 bg-gray-50 overflow-hidden">
            <img 
              src={logo} 
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a default image or hide if image fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg">{name}</h3>
              <Badge 
                variant="outline" 
                style={{ 
                  backgroundColor: `${COLORS.primary}10`,
                  color: COLORS.primary,
                  borderColor: `${COLORS.primary}30`
                }}
              >
                {category}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            
            {/* Activities */}
            <div className="mb-5 flex-1">
              <p className="text-sm font-medium mb-2">Supported Activities:</p>
              <div className="flex flex-wrap gap-2">
                {supportedActivities.map((activity, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2"
                onClick={onClick}
              >
                Learn More
              </Button>
              
              <a 
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                Visit Website
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}