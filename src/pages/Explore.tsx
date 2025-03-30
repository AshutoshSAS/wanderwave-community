
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import DestinationCard from '@/components/DestinationCard';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and filters */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search destinations, experiences, or activities"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex gap-2">
                  <MapPin size={18} />
                  <span className="hidden sm:inline">Location</span>
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <Calendar size={18} />
                  <span className="hidden sm:inline">Dates</span>
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={18} />
                  <span className="hidden sm:inline">Filters</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-8 gap-2 custom-scrollbar">
            <TabButton 
              active={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            >
              All
            </TabButton>
            <TabButton 
              active={activeTab === 'trending'} 
              onClick={() => setActiveTab('trending')}
            >
              Trending
            </TabButton>
            <TabButton 
              active={activeTab === 'beaches'} 
              onClick={() => setActiveTab('beaches')}
            >
              Beaches
            </TabButton>
            <TabButton 
              active={activeTab === 'mountains'} 
              onClick={() => setActiveTab('mountains')}
            >
              Mountains
            </TabButton>
            <TabButton 
              active={activeTab === 'cities'} 
              onClick={() => setActiveTab('cities')}
            >
              Cities
            </TabButton>
            <TabButton 
              active={activeTab === 'historic'} 
              onClick={() => setActiveTab('historic')}
            >
              Historic
            </TabButton>
            <TabButton 
              active={activeTab === 'food'} 
              onClick={() => setActiveTab('food')}
            >
              Food & Cuisine
            </TabButton>
          </div>
          
          {/* Destinations grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                image={destination.image}
                title={destination.title}
                description={destination.description}
                rating={destination.rating}
                category={destination.category}
              />
            ))}
          </div>
          
          {/* Load more */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Destinations
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

// Tab button component
const TabButton = ({ 
  active, 
  onClick,
  children
}: { 
  active: boolean; 
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
      active 
        ? "bg-primary text-white" 
        : "bg-muted hover:bg-muted/80 text-foreground"
    }`}
  >
    {children}
  </button>
);

// Sample data
const destinations = [
  {
    title: "Bali, Indonesia",
    description: "Island paradise with stunning beaches and rich culture",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    rating: 4.8,
    category: "Beaches"
  },
  {
    title: "Santorini, Greece",
    description: "Iconic white buildings with stunning Mediterranean views",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    rating: 4.9,
    category: "Islands"
  },
  {
    title: "Kyoto, Japan",
    description: "Ancient temples and gardens in Japan's cultural heart",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    rating: 4.7,
    category: "Historic"
  },
  {
    title: "Marrakech, Morocco",
    description: "Colorful markets and intricate architecture in North Africa",
    image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    rating: 4.6,
    category: "Cities"
  },
  {
    title: "Swiss Alps",
    description: "Breathtaking mountain landscapes and outdoor activities",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    rating: 4.9,
    category: "Mountains"
  },
  {
    title: "Machu Picchu, Peru",
    description: "Ancient Incan citadel set high in the Andes Mountains",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    rating: 4.8,
    category: "Historic"
  },
  {
    title: "Amalfi Coast, Italy",
    description: "Stunning cliffside villages along the Mediterranean",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    rating: 4.7,
    category: "Beaches"
  },
  {
    title: "Tokyo, Japan",
    description: "Ultramodern and traditional blend in Japan's capital",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    rating: 4.6,
    category: "Cities"
  }
];

export default Explore;
