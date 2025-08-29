import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Sprout, TreePine } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Young farmers working in sustainable agriculture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-grow">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforming Agriculture
              <span className="block text-transparent bg-gradient-hero bg-clip-text">
                Through Youth Innovation
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Youth Agro Visionary Farm Ltd empowers young Rwandans to revolutionize agriculture 
              through sustainable farming, climate-smart practices, and ecosystem restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Explore Our Impact
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Join Our Mission
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Youth Trained</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Hectares Cultivated</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Trees Planted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;