import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-accent animate-pulse-soft" size={24} />
            <h2 className="font-script text-5xl md:text-6xl text-primary">
              A Letter to You
            </h2>
            <Sparkles className="text-accent animate-pulse-soft" size={24} />
          </div>
        </div>
        
        <Card className="romantic-shadow hover:glow-shadow transition-all duration-500 border-primary/20 animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-primary font-medium">Sejal,</span>
              </div>
              
              <p className="text-foreground/90">
                I have so much to say, so much to tell you that I don't even know where to begin. 
                I want this to be perfect, I want this to convey all my feelings to you but apparently that's just not possible in just one letter or two (trust me I tried ;-;)
              </p>
              
              <p className="text-foreground/90">
                Whenever I try to pen my feelings for you down, I always end up feeling overwhelmed. 
                There is always so much going on inside my head, so much I wanna tell you, that I just can't choose one to start with...
              </p>
              
              <p className="text-foreground/90">
                But I'd be a fool to not learn after you taught me the importance of imperfections and made me realize how bland life would be without them. 
                To find meaning and beauty in imperfections is what life is about, and I learned this from you. To love is to understand that we are flawed, to love is to change and grow together! 
                This is the basis of my definition of love, which you helped me derive - which we derived together - and I wish to live by this, always.
              </p>
              
              <p className="text-foreground/90">
                So, I am going to just start with one incomplete thought, imperfect but true - you are the most beautiful woman in existence. 
                You are beautiful, absolutely beautiful. Everything about you is beautiful. Your personality, your face, your voice, the things you do, the way you do them, the way you care, the way you pray, the way you respect, the way you trust, the way you love. 
                To me you are perfect. Perfect with all the little imperfections. You are everything I ever dreamed of and so so much more. I can't help but imagine a future with you. 
                Oh, what I'd give to be happy and at peace with you. Oh, what I'd give to have the liberty of waking up next to you, caring for you, cooking for you, bantering with you, playing with you. 
                Oh, what I'd give to have the chance - the chance to love you every day. 
              </p>

              <p className="text-foreground/90">
                Your voice heals me, however down I am. Your smile brightens up the world, however gloomy it gets. 
                Your face is my guiding light, in the darkest of days. Your touch makes me feel alive. 
                Your hug makes me feel like I belong. The thought of keeps me going, however tough it gets. 
                You make me feel loved. You complete me. And I couldn't ask for anyone else to go through life by my side. 
                I can't imagine anyone else I can call my partner. I can't dream of a better girlfriend.
              </p>

              <p className="text-foreground/90">
                I know I can be a handful sometimes, maybe most times. I know I can be really annoying. 
                I might be rude to you unknowingly or I might even hurt you even though I never ever ever want to. 
                I know our relationship isn't all sunshine and rainbows and it gets hard sometimes, very much so. 
                I know you can't help but be reminded of all the good people and moments in your life and how you can't help but compare me to them sometimes. 
                It is but natural. And I know you have contemplated letting go over working hard to keep us together. 
                But everytime you chose to go with the latter. You chose us over yourself, over everything that was going through your head and I am grateful for that. 
                You are strong Sejal and take makes me fall deeper in love with you every passing day. Nothing is perfect, no relationship is perfect but understanding that and rejecting all the negative thoughts to focus only on the positive ones is strength to me. 
                It's not easy to listen to your inner reason but you always choose to, for me, for us, and that's what makes you, you. I am far from perfect Sejal, I know it and you know it too. 
                Thank you for bearing with me and always supporting me as well hurdle our way through life, together.
              </p>

              <p className="text-foreground/90">
                I promise I'll always be there for you, by your side. I promise I'll always care for you. I promise I'll always worry about you. 
                I promise I'll always support you. I'm far from perfect but I promise I'll be my best self for you, for myself, for us. 
                I promise I will make you happy. I promise you will always be glad that you chose me.
              </p>

              <p className="text-foreground/90">
                I don't believe in God or praying to him but if there is someone all powerful, I beg them for your good health. 
                I pray to them that you won't be hurt. I ask them to make it so that you can always be happy, smiling. 
                I pray, and will continue to do so, not because I believe in them, but because you do - and that's enough for me.
              </p>

              <p className="text-foreground/90">
                I love you Sejal. More than I could ever imagine. More than you can ever imagine. I love you. 
                I love your expressions. I love the way you are around me. I love you falling asleep in my arms. 
                I love you being possessive of me. I love who you are as a person. I love everything that you do. 
                I love everything that you are. I love you, because you are you. 
              </p>

              <p className="text-foreground/90">
                I am so in love with you, Sejal Samankash.
              </p>
              
              <div className="pt-8 border-t border-primary/20">
                <p className="font-script text-2xl text-primary text-center">
                  Happy 22nd Birthday, Beautiful! 
                </p>
                <p className="text-center text-muted-foreground mt-2">
                  Yours truly, always and forever
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoveLetterSection;