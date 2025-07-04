// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PortfolioPage from "@/pages/PortfolioPage";
import Contact from "@/pages/Contact";
import Press from "@/pages/Press";
import About from "@/pages/BiographyPage";
import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import Shop from "@/pages/Shop";
import ShopDetail from "@/pages/ShopDetail";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/press" element={<Press />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
