import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PostCard, type Post } from "@/components/social/PostCard";
import { CreatePost } from "@/components/social/CreatePost";
import { LocationChannelCard, LiveLocationBubble } from "@/components/social/LocationChannel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Camera, Sparkles, TrendingUp, Users, MapPin, Plus } from "lucide-react";
import cafeImage from "@/assets/cafe.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import nightmarketImage from "@/assets/nightmarket.jpg";
import cookingImage from "@/assets/cooking.jpg";

const liveChannels = [
  {
    id: "1",
    name: "Phở Thìn",
    category: "Nhà hàng",
    image: restaurantImage,
    activeUsers: 24,
    recentPosts: 15,
    isLive: true,
  },
  {
    id: "2",
    name: "Coffee House",
    category: "Cà phê",
    image: cafeImage,
    activeUsers: 12,
    recentPosts: 8,
    isLive: true,
  },
  {
    id: "3",
    name: "Chợ Đêm",
    category: "Ẩm thực",
    image: nightmarketImage,
    activeUsers: 45,
    recentPosts: 32,
    isLive: true,
  },
  {
    id: "4",
    name: "Cooking Class",
    category: "Trải nghiệm",
    image: cookingImage,
    activeUsers: 8,
    recentPosts: 5,
    isLive: false,
  },
];

const trendingChannels = [
  {
    id: "1",
    name: "Quán Phở Thìn Bờ Hồ",
    category: "Nhà hàng",
    image: restaurantImage,
    activeUsers: 24,
    recentPosts: 156,
    isLive: true,
  },
  {
    id: "3",
    name: "Chợ Đêm Phú Quốc",
    category: "Ẩm thực đường phố",
    image: nightmarketImage,
    activeUsers: 45,
    recentPosts: 89,
    isLive: true,
  },
];

const feedPosts: Post[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Minh Anh",
    placeId: "1",
    placeName: "Quán Phở Thìn Bờ Hồ",
    placeCategory: "Nhà hàng",
    image: restaurantImage,
    caption: "Sáng nay thưởng thức tô phở nóng hổi, tuyệt vời! 🍜",
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
    likes: 128,
    comments: 24,
    isLiked: false,
  },
  {
    id: "2",
    userId: "user2",
    userName: "Hoàng Nam",
    placeId: "2",
    placeName: "The Coffee House",
    placeCategory: "Cà phê",
    image: cafeImage,
    caption: "Góc làm việc yêu thích ☕",
    createdAt: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
    likes: 89,
    comments: 12,
    isLiked: true,
  },
  {
    id: "3",
    userId: "user3",
    userName: "Thu Hà",
    placeId: "3",
    placeName: "Chợ Đêm Phú Quốc",
    placeCategory: "Ẩm thực đường phố",
    image: nightmarketImage,
    caption: "Đêm Phú Quốc thật tuyệt vời 🌙",
    createdAt: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
    likes: 256,
    comments: 45,
    isLiked: false,
  },
  {
    id: "4",
    userId: "user4",
    userName: "Đức Anh",
    placeId: "4",
    placeName: "Saigon Cooking Class",
    placeCategory: "Cooking Class",
    image: cookingImage,
    caption: "Lần đầu học làm phở, thật thú vị! 👨‍🍳",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    likes: 312,
    comments: 67,
    isLiked: true,
  },
];

const SocialFeed = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />

      <main className="flex-1">
        {/* Live Stories Bar */}
        <div className="bg-card border-b py-4">
          <div className="container">
            <ScrollArea className="w-full">
              <div className="flex gap-4 pb-2">
                {/* Create Story Button */}
                <div className="flex flex-col items-center gap-2">
                  <CreatePost
                    trigger={
                      <button className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center hover:bg-primary/5 transition-colors">
                        <Plus className="w-6 h-6 text-primary" />
                      </button>
                    }
                  />
                  <span className="text-xs font-medium">Thêm mới</span>
                </div>

                {/* Live Channels */}
                {liveChannels.map((channel) => (
                  <LiveLocationBubble key={channel.id} channel={channel} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        <div className="container py-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="foryou" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
                  <TabsTrigger
                    value="foryou"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Dành cho bạn
                  </TabsTrigger>
                  <TabsTrigger
                    value="following"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Đang theo dõi
                  </TabsTrigger>
                  <TabsTrigger
                    value="nearby"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Gần đây
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="foryou" className="mt-0 space-y-6">
                  {feedPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </TabsContent>

                <TabsContent value="following" className="mt-0">
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="font-medium mb-2">Theo dõi để xem nhiều hơn</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Theo dõi bạn bè và địa điểm yêu thích để không bỏ lỡ khoảnh khắc nào
                      </p>
                      <Button>Khám phá người dùng</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="nearby" className="mt-0">
                  <Card>
                    <CardContent className="py-12 text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="font-medium mb-2">Cho phép truy cập vị trí</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Để xem các khoảnh khắc gần bạn
                      </p>
                      <Button>Bật vị trí</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Channels */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Địa điểm hot hôm nay</h3>
                  </div>
                  <div className="space-y-4">
                    {trendingChannels.map((channel) => (
                      <LocationChannelCard key={channel.id} channel={channel} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="gradient-primary">
                <CardContent className="p-4 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera className="w-6 h-6" />
                    <h3 className="font-semibold">Chia sẻ ngay!</h3>
                  </div>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Đang ở đâu đó thú vị? Chia sẻ khoảnh khắc của bạn với mọi người!
                  </p>
                  <CreatePost
                    trigger={
                      <Button
                        variant="hero"
                        className="w-full bg-background text-primary hover:bg-background/90"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Đăng ngay
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SocialFeed;
