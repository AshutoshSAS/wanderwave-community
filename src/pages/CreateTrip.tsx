
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Compass, DollarSign, Clock } from 'lucide-react';

const CreateTrip = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create a New Trip</h1>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <form className="space-y-6">
              {/* Trip Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Trip Title</label>
                <input
                  type="text"
                  placeholder="Give your trip a catchy name"
                  className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              {/* Trip Type & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Trip Type</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users size={18} className="text-muted-foreground" />
                    </div>
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option value="">Select Trip Type</option>
                      <option value="solo">Solo Trip</option>
                      <option value="group">Group Trip</option>
                      <option value="couple">Couple Trip</option>
                      <option value="family">Family Trip</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Compass size={18} className="text-muted-foreground" />
                    </div>
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option value="">Select Category</option>
                      <option value="adventure">Adventure</option>
                      <option value="relaxation">Relaxation</option>
                      <option value="cultural">Cultural</option>
                      <option value="food">Food & Cuisine</option>
                      <option value="nature">Nature & Wildlife</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium mb-2">Destination</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Start Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-muted-foreground" />
                    </div>
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">End Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-muted-foreground" />
                    </div>
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>
              
              {/* Budget & Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign size={18} className="text-muted-foreground" />
                    </div>
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option value="">Select Budget Range</option>
                      <option value="budget">Budget ($0-$500)</option>
                      <option value="moderate">Moderate ($500-$1000)</option>
                      <option value="luxury">Luxury ($1000+)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Duration</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock size={18} className="text-muted-foreground" />
                    </div>
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option value="">Select Duration</option>
                      <option value="weekend">Weekend (1-3 days)</option>
                      <option value="short">Short Trip (4-7 days)</option>
                      <option value="medium">Medium Trip (1-2 weeks)</option>
                      <option value="long">Long Trip (2+ weeks)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Group Size */}
              <div>
                <label className="block text-sm font-medium mb-2">Group Size</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    placeholder="How many travelers?"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              {/* Trip Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Trip Description</label>
                <textarea
                  rows={4}
                  placeholder="Tell others about your trip, activities planned, what to expect..."
                  className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20"
                ></textarea>
              </div>
              
              {/* Trip Visibility */}
              <div>
                <label className="block text-sm font-medium mb-2">Trip Visibility</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visibility"
                      value="public"
                      className="mr-2"
                      defaultChecked
                    />
                    <span>Public</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visibility"
                      value="private"
                      className="mr-2"
                    />
                    <span>Private</span>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Public trips can be seen and joined by any community member. Private trips are invite-only.
                </p>
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600 py-3">
                  Create Trip
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateTrip;
