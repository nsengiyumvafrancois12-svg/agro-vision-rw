import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('vision-mission');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision-mission" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Our <span className="gradient-text">Vision & Mission</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`overflow-hidden border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-hero rounded-xl mr-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <Badge variant="success" className="mb-2">Vision</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower every Rwandan smallholder farmer to make data-driven decisions, increase productivity, 
                reduce losses, and earn from the digital value of their farm data—creating a climate-smart, inclusive, 
                and profitable agricultural ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className={`overflow-hidden border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-hero rounded-xl mr-4">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Mission</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Provide accessible, real-time agricultural insights and smart farming tools through AI and IoT 
                technologies, while ensuring fair data ownership, compensation, and digital inclusion for youth 
                and women farmers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
