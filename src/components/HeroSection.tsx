import { Button } from "@/components/ui/button";
import { Heart, Gamepad2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParticleStyle = (particle: any) => {
    const distance = Math.sqrt(
      Math.pow(particle.x - mousePosition.x, 2) + Math.pow(particle.y - mousePosition.y, 2)
    );
    const repelStrength = Math.max(0, (20 - distance) * 2);
    const angle = Math.atan2(particle.y - mousePosition.y, particle.x - mousePosition.x);
    const newX = particle.x + Math.cos(angle) * repelStrength * 0.3;
    const newY = particle.y + Math.sin(angle) * repelStrength * 0.3;

    return {
      left: `${Math.max(0, Math.min(100, newX))}%`,
      top: `${Math.max(0, Math.min(100, newY))}%`,
      transform: `scale(${1 + repelStrength * 0.02})`,
      transition: 'all 0.3s ease-out',
    };
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Romantic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-primary/30 to-accent/40" />
      
      {/* Cursor-Repelling Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute"
            style={getParticleStyle(particle)}
          >
            <Sparkles 
              className="text-accent/30 animate-pulse-soft" 
              size={particle.size}
              style={{
                filter: 'drop-shadow(0 0 8px hsl(var(--accent) / 0.4))',
                animationDelay: `${particle.id * 0.5}s`,
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Interactive Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-primary/40 hover:text-accent/60 transition-all duration-500 animate-pulse-soft cursor-pointer`}
            size={16 + i * 4}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-primary mb-6 animate-pulse-soft hover:text-accent transition-colors duration-500 cursor-default drop-shadow-lg">
            Happy Birthday
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 hover:text-accent transition-colors duration-300 cursor-default drop-shadow-md">
            My Beautiful Love
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed hover:text-primary-foreground transition-colors duration-300 drop-shadow-sm">
            Today we celebrate the most amazing person in my world. 
            Every moment with you is a gift, and I'm so grateful for your love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="group romantic-shadow hover:glow-shadow hover:scale-105 transition-all duration-300 text-lg px-8 py-4 bg-primary hover:bg-primary/90 border-0"
              onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 group-hover:animate-pulse" size={20} />
              Our Memories
            </Button>
            
            <Link to="/games">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-4 backdrop-blur-sm bg-background/20"
              >
                <Gamepad2 className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                Play Games
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[bounce_3s_ease-in-out_infinite] hover:scale-110 transition-transform duration-300 cursor-pointer" 
           onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-6 h-10 border-2 border-primary/60 hover:border-primary rounded-full flex justify-center transition-colors duration-300">
          <div className="w-1 h-3 bg-primary/60 hover:bg-primary rounded-full mt-2 animate-pulse transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;