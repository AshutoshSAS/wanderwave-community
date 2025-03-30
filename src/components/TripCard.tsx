
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TripCardProps {
  image: string;
  title: string;
  location: string;
  dates: string;
  groupSize: number;
  price?: string;
  openSpots?: number;
  onJoin?: () => void;
}

const TripCard = ({
  image,
  title,
  location,
  dates,
  groupSize,
  price,
  openSpots,
  onJoin
}: TripCardProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm border animate-fade-in-up">
      <div className="md:w-1/3 aspect-video md:aspect-square relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {price && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
            {price}
          </div>
        )}
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="font-semibold text-xl">{title}</h3>
        
        <div className="mt-2 space-y-2 flex-grow">
          <div className="flex items-center text-muted-foreground">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{dates}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Users size={16} className="mr-2" />
            <span className="text-sm">{`${groupSize} travelers${openSpots ? ` · ${openSpots} spots left` : ''}`}</span>
          </div>
        </div>
        
        {onJoin && (
          <div className="mt-4 flex justify-end">
            <Button onClick={onJoin} className="bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600">
              Join Trip
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripCard;
