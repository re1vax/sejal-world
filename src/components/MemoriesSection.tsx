import { Card, CardContent } from "@/components/ui/card";
import coupleImage from "@/assets/couple-silhouette.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import firstmeet from "@/assets/firstmeet.jpg";
import firsthangout from "@/assets/firsthangout.jpg";
import firstdate from "@/assets/firstdate.jpg";

const MemoriesSection = () => {
  const memories = [
    {
      title: "First Meeting",
      description: "The day I realized photos don't do you justice at all. You were that much more beautiful in person!",
      date: "February 23, 2025",
      image: firstmeet,
    },
    {
      title: "First Proper Hangout With Da Gang",
      description: "PICNIC!!!!",
      date: "February 23, 2025",
      image: firsthangout,
    },
    {
      title: "First Date",
      description: "I will never forget that day, ever. Drop dead gorgeous you. Drop dead nervous me. Loveliest 6 hours of my life!",
      date: "April 1, 2025",
      image: firstdate,
    },
  ];

  return (
    <section id="memories" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            With You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment is beautiful - magical
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 soft-shadow hover:romantic-shadow overflow-hidden animate-fade-in border-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 romantic-gradient opacity-20" />
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-accent font-medium mb-2">
                  {memory.date}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 font-script">
                  {memory.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {memory.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;