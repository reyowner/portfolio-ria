
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Academic from "./pages/Academic";
import Activities from "./pages/Activities";
import UniversityLife from "./pages/UniversityLife";
import Grades from "./pages/Grades";
import Story from "./pages/Story";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/university-life" element={<UniversityLife />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
