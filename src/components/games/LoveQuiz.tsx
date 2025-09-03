import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, XCircle } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface LoveQuizProps {
  onComplete: (score?: number) => void;
}

const LoveQuiz = ({ onComplete }: LoveQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions: Question[] = [
    {
      question: "What was the first movie we watched together, just the two of us?",
      options: ["The Other Boleyn Girl", "The King", "Laila Majnu", "Smile"],
      correct: 0,
      explanation: "It was The Other Boleyn Girl, you said you saw a reel and I wanted to watch it with you!"
    },
    {
      question: "What’s my favorite nickname for you?",
      options: ["Khaleesi", "Sejo", "Sage", "Snacc"],
      correct: 1,
      explanation: "Of course it's Sejo but honestly, all of them are just on point."
    },
    {
      question: "When did we have our first kiss?",
      options: ["18th April 2025", "21st April 2025", "5th May 2025", "19th April 2025"],
      correct: 3,
      explanation: "Nervous slow approach, looking into your eyes and then your lips and I met them with mine. Felt absolutely magical to me"
    },
    {
      question: "What's our special song?",
      options: ["Perfect by Ed Sheeran", "Jo Tum Mere Ho by Anuv Jain", "I Like You so Much, You'll Know It by AVIWKILA", "Maand by Bayan"],
      correct: 2,
      explanation: "You introduced me to this song and I couldn't stop listening. It always reminds me of you. (psst there is a secret message related to this ~)"
    },
    {
      question: "When did you give a proper reply to my confession?",
      options: ["26th February 2025", "27th February 2025", "28th February 2025", "1st March 2025"],
      correct: 2,
      explanation: "You did say you liked me back on the morning of 27th but you wanted to do it properly and that text came on the 28th around 8PM (psst there is a secret message related to this too~)"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
      // Calculate final score including the current question
      const finalScore = (selectedAnswer === questions[currentQuestion].correct ? score + 1 : score);
      onComplete(finalScore * 300); // 200 points per correct answer
    }
  };

  if (showResult) {
    return (
      <Card className="romantic-shadow border-primary/20">
        <CardContent className="p-8 text-center">
          <Heart className="text-primary mx-auto mb-6 animate-pulse-soft" size={64} />
          <h2 className="text-3xl font-script text-primary mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}!
          </p>
          <p className="text-muted-foreground mb-6">
            {score === questions.length 
              ? "Perfect score! You know our story by heart" 
              : score >= questions.length / 2
              ? "Great job! You remember much more than you thought you would hehe"
              : "Every moment with you is worth remembering. And there will be many many more!"}
          </p>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-primary font-medium">
              "Thanks for existing Sejo, Thank you for being you"
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="flex justify-center gap-2 mb-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index <= currentQuestion ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <Card className="romantic-shadow border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showCorrect = answered && isCorrect;
              const showIncorrect = answered && isSelected && !isCorrect;

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full p-4 h-auto text-left justify-start transition-all ${
                    showCorrect ? "bg-emerald-500/20 border-emerald-500 text-emerald-700" :
                    showIncorrect ? "bg-red-500/20 border-red-500 text-red-700" :
                    isSelected ? "bg-primary/20 border-primary" : ""
                  }`}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle size={20} />}
                    {showIncorrect && <XCircle size={20} />}
                  </div>
                </Button>
              );
            })}
          </div>

          {answered && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg animate-fade-in">
              <p className="text-primary font-medium mb-2">
                {selectedAnswer === question.correct ? "Correct! 🎉" : "Not quite, but..."}
              </p>
              <p className="text-muted-foreground">{question.explanation}</p>
              <Button
                onClick={nextQuestion}
                className="mt-4 romantic-shadow hover:glow-shadow"
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LoveQuiz;