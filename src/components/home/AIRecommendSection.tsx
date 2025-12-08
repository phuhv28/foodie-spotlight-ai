import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Zap, ArrowRight, Brain, MapPin, Star, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant.jpg";
import cafeImage from "@/assets/cafe.jpg";

export function AIRecommendSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold mb-6">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>AI-Powered Recommendations</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Khám phá địa điểm với
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Trí tuệ nhân tạo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mô tả những gì bạn muốn, AI sẽ phân tích và đề xuất địa điểm phù hợp nhất với sở thích và vị trí của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left - Features */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Brain,
                title: "Hiểu sở thích của bạn",
                description: "Phân tích lịch sử đánh giá và thói quen để cá nhân hóa gợi ý",
                gradient: "gradient-primary",
              },
              {
                icon: TrendingUp,
                title: "Cập nhật real-time",
                description: "Xem xét đánh giá mới nhất, độ đông và xu hướng hiện tại",
                gradient: "gradient-secondary",
              },
              {
                icon: Zap,
                title: "Gợi ý tức thì",
                description: "Nhận đề xuất chỉ trong vài giây với độ chính xác cao",
                gradient: "from-accent to-accent/80 bg-gradient-to-br",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            <Button size="lg" className="w-full gap-2 shadow-lg" asChild>
              <Link to="/ai-recommend">
                <Wand2 className="w-5 h-5" />
                Thử gợi ý AI ngay
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Right - Demo Cards */}
          <div className="lg:col-span-3 relative">
            <Card className="p-6 border-2 border-primary/20 bg-card/80 backdrop-blur shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Gợi ý dành riêng cho bạn</h4>
                  <p className="text-sm text-muted-foreground">Dựa trên sở thích ẩm thực Việt</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Quán Phở Thìn Bờ Hồ",
                    image: restaurantImage,
                    match: 98,
                    rating: 4.8,
                    reason: "Phù hợp với sở thích ẩm thực Việt",
                    distance: "0.5 km",
                  },
                  {
                    name: "Cà phê Giảng - Hoàn Kiếm",
                    image: cafeImage,
                    match: 95,
                    rating: 4.7,
                    reason: "Gần vị trí của bạn và có wifi tốt",
                    distance: "0.3 km",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all cursor-pointer group"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-bold truncate">{item.name}</h5>
                        <Badge className="shrink-0 gap-1">
                          <Sparkles className="w-3 h-3" />
                          {item.match}%
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                          {item.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.distance}
                        </span>
                      </div>
                      <p className="text-sm text-primary flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {item.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <p className="text-xs text-muted-foreground">Địa điểm</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <p className="text-xs text-muted-foreground">Độ chính xác</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">1M+</div>
                  <p className="text-xs text-muted-foreground">Đánh giá</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
