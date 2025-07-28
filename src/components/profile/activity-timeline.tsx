import { COLORS } from "@/lib/constants";
import {
  CalendarIcon,
  MapPin,
  Recycle,
  Bike,
  TreeDeciduous, // Changed from Tree to TreeDeciduous
  PackageOpen,
} from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  points: number;
  category: string;
  location?: string;
}

interface ActivityTimelineProps {
  items: TimelineItem[];
}

export function ActivityTimeline({ items }: ActivityTimelineProps) {
  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'recycling':
        return <Recycle className="h-4 w-4" />;
      case 'transportation':
        return <Bike className="h-4 w-4" />;
      case 'conservation':
        return <TreeDeciduous className="h-4 w-4" />; // Changed from Tree to TreeDeciduous
      case 'volunteer':
        return <MapPin className="h-4 w-4" />;
      default:
        return <PackageOpen className="h-4 w-4" />;
    }
  };

  // Get color for category
  const getCategoryColor = (category: string) => {
    switch(category.toLowerCase()) {
      case 'recycling':
        return '#00BCD4';
      case 'transportation':
        return '#9C27B0';
      case 'conservation':
        return '#4CAF50';
      case 'volunteer':
        return '#FF9800';
      case 'waste reduction':
        return '#795548';
      default:
        return COLORS.primary;
    }
  };

  return (
    <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
      {items.map((item, index) => {
        const color = getCategoryColor(item.category);
        
        return (
          <div key={item.id} className="relative">
            {/* Timeline dot */}
            <div 
              className="absolute -left-6 w-4 h-4 rounded-full mt-1.5"
              style={{ 
                backgroundColor: color,
                border: '2px solid white',
                boxShadow: '0 0 0 2px rgba(0,0,0,0.1)'
              }}
            />
            
            {/* Content */}
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-base">{item.title}</h4>
                <div 
                  className="px-2 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: `${color}20`, color: color }}
                >
                  +{item.points} GP
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-1">
                <div className="flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  {formatDate(item.date)}
                </div>
                
                <div className="flex items-center" style={{ color }}>
                  {getCategoryIcon(item.category)}
                  <span className="ml-1">{item.category}</span>
                </div>
              </div>
              
              {item.location && (
                <div className="text-xs text-muted-foreground flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {item.location}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}