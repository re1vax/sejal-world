import { Card, CardContent } from "@/components/ui/card";
import coupleImage from "@/assets/couple-silhouette.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";

const MemoriesSection = () => {
  const memories = [
    {
      title: "Our First Date",
      description: "The day my life changed forever. Your smile lit up the entire café.",
      date: "March 15, 2023",
      image: coupleImage,
    },
    {
      title: "Your Special Day",
      description: "Celebrating another year of your beautiful existence and all the joy you bring.",
      date: "Today",
      image: birthdayCake,
    },
    {
      title: "Every Day Together",
      description: "From morning coffee to goodnight kisses, every moment is precious.",
      date: "Always",
      image: coupleImage,
    },
  ];

  return (
    <section className="py-20 px-4 soft-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment we've shared has been a treasure, creating a tapestry of love and laughter.
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