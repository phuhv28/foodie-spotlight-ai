import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Settings, Heart, Star, MapPin, Camera, 
  Edit, LogOut, Bell, Shield, ChevronRight, Users, MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { FriendsList } from "@/components/profile/FriendsList";
import cafeImage from "@/assets/cafe.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const userData = {
  name: "Nguyễn Văn A",
  email: "nguyenvana@gmail.com",
  phone: "0912 345 678",
  avatar: "",
  bio: "Yêu ẩm thực Việt Nam 🍜 | Khám phá mọi nơi",
  joinDate: "Tháng 1, 2024",
  reviewCount: 15,
  favoriteCount: 28,
  friendsCount: 156,
  postsCount: 32,
};

const favoritesList = [
  {
    id: "1",
    name: "Quán Phở Thìn Bờ Hồ",
    image: restaurantImage,
    category: "Nhà hàng",
    rating: 4.8,
    address: "13 Lò Đúc, Hà Nội",
  },
  {
    id: "2",
    name: "The Coffee House",
    image: cafeImage,
    category: "Cà phê",
    rating: 4.5,
    address: "86 Nguyễn Huệ, TP.HCM",
  },
];

const reviewsList = [
  {
    id: "1",
    placeName: "Quán Phở Thìn Bờ Hồ",
    placeImage: restaurantImage,
    rating: 5,
    content: "Phở rất ngon, nước dùng đậm đà. Sẽ quay lại!",
    date: "2 ngày trước",
    likes: 24,
  },
  {
    id: "2",
    placeName: "The Coffee House",
    placeImage: cafeImage,
    rating: 4,
    content: "Không gian đẹp, cà phê ngon. Phục vụ tốt.",
    date: "1 tuần trước",
    likes: 12,
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        {/* Profile Header */}
        <div className="bg-card border-b">
          <div className="container py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-muted flex items-center justify-center text-3xl font-bold gradient-primary text-primary-foreground">
                  {userData.name.charAt(0)}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center shadow-lg hover:bg-muted transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-1">{userData.name}</h1>
                <p className="text-muted-foreground mb-2">{userData.bio}</p>
                <p className="text-sm text-muted-foreground mb-4">{userData.email}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-bold text-lg">{userData.postsCount}</div>
                    <div className="text-muted-foreground">Bài đăng</div>
                  </div>
                  <Link to="/profile/friends" className="text-center hover:text-primary transition-colors">
                    <div className="font-bold text-lg">{userData.friendsCount}</div>
                    <div className="text-muted-foreground">Bạn bè</div>
                  </Link>
                  <div className="text-center">
                    <div className="font-bold text-lg">{userData.reviewCount}</div>
                    <div className="text-muted-foreground">Đánh giá</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{userData.favoriteCount}</div>
                    <div className="text-muted-foreground">Yêu thích</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Chỉnh sửa hồ sơ
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/settings">
                      <Settings className="w-4 h-4 mr-2" />
                      Cài đặt
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <nav className="divide-y">
                    <Link to="/favorites" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <span>Địa điểm yêu thích</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                    <Link to="/notifications" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-primary" />
                        <span>Thông báo</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                    <Link to="/settings" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <span>Bảo mật & quyền riêng tư</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                    <button className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors w-full text-left text-destructive">
                      <LogOut className="w-5 h-5" />
                      <span>Đăng xuất</span>
                    </button>
                  </nav>
                </CardContent>
              </Card>

              <Card className="gradient-primary">
                <CardContent className="p-4 text-primary-foreground">
                  <h4 className="font-semibold mb-2">Bạn là chủ nhà hàng?</h4>
                  <p className="text-sm text-primary-foreground/80 mb-3">
                    Đăng ký để quản lý địa điểm của bạn
                  </p>
                  <Button variant="hero" size="sm" className="bg-background text-primary hover:bg-background/90" asChild>
                    <Link to="/business/register">Đăng ký ngay</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="favorites" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
                  <TabsTrigger value="favorites" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    <Heart className="w-4 h-4 mr-2" />
                    Yêu thích
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    <Star className="w-4 h-4 mr-2" />
                    Đánh giá
                  </TabsTrigger>
                <TabsTrigger value="posts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    <Camera className="w-4 h-4 mr-2" />
                    Bài đăng
                  </TabsTrigger>
                  <TabsTrigger value="friends" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Bạn bè
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="favorites" className="mt-0 space-y-4">
                  {favoritesList.map((place) => (
                    <Card key={place.id} variant="interactive">
                      <Link to={`/place/${place.id}`} className="flex gap-4 p-4">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <Badge variant="muted" className="mb-2">{place.category}</Badge>
                          <h3 className="font-semibold">{place.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-accent text-accent" />
                              <span>{place.rating}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{place.address}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Heart className="w-5 h-5 fill-primary text-primary" />
                        </Button>
                      </Link>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="reviews" className="mt-0 space-y-4">
                  {reviewsList.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={review.placeImage}
                            alt={review.placeName}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{review.placeName}</h4>
                            <div className="flex items-center gap-2 mt-1 mb-2">
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
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{review.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="posts" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[restaurantImage, cafeImage].map((img, idx) => (
                      <Link key={idx} to={`/feed/${idx + 1}`} className="group">
                        <div className="aspect-square rounded-xl overflow-hidden relative">
                          <img 
                            src={img} 
                            alt="Post" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex items-center gap-4 text-primary-foreground">
                              <span className="flex items-center gap-1">
                                <Heart className="w-5 h-5 fill-current" />
                                124
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="w-5 h-5" />
                                18
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
                      <Camera className="w-8 h-8 mb-2" />
                      <span className="text-sm">Thêm bài đăng</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="friends" className="mt-0">
                  <FriendsList />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
