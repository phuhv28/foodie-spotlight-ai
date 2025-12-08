import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Sparkles,
  Send,
  MapPin,
  Star,
  Clock,
  Heart,
  Loader2,
  Wand2,
  Utensils,
  Coffee,
  PartyPopper,
  Compass,
  TrendingUp,
  ThumbsUp,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant.jpg";
import cafeImage from "@/assets/cafe.jpg";
import nightmarketImage from "@/assets/nightmarket.jpg";

const quickPrompts = [
  { icon: Utensils, text: "Gợi ý quán ăn ngon gần đây", category: "food" },
  { icon: Coffee, text: "Quán cà phê yên tĩnh để làm việc", category: "cafe" },
  { icon: PartyPopper, text: "Địa điểm vui chơi cuối tuần", category: "entertainment" },
  { icon: Compass, text: "Nơi check-in đẹp cho Instagram", category: "trending" },
];

const sampleRecommendations = [
  {
    id: "1",
    name: "Quán Phở Thìn Bờ Hồ",
    image: restaurantImage,
    category: "Nhà hàng",
    rating: 4.8,
    matchScore: 98,
    reason: "Phù hợp với sở thích ẩm thực Việt của bạn",
    distance: "0.5 km",
    priceRange: "50K - 100K",
    highlights: ["Signature: Phở bò tái", "Nước dùng đậm đà", "Không gian truyền thống"],
  },
  {
    id: "5",
    name: "Cà phê Giảng",
    image: cafeImage,
    category: "Cà phê",
    rating: 4.7,
    matchScore: 95,
    reason: "Gần vị trí hiện tại và có wifi tốt",
    distance: "0.3 km",
    priceRange: "30K - 60K",
    highlights: ["Cà phê trứng nổi tiếng", "View Hồ Gươm", "Yên tĩnh"],
  },
  {
    id: "3",
    name: "Chợ Đêm Phú Quốc",
    image: nightmarketImage,
    category: "Ẩm thực đường phố",
    rating: 4.6,
    matchScore: 92,
    reason: "Trending tuần này với 432 khoảnh khắc mới",
    distance: "2.1 km",
    priceRange: "100K - 300K",
    highlights: ["Hải sản tươi sống", "Không khí sôi động", "Nhiều món độc đáo"],
  },
];

const AIRecommend = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      setHasResults(true);
    }, 2000);
  };

  const handleQuickPrompt = (text: string) => {
    setPrompt(text);
    setSelectedPrompt(text);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/5 via-background to-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold mb-8 animate-fade-in">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>AI-Powered Recommendations</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Để AI giúp bạn tìm
                <br />
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  địa điểm hoàn hảo
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Mô tả những gì bạn đang tìm kiếm, AI sẽ phân tích sở thích, vị trí và xu hướng để đề xuất địa điểm phù hợp nhất
              </p>

              {/* Main Input */}
              <Card variant="elevated" className="max-w-3xl mx-auto border-2 border-primary/20 shadow-xl">
                <CardContent className="p-4 md:p-6">
                  <div className="relative">
                    <Textarea
                      placeholder="Ví dụ: Tìm quán ăn sáng ngon gần Hồ Gươm, có wifi và view đẹp..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[120px] pr-24 text-lg resize-none border-0 focus-visible:ring-0 bg-transparent"
                    />
                    <Button
                      size="lg"
                      className="absolute bottom-3 right-3 gap-2 shadow-lg"
                      onClick={handleSubmit}
                      disabled={isLoading || !prompt.trim()}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Đang phân tích...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-5 h-5" />
                          Gợi ý
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Quick Prompts */}
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">Gợi ý nhanh:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickPrompts.map((item, index) => (
                        <Button
                          key={index}
                          variant={selectedPrompt === item.text ? "default" : "outline"}
                          size="sm"
                          className="gap-2"
                          onClick={() => handleQuickPrompt(item.text)}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <p className="text-sm text-muted-foreground">Địa điểm được phân tích</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <p className="text-sm text-muted-foreground">Độ chính xác gợi ý</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">1M+</div>
                  <p className="text-sm text-muted-foreground">Đánh giá được học</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {hasResults && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Gợi ý dành riêng cho bạn</h2>
                  <p className="text-muted-foreground">Dựa trên: "{prompt}"</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleRecommendations.map((place, index) => (
                  <Link key={place.id} to={`/place/${place.id}`}>
                    <Card
                      variant="interactive"
                      className="overflow-hidden h-full group"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                        {/* Match Score */}
                        <div className="absolute top-3 left-3">
                          <Badge className="gap-1 text-sm font-bold bg-primary">
                            <ThumbsUp className="w-3.5 h-3.5" />
                            {place.matchScore}% phù hợp
                          </Badge>
                        </div>

                        {/* Category */}
                        <Badge variant="muted" className="absolute top-3 right-3">
                          {place.category}
                        </Badge>

                        {/* Info */}
                        <div className="absolute bottom-3 left-3 right-3 text-background">
                          <h3 className="font-bold text-lg line-clamp-1">{place.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-background/80 mt-1">
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-accent text-accent" />
                              {place.rating}
                            </span>
                            <span className="flex items-center gap-1">
                              <Navigation className="w-3.5 h-3.5" />
                              {place.distance}
                            </span>
                            <span>{place.priceRange}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-4">
                        {/* AI Reason */}
                        <div className="flex items-start gap-2 mb-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                          <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-primary">{place.reason}</p>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5">
                          {place.highlights.map((highlight, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Xem thêm gợi ý
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI hiểu bạn như thế nào?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hệ thống AI của chúng tôi kết hợp nhiều nguồn dữ liệu để đưa ra gợi ý chính xác nhất
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Sở thích cá nhân",
                  description: "Phân tích lịch sử đánh giá, địa điểm yêu thích và thói quen của bạn",
                  color: "text-red-500 bg-red-500/10",
                },
                {
                  icon: MapPin,
                  title: "Vị trí thông minh",
                  description: "Xem xét khoảng cách, giao thông và thời gian di chuyển thực tế",
                  color: "text-blue-500 bg-blue-500/10",
                },
                {
                  icon: TrendingUp,
                  title: "Xu hướng real-time",
                  description: "Cập nhật đánh giá mới, độ đông và các khoảnh khắc được chia sẻ",
                  color: "text-green-500 bg-green-500/10",
                },
                {
                  icon: Clock,
                  title: "Thời điểm phù hợp",
                  description: "Gợi ý dựa trên giờ mở cửa, thời tiết và sự kiện đang diễn ra",
                  color: "text-orange-500 bg-orange-500/10",
                },
              ].map((feature, index) => (
                <Card key={index} variant="elevated" className="text-center p-6">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIRecommend;
