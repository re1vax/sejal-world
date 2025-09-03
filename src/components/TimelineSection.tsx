import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Star, Gift, Users, Shell, Sparkles, Infinity, Clover, Cake } from "lucide-react";

const TimelineSection = () => {
  const milestones = [
    {
      icon: Star,
      title: "The Day We Met",
      date: "May 24, 2024",
      description: "A random game of bobble league changed everything for me - for us. Guess I'll have to thank Ankit for that huh? or maybe Nandini? Urvashi? Aniket? Or maybe the universe conspired to bring us together",
      color: "text-romantic-gold"
    },
    {
      icon: Users,
      title: "Among Us Whatsapp Group",
      date: "July 25, 2024",
      description: "The sudden whatsapp group invitation to play among us with the gang and that fine day I randomly ended up with your number",
      color: "text-romantic-coral"
    },
    {
      icon: Shell,
      title: "I Fell in love with Naruto - Again",
      date: "August 28, 2024",
      description: "Because it got me closer to you! It was the first time we saw something together - just the two of us. You don't even know how afraid I was to breath in my mic 😂",
      color: "text-romantic-beige"
    },
    {
      icon: Gift,
      title: "Your 21st Birthday!",
      date: "September 4, 2024",
      description: "I am glad I was part of your 21st :D\nIt was around this time that I started falling for you!",
      color: "text-romantic-black"
    },
    {
      icon: Sparkles,
      title: "Glimmer of hope",
      date: "December 28, 2024",
      description: "That early morning conversation over text where you complimented me 😩\nI can never forget that one text - that was the highlight of my andaman trip - I distinctly remember the hotel room, the bed I was on, the way I lay diagonally - motionless, speechless - after your text 😖\nIt gave me the courage to pursure my feelings",
      color: "text-romantic-gold"
    },
    {
      icon: Infinity,
      title: "Stiching the red strings together?",
      date: "February 2, 2025",
      description: "I realized you really cared about me. An unavoidable visit to \"my relatives\" got me closer than ever to you. I took so much of your time and I selfishly enjoyed every moment of it. You taught me how to love again - how to really, truly love.",
      color: "text-romantic-pink"
    },
    {
      icon: Clover,
      title: "We met",
      date: "February 23, 2025",
      description: "I finally got to see you, to meet you, to talk to you - and I spectacularly failed at it 😭\nYou were gorgeous that day, so much more real and beautiful than your photos and boy was I not prepared. I was so nervous my legs were shaking and I could barely speak. All I could muster was a \"Hey\" when I joined the group. Oh how I wish I could go back to that day and talk to you more ;-;",
      color: "text-romantic-blue"
    },
    {
      icon: Heart,
      title: "Will you be mine?",
      date: "February 27, 2025",
      description: "You said yes after grilling me for over 3 hours 😭\n3 hours of my heart trying to break out of my chest",
      color: "text-romantic-pink"
    },
    {
      icon: Calendar,
      title: "First Date!",
      date: "April 1, 2025",
      description: "It finally happened!!! A month of long distance restlessness and I finally got to spend a good few hours with you. The best hours of my life which went by way too quickly",
      color: "text-romantic-pink"
    },
    {
      icon: Cake,
      title: "Happy Birthday Sejo!!!",
      date: "Today - September 4, 2025",
      description: "22 now yayyyyyy!!! Cheers to the most beautiful person I know 🍻\nAlways stay the happiest and healthiest Sejal - I pray for this and to be by your side every birthday",
      color: "text-romantic-gold"
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            From barely talking to talking all day
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ever wonder how you ended up with a dumb potato for a boyfriend? (The luckiest dumb potato though :D)
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-primary/30" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center animate-fade-in ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-card/95 backdrop-blur-sm border-border soft-shadow hover:romantic-shadow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className={milestone.color} size={24} />
                          <span className="text-sm font-medium text-accent">
                            {milestone.date}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-3 font-script">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;