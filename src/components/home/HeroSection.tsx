import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vietnamese street food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-up">
            Khám phá ẩm thực <span className="text-primary">Việt Nam</span>
          </h1>
          <p
            className="text-lg md:text-xl text-background/80 mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hàng nghìn địa điểm ăn uống, quán cà phê, nhà hàng được đánh giá và
            gợi ý bởi AI dựa trên sở thích của bạn.
          </p>

          {/* Search Box */}
          <div
            className="bg-card rounded-2xl p-2 shadow-elevated animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Bạn muốn ăn gì hôm nay?"
                  className="pl-10 border-0 bg-transparent h-12 text-base"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Vị trí của bạn"
                  className="pl-10 border-0 bg-transparent h-12 text-base"
                />
              </div>
              <Button size="lg" className="h-12 px-6">
                <Search className="w-4 h-4 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </div>

          {/* AI Suggestion Button */}
          <Button
            variant="secondary"
            size="lg"
            className="mt-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Gợi ý bằng AI
          </Button>

          {/* Stats */}
          <div
            className="flex gap-8 mt-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-3xl font-bold text-background">10K+</div>
              <div className="text-background/70 text-sm">Địa điểm</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-background">50K+</div>
              <div className="text-background/70 text-sm">Đánh giá</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-background">100K+</div>
              <div className="text-background/70 text-sm">Người dùng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
