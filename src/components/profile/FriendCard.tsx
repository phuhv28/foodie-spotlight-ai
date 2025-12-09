import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, UserMinus, MessageCircle, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface FriendCardProps {
  id: string;
  name: string;
  avatar?: string;
  mutualFriends?: number;
  status: "friend" | "pending" | "requested" | "none";
  onAction?: (action: string) => void;
}

export const FriendCard = ({ 
  id, 
  name, 
  avatar, 
  mutualFriends = 0, 
  status,
  onAction 
}: FriendCardProps) => {
  return (
    <Card className="p-4 hover:shadow-card transition-all duration-300">
      <div className="flex items-center gap-3">
        <Link to={`/profile/${id}`}>
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold gradient-primary text-primary-foreground shrink-0">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link to={`/profile/${id}`} className="font-medium hover:text-primary transition-colors truncate block">
            {name}
          </Link>
          {mutualFriends > 0 && (
            <p className="text-xs text-muted-foreground">{mutualFriends} bạn chung</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {status === "friend" && (
            <>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-destructive hover:text-destructive"
                onClick={() => onAction?.("unfriend")}
              >
                <UserMinus className="w-4 h-4" />
              </Button>
            </>
          )}
          
          {status === "pending" && (
            <Button variant="outline" size="sm" disabled className="text-muted-foreground">
              <Check className="w-4 h-4 mr-1" />
              Đã gửi
            </Button>
          )}
          
          {status === "requested" && (
            <div className="flex gap-2">
              <Button size="sm" onClick={() => onAction?.("accept")}>
                Chấp nhận
              </Button>
              <Button variant="outline" size="sm" onClick={() => onAction?.("decline")}>
                Từ chối
              </Button>
            </div>
          )}
          
          {status === "none" && (
            <Button size="sm" onClick={() => onAction?.("add")}>
              <UserPlus className="w-4 h-4 mr-1" />
              Kết bạn
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
