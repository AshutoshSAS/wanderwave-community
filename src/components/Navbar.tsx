
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Home, Users, Map, Calendar, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHomePage = location.pathname === "/";

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Don't show the navbar on the home page when at the top
  if (isHomePage && !isScrolled) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-semibold text-primary text-xl"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-ocean-400">
            <div className="absolute animate-float">
              <Map size={16} className="text-white" />
            </div>
          </div>
          {(!isMobile || isScrolled) && (
            <span className="animate-fade-in-up">WanderWave</span>
          )}
        </Link>

        {!isMobile && (
          <div className="flex items-center gap-1">
            <NavLink to="/explore" active={location.pathname === "/explore"}>
              <Home size={18} />
              <span>Explore</span>
            </NavLink>
            <NavLink to="/community" active={location.pathname === "/community"}>
              <Users size={18} />
              <span>Community</span>
            </NavLink>
            <NavLink to="/join-trips" active={location.pathname === "/join-trips"}>
              <Calendar size={18} />
              <span>Trips</span>
            </NavLink>
            <NavLink to="/forum" active={location.pathname === "/forum"}>
              <MessageSquare size={18} />
              <span>Forum</span>
            </NavLink>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!isMobile && (
            <div className="relative bg-muted rounded-full flex items-center px-3 py-1.5">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-32"
              />
            </div>
          )}

          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User size={20} />
            </Link>
          </Button>
        </div>
      </div>

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2">
          <NavItem to="/explore" icon={<Home size={20} />} label="Explore" />
          <NavItem to="/community" icon={<Users size={20} />} label="Community" />
          <NavItem to="/join-trips" icon={<Calendar size={20} />} label="Trips" />
          <NavItem to="/profile" icon={<User size={20} />} label="Profile" />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ 
  to, 
  active, 
  children 
}: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode 
}) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-1 px-3 py-2 rounded-full text-sm transition-all",
      active 
        ? "bg-primary/10 text-primary font-medium" 
        : "text-muted-foreground hover:bg-muted"
    )}
  >
    {children}
  </Link>
);

const NavItem = ({ 
  to, 
  icon, 
  label 
}: { 
  to: string; 
  icon: React.ReactNode; 
  label: string 
}) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className="flex flex-col items-center text-xs py-1"
    >
      <div className={cn(
        "p-1 rounded-full transition-colors",
        active ? "text-primary" : "text-muted-foreground"
      )}>
        {icon}
      </div>
      <span className={cn(
        "mt-1",
        active ? "text-primary font-medium" : "text-muted-foreground"
      )}>
        {label}
      </span>
    </Link>
  );
};

export default Navbar;
