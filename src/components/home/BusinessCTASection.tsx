import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, BarChart3, Gift, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BusinessCTASection() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="relative overflow-hidden gradient-secondary p-8 md:p-12">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-secondary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bạn là chủ nhà hàng?
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-6">
                Đăng ký miễn phí để tiếp cận hàng trăm nghìn khách hàng tiềm
                năng, quản lý đặt bàn và tạo khuyến mãi thu hút.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Store, text: "Đăng ký địa điểm miễn phí" },
                  { icon: Calendar, text: "Quản lý đặt bàn online" },
                  { icon: Gift, text: "Tạo voucher & khuyến mãi" },
                  { icon: BarChart3, text: "Thống kê & báo cáo chi tiết" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="hero"
                  className="bg-background text-secondary hover:bg-background/90"
                  asChild
                >
                  <Link to="/business/register">
                    Đăng ký ngay
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background text-background hover:bg-background/10"
                  asChild
                >
                  <Link to="/business/dashboard">Tìm hiểu thêm</Link>
                </Button>
              </div>
            </div>

            {/* Stats Preview */}
            <div className="hidden lg:block">
              <Card className="bg-background/10 backdrop-blur border-background/20 p-6 text-secondary-foreground">
                <h4 className="font-semibold mb-4">Hiệu quả từ GoHangOut</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-background/10">
                    <div className="text-3xl font-bold">+45%</div>
                    <div className="text-sm text-secondary-foreground/70">
                      Lượt đặt bàn
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/10">
                    <div className="text-3xl font-bold">+120%</div>
                    <div className="text-sm text-secondary-foreground/70">
                      Khách mới
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/10">
                    <div className="text-3xl font-bold">15K</div>
                    <div className="text-sm text-secondary-foreground/70">
                      Lượt xem/tháng
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/10">
                    <div className="text-3xl font-bold">4.8★</div>
                    <div className="text-sm text-secondary-foreground/70">
                      Đánh giá TB
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
