import { useState, useEffect } from "react";
import { Clock, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-09-04T18:00:00+05:30"); // 6 PM IST, Sept 4th

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsTimeUp(false);
      } else {
        setIsTimeUp(true);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-40">
      <Card className="bg-background/90 backdrop-blur-md border-primary/30 romantic-shadow hover:glow-shadow transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="text-primary animate-pulse" size={20} />
            <h3 className="font-script text-lg text-primary">Surprise Timer</h3>
            <Sparkles className="text-accent animate-pulse" size={16} />
          </div>
          
          {!isTimeUp ? (
            <>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                  <div className="text-xs text-muted-foreground">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                  <div className="text-xs text-muted-foreground">Min</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                  <div className="text-xs text-muted-foreground">Sec</div>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground">
                Until your surprise unlocks ✨
              </p>
            </>
          ) : (
            <div className="text-center">
              <Heart className="text-primary mx-auto mb-2 animate-pulse" size={24} />
              <p className="text-primary font-script text-lg">Ready to be surprised?</p>
              <p className="text-xs text-accent">Your gift awaits! 🎁</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CountdownTimer;