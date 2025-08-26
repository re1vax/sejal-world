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
        <CardContent className="p-3">
          {!isTimeUp ? (
            <div className="text-center">
              <div className="text-lg font-bold text-primary mb-1">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
              <p className="text-xs text-muted-foreground">
                left to unlock your surprise
              </p>
            </div>
          ) : (
            <div className="text-center">
              <Heart className="text-primary mx-auto mb-1 animate-pulse" size={20} />
              <p className="text-primary font-script text-sm">Ready to be surprised?</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CountdownTimer;