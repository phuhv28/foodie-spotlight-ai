import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AIRecommendSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Powered by AI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gợi ý địa điểm <span className="text-gradient">thông minh</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              AI của chúng tôi phân tích sở thích, vị trí và thói quen ăn uống của bạn để đề xuất những địa điểm phù hợp nhất.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Cá nhân hóa hoàn toàn</h4>
                  <p className="text-muted-foreground text-sm">
                    Gợi ý dựa trên lịch sử đánh giá và sở thích của bạn
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg gradient-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Cập nhật real-time</h4>
                  <p className="text-muted-foreground text-sm">
                    Xem xét đánh giá mới nhất, độ đông, thời tiết
                  </p>
                </div>
              </li>
            </ul>

            <Button size="lg" asChild>
              <Link to="/ai-recommend">
                Thử ngay
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Demo Cards */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-secondary/20 blur-3xl" />
            
            <Card variant="elevated" className="relative p-6 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Gợi ý cho bạn hôm nay</h4>
                  <p className="text-sm text-muted-foreground">Dựa trên sở thích ẩm thực Việt</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Bún chả Hà Nội Đắc Kim", match: 98, reason: "Phù hợp với sở thích" },
                  { name: "Cà phê Cộng - Hoàn Kiếm", match: 95, reason: "Gần vị trí của bạn" },
                  { name: "Bánh mì Phượng Hội An", match: 92, reason: "Trending tuần này" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.reason}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-primary">{item.match}%</span>
                      <p className="text-xs text-muted-foreground">phù hợp</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
