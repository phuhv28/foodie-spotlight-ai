import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlaceCard } from "@/components/places/PlaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Filter, SlidersHorizontal, Grid, List, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import cafeImage from "@/assets/cafe.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import nightmarketImage from "@/assets/nightmarket.jpg";
import cookingImage from "@/assets/cooking.jpg";

const allPlaces = [
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
  {
    id: "5",
    name: "Bún Chả Hương Liên",
    image: restaurantImage,
    category: "Nhà hàng",
    rating: 4.7,
    reviewCount: 4523,
    address: "24 Lê Văn Hưu, Hai Bà Trưng, Hà Nội",
    priceRange: "40K - 80K",
    isOpen: true,
    hasPromotion: false,
  },
  {
    id: "6",
    name: "Highlands Coffee - Landmark 81",
    image: cafeImage,
    category: "Cà phê",
    rating: 4.4,
    reviewCount: 1234,
    address: "Landmark 81, Bình Thạnh, TP.HCM",
    priceRange: "40K - 100K",
    isOpen: true,
    hasPromotion: true,
    promotionText: "Mua 1 tặng 1",
  },
];

const categories = ["Tất cả", "Nhà hàng", "Cà phê", "Ẩm thực đường phố", "Cooking Class", "Bar & Pub"];
const sortOptions = ["Phổ biến nhất", "Đánh giá cao", "Gần nhất", "Giá thấp đến cao"];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPlaces = selectedCategory === "Tất cả" 
    ? allPlaces 
    : allPlaces.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        {/* Search Header */}
        <div className="bg-card border-b py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm địa điểm..."
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative flex-1 md:max-w-xs">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Vị trí"
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="h-12">
                <Search className="w-4 h-4 mr-2" />
                Tìm kiếm
              </Button>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "muted"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Khám phá địa điểm</h1>
              <p className="text-muted-foreground">{filteredPlaces.length} địa điểm được tìm thấy</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Bộ lọc
              </Button>
              <Button variant="outline" size="sm">
                Sắp xếp
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <div className="hidden sm:flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} {...place} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Xem thêm
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
