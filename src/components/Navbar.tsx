
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Home, 
  Users, 
  Map, 
  Calendar, 
  MessageSquare, 
  User,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHomePage = location.pathname === "/";
  const { toast } = useToast();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {!isMobile ? (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/explore" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10",
                      location.pathname === "/explore" 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    <Home size={18} className="mr-2" />
                    Explore
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/community" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10",
                      location.pathname === "/community" 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    <Users size={18} className="mr-2" />
                    Community
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "rounded-full px-4 py-2",
                  location.pathname === "/join-trips" || location.pathname === "/create-trip"
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground"
                )}>
                  <Calendar size={18} className="mr-2" />
                  Trips
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] p-2">
                    <Link 
                      to="/join-trips"
                      className="block rounded-md p-3 hover:bg-primary/5 transition-colors"
                      onClick={() => {
                        if (location.pathname === "/join-trips") {
                          toast({
                            title: "Browse and join trips",
                            description: "Find trips organized by the WanderWave community",
                          });
                        }
                      }}
                    >
                      <div className="text-sm font-medium mb-1">Join Trips</div>
                      <div className="text-xs text-muted-foreground">Find and join trips created by others</div>
                    </Link>
                    <Link 
                      to="/create-trip" 
                      className="block rounded-md p-3 hover:bg-primary/5 transition-colors"
                    >
                      <div className="text-sm font-medium mb-1">Create Trip</div>
                      <div className="text-xs text-muted-foreground">Plan and organize your own adventure</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/forum" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10",
                      location.pathname === "/forum" 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    <MessageSquare size={18} className="mr-2" />
                    Forum
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
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

      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 animate-fade-in">
          <div className="container flex flex-col gap-4 p-4">
            <Link 
              to="/explore"
              className="flex items-center p-3 rounded-lg hover:bg-slate-100"
              onClick={toggleMenu}
            >
              <Home size={20} className="mr-3" />
              <span className="font-medium">Explore</span>
            </Link>
            
            <Link 
              to="/community"
              className="flex items-center p-3 rounded-lg hover:bg-slate-100"
              onClick={toggleMenu}
            >
              <Users size={20} className="mr-3" />
              <span className="font-medium">Community</span>
            </Link>
            
            <Link 
              to="/join-trips"
              className="flex items-center p-3 rounded-lg hover:bg-slate-100"
              onClick={toggleMenu}
            >
              <Calendar size={20} className="mr-3" />
              <span className="font-medium">Join Trips</span>
            </Link>
            
            <Link 
              to="/create-trip"
              className="flex items-center p-3 rounded-lg hover:bg-slate-100 ml-6"
              onClick={toggleMenu}
            >
              <span className="font-medium">Create a Trip</span>
            </Link>
            
            <Link 
              to="/forum"
              className="flex items-center p-3 rounded-lg hover:bg-slate-100"
              onClick={toggleMenu}
            >
              <MessageSquare size={20} className="mr-3" />
              <span className="font-medium">Forum</span>
            </Link>
            
            <Link 
              to="/profile"
              className="flex items-center p-3 rounded-lg hover:bg-slate-100"
              onClick={toggleMenu}
            >
              <User size={20} className="mr-3" />
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      )}

      {isMobile && !isMenuOpen && (
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
