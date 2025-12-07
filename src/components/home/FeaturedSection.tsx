import { PlaceCard } from "@/components/places/PlaceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cafeImage from "@/assets/cafe.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import nightmarketImage from "@/assets/nightmarket.jpg";
import cookingImage from "@/assets/cooking.jpg";

const featuredPlaces = [
  {
    id: "1",
    name: "Quán Phở Thìn Bờ Hồ",
    image: restaurantImage,
    category: "Nhà hàng",
    rating: 4.8,
    reviewCount: 2341,
    address: "13 Lò Đúc, Hai Bà Trưng, Hà Nội",
    priceRange: "50K - 100K",
    isOpen: true,
    hasPromotion: true,
    promotionText: "Giảm 20%",
  },
  {
    id: "2",
    name: "The Coffee House - Nguyễn Huệ",
    image: cafeImage,
    category: "Cà phê",
    rating: 4.5,
    reviewCount: 1892,
    address: "86 Nguyễn Huệ, Quận 1, TP.HCM",
    priceRange: "30K - 80K",
    isOpen: true,
    hasPromotion: false,
  },
  {
    id: "3",
    name: "Chợ Đêm Phú Quốc",
    image: nightmarketImage,
    category: "Ẩm thực đường phố",
    rating: 4.6,
    reviewCount: 3421,
    address: "Bãi Trường, Phú Quốc, Kiên Giang",
    priceRange: "30K - 200K",
    isOpen: true,
    hasPromotion: true,
    promotionText: "Hot",
  },
  {
    id: "4",
    name: "Saigon Cooking Class",
    image: cookingImage,
    category: "Cooking Class",
    rating: 4.9,
    reviewCount: 567,
    address: "74 Hai Bà Trưng, Quận 1, TP.HCM",
    priceRange: "500K - 1M",
    isOpen: true,
    hasPromotion: true,
    promotionText: "Booking -10%",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Địa điểm nổi bật</h2>
            <p className="text-muted-foreground">Được yêu thích nhất tuần này</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/explore">
              Xem tất cả
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaces.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}
