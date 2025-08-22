import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Trophy, Gift, Sparkles, Zap } from "lucide-react";
import LoveQuiz from "@/components/games/LoveQuiz";
import WordPuzzle from "@/components/games/WordPuzzle";
import MemoryMatch from "@/components/games/MemoryMatch";
import RiddleChallenge from "@/components/games/RiddleChallenge";
import DinoRun from "@/components/games/DinoRun";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  const [gameScores, setGameScores] = useState<{[key: string]: number}>({});

  const games = [
    {
      id: "quiz",
      title: "Love Quiz",
      description: "Test how well you know our beautiful story together",
      icon: Heart,
      color: "text-pink-400",
      component: LoveQuiz,
    },
    {
      id: "word",
      title: "Word Puzzle",
      description: "Find all the romantic words hidden in the puzzle",
      icon: Star,
      color: "text-amber-400",
      component: WordPuzzle,
    },
    {
      id: "memory",
      title: "Memory Match",
      description: "Match the cards to reveal our precious memories",
      icon: Sparkles,
      color: "text-purple-400",
      component: MemoryMatch,
    },
    {
      id: "riddle",
      title: "Riddle Challenge",
      description: "Solve romantic riddles to unlock sweet messages",
      icon: Gift,
      color: "text-emerald-400",
      component: RiddleChallenge,
    },
    {
      id: "dino",
      title: "Dino Love Run",
      description: "Help our romantic dino avoid broken hearts!",
      icon: Zap,
      color: "text-indigo-400",
      component: DinoRun,
    },
  ];

  const handleGameComplete = (gameId: string, score?: number) => {
    if (!completedGames.includes(gameId)) {
      setCompletedGames([...completedGames, gameId]);
    }
    if (score !== undefined) {
      setGameScores(prev => ({ ...prev, [gameId]: Math.max(prev[gameId] || 0, score) }));
    }
  };

  const getTotalScore = () => {
    return Object.values(gameScores).reduce((total, score) => total + score, 0);
  };

  const getRequiredScore = () => 500; // Total score needed to reveal location
  
  const canRevealLocation = () => {
    return getTotalScore() >= getRequiredScore();
  };

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame);
    if (game) {
      const GameComponent = game.component;
      return (
        <div className="min-h-screen pt-20 pb-10 px-4 romantic-gradient">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setSelectedGame(null)}
                className="mb-4"
              >
                ← Back to Games
              </Button>
              <h1 className="font-script text-4xl md:text-5xl text-primary mb-2">
                {game.title}
              </h1>
              <p className="text-muted-foreground">{game.description}</p>
            </div>
            <GameComponent onComplete={(score) => handleGameComplete(game.id, score)} />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 romantic-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Fun Games & Puzzles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's play some romantic games together! Achieve high scores to unlock the secret location.
          </p>
          
          <div className="mt-6 space-y-3">
            {completedGames.length > 0 && (
              <div className="flex items-center justify-center gap-2">
                <Trophy className="text-amber-400" size={24} />
                <span className="text-primary font-medium">
                  {completedGames.length} of {games.length} games completed!
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-center gap-2">
              <Star className="text-accent" size={24} />
              <span className="text-primary font-medium">
                Total Score: {getTotalScore()} / {getRequiredScore()}
              </span>
            </div>
            
            {canRevealLocation() && (
              <div className="animate-pulse-soft">
                <div className="flex items-center justify-center gap-2 text-romantic-gold">
                  <Gift className="animate-bounce" size={24} />
                  <span className="font-medium">
                    Location Unlocked! 🎉
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon;
            const isCompleted = completedGames.includes(game.id);
            
            return (
              <Card 
                key={game.id}
                className="group hover:scale-105 transition-all duration-300 romantic-shadow hover:glow-shadow border-primary/20 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedGame(game.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 relative">
                    <Icon className={`${game.color} group-hover:scale-110 transition-transform`} size={48} />
                    {isCompleted && (
                      <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1">
                        <Trophy className="text-white" size={16} />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-script text-primary">
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-6">
                    {game.description}
                  </p>
                  <Button 
                    className="w-full transition-all hover:scale-105"
                    disabled={isCompleted}
                  >
                    {isCompleted ? "Completed!" : "Play Now"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {canRevealLocation() && (
          <div className="mt-16 text-center animate-fade-in">
            <Card className="max-w-md mx-auto romantic-shadow border-primary/20 bg-gradient-to-br from-romantic-pink/10 to-romantic-coral/10">
              <CardContent className="p-8">
                <Heart className="text-primary mx-auto mb-4 animate-pulse-soft" size={48} />
                <h3 className="text-2xl font-script text-primary mb-4">
                  Amazing Achievement!
                </h3>
                <p className="text-muted-foreground mb-2">
                  You've earned enough points to unlock our secret location! 
                </p>
                <p className="text-romantic-gold font-medium mb-6">
                  Total Score: {getTotalScore()} points! 🌟
                </p>
                <Button 
                  onClick={() => window.location.href = "/location"}
                  className="romantic-shadow hover:glow-shadow bg-gradient-to-r from-romantic-pink to-romantic-coral hover:from-romantic-coral hover:to-romantic-pink"
                >
                  <Gift className="mr-2" size={20} />
                  Discover Our Secret Place
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;