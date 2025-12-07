import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface LocationChannel {
  id: string;
  name: string;
  category: string;
  image: string;
  activeUsers: number;
  recentPosts: number;
  isLive?: boolean;
}

interface LocationChannelCardProps {
  channel: LocationChannel;
}

export function LocationChannelCard({ channel }: LocationChannelCardProps) {
  return (
    <Link to={`/feed/${channel.id}`}>
      <Card variant="interactive" className="overflow-hidden group">
        <div className="relative aspect-video">
          <img
            src={channel.image}
            alt={channel.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

          {/* Live indicator */}
          {channel.isLive && (
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <Badge className="text-xs">
                <Users className="w-3 h-3 mr-1" />
                {channel.activeUsers} đang xem
              </Badge>
            </div>
          )}

          {/* Category badge */}
          <Badge variant="muted" className="absolute top-3 right-3 text-xs">
            {channel.category}
          </Badge>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
            <h3 className="font-semibold text-lg line-clamp-1">{channel.name}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-background/80">
              <Sparkles className="w-4 h-4" />
              <span>{channel.recentPosts} khoảnh khắc hôm nay</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

interface LiveLocationBubbleProps {
  channel: LocationChannel;
}

export function LiveLocationBubble({ channel }: LiveLocationBubbleProps) {
  return (
    <Link to={`/feed/${channel.id}`} className="flex flex-col items-center gap-2 group">
      <div className="relative">
        <div className={`w-16 h-16 rounded-full p-0.5 ${channel.isLive ? "bg-gradient-to-br from-primary to-accent" : "bg-border"}`}>
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-card">
            <img
              src={channel.image}
              alt={channel.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        {channel.isLive && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-medium bg-primary text-primary-foreground rounded-full">
            LIVE
          </span>
        )}
      </div>
      <span className="text-xs font-medium text-center line-clamp-1 max-w-[70px]">
        {channel.name}
      </span>
    </Link>
  );
}
