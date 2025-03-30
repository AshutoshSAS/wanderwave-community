
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Users, Plus, Search } from 'lucide-react';

const Community = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Travel Communities</h1>
              <p className="text-muted-foreground mt-2">
                Connect with travelers who share your interests
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600">
              <Plus size={18} className="mr-2" />
              Create Community
            </Button>
          </div>
          
          {/* Search */}
          <div className="mb-8 max-w-xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search communities by name, destination, or interest"
                className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          
          {/* Communities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <CommunityCard key={index} {...community} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

interface CommunityCardProps {
  name: string;
  description: string;
  members: number;
  bannerImage: string;
  tags: string[];
}

const CommunityCard = ({ 
  name, 
  description, 
  members, 
  bannerImage, 
  tags 
}: CommunityCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
    <div className="h-36 overflow-hidden">
      <img
        src={bannerImage}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="p-5">
      <h3 className="font-semibold text-xl mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="bg-muted text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center text-muted-foreground text-sm">
          <Users size={16} className="mr-1" />
          <span>{members.toLocaleString()} members</span>
        </div>
        
        <Button variant="outline" size="sm">
          Join
        </Button>
      </div>
    </div>
  </div>
);

// Sample data
const communities = [
  {
    name: "Digital Nomads",
    description: "A community for remote workers exploring the world while maintaining their careers.",
    members: 12450,
    bannerImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    tags: ["Remote Work", "Co-living", "Nomad Life"]
  },
  {
    name: "Backpackers Unite",
    description: "Budget-friendly travel enthusiasts exploring the world on a shoestring budget.",
    members: 8730,
    bannerImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    tags: ["Budget Travel", "Hostels", "Backpacking"]
  },
  {
    name: "Adventure Seekers",
    description: "Adrenaline junkies looking for their next thrilling experience.",
    members: 6280,
    bannerImage: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    tags: ["Adventure", "Outdoor", "Extreme Sports"]
  },
  {
    name: "Sustainable Travelers",
    description: "Eco-conscious explorers committed to reducing their environmental impact.",
    members: 4520,
    bannerImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["Eco Travel", "Sustainability", "Green Tourism"]
  },
  {
    name: "Family Travelers",
    description: "Parents sharing tips and experiences for traveling with children of all ages.",
    members: 5830,
    bannerImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["Family", "Kid-Friendly", "Travel with Children"]
  },
  {
    name: "Solo Female Travelers",
    description: "A supportive community for women exploring the world on their own terms.",
    members: 9340,
    bannerImage: "https://images.unsplash.com/photo-1554672408-17222f307f8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    tags: ["Solo Travel", "Women Travelers", "Safety"]
  }
];

export default Community;
