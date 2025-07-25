import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TwinAV from "./pages/TwinAV";
import TwinHRM from "./pages/TwinHRM";
import TwinShield from "./pages/TwinShield";
import Careers from "./pages/Careers";
import About from "./pages/About";
import ServicesDetailPage from "./components/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/twinav" element={<TwinAV />} />
            <Route path="/about" element={<About />} />
            <Route path="/twinhrm" element={<TwinHRM />} />
            <Route path="/twinshield" element={<TwinShield />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services/details" element={<ServicesDetailPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;