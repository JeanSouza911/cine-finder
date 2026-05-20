"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getMovieDetails, getMovieImageUrl, Movie } from "@/lib/tmdbService";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaStar, FaWallet, FaChartBar, FaClock, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import Image from "next/image";

export default function MoviePage() {
  const params = useParams();
  const id = params.id ? parseInt(params.id as string) : null;

  const [movie, setMovie] = useState<Movie | null>(null);

  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    if (id) {
      const fetchMovie = async () => {
        try {
          const data = await getMovieDetails(id);
          setMovie(data);
        } catch (error) {
          console.error("Erro ao buscar detalhes do filme:", error);
        }
      };
      fetchMovie();
    }
  }, [id]);

  if (!movie) {
    return <p className="text-center py-8">Carregando...</p>;
  }

  const imageUrl = getMovieImageUrl(movie.poster_path, "w500");

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/3">
          <Image
            src={imageUrl}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-3xl font-bold">{movie.title}</CardTitle>
            {movie.tagline && <CardDescription className="text-lg mt-2">{movie.tagline}</CardDescription>}
            <p className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
              <FaStar className="text-yellow-400" /> {movie.vote_average}
            </p>
          </CardHeader>

          <CardContent className="p-0 py-4 flex flex-col gap-4">
            {movie.budget && movie.budget > 0 && (
              <div className="flex items-center gap-2">
                <FaWallet className="text-muted-foreground" />
                <p>Orçamento: {formatCurrency(movie.budget)}</p>
              </div>
            )}
            {movie.revenue && movie.revenue > 0 && (
              <div className="flex items-center gap-2">
                <FaChartBar className="text-muted-foreground" />
                <p>Receita: {formatCurrency(movie.revenue)}</p>
              </div>
            )}
            {movie.runtime && (
              <div className="flex items-center gap-2">
                <FaClock className="text-muted-foreground" />
                <p>Duração: {movie.runtime} minutos</p>
              </div>
            )}
            {movie.release_date && (
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-muted-foreground" />
                <p>Lançamento: {movie.release_date}</p>
              </div>
            )}
          </CardContent>

          {movie.overview && (
            <CardFooter className="p-0 pt-4 flex-col items-start">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                <FaFileAlt className="text-muted-foreground" /> Descrição:
              </h3>
              <p className="text-muted-foreground">{movie.overview}</p>
            </CardFooter>
          )}
        </div>
      </Card>
    </main>
  );
}
