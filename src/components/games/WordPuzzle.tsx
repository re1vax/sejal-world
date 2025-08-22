import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

interface WordPuzzleProps {
  onComplete: (score?: number) => void;
}

const WordPuzzle = ({ onComplete }: WordPuzzleProps) => {
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Words hidden in the puzzle (horizontal, vertical, diagonal)
  const wordsToFind = [
    "LOVE", "HEART", "KISS", "HUG", "SMILE", "DREAM", "FOREVER", "BEAUTIFUL"
  ];

  // 12x12 grid with hidden words
  const grid = [
    "LOVETIMEDREA",
    "HEARTQWERTYU",
    "ASDFGHKISSQW",
    "ZXCVBNMASDFG",
    "SMILEQWERTYU",
    "ASDFGHUJKLZX",
    "HUGQWERTYUIO",
    "ASDFGHJKLQWE",
    "FOREVERTYUIO",
    "ASDFGHJKLZXC",
    "BEAUTIFULQWE",
    "ZXCVBNMASDFG"
  ];

  useEffect(() => {
    if (foundWords.length === wordsToFind.length && !completed) {
      setCompleted(true);
      onComplete(foundWords.length * 15); // 15 points per word found
    }
  }, [foundWords, completed, onComplete]);

  const handleCellClick = (index: number) => {
    if (!isSelecting) {
      setSelectedCells([index]);
      setIsSelecting(true);
    } else {
      const newSelection = [...selectedCells, index];
      setSelectedCells(newSelection);
      checkForWord(newSelection);
    }
  };

  const checkForWord = (selection: number[]) => {
    // Convert indices to coordinates
    const coords = selection.map(index => ({
      row: Math.floor(index / 12),
      col: index % 12
    }));

    // Get the word from selection
    const word = coords.map(coord => grid[coord.row][coord.col]).join("");
    const reverseWord = word.split("").reverse().join("");

    // Check if it's a valid word
    if (wordsToFind.includes(word) && !foundWords.includes(word)) {
      setFoundWords([...foundWords, word]);
      setSelectedCells([]);
      setIsSelecting(false);
    } else if (wordsToFind.includes(reverseWord) && !foundWords.includes(reverseWord)) {
      setFoundWords([...foundWords, reverseWord]);
      setSelectedCells([]);
      setIsSelecting(false);
    } else if (selection.length > 10) {
      // Reset if selection gets too long
      setSelectedCells([]);
      setIsSelecting(false);
    }
  };

  const resetSelection = () => {
    setSelectedCells([]);
    setIsSelecting(false);
  };

  if (completed) {
    return (
      <Card className="romantic-shadow border-primary/20">
        <CardContent className="p-8 text-center">
          <Star className="text-amber-400 mx-auto mb-6 animate-pulse-soft" size={64} />
          <h2 className="text-3xl font-script text-primary mb-4">Puzzle Solved!</h2>
          <p className="text-xl mb-4">
            You found all {wordsToFind.length} romantic words!
          </p>
          <p className="text-muted-foreground mb-6">
            Every word you found represents a piece of our beautiful love story. ❤️
          </p>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-primary font-medium">
              "In a world full of words, you are my favorite story." 💕
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
            Find the Hidden Words
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Click and drag to select words. Find all {wordsToFind.length} romantic words!
          </p>
        </CardHeader>
        <CardContent>
          {/* Words to find */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Words to Find:</h3>
            <div className="flex flex-wrap gap-2">
              {wordsToFind.map((word) => (
                <span
                  key={word}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    foundWords.includes(word)
                      ? "bg-emerald-500/20 text-emerald-700 line-through"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-1 max-w-2xl mx-auto mb-4">
            {grid.map((row, rowIndex) =>
              row.split("").map((letter, colIndex) => {
                const index = rowIndex * 12 + colIndex;
                const isSelected = selectedCells.includes(index);
                
                return (
                  <button
                    key={index}
                    className={`w-8 h-8 text-sm font-mono border transition-all hover:scale-110 ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:bg-primary/10 border-primary/20"
                    }`}
                    onClick={() => handleCellClick(index)}
                  >
                    {letter}
                  </button>
                );
              })
            )}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetSelection}
              disabled={!isSelecting}
            >
              Reset Selection
            </Button>
            <div className="flex items-center gap-2 text-primary">
              <Heart size={20} />
              <span>{foundWords.length} / {wordsToFind.length} found</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordPuzzle;