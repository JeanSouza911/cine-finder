"use client";

import { useState, useEffect } from "react";
import { MovieCard } from "@/components/movie-card";
import { getPopularMovies, Movie } from "@/lib/tmdbService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await getPopularMovies();
        setPopularMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      }
    };
    fetchPopularMovies();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <Input
          type="text"
          placeholder="Busque um filme..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">
          <FaSearch className="mr-2" /> Buscar
        </Button>
      </form>

      <h2 className="text-2xl font-bold mb-6">Filmes Populares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularMovies.length === 0 ? (
          <p>Carregando filmes...</p>
        ) : (
          popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </main>
  );
}
