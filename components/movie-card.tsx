import { Card, CardContent } from "@/components/ui/card";
import { getMovieImageUrl } from "@/lib/tmdbService";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

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
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-semibold line-clamp-1">{movie.title}</h2>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <FaStar className="text-yellow-400" /> {movie.vote_average}
          </p>
          {showLink && (
            <Link href={`/movie/${movie.id}`} className="text-primary hover:underline mt-2 inline-block">
              Detalhes
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
