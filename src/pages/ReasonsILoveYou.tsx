import { useState, useEffect } from "react";
import { Heart, Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const ReasonsILoveYou = () => {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);

  const reasons = [
    "Your laugh makes my whole world brighter",
    "The way you scrunch your nose when you concentrate",
    "How you always know exactly what to say",
    "Your terrible jokes that somehow make me smile",
    "The way you hum while doing everyday things",
    "How you make ordinary moments feel magical",
    "Your kindness to everyone around you",
    "The way you steal my hoodies and look amazing in them",
    "How you remember the tiniest details about people",
    "Your passion for things you love",
    "The way you dance when you think nobody's watching",
    "How you make me want to be a better person",
    "Your beautiful eyes that tell a thousand stories",
    "The way you care for others before yourself",
    "How you make even rainy days feel sunny",
    "Your incredible sense of humor",
    "The way you snuggle closer in your sleep",
    "How you turn house chores into fun activities",
    "Your amazing cooking experiments (even the failed ones)",
    "The way you support my dreams",
    "How you make me feel like the luckiest person alive",
    "Your random acts of kindness",
    "The way you sing in the car",
    "How you always see the good in people",
    "Your beautiful smile that lights up any room",
    "The way you get excited about little things",
    "How you make me laugh until my stomach hurts",
    "Your incredible strength and resilience",
    "The way you love with your whole heart",
    "How you make every day an adventure",
    "Your perfect imperfections that make you uniquely you",
    "The way you hold my hand like you never want to let go",
    "How you believe in us even when times are tough",
    "Your beautiful soul that shines through everything you do",
    "The way you make our house feel like home",
    "How you love me exactly as I am",
    "Your incredible ability to make me feel understood",
    "The way you surprise me every single day",
    "How you make love feel like the greatest adventure",
    "Because you're you, and that's more than enough"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleReasons(prev => {
        if (prev.length < reasons.length) {
          const next = prev.length;
          return [...prev, next];
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [reasons.length]);

  const getRandomPosition = (index: number) => {
    // Use index to create consistent but varied positioning
    const x = (index * 71) % 85 + 5; // 5-90%
    const y = (index * 97) % 80 + 10; // 10-90%
    return { left: `${x}%`, top: `${y}%` };
  };

  const getRandomIcon = (index: number) => {
    const icons = [Heart, Sparkles, Star];
    return icons[index % icons.length];
  };

  const getRandomSize = (index: number) => {
    const sizes = ["text-sm", "text-base", "text-lg"];
    return sizes[index % sizes.length];
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="font-script text-4xl md:text-6xl text-primary mb-4 animate-fade-in">
            40 Reasons I Love You
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Watch as each reason appears, just like how my love for you grows every day ✨
          </p>
          <div className="flex justify-center items-center gap-2">
            <Heart className="text-primary animate-pulse" size={20} />
            <span className="text-accent font-medium">
              {visibleReasons.length} / {reasons.length} reasons revealed
            </span>
            <Heart className="text-primary animate-pulse" size={20} />
          </div>
        </div>

        {/* Floating Reasons */}
        <div className="relative min-h-[80vh]">
          {visibleReasons.map((index) => {
            const Icon = getRandomIcon(index);
            const position = getRandomPosition(index);
            const size = getRandomSize(index);
            
            return (
              <Card
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 max-w-xs animate-fade-in bg-card/80 backdrop-blur-sm border-primary/20 romantic-shadow hover:glow-shadow transition-all duration-500 hover:scale-105"
                style={position}
              >
                <div className="p-4 text-center">
                  <Icon className="text-primary mx-auto mb-2 animate-pulse-soft" size={20} />
                  <p className={`text-foreground font-medium leading-relaxed ${size}`}>
                    {reasons[index]}
                  </p>
                  <div className="flex justify-center mt-2">
                    <span className="text-xs text-muted-foreground">#{index + 1}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Completion Message */}
        {visibleReasons.length === reasons.length && (
          <div className="text-center mt-12 relative z-10">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm border-primary/30 romantic-shadow">
              <div className="p-8">
                <Heart className="text-primary mx-auto mb-4 animate-pulse" size={32} />
                <h2 className="font-script text-2xl text-primary mb-4">
                  And there are countless more...
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Every single day, I discover new reasons to love you. 
                  You are my heart, my soul, my everything. 
                  Happy Birthday, my love! 💕
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Background hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={`bg-heart-${i}`}
            className="absolute text-primary/5 animate-pulse-soft"
            size={40 + i * 4}
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ReasonsILoveYou;