import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";
import { CalendarIcon, MapPin, Clock, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  points: number;
  image: string;
  organizer: string;
  attendees: number;
  category: string;
  onClick?: () => void;
}

export function EventCard({
  title,
  description,
  location,
  date,
  time,
  points,
  image,
  organizer,
  attendees,
  category,
  onClick,
}: EventCardProps) {
  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-100">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          {/* Event Image */}
          <div 
            className="h-40 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundColor: '#e0e0e0' // Fallback color
            }}
          >
            <div 
              className="w-full h-full flex items-start justify-between p-3" 
              style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
            >
              <div 
                className="px-3 py-1 rounded text-xs font-medium text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                {category}
              </div>
              <div 
                className="px-3 py-1 rounded text-xs font-medium bg-white"
                style={{ color: COLORS.primary }}
              >
                {points} GP
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 flex-1">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
            
            {/* Event details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{formatDate(date)}</span>
                <Clock className="h-4 w-4 ml-4 mr-2 text-muted-foreground" />
                <span>{time}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="line-clamp-1">{location}</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{attendees} attendees</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="text-xs text-muted-foreground">
                Organized by <span className="font-medium">{organizer}</span>
              </div>
              <Button 
                size="sm"
                onClick={onClick}
                style={{ 
                  backgroundColor: COLORS.primary,
                  color: 'white'
                }}
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}