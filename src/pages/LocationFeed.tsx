import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PostCard, type Post } from "@/components/social/PostCard";
import { CreatePost } from "@/components/social/CreatePost";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, Users, Star, Clock, Phone, Camera, ArrowLeft, 
  Heart, Share2, Bell, BellOff 
} from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant.jpg";
import cafeImage from "@/assets/cafe.jpg";

const placeData = {
  id: "1",
  name: "Quán Phở Thìn Bờ Hồ",
  category: "Nhà hàng",
  image: restaurantImage,
  rating: 4.8,
  reviewCount: 2341,
  address: "13 Lò Đúc, Hai Bà Trưng, Hà Nội",
  activeUsers: 24,
  todayPosts: 15,
  isOpen: true,
};

const locationPosts: Post[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Minh Anh",
    placeId: "1",
    placeName: "Quán Phở Thìn Bờ Hồ",
    placeCategory: "Nhà hàng",
    image: restaurantImage,
    caption: "Sáng nay thưởng thức tô phở nóng hổi, tuyệt vời! 🍜",
    createdAt: new Date(Date.now() - 1000 * 60 * 5),
    likes: 128,
    comments: 24,
    isLiked: false,
  },
  {
    id: "2",
    userId: "user2",
    userName: "Hoàng Nam",
    placeId: "1",
    placeName: "Quán Phở Thìn Bờ Hồ",
    placeCategory: "Nhà hàng",
    image: cafeImage,
    caption: "Phở bò tái nạm siêu ngon 😋",
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
    likes: 89,
    comments: 12,
    isLiked: true,
  },
  {
    id: "3",
    userId: "user3",
    userName: "Thu Hà",
    placeId: "1",
    placeName: "Quán Phở Thìn Bờ Hồ",
    placeCategory: "Nhà hàng",
    image: restaurantImage,
    caption: "Check-in quán phở huyền thoại Hà Nội!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60),
    likes: 256,
    comments: 45,
    isLiked: false,
  },
];

const LocationFeed = () => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />

      <main className="flex-1">
        {/* Location Hero */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={placeData.image}
            alt={placeData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

          {/* Back Button */}
          <Link
            to="/feed"
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          {/* Live Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Badge className="gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              {placeData.activeUsers} đang xem
            </Badge>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
            <Badge variant="muted" className="mb-2">
              {placeData.category}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{placeData.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-background/80">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>{placeData.rating}</span>
                <span>({placeData.reviewCount})</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{placeData.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-card border-b sticky top-16 z-40">
          <div className="container py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Button
                  variant={isFollowing ? "outline" : "default"}
                  size="sm"
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? (
                    <>
                      <Heart className="w-4 h-4 mr-1 fill-primary text-primary" />
                      Đang theo dõi
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 mr-1" />
                      Theo dõi
                    </>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setNotificationsOn(!notificationsOn)}
                >
                  {notificationsOn ? (
                    <Bell className="w-4 h-4 fill-primary text-primary" />
                  ) : (
                    <BellOff className="w-4 h-4" />
                  )}
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Link to={`/place/${id}`}>
                  <Button variant="outline" size="sm">
                    Xem chi tiết
                  </Button>
                </Link>
                <CreatePost
                  trigger={
                    <Button size="sm">
                      <Camera className="w-4 h-4 mr-1" />
                      Đăng tại đây
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container py-4">
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-3 divide-x text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{placeData.todayPosts}</div>
                  <div className="text-xs text-muted-foreground">Khoảnh khắc hôm nay</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{placeData.activeUsers}</div>
                  <div className="text-xs text-muted-foreground">Đang xem</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">
                    {placeData.isOpen ? "Mở cửa" : "Đóng cửa"}
                  </div>
                  <div className="text-xs text-muted-foreground">Trạng thái</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Posts Feed */}
        <div className="container pb-8">
          <div className="max-w-xl mx-auto space-y-6">
            {locationPosts.map((post) => (
              <PostCard key={post.id} post={post} showPlace={false} />
            ))}

            {locationPosts.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-medium mb-2">Chưa có khoảnh khắc nào</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hãy là người đầu tiên chia sẻ!
                  </p>
                  <CreatePost
                    trigger={
                      <Button>
                        <Camera className="w-4 h-4 mr-2" />
                        Đăng ngay
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocationFeed;
