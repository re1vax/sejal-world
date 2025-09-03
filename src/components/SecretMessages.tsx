import { useState } from "react";
import { Heart, Star, Sparkles, Gift } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// import your assets
import message3Audio1 from "@/assets/message3-1.mp3";   // audio file
import message3Audio2 from "@/assets/message3-2.mp3";   // audio file
import message3Audio3 from "@/assets/message3-3.mp3";   // audio file
import message3Audio4 from "@/assets/message3-4.mp3";   // audio file
import message3Audio5 from "@/assets/message3-5.mp3";   // audio file
import confessionImg from "@/assets/me.jpeg"; // image for message 6
import responseImg from "@/assets/sej.jpeg";     // image for message 7

const secretMessages = [
  { 
    id: 1, 
    message: `If I found the greatest ice-cream, you'd have that ice-cream too
If I had seen a great new film, I'd watch it two times through
If I found a scenic spot, you'd also see that view
'cause anything I find that's great,
I'll always share with you`, 
    icon: Heart, 
    position: { top: "20%", left: "15%" } 
  },
  { id: 2, message: `19th April 2025
    First Kiss`, icon: Star, position: { top: "30%", right: "20%" } },
  { id: 3, message: "I tried 😭", icon: Sparkles, position: { top: "60%", left: "25%" } }, 
  { id: 4, message: "Remember this?", icon: Gift, position: { top: "40%", right: "15%" } },
  { id: 5, message: "Here's another for you, hope you found the other graph before this one :>", icon: Heart, position: { top: "70%", left: "40%" } },
  { id: 6, message: "My Confession", icon: Star, position: { top: "25%", left: "60%" } },
  { id: 7, message: "Your Response to my Confession", icon: Sparkles, position: { top: "80%", right: "30%" } },
];

const SecretMessages = () => {
  const [discoveredMessages, setDiscoveredMessages] = useState<number[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<typeof secretMessages[0] | null>(null);

  const handleMessageClick = (message: typeof secretMessages[0]) => {
    if (!discoveredMessages.includes(message.id)) {
      setDiscoveredMessages(prev => [...prev, message.id]);
    }
    setSelectedMessage(message);
  };

  return (
    <>
      {/* Secret Message Icons scattered across the page */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {secretMessages.map((message) => {
          const Icon = message.icon;
          const isDiscovered = discoveredMessages.includes(message.id);
          
          return (
            <div
              key={message.id}
              className="absolute pointer-events-auto"
              style={message.position}
            >
              <Button
                variant="ghost"
                size="icon"
                className={`
                  w-8 h-8 rounded-full transition-all duration-500 hover:scale-110 opacity-20 hover:opacity-100
                  ${isDiscovered 
                    ? 'bg-primary/10 border border-primary/30 text-primary opacity-60' 
                    : 'bg-accent/5 border border-accent/20 text-accent hover:bg-accent/10'
                  }
                  hover:glow-shadow
                `}
                onClick={() => handleMessageClick(message)}
              >
                <Icon 
                  size={14} 
                  className={`${isDiscovered ? 'animate-pulse' : ''}`}
                />
              </Button>
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="bg-background/90 backdrop-blur-md rounded-lg px-4 py-2 border border-primary/20">
          <p className="text-sm text-muted-foreground">
            Secret Messages: {discoveredMessages.length}/{secretMessages.length}
          </p>
          <div className="w-32 h-2 bg-muted rounded-full mt-1">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
              style={{ width: `${(discoveredMessages.length / secretMessages.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Message Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent
          className={`bg-background/95 backdrop-blur-md border-primary/30 ${
            selectedMessage?.id === 4 ? "p-6" : ""
          }`}
          style={
            selectedMessage?.id === 4
              ? {
                  maxWidth: "900px",
                  width: "96vw",
                  minHeight: "480px",
                  borderRadius: "1.2rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }
            : selectedMessage?.id === 1
            ? {
                maxWidth: "650px",
                width: "90vw",
                borderRadius: "1.2rem",
                padding: "1.5rem",
              }
            : undefined
          }
        >
          <DialogHeader>
            <DialogTitle className="font-script text-2xl text-primary flex items-center gap-2">
              {selectedMessage && <selectedMessage.icon className="animate-pulse" size={24} />}
              Secret Message
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 w-full flex flex-col items-center">
            <p className="text-lg text-foreground leading-relaxed font-medium text-center mb-4 whitespace-pre-line">
              {selectedMessage?.message}
            </p>

            {/* Message 3 → Multiple Audios */}
            {selectedMessage?.id === 3 && (
              <div className="flex flex-col gap-3 w-full">
                {[message3Audio1, message3Audio2, message3Audio3, message3Audio4, message3Audio5].map(
                  (audioSrc, idx) => (
                    <audio
                      key={idx}
                      src={audioSrc}
                      controls
                      className="rounded-lg w-full"
                    />
                  )
                )}
              </div>
            )}

            {/* Message 4 → Desmos Graph */}
            {selectedMessage?.id === 4 && (
              <div className="w-full flex justify-center mb-4">
                <iframe
                  src="https://www.desmos.com/calculator/c2ctorpskm"
                  title="Desmos Secret Graph"
                  width="100%"
                  height="400"
                  style={{
                    border: "none",
                    borderRadius: "1.2rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
                    maxWidth: "820px",
                    width: "100%",
                    background: "transparent",
                  }}
                  allowFullScreen
                />
              </div>
            )}

            {/* Message 5 → Another Desmos Graph */}
            {selectedMessage?.id === 5 && (
              <div className="w-full flex justify-center mb-4">
                <iframe
                  src="https://www.desmos.com/calculator/ed7b6a942c"
                  title="Desmos Secret Graph 2"
                  width="100%"
                  height="400"
                  style={{
                    border: "none",
                    borderRadius: "1.2rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
                    maxWidth: "820px",
                    width: "100%",
                    background: "transparent",
                  }}
                  allowFullScreen
                />
              </div>
            )}

            {/* Message 6 → Confession Image */}
            {selectedMessage?.id === 6 && (
              <div className="max-h-[60vh] w-full overflow-y-auto flex justify-center">
                <img 
                  src={confessionImg} 
                  alt="Confession" 
                  className="max-h-[55vh] max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Message 7 → Response Image */}
            {selectedMessage?.id === 7 && (
              <div className="max-h-[60vh] w-full overflow-y-auto flex justify-center">
                <img 
                  src={responseImg} 
                  alt="Response" 
                  className="max-h-[55vh] max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>
            )}

            {discoveredMessages.includes(selectedMessage?.id || 0) && (
              <p className="text-sm text-accent mt-3 italic text-center">
                ✨ Message discovered! ✨
              </p>
            )}
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecretMessages;
