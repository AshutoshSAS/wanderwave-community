
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}: HeroProps) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center max-w-4xl">
          {title}
        </h1>
        
        <p className="animate-fade-in-up animation-delay-100 mt-6 text-lg sm:text-xl text-white/90 text-center max-w-2xl">
          {subtitle}
        </p>
        
        <div className="mt-10 animate-fade-in-up animation-delay-200">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-ocean-500 hover:from-teal-600 hover:to-ocean-600 text-lg group"
          >
            <Link to={ctaLink} className="flex items-center gap-2">
              {ctaText}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
