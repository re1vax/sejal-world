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
  onComplete: () => void;
}

const LoveQuiz = ({ onComplete }: LoveQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions: Question[] = [
    {
      question: "What was the first movie we watched together?",
      options: ["The Notebook", "Titanic", "La La Land", "The Princess Bride"],
      correct: 0,
      explanation: "It was The Notebook, and you cried at the ending just like I did! ❤️"
    },
    {
      question: "What's my favorite thing about you?",
      options: ["Your smile", "Your laugh", "Your kindness", "Everything"],
      correct: 3,
      explanation: "It's everything about you! I couldn't pick just one thing because you're perfect in every way."
    },
    {
      question: "Where did we have our first kiss?",
      options: ["The park", "My car", "The coffee shop", "Under the stars"],
      correct: 3,
      explanation: "Under the stars on that perfect summer night. I'll never forget that magical moment."
    },
    {
      question: "What's our special song?",
      options: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Thinking Out Loud", "Make You Feel My Love"],
      correct: 1,
      explanation: "All of Me by John Legend - because you really do have all of me, forever and always."
    },
    {
      question: "What do I love most about our relationship?",
      options: ["How we laugh together", "How comfortable we are", "How we support each other", "All of the above"],
      correct: 3,
      explanation: "All of the above! Our relationship is built on laughter, comfort, support, and so much love."
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
      onComplete();
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
              ? "Perfect score! You know our love story by heart ❤️" 
              : score >= questions.length / 2
              ? "Great job! You remember our beautiful moments together 💕"
              : "Every moment we create is worth remembering. Let's make more memories! 🥰"}
          </p>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-primary font-medium">
              "Thank you for knowing me so well and loving me so completely." 💖
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