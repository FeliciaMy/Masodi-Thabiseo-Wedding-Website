import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import PhotoGallery from "@/components/PhotoGallery";
import WishlistSection from "@/components/WishlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <PhotoGallery />
      <WishlistSection />
      <Footer />
    </div>
  );
};

export default Index;
