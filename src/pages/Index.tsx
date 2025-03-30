
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import DestinationCard from '@/components/DestinationCard';
import TripCard from '@/components/TripCard';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title="Discover amazing travel experiences with friends"
          subtitle="Join a community of travelers from around the world. Create, share, and discover unique trips."
          backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
          ctaText="Start Exploring"
          ctaLink="/explore"
        />
        
        {/* Search Section */}
        <section className="relative z-20 px-4 -mt-16 max-w-5xl mx-auto">
          <div className="glass-card p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                />
              </div>
              
              <div className="flex-1 flex gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={20} className="text-muted-foreground" />
                  </div>
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white appearance-none">
                    <option value="">When?</option>
                    <option value="month1">Next Month</option>
                    <option value="month3">Next 3 Months</option>
                    <option value="month6">Next 6 Months</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
                
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users size={20} className="text-muted-foreground" />
                  </div>
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white appearance-none">
                    <option value="">Trip Type</option>
                    <option value="solo">Solo</option>
                    <option value="group">Group</option>
                    <option value="family">Family</option>
                    <option value="couples">Couples</option>
                  </select>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600 text-white py-3 px-6">
                Search
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Communities */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Travel Communities</h2>
            <Link to="/community" className="text-primary flex items-center gap-1 hover:underline">
              View all
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCommunities.map((community, index) => (
              <DestinationCard
                key={index}
                image={community.image}
                title={community.title}
                description={community.description}
                category={community.category}
              />
            ))}
          </div>
        </section>
        
        {/* Trending Destinations */}
        <section className="py-16 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Trending Destinations</h2>
              <Link to="/explore" className="text-primary flex items-center gap-1 hover:underline">
                View all
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingDestinations.map((destination, index) => (
                <DestinationCard
                  key={index}
                  image={destination.image}
                  title={destination.title}
                  description={destination.description}
                  rating={destination.rating}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Trips */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Upcoming & Popular Trips</h2>
            <Link to="/join-trips" className="text-primary flex items-center gap-1 hover:underline">
              View all
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingTrips.map((trip, index) => (
              <TripCard
                key={index}
                image={trip.image}
                title={trip.title}
                location={trip.location}
                dates={trip.dates}
                groupSize={trip.groupSize}
                price={trip.price}
                openSpots={trip.openSpots}
                onJoin={() => console.log(`Joining trip: ${trip.title}`)}
              />
            ))}
          </div>
        </section>
        
        {/* Trip Categories */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 to-ocean-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Explore by Trip Type</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard
                icon="🏞️"
                title="Adventure"
                description="Thrilling activities and exploring the unknown"
                link="/explore?category=adventure"
              />
              <CategoryCard
                icon="🧘"
                title="Leisure"
                description="Relaxing experiences to unwind and recharge"
                link="/explore?category=leisure"
              />
              <CategoryCard
                icon="👨‍👩‍👧‍👦"
                title="Group Trips"
                description="Travel with friends or meet new people"
                link="/explore?category=group"
              />
              <CategoryCard
                icon="🏄"
                title="Solo Trips"
                description="Independent travel for personal exploration"
                link="/explore?category=solo"
              />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-ocean-400">
                  <MapPin size={16} className="text-white" />
                </div>
                WanderWave
              </h3>
              <p className="text-gray-300 text-sm">
                A global community of travel enthusiasts sharing experiences and creating unforgettable journeys together.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/explore" className="hover:text-white">Explore</Link></li>
                <li><Link to="/community" className="hover:text-white">Community</Link></li>
                <li><Link to="/create-trip" className="hover:text-white">Create a Trip</Link></li>
                <li><Link to="/join-trips" className="hover:text-white">Join a Trip</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-300 text-sm mb-4">
                Have questions or need assistance? We're here to help!
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Contact Support
              </Button>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              © 2023 WanderWave. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

// Trip categories card component
const CategoryCard = ({ icon, title, description, link }: {
  icon: string;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </Link>
);

// Sample data
const featureCommunities = [
  {
    title: "Digital Nomads",
    description: "Remote workers exploring the world while working.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    category: "Work & Travel"
  },
  {
    title: "Backpackers Unite",
    description: "Budget-friendly travel enthusiasts exploring on a shoestring.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    category: "Budget Travel"
  },
  {
    title: "Adventure Seekers",
    description: "Adrenaline junkies looking for their next thrill.",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    category: "Adventure"
  },
  {
    title: "Sustainable Travelers",
    description: "Eco-conscious explorers reducing their environmental impact.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    category: "Eco Travel"
  }
];

const trendingDestinations = [
  {
    title: "Bali, Indonesia",
    description: "Island paradise with stunning beaches and rich culture",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    rating: 4.8
  },
  {
    title: "Santorini, Greece",
    description: "Iconic white buildings with stunning Mediterranean views",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    rating: 4.9
  },
  {
    title: "Kyoto, Japan",
    description: "Ancient temples and gardens in Japan's cultural heart",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    rating: 4.7
  },
  {
    title: "Marrakech, Morocco",
    description: "Colorful markets and intricate architecture in North Africa",
    image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    rating: 4.6
  }
];

const upcomingTrips = [
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
  }
];

export default Index;
