import HeroSection from "@/components/HeroSection";
import MemoriesSection from "@/components/MemoriesSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import TimelineSection from "@/components/TimelineSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MemoriesSection />
      <LoveLetterSection />
      <TimelineSection />
      
      {/* Footer */}
      <footer className="bg-background border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-script text-lg text-primary mb-2">Made with all my love</p>
          <p className="text-sm text-muted-foreground">Copyright Harsh's. For Life.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
