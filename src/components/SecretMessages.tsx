import { useState } from "react";
import { Heart, Star, Sparkles, Gift } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const secretMessages = [
  { id: 1, message: "You make my heart skip a beat every single day 💕", icon: Heart, position: { top: "20%", left: "15%" } },
  { id: 2, message: "Remember when you laughed so hard you snorted? Still the cutest thing ever! 😂", icon: Star, position: { top: "30%", right: "20%" } },
  { id: 3, message: "Your smile is my favorite notification ✨", icon: Sparkles, position: { top: "60%", left: "25%" } },
  { id: 4, message: "I love how you steal my hoodies and look better in them than I do 👕", icon: Gift, position: { top: "40%", right: "15%" } },
  { id: 5, message: "You're the reason I believe in magic 🌟", icon: Heart, position: { top: "70%", left: "40%" } },
  { id: 6, message: "That time you tried to cook and almost burned down the kitchen? Worth it for your confused face! 🔥", icon: Star, position: { top: "25%", left: "60%" } },
  { id: 7, message: "You're my favorite hello and hardest goodbye 💫", icon: Sparkles, position: { top: "80%", right: "30%" } },
  { id: 8, message: "I love how you sing in the shower thinking nobody can hear you 🚿", icon: Gift, position: { top: "15%", right: "40%" } },
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
                  w-12 h-12 rounded-full transition-all duration-500 hover:scale-110
                  ${isDiscovered 
                    ? 'bg-primary/20 border-2 border-primary/50 text-primary' 
                    : 'bg-accent/10 border-2 border-accent/30 text-accent hover:bg-accent/20'
                  }
                  romantic-shadow hover:glow-shadow animate-pulse-soft
                `}
                onClick={() => handleMessageClick(message)}
              >
                <Icon 
                  size={20} 
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
        <DialogContent className="bg-background/95 backdrop-blur-md border-primary/30">
          <DialogHeader>
            <DialogTitle className="font-script text-2xl text-primary flex items-center gap-2">
              {selectedMessage && <selectedMessage.icon className="animate-pulse" size={24} />}
              Secret Message
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-lg text-foreground leading-relaxed font-medium">
              {selectedMessage?.message}
            </p>
            {discoveredMessages.includes(selectedMessage?.id || 0) && (
              <p className="text-sm text-accent mt-3 italic">
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