import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Copy, Heart, Gift, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Location = () => {
  const { toast } = useToast();
  const [revealed, setRevealed] = useState(false);
  
  // Replace these with your actual coordinates
  const coordinates = {
    lat: "40.7589",
    lng: "-73.9851",
    address: "Our Special Place",
    description: "The rooftop where we first said 'I love you' under the stars"
  };

  const copyCoordinates = () => {
    const coordText = `${coordinates.lat}, ${coordinates.lng}`;
    navigator.clipboard.writeText(coordText);
    toast({
      title: "Coordinates Copied!",
      description: "The coordinates have been copied to your clipboard.",
    });
  };

  const openInMaps = () => {
    const url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  if (!revealed) {
    return (
      <div className="min-h-screen pt-20 pb-10 px-4 romantic-gradient flex items-center justify-center">
        <Card className="max-w-md romantic-shadow border-primary/20 animate-fade-in">
          <CardContent className="p-8 text-center">
            <Gift className="text-primary mx-auto mb-6 animate-bounce" size={64} />
            <h2 className="font-script text-3xl text-primary mb-4">
              Your Birthday Surprise
            </h2>
            <p className="text-muted-foreground mb-6">
              I have a special place where we'll celebrate your birthday together. 
              Are you ready to discover where we're meeting?
            </p>
            <Button 
              onClick={() => setRevealed(true)}
              className="romantic-shadow hover:glow-shadow transition-all hover:scale-105"
            >
              <Heart className="mr-2" size={20} />
              Reveal Location
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 romantic-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Our Birthday Rendezvous
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's where our magical birthday celebration will take place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Details */}
          <Card className="romantic-shadow border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin size={24} />
                Meeting Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">{coordinates.address}</h3>
                <p className="text-muted-foreground">{coordinates.description}</p>
              </div>

              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2">GPS Coordinates:</h4>
                <div className="flex items-center gap-2 mb-3">
                  <code className="text-lg bg-primary/10 px-3 py-1 rounded">
                    {coordinates.lat}, {coordinates.lng}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyCoordinates}
                    className="flex items-center gap-1"
                  >
                    <Copy size={16} />
                    Copy
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={openInMaps}
                  className="w-full romantic-shadow hover:glow-shadow"
                >
                  <Navigation className="mr-2" size={20} />
                  Open in Google Maps
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(`geo:${coordinates.lat},${coordinates.lng}`)}
                >
                  <MapPin className="mr-2" size={20} />
                  Open in Phone GPS
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Romantic Message */}
          <Card className="romantic-shadow border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Heart size={24} />
                Why This Place?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This location holds a special place in my heart because it's where we shared 
                  one of our most beautiful moments together. Under the twinkling city lights, 
                  we talked for hours about our dreams and our future.
                </p>
                <p>
                  It felt like the perfect place to celebrate your birthday - somewhere that's 
                  already filled with our love and beautiful memories. I can't wait to create 
                  new ones with you there.
                </p>
                <div className="bg-primary/10 rounded-lg p-4 mt-6">
                  <p className="text-primary font-medium text-center">
                    "Every love story is beautiful, but ours is my favorite." ❤️
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-8 romantic-shadow border-primary/20 animate-fade-in">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-4" size={48} />
                <p className="text-muted-foreground">
                  Interactive map would be displayed here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click the buttons above to open in your preferred map app
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Location;