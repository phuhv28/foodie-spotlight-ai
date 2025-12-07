import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Camera, X, MapPin, Image, Sparkles, Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Place {
  id: string;
  name: string;
  category: string;
}

const suggestedPlaces: Place[] = [
  { id: "1", name: "Quán Phở Thìn Bờ Hồ", category: "Nhà hàng" },
  { id: "2", name: "The Coffee House - Nguyễn Huệ", category: "Cà phê" },
  { id: "3", name: "Chợ Đêm Phú Quốc", category: "Ẩm thực đường phố" },
];

interface CreatePostProps {
  onPost?: (data: { image: string; caption: string; placeId: string }) => void;
  trigger?: React.ReactNode;
}

export function CreatePost({ onPost, trigger }: CreatePostProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [step, setStep] = useState<"image" | "details">("image");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setStep("details");
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!selectedImage || !selectedPlace) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng chọn ảnh và địa điểm",
        variant: "destructive",
      });
      return;
    }

    onPost?.({
      image: selectedImage,
      caption,
      placeId: selectedPlace.id,
    });

    toast({
      title: "Đã đăng!",
      description: "Khoảnh khắc của bạn đã được chia sẻ",
    });

    // Reset form
    setSelectedImage(null);
    setCaption("");
    setSelectedPlace(null);
    setStep("image");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setCaption("");
    setSelectedPlace(null);
    setStep("image");
  };

  const filteredPlaces = suggestedPlaces.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="gap-2">
            <Camera className="w-5 h-5" />
            Chia sẻ khoảnh khắc
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {step === "image" ? "Chọn ảnh" : "Thêm chi tiết"}
          </DialogTitle>
        </DialogHeader>

        {step === "image" ? (
          <div className="space-y-4">
            <div
              className="relative aspect-square rounded-2xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors bg-muted/30"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageSelect}
                className="hidden"
              />
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-medium text-lg">Chụp hoặc chọn ảnh</p>
              <p className="text-sm text-muted-foreground">
                Chia sẻ khoảnh khắc tại địa điểm yêu thích
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => fileInputRef.current?.click()}
              >
                <Image className="w-4 h-4 mr-2" />
                Chọn từ thư viện
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.capture = "environment";
                    fileInputRef.current.click();
                  }
                }}
              >
                <Camera className="w-4 h-4 mr-2" />
                Chụp ảnh
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Image Preview */}
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src={selectedImage!}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-card/80 backdrop-blur hover:bg-card"
                onClick={() => {
                  setSelectedImage(null);
                  setStep("image");
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Caption */}
            <Input
              placeholder="Viết gì đó về khoảnh khắc này..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            {/* Place Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bạn đang ở đâu?
              </label>

              {selectedPlace ? (
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div>
                    <p className="font-medium text-sm">{selectedPlace.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedPlace.category}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setSelectedPlace(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Tìm địa điểm..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <div className="max-h-40 overflow-y-auto space-y-1">
                    {filteredPlaces.map((place) => (
                      <button
                        key={place.id}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-left"
                        onClick={() => setSelectedPlace(place)}
                      >
                        <div>
                          <p className="font-medium text-sm">{place.name}</p>
                          <p className="text-xs text-muted-foreground">{place.category}</p>
                        </div>
                        <Badge variant="muted" className="text-xs">
                          {place.category}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={handleClose}>
                Hủy
              </Button>
              <Button className="flex-1" onClick={handlePost} disabled={!selectedPlace}>
                Đăng
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
