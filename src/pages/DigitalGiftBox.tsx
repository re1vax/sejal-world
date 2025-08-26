import { useState } from "react";
import { Gift, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DigitalGiftBox = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const openGift = () => {
    setIsOpened(true);
    setTimeout(() => setShowLetter(true), 1000);
  };

  const loveLetter = `My Dearest Sejal,

As I write this letter, my heart is overflowing with love and gratitude for having you in my life. Today, on your special day, I want you to know just how much you mean to me.

You are the sunshine that brightens my darkest days, the melody that makes my heart sing, and the dream I never want to wake up from. Every moment with you feels like a beautiful adventure, and I can't imagine my life without your infectious laughter, your warm hugs, and your incredible spirit.

Your kindness touches everyone around you, your strength inspires me daily, and your love has transformed me into a better person. You have this magical way of making ordinary moments feel extraordinary, and I fall in love with you more deeply with each passing day.

On this birthday, I want to celebrate not just the day you were born, but every day since then that has led you to become the amazing woman you are today. You deserve all the happiness in the world, and I promise to spend every day trying to give you just that.

Thank you for choosing to share your life with me, for your patience with my silly jokes, for dancing with me in the kitchen, and for loving me with your whole heart. You are my best friend, my greatest love, and my favorite person in the entire universe.

Happy Birthday, my beautiful Sejal. Here's to many more years of love, laughter, and incredible memories together.

Forever and always yours,
Your Love ❤️

P.S. The real surprise is waiting for you at the location that will unlock soon... 😉`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-4xl md:text-6xl text-primary mb-4 animate-fade-in">
            A Special Gift For You
          </h1>
          <p className="text-lg text-muted-foreground">
            Click the box to unwrap your surprise 🎁
          </p>
        </div>

        <div className="flex justify-center">
          {!isOpened ? (
            /* Closed Gift Box */
            <div className="relative">
              <Button
                onClick={openGift}
                className="group relative w-64 h-64 rounded-lg bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 romantic-shadow hover:glow-shadow transition-all duration-500 hover:scale-105"
              >
                <div className="relative z-10">
                  <Gift className="w-24 h-24 text-white group-hover:rotate-12 transition-transform duration-300" />
                  <div className="mt-4 text-white font-script text-xl">
                    Click to Open
                  </div>
                </div>
                
                {/* Animated ribbon */}
                <div className="absolute inset-x-0 top-1/2 h-8 bg-accent/30 backdrop-blur-sm transform -translate-y-1/2" />
                <div className="absolute inset-y-0 left-1/2 w-8 bg-accent/30 backdrop-blur-sm transform -translate-x-1/2" />
                
                {/* Sparkles around the box */}
                {[...Array(8)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute text-white/60 animate-pulse-soft"
                    size={16}
                    style={{
                      top: `${20 + i * 8}%`,
                      left: `${15 + (i % 2) * 70}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </Button>
            </div>
          ) : (
            /* Opened Gift Box with Letter */
            <div className="w-full max-w-2xl">
              {/* Opening Animation */}
              <div className="text-center mb-8 animate-fade-in">
                <div className="relative inline-block">
                  <div className="w-32 h-16 bg-primary/20 rounded-t-lg animate-[spin_2s_ease-in-out] mx-auto mb-4" />
                  <div className="flex justify-center gap-4 mb-4">
                    {[...Array(6)].map((_, i) => (
                      <Heart
                        key={i}
                        className="text-primary animate-bounce"
                        size={20}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-accent font-script text-2xl">Surprise! 🎉</p>
                </div>
              </div>

              {/* Love Letter */}
              {showLetter && (
                <Card className="bg-card/90 backdrop-blur-sm border-primary/30 romantic-shadow animate-fade-in">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Heart className="text-primary mx-auto mb-2 animate-pulse" size={32} />
                      <h2 className="font-script text-3xl text-primary">A Love Letter Just For You</h2>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <div className="text-foreground leading-relaxed whitespace-pre-line font-medium">
                        {loveLetter}
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <div className="flex items-center gap-2">
                        <Star className="text-accent animate-pulse" size={20} />
                        <span className="text-accent font-script text-lg">Made with all my love</span>
                        <Star className="text-accent animate-pulse" size={20} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>

        {/* Floating particles */}
        {isOpened && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {i % 3 === 0 ? (
                  <Heart className="text-primary/30" size={12 + Math.random() * 8} />
                ) : i % 3 === 1 ? (
                  <Sparkles className="text-accent/30" size={12 + Math.random() * 8} />
                ) : (
                  <Star className="text-secondary/30" size={12 + Math.random() * 8} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalGiftBox;