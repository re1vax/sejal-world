import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface DinoRunProps {
  onComplete: (score: number) => void;
}

interface Obstacle {
  id: number;
  x: number;
  type: 'cactus' | 'bird';
}

const DinoRun: React.FC<DinoRunProps> = ({ onComplete }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [dinoY, setDinoY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [gameSpeed, setGameSpeed] = useState(5);
  
  const gameLoopRef = useRef<number>();
  const obstacleIdRef = useRef(0);
  const groundY = 150;
  const dinoX = 50;
  const dinoSize = 30;
  const obstacleWidth = 20;
  const obstacleHeight = 30;

  const jump = useCallback(() => {
    if (!isJumping && !gameOver) {
      setIsJumping(true);
      setDinoY(60);
      setTimeout(() => {
        setDinoY(0);
        setIsJumping(false);
      }, 600);
    }
  }, [isJumping, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setDinoY(0);
    setIsJumping(false);
    setGameSpeed(5);
  };

  const endGame = () => {
    setGameOver(true);
    setGameStarted(false);
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
    onComplete(score);
  };

  const checkCollision = useCallback(() => {
    obstacles.forEach(obstacle => {
      if (
        obstacle.x < dinoX + dinoSize &&
        obstacle.x + obstacleWidth > dinoX &&
        dinoY < obstacleHeight
      ) {
        endGame();
      }
    });
  }, [obstacles, dinoY, score]);

  const gameLoop = useCallback(() => {
    if (!gameOver && gameStarted) {
      // Update score
      setScore(prev => prev + 1);
      
      // Increase speed gradually
      setGameSpeed(prev => prev + 0.001);
      
      // Move obstacles
      setObstacles(prev => {
        const updated = prev
          .map(obstacle => ({ ...obstacle, x: obstacle.x - gameSpeed }))
          .filter(obstacle => obstacle.x > -obstacleWidth);
        
        // Add new obstacles randomly
        if (Math.random() < 0.01 && updated.length < 3) {
          updated.push({
            id: obstacleIdRef.current++,
            x: 400,
            type: Math.random() > 0.7 ? 'bird' : 'cactus'
          });
        }
        
        return updated;
      });
      
      checkCollision();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  }, [gameOver, gameStarted, gameSpeed, checkCollision]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, gameLoop]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!gameStarted) {
          startGame();
        } else {
          jump();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [jump, gameStarted]);

  return (
    <Card className="max-w-2xl mx-auto romantic-shadow border-primary/20">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-script text-primary mb-2">Dino Love Run</h3>
          <p className="text-muted-foreground mb-4">
            Help our dino wannabee collect hearts! Press SPACE or ↑ to jump.
          </p>
          <div className="text-lg font-medium text-primary">Score: {score}</div>
        </div>

        <div 
          className="relative w-full h-48 border-2 border-primary/20 rounded-lg overflow-hidden cursor-pointer"
          style={{ backgroundColor: 'hsl(var(--background))' }}
          onClick={!gameStarted ? startGame : jump}
        >
          {/* Ground */}
          <div 
            className="absolute bottom-0 w-full h-2 bg-primary/30"
            style={{ bottom: '20px' }}
          />
          
          {/* Dino */}
          <div
            className="absolute transition-all duration-150 ease-out"
            style={{
              left: `${dinoX}px`,
              bottom: `${20 + dinoY}px`,
              width: `${dinoSize}px`,
              height: `${dinoSize}px`,
            }}
          >
            <div className="w-full h-full bg-primary rounded-lg flex items-center justify-center text-xl">
              💕
            </div>
          </div>

          {/* Obstacles */}
          {obstacles.map(obstacle => (
            <div
              key={obstacle.id}
              className="absolute"
              style={{
                left: `${obstacle.x}px`,
                bottom: obstacle.type === 'bird' ? '60px' : '20px',
                width: `${obstacleWidth}px`,
                height: `${obstacleHeight}px`,
              }}
            >
              <div className="w-full h-full bg-destructive rounded flex items-center justify-center text-lg">
                {obstacle.type === 'bird' ? '🖤' : '💔'}
              </div>
            </div>
          ))}

          {/* Game Over / Start Screen */}
          {(!gameStarted || gameOver) && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <div className="text-center">
                {gameOver ? (
                  <>
                    <h4 className="text-xl font-script text-primary mb-2">Game Over!</h4>
                    <p className="text-muted-foreground mb-4">Final Score: {score}</p>
                    <Button onClick={startGame}>Play Again</Button>
                  </>
                ) : (
                  <>
                    <h4 className="text-xl font-script text-primary mb-2">Ready to Run?</h4>
                    <p className="text-muted-foreground mb-4">Click or press SPACE to start!</p>
                    <Button onClick={startGame}>Start Game</Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Avoid the broken hearts! Collect points to unlock the surprise.
          <br />
          Target: 9000 points for location reveal
        </div>
      </CardContent>
    </Card>
  );
};

export default DinoRun;