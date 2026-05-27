"use client";

import { useState, useEffect } from "react";
import { MovieCard } from "@/components/movie-card";
import { getPopularMovies, Movie } from "@/lib/tmdbService";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

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

  return (
    <main className="container mx-auto px-4 py-8">
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