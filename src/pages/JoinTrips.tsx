
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import TripCard from '@/components/TripCard';
import { useToast } from '@/hooks/use-toast';

const JoinTrips = () => {
  const { toast } = useToast();
  
  const handleJoinTrip = (tripName: string) => {
    toast({
      title: "Request Sent",
      description: `You've requested to join "${tripName}". The trip organizer will review your request.`,
      duration: 3000,
    });
  };
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Find a Trip to Join</h1>
          <p className="text-muted-foreground mb-8">
            Discover and join trips organized by the WanderWave community
          </p>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search by destination, trip name, or activity"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                Filter Trips
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal size={16} />
                Sort by
              </Button>
            </div>
            
            {/* Quick filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="secondary" size="sm">Upcoming</Button>
              <Button variant="outline" size="sm">Affordable ($)</Button>
              <Button variant="outline" size="sm">Weekend Trips</Button>
              <Button variant="outline" size="sm">Adventure</Button>
              <Button variant="outline" size="sm">Beach</Button>
              <Button variant="outline" size="sm">With Openings</Button>
            </div>
          </div>
          
          {/* Trip List */}
          <div className="space-y-6">
            {trips.map((trip, index) => (
              <TripCard
                key={index}
                image={trip.image}
                title={trip.title}
                location={trip.location}
                dates={trip.dates}
                groupSize={trip.groupSize}
                price={trip.price}
                openSpots={trip.openSpots}
                onJoin={handleJoinTrip}
              />
            ))}
          </div>
          
          {/* Load more */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Trips
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

// Sample data
const trips = [
  {
    title: "Island Hopping in Thailand",
    location: "Koh Phi Phi, Koh Lanta, Phuket",
    dates: "Oct 15 - Oct 28, 2023",
    groupSize: 8,
    price: "$1,200",
    openSpots: 3,
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  },
  {
    title: "Cultural Tour of Japan",
    location: "Tokyo, Kyoto, Osaka",
    dates: "Nov 5 - Nov 18, 2023",
    groupSize: 6,
    price: "$2,400",
    openSpots: 2,
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  },
  {
    title: "Weekend in Barcelona",
    location: "Barcelona, Spain",
    dates: "Sep 22 - Sep 24, 2023",
    groupSize: 4,
    price: "$800",
    openSpots: 1,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  },
  {
    title: "Trekking in the Himalayas",
    location: "Nepal",
    dates: "Apr 5 - Apr 18, 2024",
    groupSize: 10,
    price: "$1,500",
    openSpots: 5,
    image: "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  },
  {
    title: "Safari Adventure in Kenya",
    location: "Masai Mara, Kenya",
    dates: "Jan 10 - Jan 18, 2024",
    groupSize: 6,
    price: "$3,200",
    openSpots: 3,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
  }
];

export default JoinTrips;
