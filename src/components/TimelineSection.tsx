import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Star, Gift } from "lucide-react";

const TimelineSection = () => {
  const milestones = [
    {
      icon: Heart,
      title: "The Day We Met",
      date: "February 14, 2023",
      description: "The universe conspired to bring us together on the most romantic day of the year.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Our First Adventure",
      date: "April 22, 2023",
      description: "That weekend getaway where we laughed until our stomachs hurt and fell even deeper in love.",
      color: "text-accent"
    },
    {
      icon: Gift,
      title: "Moving In Together",
      date: "September 1, 2023",
      description: "Creating our little nest, building a home filled with love, laughter, and countless memories.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Your Birthday",
      date: "Today",
      description: "Celebrating the most wonderful person and looking forward to all the beautiful moments ahead.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 romantic-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-primary-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Every milestone in our journey together has been a blessing, creating the beautiful story that is uniquely ours.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-primary-foreground/30" />
          
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
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-foreground rounded-full border-4 border-primary z-10" />
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-primary-foreground/95 backdrop-blur-sm border-primary-foreground/20 soft-shadow hover:romantic-shadow transition-all duration-300">
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
                        
                        <p className="text-foreground/80 leading-relaxed">
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