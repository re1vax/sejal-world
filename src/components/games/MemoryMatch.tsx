import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, Sparkles, Gift, Music, Camera, Sun, Moon } from "lucide-react";

interface MemoryMatchProps {
  onComplete: (score?: number) => void;
}

const MemoryMatch = ({ onComplete }: MemoryMatchProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Card pairs with romantic icons and messages
  const cardPairs = [
    { icon: Heart, color: "text-red-400" },
    { icon: Star, color: "text-yellow-400" },
    { icon: Sparkles, color: "text-purple-400" },
    { icon: Gift, color: "text-green-400" },
    { icon: Music, color: "text-blue-400" },
    { icon: Camera, color: "text-pink-400" },
    { icon: Sun, color: "text-orange-400" },
    { icon: Moon, color: "text-indigo-400" },
  ];

  // Shuffle and duplicate cards
  const [cards] = useState(() => {
    const doubled = [...cardPairs, ...cardPairs];
    return doubled.sort(() => Math.random() - 0.5).map((card, index) => ({
      ...card,
      id: index,
      pairId: cardPairs.findIndex(pair => pair.icon === card.icon)
    }));
  });

  // Memoize onComplete to prevent unnecessary re-renders
  const memoizedOnComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    if (matchedPairs.length === cardPairs.length && !completed) {
      setCompleted(true);
      // Score based on efficiency (fewer moves = higher score)
      const maxScore = 2000;
      const efficiency = Math.max(0, maxScore - moves * 50);
      memoizedOnComplete(efficiency);
    }
  }, [matchedPairs.length, cardPairs.length, completed, moves, memoizedOnComplete]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards[first];
      const secondCard = cards[second];

      // Increment moves immediately when two cards are flipped
      setMoves(prev => prev + 1);

      if (firstCard.pairId === secondCard.pairId) {
        // Match found
        setTimeout(() => {
          setMatchedPairs(prev => [...prev, firstCard.pairId]);
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards.length, cards]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || 
        matchedPairs.includes(cards[index].pairId)) {
      return;
    }
    setFlippedCards([...flippedCards, index]);
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index) || matchedPairs.includes(cards[index].pairId);
  };

  const isCardMatched = (index: number) => {
    return matchedPairs.includes(cards[index].pairId);
  };

  if (completed) {
    return (
      <Card className="romantic-shadow border-primary/20">
        <CardContent className="p-8 text-center">
          <Sparkles className="text-purple-400 mx-auto mb-6 animate-pulse-soft" size={64} />
          <h2 className="text-3xl font-script text-primary mb-4">Perfect Match!</h2>
          <p className="text-xl mb-4">
            You completed the memory game in {moves} moves!
          </p>
          <p className="text-muted-foreground mb-6">
            Just like how perfectly we match together in real life! ❤️
          </p>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-primary font-medium">
              "We are two hearts that beat as one." 💖
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="romantic-shadow border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-primary">
            Memory Match Game
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Find the matching pairs! Click on cards to flip them over.
          </p>
          <div className="text-center">
            <span className="text-primary font-medium">Moves: {moves}</span>
            <span className="mx-4">•</span>
            <span className="text-primary font-medium">
              Pairs: {matchedPairs.length} / {cardPairs.length}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const flipped = isCardFlipped(index);
              const matched = isCardMatched(index);
              
              return (
                <div
                  key={card.id}
                  className={`aspect-square cursor-pointer transition-all duration-500 ${
                    flipped ? "rotate-y-180" : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="relative w-full h-full preserve-3d">
                    {/* Card Back */}
                    <div className={`absolute inset-0 backface-hidden rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${
                      !flipped ? "block" : "hidden"
                    }`}>
                      <Heart className="text-primary/50" size={24} />
                    </div>
                    
                    {/* Card Front */}
                    <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-lg border-2 ${
                      matched ? "border-emerald-500 bg-emerald-500/20" : "border-primary/30 bg-background"
                    } flex flex-col items-center justify-center p-2 ${
                      flipped ? "block" : "hidden"
                    }`}>
                      <Icon className={`${card.color} mb-1`} size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemoryMatch;