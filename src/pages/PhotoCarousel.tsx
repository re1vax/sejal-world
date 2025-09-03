import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Music, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import ourSong from "@/assets/jtmh.m4a";
import beaut from "@/assets/beaut.jpg";
import datescollage from "@/assets/datescollage.png";
import sagecollage from "@/assets/sagecollage.png";
import gorgor from "@/assets/gorgor.jpg";
import myplace from "@/assets/myplace.jpg";
import sageart1 from "@/assets/sageart1.png";
import sageart2 from "@/assets/sageart2.png";
import firstdate from "@/assets/firstdate.jpg";

const PhotoCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const photos = [
    {
      id: 1,
      src: sageart1,
      caption: "Think Obereru Gifted this to you on your 21st birthday? I was so jealous but so awestruck, he did such an amazing job! I really wish I could draw~",
      title: "ft. Obereru"
    },
    {
      id: 2,
      src: sageart2,
      caption: "Obereru did it again! For this birthday he drew you again and I think it turned you extremely beautiful! 😭",
      title: "ft. Obereru 2.0"
    },
    {
      id: 3,
      src: firstdate,
      caption: "I can't help but put this one in, again. I'll always cherish this photo",
      title: "First Date!"
    },
    {
      id: 4,
      src: datescollage,
      caption: "There was a time we wondered if we'd ever get to go on a date, just the two of us. We got quite a few under our belt, didn't we? I wanna go on a billion more :>",
      title: "Dates with you!"
    },
    {
      id: 5,
      src: myplace,
      caption: "Magical! The time spent, our first kiss - just purely magical",
      title: "mismisi much?"
    },
    {
      id: 6,
      src: sagecollage,
      caption: "Aah how I wish I could post all your photos on this website 😩",
      title: "Pretty YOU, wau so many!"
    },
    {
      id: 7,
      src: gorgor,
      caption: "You were looking so so god damn gorgeous it deserved a special showcase 😖",
      title: "Gorgeous YOU!"
    },
    {
      id: 8,
      src: beaut,
      caption: "I have no words- NONE. If this isn't the most beautiful human in existence, I don't know who is. Actually you are wrong, fuck you, this is the most beautiful human in existence!",
      title: "Beautiful YOU!"
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
            Trip down memory lane
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Every picture reminds me how absolutely lucky I am to have you in my life
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
                      <div className="relative flex justify-center items-center overflow-hidden rounded-lg">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="max-h-[70vh] w-auto object-contain hover:scale-105 transition-transform duration-500"
                        />
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
            Swipe or use arrows to navigate this trip ✨
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
        <source src={ourSong} type="audio/mp4" />
        {/* Add your audio file source here */}
        {/* <source src="/path-to-your-song.mp3" type="audio/mpeg" /> */}
        <p>Your browser does not support the audio element.</p>
      </audio>
    </div>
  );
};

export default PhotoCarousel;