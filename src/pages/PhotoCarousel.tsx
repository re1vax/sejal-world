import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Music, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import birthdayCake from "@/assets/birthday-cake.jpg";
import coupleSilhouette from "@/assets/couple-silhouette.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const PhotoCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const photos = [
    {
      id: 1,
      src: birthdayCake,
      caption: "Every birthday with you feels like the first celebration of love 🎂",
      title: "Sweet Moments"
    },
    {
      id: 2,
      src: coupleSilhouette,
      caption: "In your silhouette, I found my forever home 💕",
      title: "Our Shadow Dance"
    },
    {
      id: 3,
      src: heroBackground,
      caption: "This is where our story began, and where it will never end ✨",
      title: "Where It All Started"
    },
  ];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-script text-4xl md:text-6xl text-primary mb-4 animate-fade-in">
            Our Beautiful Memories
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Every picture tells a story of our love
          </p>
          
          {/* Audio Player */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Music className="text-accent" size={20} />
            <Button
              onClick={toggleAudio}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-primary/30 hover:bg-primary/10"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? "Pause" : "Play"} Our Song
            </Button>
            <Heart className="text-primary animate-pulse" size={20} />
          </div>
        </div>

        {/* Carousel */}
        <Carousel className="max-w-3xl mx-auto">
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 romantic-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                          <Camera className="text-white" size={16} />
                          <span className="text-white text-sm font-medium">{photo.title}</span>
                        </div>
                      </div>
                      
                      {/* Caption */}
                      <div className="text-center space-y-2">
                        <p className="text-lg font-medium text-foreground leading-relaxed">
                          {photo.caption}
                        </p>
                        <div className="flex justify-center">
                          <Heart className="text-primary animate-pulse-soft" size={20} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary" />
          <CarouselNext className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary" />
        </Carousel>

        {/* Navigation hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Swipe or use arrows to explore our memories ✨
          </p>
        </div>
      </div>

      {/* Hidden audio element - Replace with your actual audio file */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Add your audio file source here */}
        {/* <source src="/path-to-your-song.mp3" type="audio/mpeg" /> */}
        <p>Your browser does not support the audio element.</p>
      </audio>
    </div>
  );
};

export default PhotoCarousel;