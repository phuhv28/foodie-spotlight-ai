import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, User, Bell, Menu, Heart, Sparkles, Camera, Wand2 } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline text-gradient">VietFood</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Tìm nhà hàng, quán ăn, cafe..." 
              className="pl-10 pr-4"
            />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-1.5 text-primary font-semibold" asChild>
            <Link to="/ai-recommend">
              <Wand2 className="w-4 h-4" />
              AI Gợi ý
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/feed">
              <Camera className="w-4 h-4 mr-1" />
              Khoảnh khắc
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/explore">
              <Sparkles className="w-4 h-4 mr-1" />
              Khám phá
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/favorites">
              <Heart className="w-4 h-4 mr-1" />
              Yêu thích
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/notifications">
              <Bell className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/auth">Đăng nhập</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-card p-4 animate-fade-up">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Tìm nhà hàng, quán ăn..." 
              className="pl-10"
            />
          </div>
          <nav className="flex flex-col gap-2">
            <Button variant="ghost" className="justify-start text-primary font-semibold" asChild>
              <Link to="/ai-recommend">
                <Wand2 className="w-4 h-4 mr-2" />
                AI Gợi ý
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/feed">
                <Camera className="w-4 h-4 mr-2" />
                Khoảnh khắc
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/explore">
                <Sparkles className="w-4 h-4 mr-2" />
                Khám phá
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/favorites">
                <Heart className="w-4 h-4 mr-2" />
                Yêu thích
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/notifications">
                <Bell className="w-4 h-4 mr-2" />
                Thông báo
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/profile">
                <User className="w-4 h-4 mr-2" />
                Hồ sơ
              </Link>
            </Button>
            <Button className="mt-2" asChild>
              <Link to="/auth">Đăng nhập</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
