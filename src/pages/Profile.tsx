
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar, MapPin, Settings, Clock, User, Users } from 'lucide-react';
import TripCard from '@/components/TripCard';
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth/sign-in');
    }
  }, [user, loading, navigate]);

  // If loading or no user, show minimal content
  if (loading || !user) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center py-12">
            <p>Loading profile...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="relative mb-8">
            {/* Cover Photo */}
            <div className="h-48 md:h-64 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
                alt="Cover"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 -mt-16 md:-mt-12 px-4">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
                {/* Profile Picture */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                  <img
                    src={profile?.avatar_url || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Bio */}
                <div className="text-center md:text-left md:mb-2">
                  <h1 className="text-2xl font-bold mt-2 md:mt-0">{profile?.full_name || user.email}</h1>
                  <p className="text-muted-foreground">
                    Digital Nomad | 25 Countries Explored
                  </p>
                  <div className="flex justify-center md:justify-start gap-3 mt-2">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin size={14} />
                      <span>Bangkok, Thailand</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock size={14} />
                      <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 md:mb-2">
                <Button variant="outline" size="sm" className="flex gap-1">
                  <MessageSquare size={16} />
                  <span>Message</span>
                </Button>
                <Button variant="outline" size="sm">
                  <Settings size={16} />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={signOut}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={<MapPin size={20} className="text-teal-500" />}
              value="25"
              label="Countries"
            />
            <StatCard
              icon={<Calendar size={20} className="text-ocean-500" />}
              value="12"
              label="Trips"
            />
            <StatCard
              icon={<Users size={20} className="text-teal-500" />}
              value="156"
              label="Followers"
            />
            <StatCard
              icon={<User size={20} className="text-ocean-500" />}
              value="98"
              label="Following"
            />
          </div>
          
          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b flex overflow-x-auto">
              <TabButton active>Upcoming Trips</TabButton>
              <TabButton>Past Trips</TabButton>
              <TabButton>Saved Places</TabButton>
              <TabButton>Forum Posts</TabButton>
            </div>
          </div>
          
          {/* Upcoming Trips */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Your Upcoming Trips</h2>
            
            <div className="space-y-6">
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
                />
              ))}
            </div>
            
            {/* No trips message */}
            {upcomingTrips.length === 0 && (
              <div className="bg-muted py-12 px-6 rounded-xl text-center">
                <Calendar size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">No upcoming trips</h3>
                <p className="text-muted-foreground mb-6">
                  You don't have any upcoming trips planned. Start planning your next adventure!
                </p>
                <Button className="bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600">
                  Create New Trip
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border flex items-center">
    <div className="mr-3">
      {icon}
    </div>
    <div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  </div>
);

const TabButton = ({ active, children }: { active?: boolean; children: React.ReactNode }) => (
  <button
    className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
      active 
        ? "border-b-2 border-primary text-primary"
        : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-muted-foreground/50"
    }`}
  >
    {children}
  </button>
);

// Sample data
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

export default Profile;
