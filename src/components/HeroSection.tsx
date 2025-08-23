import { Button } from "@/components/ui/button";
import { Heart, Gamepad2, Sparkles, Circle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState(
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 6,
      type: ['heart', 'heart', 'sparkle', 'dot', 'light', 'bubble', 'heart', 'bubble'][Math.floor(Math.random() * 8)],
      opacity: Math.random() * 0.7 + 0.1,
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
    const repelStrength = Math.max(0, (25 - distance) * 1.5);
    const angle = Math.atan2(particle.y - mousePosition.y, particle.x - mousePosition.x);
    const newX = particle.x + Math.cos(angle) * repelStrength * 0.4;
    const newY = particle.y + Math.sin(angle) * repelStrength * 0.4;

    return {
      left: `${Math.max(0, Math.min(100, newX))}%`,
      top: `${Math.max(0, Math.min(100, newY))}%`,
      transform: `scale(${1 + repelStrength * 0.03}) rotate(${repelStrength * 2}deg)`,
      transition: 'all 0.4s ease-out',
      opacity: particle.opacity + (repelStrength * 0.02),
    };
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Romantic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
      
      {/* Cursor-Repelling Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute"
            style={getParticleStyle(particle)}
          >
            {particle.type === 'heart' && (
              <Heart 
                className="text-primary/40 animate-pulse-soft" 
                size={particle.size}
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))',
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            )}
            {particle.type === 'sparkle' && (
              <Sparkles 
                className="text-accent/40 animate-pulse-soft" 
                size={particle.size}
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--accent) / 0.4))',
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            )}
            {particle.type === 'dot' && (
              <Circle 
                className="text-secondary/30 animate-pulse-soft" 
                size={particle.size}
                fill="currentColor"
                style={{
                  filter: 'drop-shadow(0 0 6px hsl(var(--secondary) / 0.3))',
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            )}
            {particle.type === 'light' && (
              <div 
                className="rounded-full bg-gradient-to-r from-accent/30 to-primary/30 animate-pulse-soft"
                style={{
                  width: particle.size,
                  height: particle.size,
                  filter: 'blur(1px) drop-shadow(0 0 10px hsl(var(--accent) / 0.5))',
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            )}
            {particle.type === 'bubble' && (
              <div 
                className="rounded-full border-2 border-accent/30 bg-accent/10 animate-pulse-soft"
                style={{
                  width: particle.size,
                  height: particle.size,
                  filter: 'drop-shadow(0 0 6px hsl(var(--accent) / 0.2))',
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            )}
            {particle.type === 'zap' && (
              <Zap 
                className="text-accent/35 animate-pulse-soft" 
                size={particle.size}
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--accent) / 0.4))',
                  animationDelay: `${particle.id * 0.2}s`,
                }}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Additional Floating Hearts Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={`floating-${i}`}
            className={`absolute text-primary/15 hover:text-accent/30 transition-all duration-500 animate-pulse-soft cursor-pointer`}
            size={8 + i * 2}
            style={{
              left: `${3 + i * 4.8}%`,
              top: `${8 + i * 4.2}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${i * 18}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white mb-6 animate-pulse-soft hover:text-accent transition-colors duration-500 cursor-default drop-shadow-lg">
            Happy Birthday
          </h1>
          
          <h2 className="font-script text-4xl md:text-6xl lg:text-7xl text-accent mb-8 hover:text-primary transition-colors duration-300 cursor-default drop-shadow-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent">
            Sejal
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed hover:text-white transition-colors duration-300 drop-shadow-sm">
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
                className="group border-2 border-white/60 text-white hover:bg-white/10 hover:text-white hover:border-white hover:scale-105 transition-all duration-300 text-lg px-8 py-4 backdrop-blur-sm bg-white/5"
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
        <div className="w-6 h-10 border-2 border-white/60 hover:border-white rounded-full flex justify-center transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 hover:bg-white rounded-full mt-2 animate-pulse transition-colors duration-300" />
        </div>
      </div>
      
      {/* Smooth Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;