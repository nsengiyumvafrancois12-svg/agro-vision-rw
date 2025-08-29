import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sprout, TreePine, Play, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding">
        <div className="max-w-5xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
              Transforming Agriculture Through{" "}
              <span className="gradient-text animate-pulse-slow">
                Youth Innovation
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed text-balance">
              Youth Agro Visionary Farm Ltd empowers young Rwandans to revolutionize agriculture 
              through sustainable farming, climate-smart practices, and ecosystem restoration for future generations.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Impact
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                onClick={() => scrollToSection('contact')}
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Join Our Mission
              </Button>
            </div>
          </div>
          
          {/* Enhanced Stats */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl hover-lift group">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-hero rounded-xl group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                    <div className="text-sm text-muted-foreground font-medium">Youth Trained</div>
                    <div className="text-xs text-muted-foreground/80">In agribusiness skills</div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-lift group">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform">
                    <Sprout className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">200+</div>
                    <div className="text-sm text-muted-foreground font-medium">Hectares Cultivated</div>
                    <div className="text-xs text-muted-foreground/80">Sustainably farmed</div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover-lift group">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-forest-green rounded-xl group-hover:scale-110 transition-transform">
                    <TreePine className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">10,000+</div>
                    <div className="text-sm text-muted-foreground font-medium">Trees Planted</div>
                    <div className="text-xs text-muted-foreground/80">For restoration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;