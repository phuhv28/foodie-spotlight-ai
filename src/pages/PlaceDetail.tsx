import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, MapPin, Clock, Phone, Globe, Heart, Share2, 
  Calendar, Wifi, Car, CreditCard, Dog, Baby, Camera,
  ChevronLeft, ChevronRight, MessageSquare, ThumbsUp
} from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant.jpg";
import cafeImage from "@/assets/cafe.jpg";

const placeData = {
  id: "1",
  name: "Quán Phở Thìn Bờ Hồ",
  description: "Phở Thìn là một trong những quán phở lâu đời và nổi tiếng nhất Hà Nội, được thành lập từ năm 1979. Quán nổi tiếng với tô phở bò truyền thống, nước dùng đậm đà, bánh phở mềm và thịt bò tái thơm ngon.",
  images: [restaurantImage, cafeImage, restaurantImage, cafeImage],
  category: "Nhà hàng",
  rating: 4.8,
  reviewCount: 2341,
  address: "13 Lò Đúc, Hai Bà Trưng, Hà Nội",
  phone: "024 3821 2709",
  website: "https://phothin.com",
  priceRange: "50K - 100K",
  openHours: [
    { day: "Thứ 2 - Thứ 6", hours: "06:00 - 22:00" },
    { day: "Thứ 7 - Chủ nhật", hours: "06:00 - 23:00" },
  ],
  amenities: ["Wifi miễn phí", "Chỗ đậu xe", "Thanh toán thẻ", "Pet-friendly", "Kids-friendly"],
  menu: [
    { name: "Phở bò tái", price: "50,000đ", description: "Phở bò tái truyền thống", isSignature: true },
    { name: "Phở bò chín", price: "55,000đ", description: "Phở bò chín mềm", isSignature: false },
    { name: "Phở bò tái nạm", price: "60,000đ", description: "Phở bò tái kết hợp nạm", isSignature: true },
    { name: "Phở gà", price: "45,000đ", description: "Phở gà ta thả vườn", isSignature: false },
  ],
  promotions: [
    { title: "Giảm 20%", description: "Cho đơn hàng từ 200K qua app", validUntil: "31/12/2024" },
  ],
  reviews: [
    {
      id: "1",
      user: "Nguyễn Văn A",
      avatar: "",
      rating: 5,
      date: "2 ngày trước",
      content: "Phở rất ngon, nước dùng đậm đà. Không gian quán thoáng mát, nhân viên phục vụ nhiệt tình.",
      images: [restaurantImage],
      likes: 24,
    },
    {
      id: "2",
      user: "Trần Thị B",
      avatar: "",
      rating: 4,
      date: "1 tuần trước",
      content: "Đồ ăn ngon, giá cả hợp lý. Tuy nhiên giờ cao điểm hơi đông nên phải chờ lâu.",
      images: [],
      likes: 12,
    },
  ],
};

const PlaceDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const amenityIcons: Record<string, React.ReactNode> = {
    "Wifi miễn phí": <Wifi className="w-4 h-4" />,
    "Chỗ đậu xe": <Car className="w-4 h-4" />,
    "Thanh toán thẻ": <CreditCard className="w-4 h-4" />,
    "Pet-friendly": <Dog className="w-4 h-4" />,
    "Kids-friendly": <Baby className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Image Gallery */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={placeData.images[currentImageIndex]}
            alt={placeData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Navigation */}
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? placeData.images.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev === placeData.images.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {placeData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-primary" : "bg-card/50"
                }`}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-card/90 backdrop-blur hover:bg-card"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-primary text-primary" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-card/90 backdrop-blur hover:bg-card">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{placeData.category}</Badge>
                  {placeData.promotions.length > 0 && (
                    <Badge variant="accent">{placeData.promotions[0].title}</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold mb-2">{placeData.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{placeData.rating}</span>
                    <span>({placeData.reviewCount} đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{placeData.address}</span>
                  </div>
                  <span className="font-medium text-secondary">{placeData.priceRange}</span>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    Tổng quan
                  </TabsTrigger>
                  <TabsTrigger value="menu" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    Thực đơn
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    Đánh giá
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Giới thiệu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{placeData.description}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tiện ích</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {placeData.amenities.map((amenity) => (
                          <div
                            key={amenity}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted"
                          >
                            {amenityIcons[amenity]}
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="menu" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Thực đơn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {placeData.menu.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{item.name}</h4>
                                {item.isSignature && (
                                  <Badge variant="accent" className="text-xs">Signature</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <span className="font-semibold text-primary">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6 space-y-4">
                  {placeData.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-semibold">
                            {review.user.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-medium">{review.user}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-3 h-3 ${
                                          i < review.rating ? "fill-accent text-accent" : "text-muted"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span>•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{review.content}</p>
                            {review.images.length > 0 && (
                              <div className="flex gap-2 mb-3">
                                {review.images.map((img, i) => (
                                  <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className="w-20 h-20 rounded-lg object-cover"
                                  />
                                ))}
                              </div>
                            )}
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              Hữu ích ({review.likes})
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button variant="outline" className="w-full">
                    Xem tất cả đánh giá
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card variant="elevated" className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center pb-4 border-b">
                    <span className="text-sm text-muted-foreground">Giá từ</span>
                    <div className="text-2xl font-bold text-primary">{placeData.priceRange}</div>
                  </div>

                  <Button size="lg" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Đặt bàn ngay
                  </Button>

                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi điện
                  </Button>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div className="text-sm">
                        {placeData.openHours.map((item, i) => (
                          <div key={i}>
                            <span className="text-muted-foreground">{item.day}:</span> {item.hours}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{placeData.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{placeData.phone}</span>
                    </div>
                    {placeData.website && (
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <a href={placeData.website} className="text-sm text-primary hover:underline">
                          Website
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Promotion */}
                  {placeData.promotions.length > 0 && (
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-primary mb-1">{placeData.promotions[0].title}</h4>
                      <p className="text-sm text-muted-foreground">{placeData.promotions[0].description}</p>
                      <p className="text-xs text-muted-foreground mt-1">HSD: {placeData.promotions[0].validUntil}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
