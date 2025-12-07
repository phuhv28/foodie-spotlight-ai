import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MapPin, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  placeId: string;
  placeName: string;
  placeCategory: string;
  image: string;
  caption?: string;
  createdAt: Date;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface PostCardProps {
  post: Post;
  showPlace?: boolean;
}

export function PostCard({ post, showPlace = true }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const timeAgo = formatDistanceToNow(post.createdAt, { addSuffix: true, locale: vi });

  return (
    <Card className="overflow-hidden animate-fade-up">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <Link to={`/user/${post.userId}`}>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-semibold gradient-primary text-primary-foreground text-sm">
              {post.userAvatar ? (
                <img src={post.userAvatar} alt={post.userName} className="w-full h-full rounded-full object-cover" />
              ) : (
                post.userName.charAt(0)
              )}
            </div>
          </Link>
          <div>
            <Link to={`/user/${post.userId}`} className="font-semibold text-sm hover:underline">
              {post.userName}
            </Link>
            {showPlace && (
              <Link to={`/place/${post.placeId}`} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <MapPin className="w-3 h-3" />
                <span>{post.placeName}</span>
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{timeAgo}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={post.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Double tap to like overlay - visual feedback */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Heart animation would go here */}
        </div>
      </div>

      {/* Actions */}
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={handleLike}
            >
              <Heart className={`w-5 h-5 transition-all ${isLiked ? "fill-primary text-primary scale-110" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
          
          {showPlace && (
            <Link to={`/place/${post.placeId}`}>
              <Badge variant="muted" className="text-xs">
                {post.placeCategory}
              </Badge>
            </Link>
          )}
        </div>

        {/* Likes count */}
        <div className="font-semibold text-sm mb-1">
          {likesCount.toLocaleString()} lượt thích
        </div>

        {/* Caption */}
        {post.caption && (
          <p className="text-sm">
            <Link to={`/user/${post.userId}`} className="font-semibold hover:underline mr-1">
              {post.userName}
            </Link>
            {post.caption}
          </p>
        )}

        {/* Comments preview */}
        {post.comments > 0 && (
          <button
            className="text-sm text-muted-foreground mt-1 hover:text-foreground"
            onClick={() => setShowComments(!showComments)}
          >
            Xem tất cả {post.comments} bình luận
          </button>
        )}
      </CardContent>
    </Card>
  );
}
