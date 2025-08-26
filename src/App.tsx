import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Location from "./pages/Location";
import PhotoCarousel from "./pages/PhotoCarousel";
import ReasonsILoveYou from "./pages/ReasonsILoveYou";
import DigitalGiftBox from "./pages/DigitalGiftBox";
import CountdownTimer from "./components/CountdownTimer";
import SecretMessages from "./components/SecretMessages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <CountdownTimer />
        <SecretMessages />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/photos" element={<PhotoCarousel />} />
          <Route path="/games" element={<Games />} />
          <Route path="/reasons" element={<ReasonsILoveYou />} />
          <Route path="/gift" element={<DigitalGiftBox />} />
          <Route path="/location" element={<Location />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
