"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MovieCard } from "@/components/movie-card";
import { searchMovies, Movie } from "@/lib/tmdbService";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (query) {
      const fetchSearchedMovies = async () => {
        try {
          const data = await searchMovies(query);
          setMovies(data.results);
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      };
      fetchSearchedMovies();
    }
  }, [query]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        Resultados para: <span className="text-primary">{query}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length === 0 ? (
          <p>Carregando filmes...</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </main>
  );
}
