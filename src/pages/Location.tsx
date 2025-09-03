import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Copy, Heart, Gift, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import locationSong from "@/assets/maand.m4a";

const Location = () => {
  const { toast } = useToast();
  const [revealed, setRevealed] = useState(false);
  
  // Replace these with your actual coordinates
  const coordinates = {
    lat: "28.6892758",
    lng: "77.3367455",
    address: "Closer than you expected huh?",
    description: "Ask your bestie for specifications :>"
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
    const url = `https://maps.app.goo.gl/CbJrNPxQbq4XKbm29`;
    window.open(url, '_blank');
  };

  if (!revealed) {
    return (
      <div className="min-h-screen pt-20 pb-10 px-4 romantic-gradient flex items-center justify-center">
        <Card className="max-w-md romantic-shadow border-primary/20 animate-fade-in">
          <CardContent className="p-8 text-center">
            <Gift className="text-primary mx-auto mb-6 animate-bounce" size={64} />
            <h2 className="font-script text-3xl text-primary mb-4">
              Surprise!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your bestie might have something in store for you on your birthday :D
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
      {/* Hidden background music */}
      <audio
        src={locationSong}
        autoPlay
        loop
        hidden
        preload="auto"
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Rendezvous
          </h1>
          <p className="text-xl text-muted-foreground">
            I am giggling to myself playing the scenario in my head 😖
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
                Where exactly?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A secret stirs, the night runs fast,<br></br>
                  The waiting days won’t truly last.<br></br>
                  A step away, yet nearer still,<br></br>
                  The hidden path bends to your will.
                </p>
                <p>
                  A gift awaits where laughter stays,<br></br>
                  Carried close through quiet ways.<br></br>
                  Not by the one you might first see,<br></br>
                  But brought with love—your dearest she.
                </p>
                <div className="bg-primary/10 rounded-lg p-4 mt-6">
                  <p className="text-primary font-medium text-center">
                    To the world you may be just one person, but to me you are the world
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Embed */}
        <Card className="mt-8 romantic-shadow border-primary/20 animate-fade-in">
          <CardContent className="p-0">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7000.0247916223025!2d77.3367455!3d28.6892758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5a0661e5c1%3A0x9a577e2a1c84c95b!2sChawla&#39;s%20Veg%20Kitchen!5e0!3m2!1sen!2sin!4v1756907216374!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Location;