import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FriendCard } from "./FriendCard";
import { Search, Users, UserPlus, Clock } from "lucide-react";
import { toast } from "sonner";

// Mock data
const mockFriends = [
  { id: "1", name: "Trần Thị B", mutualFriends: 12, status: "friend" as const },
  { id: "2", name: "Lê Văn C", mutualFriends: 8, status: "friend" as const },
  { id: "3", name: "Phạm Thị D", mutualFriends: 5, status: "friend" as const },
  { id: "4", name: "Ngô Văn E", mutualFriends: 3, status: "friend" as const },
];

const mockPending = [
  { id: "5", name: "Hoàng Thị F", mutualFriends: 2, status: "pending" as const },
];

const mockRequests = [
  { id: "6", name: "Vũ Văn G", mutualFriends: 4, status: "requested" as const },
  { id: "7", name: "Đặng Thị H", mutualFriends: 1, status: "requested" as const },
];

const mockSuggestions = [
  { id: "8", name: "Bùi Văn I", mutualFriends: 15, status: "none" as const },
  { id: "9", name: "Đinh Thị K", mutualFriends: 10, status: "none" as const },
  { id: "10", name: "Lý Văn L", mutualFriends: 7, status: "none" as const },
];

export const FriendsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState(mockFriends);
  const [pending, setPending] = useState(mockPending);
  const [requests, setRequests] = useState(mockRequests);
  const [suggestions, setSuggestions] = useState(mockSuggestions);

  const handleAction = (id: string, action: string, list: string) => {
    switch (action) {
      case "unfriend":
        setFriends(friends.filter(f => f.id !== id));
        toast.success("Đã hủy kết bạn");
        break;
      case "accept":
        const accepted = requests.find(r => r.id === id);
        if (accepted) {
          setRequests(requests.filter(r => r.id !== id));
          setFriends([...friends, { ...accepted, status: "friend" as const }]);
          toast.success("Đã chấp nhận lời mời kết bạn");
        }
        break;
      case "decline":
        setRequests(requests.filter(r => r.id !== id));
        toast.info("Đã từ chối lời mời kết bạn");
        break;
      case "add":
        const added = suggestions.find(s => s.id === id);
        if (added) {
          setSuggestions(suggestions.filter(s => s.id !== id));
          setPending([...pending, { ...added, status: "pending" as const }]);
          toast.success("Đã gửi lời mời kết bạn");
        }
        break;
    }
  };

  const filteredFriends = friends.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Tìm kiếm bạn bè..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="w-full grid grid-cols-4 mb-4">
          <TabsTrigger value="friends" className="text-xs sm:text-sm">
            <Users className="w-4 h-4 mr-1 hidden sm:inline" />
            Bạn bè ({friends.length})
          </TabsTrigger>
          <TabsTrigger value="requests" className="text-xs sm:text-sm">
            <UserPlus className="w-4 h-4 mr-1 hidden sm:inline" />
            Lời mời ({requests.length})
          </TabsTrigger>
          <TabsTrigger value="pending" className="text-xs sm:text-sm">
            <Clock className="w-4 h-4 mr-1 hidden sm:inline" />
            Đã gửi ({pending.length})
          </TabsTrigger>
          <TabsTrigger value="suggestions" className="text-xs sm:text-sm">
            Gợi ý
          </TabsTrigger>
        </TabsList>

        <TabsContent value="friends" className="space-y-3 mt-0">
          {filteredFriends.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>{searchQuery ? "Không tìm thấy kết quả" : "Chưa có bạn bè nào"}</p>
            </div>
          ) : (
            filteredFriends.map((friend) => (
              <FriendCard
                key={friend.id}
                {...friend}
                onAction={(action) => handleAction(friend.id, action, "friends")}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="requests" className="space-y-3 mt-0">
          {requests.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <UserPlus className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Không có lời mời kết bạn nào</p>
            </div>
          ) : (
            requests.map((request) => (
              <FriendCard
                key={request.id}
                {...request}
                onAction={(action) => handleAction(request.id, action, "requests")}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="pending" className="space-y-3 mt-0">
          {pending.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Không có lời mời đang chờ</p>
            </div>
          ) : (
            pending.map((p) => (
              <FriendCard key={p.id} {...p} />
            ))
          )}
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-3 mt-0">
          <p className="text-sm text-muted-foreground mb-3">
            Những người bạn có thể biết
          </p>
          {suggestions.map((suggestion) => (
            <FriendCard
              key={suggestion.id}
              {...suggestion}
              onAction={(action) => handleAction(suggestion.id, action, "suggestions")}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
