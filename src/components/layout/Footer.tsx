import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>VietFood</span>
            </Link>
            <p className="text-background/70 text-sm">
              Khám phá ẩm thực Việt Nam với hàng nghìn địa điểm được đánh giá và đề xuất bởi AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Khám phá</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/explore" className="hover:text-background transition-colors">Địa điểm nổi bật</Link></li>
              <li><Link to="/explore?category=restaurant" className="hover:text-background transition-colors">Nhà hàng</Link></li>
              <li><Link to="/explore?category=cafe" className="hover:text-background transition-colors">Quán cà phê</Link></li>
              <li><Link to="/explore?category=streetfood" className="hover:text-background transition-colors">Ẩm thực đường phố</Link></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-semibold mb-4">Dành cho doanh nghiệp</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/business/register" className="hover:text-background transition-colors">Đăng ký địa điểm</Link></li>
              <li><Link to="/business/dashboard" className="hover:text-background transition-colors">Quản lý địa điểm</Link></li>
              <li><Link to="/business/promotions" className="hover:text-background transition-colors">Tạo khuyến mãi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@vietfood.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1900 1234</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          <p>© 2024 VietFood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
