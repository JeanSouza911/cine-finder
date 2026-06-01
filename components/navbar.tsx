"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clapperboard, Search } from "lucide-react";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div 
          className="font-bold text-xl tracking-tight cursor-pointer flex items-center gap-2 select-none shrink-0" 
          onClick={() => router.push("/")}
        >
          <Clapperboard className="text-primary h-5 w-5" /> 
          <span>CineFinder</span>
        </div>

        <form onSubmit={handleSearch} className="flex flex-1 sm:flex-initial w-full max-w-md gap-2 ml-2 sm:ml-4">
          <Input
            type="text"
            placeholder="Busque um filme"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="grow"
          />
          <Button 
            type="submit"
            className="cursor-pointer hover:bg-primary/80 transition-colors duration-200 shrink-0"
          >
            <Search className="sm:mr-2" />
            <span className="hidden sm:inline">Buscar</span>
          </Button>
        </form>
        
      </div>
    </header>
  );
}