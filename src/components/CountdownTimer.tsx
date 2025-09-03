import { useState, useEffect } from "react";
import { Clock, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-09-04T19:00:00+05:30"); // 7 PM IST, Sept 4th

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="fixed z-40"
      style={{
        top: isMobile ? "72px" : "80px", // shifted further down for mobile
        right: isMobile ? "8px" : "16px",
        minWidth: isMobile ? "110px" : undefined,
        maxWidth: isMobile ? "160px" : "220px",
        width: isMobile ? "auto" : undefined,
      }}
    >
      <Card
        className="backdrop-blur-md border-primary/30 romantic-shadow hover:glow-shadow transition-all duration-300"
        style={{
          background: isMobile
            ? "rgba(30, 30, 40, 0.72)" // more transparent on mobile
            : "rgba(30, 30, 40, 0.92)",
          padding: isMobile ? "0.1rem" : undefined,
        }}
      >
        <CardContent
          className="p-3"
          style={{
            padding: isMobile ? "0.3rem" : undefined,
          }}
        >
          {!isTimeUp ? (
            <div className="text-center">
              <div
                className="font-bold text-primary mb-1"
                style={{
                  fontSize: isMobile ? "0.85rem" : "1.15rem",
                  lineHeight: isMobile ? "1rem" : undefined,
                }}
              >
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
              <p
                className="text-xs text-muted-foreground"
                style={{
                  fontSize: isMobile ? "0.6rem" : "0.8rem",
                }}
              >
                left to unlock your surprise
              </p>
            </div>
          ) : (
            <div className="text-center">
              <Heart
                className="text-primary mx-auto mb-1 animate-pulse"
                size={isMobile ? 14 : 20}
              />
              <p
                className="text-primary font-script text-sm"
                style={{
                  fontSize: isMobile ? "0.7rem" : "1rem",
                }}
              >
                Ready to be surprised?
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CountdownTimer;