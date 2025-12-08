import { useState } from "react";
import { ChevronRight, ChevronDown, MapPin, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

export interface ChannelNode {
  id: string;
  name: string;
  type: "country" | "province" | "district" | "place";
  image?: string;
  postsCount?: number;
  activeUsers?: number;
  isLive?: boolean;
  children?: ChannelNode[];
}

const channelTree: ChannelNode = {
  id: "vietnam",
  name: "Việt Nam",
  type: "country",
  postsCount: 12543,
  activeUsers: 1234,
  children: [
    {
      id: "hanoi",
      name: "Hà Nội",
      type: "province",
      postsCount: 3421,
      activeUsers: 456,
      isLive: true,
      children: [
        {
          id: "hoankiem",
          name: "Hoàn Kiếm",
          type: "district",
          postsCount: 892,
          activeUsers: 123,
          isLive: true,
          children: [
            { id: "1", name: "Phở Thìn Bờ Hồ", type: "place", postsCount: 156, activeUsers: 24, isLive: true },
            { id: "5", name: "Cà phê Giảng", type: "place", postsCount: 89, activeUsers: 12, isLive: true },
            { id: "6", name: "Bún chả Hương Liên", type: "place", postsCount: 134, activeUsers: 18, isLive: false },
          ],
        },
        {
          id: "tayho",
          name: "Tây Hồ",
          type: "district",
          postsCount: 567,
          activeUsers: 78,
          children: [
            { id: "7", name: "Quán Sen Hồ Tây", type: "place", postsCount: 67, activeUsers: 8, isLive: false },
            { id: "8", name: "Sunset Bar", type: "place", postsCount: 45, activeUsers: 15, isLive: true },
          ],
        },
        {
          id: "dongda",
          name: "Đống Đa",
          type: "district",
          postsCount: 423,
          activeUsers: 56,
          children: [
            { id: "9", name: "Phở Bát Đàn", type: "place", postsCount: 112, activeUsers: 14, isLive: false },
          ],
        },
      ],
    },
    {
      id: "hcm",
      name: "TP. Hồ Chí Minh",
      type: "province",
      postsCount: 4567,
      activeUsers: 678,
      isLive: true,
      children: [
        {
          id: "quan1",
          name: "Quận 1",
          type: "district",
          postsCount: 1234,
          activeUsers: 234,
          isLive: true,
          children: [
            { id: "10", name: "Bến Thành Street Food", type: "place", postsCount: 234, activeUsers: 45, isLive: true },
            { id: "11", name: "The Workshop Coffee", type: "place", postsCount: 189, activeUsers: 32, isLive: true },
          ],
        },
        {
          id: "quan3",
          name: "Quận 3",
          type: "district",
          postsCount: 876,
          activeUsers: 145,
          children: [
            { id: "12", name: "Bánh mì Huỳnh Hoa", type: "place", postsCount: 312, activeUsers: 28, isLive: true },
          ],
        },
      ],
    },
    {
      id: "danang",
      name: "Đà Nẵng",
      type: "province",
      postsCount: 2134,
      activeUsers: 345,
      children: [
        {
          id: "haichau",
          name: "Hải Châu",
          type: "district",
          postsCount: 567,
          activeUsers: 89,
          children: [
            { id: "13", name: "Mì Quảng Bà Mua", type: "place", postsCount: 145, activeUsers: 19, isLive: false },
          ],
        },
        {
          id: "sontra",
          name: "Sơn Trà",
          type: "district",
          postsCount: 789,
          activeUsers: 123,
          isLive: true,
          children: [
            { id: "14", name: "Sky36 Bar", type: "place", postsCount: 278, activeUsers: 56, isLive: true },
          ],
        },
      ],
    },
    {
      id: "phuquoc",
      name: "Phú Quốc",
      type: "province",
      postsCount: 1876,
      activeUsers: 234,
      isLive: true,
      children: [
        {
          id: "duongdong",
          name: "Dương Đông",
          type: "district",
          postsCount: 987,
          activeUsers: 156,
          isLive: true,
          children: [
            { id: "3", name: "Chợ Đêm Phú Quốc", type: "place", postsCount: 432, activeUsers: 89, isLive: true },
            { id: "15", name: "Sunset Sanato", type: "place", postsCount: 267, activeUsers: 45, isLive: true },
          ],
        },
      ],
    },
  ],
};

interface ChannelNodeItemProps {
  node: ChannelNode;
  level: number;
  selectedId?: string;
}

function ChannelNodeItem({ node, level, selectedId }: ChannelNodeItemProps) {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;
  const isPlace = node.type === "place";
  const isSelected = selectedId === node.id;

  const typeStyles = {
    country: "font-bold text-lg",
    province: "font-semibold",
    district: "font-medium text-sm",
    place: "text-sm",
  };

  const content = (
    <div
      className={cn(
        "flex items-center gap-2 py-2 px-3 rounded-lg transition-all cursor-pointer",
        "hover:bg-muted/80",
        isSelected && "bg-primary/10 border border-primary/20",
        !isPlace && hasChildren && "hover:bg-muted"
      )}
      style={{ paddingLeft: `${level * 16 + 12}px` }}
      onClick={() => !isPlace && hasChildren && setIsExpanded(!isExpanded)}
    >
      {/* Expand/Collapse Icon */}
      {hasChildren && !isPlace && (
        <span className="w-4 h-4 flex items-center justify-center text-muted-foreground">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </span>
      )}
      {!hasChildren && !isPlace && <span className="w-4" />}
      {isPlace && <MapPin className="w-4 h-4 text-primary shrink-0" />}

      {/* Name */}
      <span className={cn("flex-1 truncate", typeStyles[node.type])}>
        {node.name}
      </span>

      {/* Live Indicator */}
      {node.isLive && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
      )}

      {/* Stats */}
      {node.postsCount !== undefined && (
        <Badge variant="muted" className="text-xs shrink-0">
          <Sparkles className="w-3 h-3 mr-1" />
          {node.postsCount > 1000 ? `${(node.postsCount / 1000).toFixed(1)}k` : node.postsCount}
        </Badge>
      )}

      {node.activeUsers !== undefined && node.activeUsers > 0 && (
        <Badge variant="outline" className="text-xs shrink-0">
          <Users className="w-3 h-3 mr-1" />
          {node.activeUsers}
        </Badge>
      )}
    </div>
  );

  return (
    <div>
      {isPlace ? (
        <Link to={`/feed/${node.id}`}>{content}</Link>
      ) : (
        content
      )}

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="border-l border-border/50 ml-6">
          {node.children!.map((child) => (
            <ChannelNodeItem
              key={child.id}
              node={child}
              level={level + 1}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ChannelTreeProps {
  className?: string;
}

export function ChannelTree({ className }: ChannelTreeProps) {
  const { id } = useParams();

  return (
    <div className={cn("bg-card rounded-xl border", className)}>
      <div className="p-4 border-b">
        <h3 className="font-semibold flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Khám phá theo vùng
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Chọn khu vực để xem các khoảnh khắc
        </p>
      </div>
      <ScrollArea className="h-[500px]">
        <div className="p-2">
          <ChannelNodeItem node={channelTree} level={0} selectedId={id} />
        </div>
      </ScrollArea>
    </div>
  );
}

export { channelTree };
