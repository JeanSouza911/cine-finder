import { Card, CardContent } from "@/components/ui/card";
import { getMovieImageUrl } from "@/lib/tmdbService";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  };
  showLink?: boolean;
}

export function MovieCard({ movie, showLink = true }: MovieCardProps) {
  const imageUrl = getMovieImageUrl(movie.poster_path);

  return (
    <Card className="h-full flex flex-col justify-between overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={500}
          height={750}
          priority
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-semibold line-clamp-1">{movie.title}</h2>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="text-yellow-400" /> {movie.vote_average}
          </p>
          {showLink && (
         <div className="w-full flex justify-center mt-4">
             <Link 
  href={`/movie/${movie.id}`} 
  className={`
    inline-flex items-center justify-center 
    px-4 py-2 
    bg-primary text-primary-foreground text-sm font-medium 
    rounded-md shadow-sm
    hover:bg-primary/80 transition-colors duration-200
  `}
>
  Detalhes
</Link>
  </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
