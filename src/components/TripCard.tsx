
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface TripCardProps {
  image: string;
  title: string;
  location: string;
  dates: string;
  groupSize: number;
  price?: string;
  openSpots?: number;
  onJoin?: (tripName: string) => void;
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
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const handleJoinRequest = () => {
    if (onJoin) {
      onJoin(title);
    } else {
      toast({
        title: "Request Sent",
        description: `You've requested to join "${title}". The trip organizer will review your request.`,
        duration: 5000,
      });
    }
  };
  
  return (
    <div 
      className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm border animate-fade-in-up transform transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:w-1/3 aspect-video md:aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {price && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            {price}
          </div>
        )}
        {openSpots !== undefined && openSpots <= 2 && openSpots > 0 && (
          <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm">
            Only {openSpots} {openSpots === 1 ? 'spot' : 'spots'} left!
          </div>
        )}
      </div>
      
      <div className="flex-1 p-4 md:p-6 flex flex-col">
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
        
        <div className="mt-4 flex justify-end">
          <Button 
            onClick={handleJoinRequest} 
            className={`transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'} bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600`}
          >
            Request to Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
