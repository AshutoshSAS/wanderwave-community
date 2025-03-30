
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  rating?: number;
  category?: string;
}

const DestinationCard = ({
  image,
  title,
  description,
  rating,
  category
}: DestinationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl animate-fade-in-up">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Category pill */}
      {category && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>
      )}

      {/* Like button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white"
      >
        <Heart
          size={16}
          className={cn(
            "transition-colors",
            isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
          )}
        />
      </button>

      <div className="bg-white p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          {rating && (
            <div className="flex items-center">
              <span className="text-amber-500">★</span>
              <span className="text-sm font-medium ml-1">{rating}</span>
            </div>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
