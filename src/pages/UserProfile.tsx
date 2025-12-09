import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Heart, Star, MapPin, Camera, 
  UserPlus, UserMinus, MessageCircle, MoreHorizontal, Check, Clock
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import cafeImage from "@/assets/cafe.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

// Mock data for other users
const usersData: Record<string, {
  name: string;
  bio: string;
  avatar: string;
  joinDate: string;
  reviewCount: number;
  favoriteCount: number;
  friendsCount: number;
  postsCount: number;
  friendStatus: "friend" | "pending" | "requested" | "none";
}> = {
  "1": {
    name: "Trần Thị B",
    bio: "Yêu ẩm thực Việt Nam 🍜 | Hà Nội",
    avatar: "",
    joinDate: "Tháng 3, 2024",
    reviewCount: 42,
    favoriteCount: 56,
    friendsCount: 234,
    postsCount: 28,
    friendStatus: "friend",
  },
  "2": {
    name: "Lê Văn C",
    bio: "Khám phá mọi ngóc ngách ẩm thực | Food blogger",
    avatar: "",
    joinDate: "Tháng 6, 2023",
    reviewCount: 128,
    favoriteCount: 89,
    friendsCount: 567,
    postsCount: 156,
    friendStatus: "none",
  },
  "8": {
    name: "Bùi Văn I",
    bio: "Coffee lover ☕ | Sài Gòn",
    avatar: "",
    joinDate: "Tháng 1, 2024",
    reviewCount: 35,
    favoriteCount: 42,
    friendsCount: 189,
    postsCount: 45,
    friendStatus: "pending",
  },
};

const mockPosts = [
  {
    id: "1",
    image: restaurantImage,
    likes: 124,
    comments: 18,
  },
  {
    id: "2",
    image: cafeImage,
    likes: 89,
    comments: 12,
  },
];

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const user = usersData[id || "1"] || usersData["1"];
  const [friendStatus, setFriendStatus] = useState(user.friendStatus);

  const handleFriendAction = () => {
    switch (friendStatus) {
      case "none":
        setFriendStatus("pending");
        toast.success("Đã gửi lời mời kết bạn");
        break;
      case "pending":
        setFriendStatus("none");
        toast.info("Đã hủy lời mời kết bạn");
        break;
      case "friend":
        setFriendStatus("none");
        toast.success("Đã hủy kết bạn");
        break;
      case "requested":
        setFriendStatus("friend");
        toast.success("Đã chấp nhận lời mời kết bạn");
        break;
    }
  };

  const renderFriendButton = () => {
    switch (friendStatus) {
      case "friend":
        return (
          <Button variant="outline" onClick={handleFriendAction}>
            <UserMinus className="w-4 h-4 mr-2" />
            Hủy kết bạn
          </Button>
        );
      case "pending":
        return (
          <Button variant="outline" onClick={handleFriendAction}>
            <Clock className="w-4 h-4 mr-2" />
            Đã gửi lời mời
          </Button>
        );
      case "requested":
        return (
          <Button onClick={handleFriendAction}>
            <Check className="w-4 h-4 mr-2" />
            Chấp nhận
          </Button>
        );
      default:
        return (
          <Button onClick={handleFriendAction}>
            <UserPlus className="w-4 h-4 mr-2" />
            Kết bạn
          </Button>
        );
    }
  };

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
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    user.name.charAt(0)
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  {friendStatus === "friend" && (
                    <Badge variant="secondary" className="self-center">
                      <User className="w-3 h-3 mr-1" />
                      Bạn bè
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{user.bio}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-bold text-lg">{user.postsCount}</div>
                    <div className="text-muted-foreground">Bài đăng</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{user.friendsCount}</div>
                    <div className="text-muted-foreground">Bạn bè</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{user.reviewCount}</div>
                    <div className="text-muted-foreground">Đánh giá</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{user.favoriteCount}</div>
                    <div className="text-muted-foreground">Yêu thích</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {renderFriendButton()}
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Nhắn tin
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container py-8">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
              <TabsTrigger value="posts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                <Camera className="w-4 h-4 mr-2" />
                Bài đăng
              </TabsTrigger>
              <TabsTrigger value="favorites" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                Yêu thích
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                <Star className="w-4 h-4 mr-2" />
                Đánh giá
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mockPosts.map((post) => (
                  <Link key={post.id} to={`/feed/${post.id}`} className="group">
                    <div className="aspect-square rounded-xl overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt="Post" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex items-center gap-4 text-primary-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="w-5 h-5 fill-current" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-5 h-5" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Danh sách yêu thích của {user.name}</p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <Star className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Đánh giá của {user.name}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserProfile;
