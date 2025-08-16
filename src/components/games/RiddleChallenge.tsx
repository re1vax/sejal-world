import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, CheckCircle, Heart } from "lucide-react";

interface Riddle {
  question: string;
  answer: string;
  hint: string;
  reward: string;
}

interface RiddleChallengeProps {
  onComplete: () => void;
}

const RiddleChallenge = ({ onComplete }: RiddleChallengeProps) => {
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [solvedRiddles, setSolvedRiddles] = useState<number[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [completed, setCompleted] = useState(false);

  const riddles: Riddle[] = [
    {
      question: "I have no voice, but I speak to your heart. I have no body, but I light up the dark. I grow stronger when shared, what am I?",
      answer: "love",
      hint: "It's the strongest force in the universe, and what we share together.",
      reward: "Love is indeed the answer! You understand what makes our world bright. ❤️"
    },
    {
      question: "I come with sunrise and stay through the night. I'm found in your laughter and shine in your eyes. I'm the warmth in your heart, what am I?",
      answer: "joy",
      hint: "It's what you bring to every room you enter.",
      reward: "Joy! You bring so much happiness to my life every single day. 😊"
    },
    {
      question: "I cannot be touched, but I can be felt. I cannot be seen, but I make hearts melt. I connect two souls across any distance, what am I?",
      answer: "connection",
      hint: "It's what we have that makes us feel close even when apart.",
      reward: "Connection! Our souls are beautifully intertwined, no matter the distance. 💫"
    },
    {
      question: "I have no end and no beginning. I'm a circle that keeps on spinning. In your finger I like to rest, I'm a symbol of love at its best, what am I?",
      answer: "ring",
      hint: "It's a symbol of eternal love and commitment.",
      reward: "A ring! A symbol of forever, just like my love for you. 💍"
    }
  ];

  const handleSubmit = () => {
    const currentRiddleData = riddles[currentRiddle];
    if (userAnswer.toLowerCase().trim() === currentRiddleData.answer.toLowerCase()) {
      setSolvedRiddles([...solvedRiddles, currentRiddle]);
      setShowReward(true);
      setUserAnswer("");
      setShowHint(false);
    } else {
      // Show a gentle hint that the answer isn't correct
      setShowHint(true);
    }
  };

  const nextRiddle = () => {
    if (currentRiddle < riddles.length - 1) {
      setCurrentRiddle(currentRiddle + 1);
      setShowReward(false);
      setUserAnswer("");
      setShowHint(false);
    } else {
      setCompleted(true);
      onComplete();
    }
  };

  if (completed) {
    return (
      <Card className="romantic-shadow border-primary/20">
        <CardContent className="p-8 text-center">
          <Gift className="text-emerald-400 mx-auto mb-6 animate-pulse-soft" size={64} />
          <h2 className="text-3xl font-script text-primary mb-4">Riddles Conquered!</h2>
          <p className="text-xl mb-4">
            You solved all {riddles.length} riddles with your brilliant mind!
          </p>
          <p className="text-muted-foreground mb-6">
            Your intelligence and intuition never cease to amaze me. 🧠✨
          </p>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-primary font-medium">
              "You're not just beautiful on the outside, but brilliant on the inside too." 💖
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const riddle = riddles[currentRiddle];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="flex justify-center gap-2 mb-4">
          {riddles.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                solvedRiddles.includes(index) ? "bg-emerald-500" :
                index === currentRiddle ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground">
          Riddle {currentRiddle + 1} of {riddles.length}
        </p>
      </div>

      <Card className="romantic-shadow border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-primary">
            Solve the Riddle
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!showReward ? (
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-lg p-6">
                <p className="text-lg text-center text-foreground italic">
                  "{riddle.question}"
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Enter your answer..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  className="text-center text-lg"
                />

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={handleSubmit}
                    disabled={!userAnswer.trim()}
                    className="romantic-shadow hover:glow-shadow"
                  >
                    Submit Answer
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setShowHint(true)}
                  >
                    Need a Hint?
                  </Button>
                </div>

                {showHint && (
                  <div className="bg-accent/10 rounded-lg p-4 animate-fade-in">
                    <p className="text-accent font-medium mb-2">💡 Hint:</p>
                    <p className="text-muted-foreground">{riddle.hint}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-fade-in">
              <CheckCircle className="text-emerald-500 mx-auto" size={64} />
              <h3 className="text-2xl font-script text-primary">Correct!</h3>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <p className="text-emerald-700">{riddle.reward}</p>
              </div>
              <Button
                onClick={nextRiddle}
                className="romantic-shadow hover:glow-shadow"
              >
                {currentRiddle < riddles.length - 1 ? "Next Riddle" : "Complete Challenge"}
                <Heart className="ml-2" size={20} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RiddleChallenge;