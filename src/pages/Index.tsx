import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/places/CategoryGrid";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { AIRecommendSection } from "@/components/home/AIRecommendSection";
import { BusinessCTASection } from "@/components/home/BusinessCTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Categories Section */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container">
            <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6 text-center">Bạn muốn tìm gì?</h2>
              <CategoryGrid />
            </div>
          </div>
        </section>

        <FeaturedSection />
        <AIRecommendSection />
        <BusinessCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
