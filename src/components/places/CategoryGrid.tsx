import { Button } from "@/components/ui/button";
import { Utensils, Coffee, TreePine, Music, ShoppingBag, Cake, Wine, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: "restaurant", name: "Nhà hàng", icon: Utensils, color: "from-orange-500 to-red-500" },
  { id: "cafe", name: "Cà phê", icon: Coffee, color: "from-amber-500 to-orange-500" },
  { id: "streetfood", name: "Đường phố", icon: ShoppingBag, color: "from-teal-500 to-emerald-500" },
  { id: "bar", name: "Bar & Pub", icon: Wine, color: "from-violet-500 to-purple-500" },
  { id: "bakery", name: "Bánh ngọt", icon: Cake, color: "from-pink-500 to-rose-500" },
  { id: "cooking", name: "Cooking Class", icon: ChefHat, color: "from-cyan-500 to-blue-500" },
  { id: "nature", name: "View đẹp", icon: TreePine, color: "from-green-500 to-emerald-500" },
  { id: "music", name: "Live music", icon: Music, color: "from-indigo-500 to-violet-500" },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.id}
            to={`/explore?category=${category.id}`}
            className="group"
          >
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border transition-all duration-300 hover:shadow-elevated hover:scale-105 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
