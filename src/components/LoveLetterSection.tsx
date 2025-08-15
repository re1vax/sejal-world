import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-accent animate-pulse-soft" size={24} />
            <h2 className="font-script text-5xl md:text-6xl text-primary">
              A Letter to You
            </h2>
            <Sparkles className="text-accent animate-pulse-soft" size={24} />
          </div>
        </div>
        
        <Card className="romantic-shadow hover:glow-shadow transition-all duration-500 border-primary/20 animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="flex items-center gap-2 mb-8">
                <Heart className="text-primary" size={20} />
                <span className="text-primary font-medium">My Dearest Love,</span>
              </div>
              
              <p className="text-foreground/90">
                On this special day, I want you to know how incredibly blessed I feel to have you in my life. 
                Your laughter fills my heart with joy, your smile brightens even my darkest days, and your 
                love gives me strength I never knew I had.
              </p>
              
              <p className="text-foreground/90">
                Every year you grow more beautiful, not just in the way you look, but in the way you love, 
                the way you care for others, and the way you make everyone around you feel special. You have 
                a heart of gold and a spirit that shines brighter than any star.
              </p>
              
              <p className="text-foreground/90">
                Today, we celebrate not just your birthday, but the incredible person you are and all the 
                wonderful memories we've created together. I look forward to many more adventures, inside 
                jokes, late-night conversations, and quiet moments of pure happiness.
              </p>
              
              <p className="text-foreground/90">
                Thank you for being my partner, my best friend, and my greatest love. Here's to another 
                year of growing together, laughing together, and loving each other more deeply with each 
                passing day.
              </p>
              
              <div className="pt-8 border-t border-primary/20">
                <p className="font-script text-2xl text-primary text-center">
                  Happy Birthday, Beautiful! 
                </p>
                <p className="text-center text-muted-foreground mt-2">
                  With all my love, always and forever ❤️
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoveLetterSection;