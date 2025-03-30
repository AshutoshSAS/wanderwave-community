
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { MessageSquare, Search, Heart, ArrowUp, ArrowDown, User, Clock } from 'lucide-react';

const Forum = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Travel Discussion Forum</h1>
              <p className="text-muted-foreground mt-1">
                Ask questions, share tips, and connect with fellow travelers
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600">
              <MessageSquare size={18} className="mr-2" />
              New Discussion
            </Button>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="secondary" size="sm">All Topics</Button>
              <Button variant="outline" size="sm">Destinations</Button>
              <Button variant="outline" size="sm">Travel Tips</Button>
              <Button variant="outline" size="sm">Gear & Equipment</Button>
              <Button variant="outline" size="sm">Safety</Button>
              <Button variant="outline" size="sm">Budget Travel</Button>
            </div>
          </div>
          
          {/* Discussion List */}
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
                <div className="p-5">
                  <div className="flex gap-4">
                    {/* Voting */}
                    <div className="flex flex-col items-center gap-1">
                      <button className="p-1 rounded-full hover:bg-muted transition-colors">
                        <ArrowUp size={20} className="text-muted-foreground" />
                      </button>
                      <span className="font-semibold">{discussion.votes}</span>
                      <button className="p-1 rounded-full hover:bg-muted transition-colors">
                        <ArrowDown size={20} className="text-muted-foreground" />
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl">
                        <span className="hover:text-primary cursor-pointer">{discussion.title}</span>
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {discussion.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="bg-muted text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                        {discussion.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap justify-between items-center mt-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <User size={14} />
                            <span>{discussion.author}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Clock size={14} />
                            <span>{discussion.posted}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <MessageSquare size={14} />
                            <span>{discussion.comments} comments</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Heart size={16} className="mr-1" />
                            Save
                          </Button>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="secondary" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

// Sample data
const discussions = [
  {
    title: "Best time to visit Japan for cherry blossoms?",
    excerpt: "I'm planning a trip to Japan specifically to see the cherry blossoms in bloom. What's the best time to visit for this? Is it possible to predict when they'll bloom in advance? Any recommendations for specific locations that are less crowded but still beautiful?",
    author: "SakuraLover",
    posted: "2 hours ago",
    votes: 32,
    comments: 14,
    tags: ["Japan", "Seasonal Travel", "Asia"]
  },
  {
    title: "Budget backpacking through Southeast Asia for 3 months",
    excerpt: "I'm planning a 3-month backpacking trip through Southeast Asia (Thailand, Vietnam, Cambodia, Laos) on a tight budget of about $1500 per month. Is this realistic? Looking for advice on accommodation, food, transportation and must-see places that won't break the bank.",
    author: "BudgetNomad",
    posted: "1 day ago",
    votes: 45,
    comments: 28,
    tags: ["Budget Travel", "Southeast Asia", "Backpacking"]
  },
  {
    title: "Solo female travel safety tips for Morocco",
    excerpt: "I'll be traveling solo to Morocco next month as a female traveler. While I'm experienced with solo travel, this will be my first time in North Africa. Looking for specific safety tips, cultural etiquette advice, and recommendations for female-friendly accommodations in Marrakech, Fes, and Chefchaouen.",
    author: "GlobeTrotter",
    posted: "3 days ago",
    votes: 67,
    comments: 42,
    tags: ["Solo Travel", "Safety", "Morocco"]
  },
  {
    title: "Best camera gear for travel photography?",
    excerpt: "I'm looking to upgrade my travel photography gear before my next big trip. Currently using an older DSLR but considering going mirrorless. What's the best balance between quality, weight, and versatility? Any specific recommendations for cameras that perform well in varied conditions?",
    author: "ShutterBug",
    posted: "5 days ago",
    votes: 29,
    comments: 35,
    tags: ["Photography", "Travel Gear", "Equipment"]
  }
];

export default Forum;
