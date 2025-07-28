import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { COLORS } from "@/lib/constants";

interface LeaderboardRowProps {
  rank: number;
  name: string;
  username: string;
  avatar: string;
  points: number;
  isCurrentUser?: boolean;
}

export function LeaderboardRow({
  rank,
  name,
  username,
  avatar,
  points,
  isCurrentUser = false
}: LeaderboardRowProps) {
  // Get badge for top 3
  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  // Get background style based on rank and whether it's the current user
  const getBackgroundStyle = () => {
    if (isCurrentUser) {
      return { backgroundColor: `${COLORS.primary}10` };
    }
    
    if (rank <= 3) {
      return { backgroundColor: `rgba(250, 250, 250, ${1 - (rank * 0.1)})` };
    }
    
    return {};
  };

  return (
    <div 
      className="flex items-center justify-between py-3 px-4 rounded-lg transition-colors my-1 hover:bg-gray-50"
      style={getBackgroundStyle()}
    >
      {/* Rank and User Info */}
      <div className="flex items-center">
        <div className="flex items-center justify-center w-8 h-8 mr-4">
          {typeof getRankBadge(rank) === 'string' ? (
            <span className="text-xl">{getRankBadge(rank)}</span>
          ) : (
            <span 
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium"
              style={{ backgroundColor: COLORS.border, color: COLORS.text.secondary }}
            >
              {rank}
            </span>
          )}
        </div>
        
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback 
            style={{ backgroundColor: `${COLORS.primary}40`, color: COLORS.primary }}
          >
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-xs text-muted-foreground">{username}</p>
        </div>
      </div>
      
      {/* Points */}
      <div 
        className="px-3 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.primary }}
      >
        {points.toLocaleString()} GP
      </div>
    </div>
  );
}