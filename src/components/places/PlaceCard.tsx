import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PlaceCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  priceRange: string;
  isOpen?: boolean;
  hasPromotion?: boolean;
  promotionText?: string;
}

export function PlaceCard({
  id,
  name,
  image,
  category,
  rating,
  reviewCount,
  address,
  priceRange,
  isOpen = true,
  hasPromotion = false,
  promotionText,
}: PlaceCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card variant="interactive" className="overflow-hidden group">
      <Link to={`/place/${id}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur flex items-center justify-center transition-all hover:scale-110"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "fill-primary text-primary" : "text-muted-foreground"
              }`}
            />
          </button>

          {/* Promotion Badge */}
          {hasPromotion && (
            <Badge className="absolute top-3 left-3">
              {promotionText || "Khuyến mãi"}
            </Badge>
          )}

          {/* Category Badge */}
          <Badge variant="muted" className="absolute bottom-3 left-3">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-medium text-sm">{rating.toFixed(1)}</span>
              <span className="text-muted-foreground text-sm">({reviewCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="line-clamp-1">{address}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-secondary">{priceRange}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span className={`text-sm ${isOpen ? "text-secondary" : "text-destructive"}`}>
                {isOpen ? "Đang mở cửa" : "Đã đóng cửa"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
