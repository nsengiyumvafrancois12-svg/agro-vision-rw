import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Smartphone, Cloud, Store, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import droneImage from "@/assets/drone-agriculture.jpg";
import sensorImage from "@/assets/soil-sensor-equipment.jpg";
import farmersImage from "@/assets/farmers-happy-mobile.webp";

const Technology = () => {
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

    const section = document.getElementById('technology');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      icon: Brain,
      title: "AI Platform",
      description: "Crop disease detection, yield predictions, and precision farming recommendations powered by advanced artificial intelligence.",
      image: droneImage,
      badge: "AI-Powered"
    },
    {
      icon: Cpu,
      title: "IoT Sensors",
      description: "Real-time monitoring of soil moisture, pH, NPK nutrients, temperature, and salinity with automated irrigation control.",
      image: sensorImage,
      badge: "Smart Hardware"
    },
    {
      icon: Smartphone,
      title: "Mobile Platform",
      description: "USSD & app interface accessible to all farmers, including those without smartphones, ensuring digital inclusion.",
      image: farmersImage,
      badge: "Accessible"
    },
    {
      icon: Cloud,
      title: "Cloud & Analytics",
      description: "Secure data storage, processing, anonymization, and monetization with revenue sharing for farmers.",
      badge: "Data Security"
    },
    {
      icon: Store,
      title: "Marketplace Integration",
      description: "Direct connections between farmers and buyers, ensuring fair prices and 25% higher income for producers.",
      badge: "Market Access"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Hyper-local weather forecasts and AI-driven insights for optimal planting, irrigation, and harvesting decisions.",
      badge: "Smart Insights"
    }
  ];

  return (
    <section id="technology" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge variant="success" className="text-sm font-medium mb-4">
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Cutting-Edge <span className="gradient-text">Agricultural Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Our comprehensive technology platform combines AI, IoT, and mobile accessibility to transform 
              traditional farming into a data-driven, efficient, and profitable enterprise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              className={`overflow-hidden border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover-lift group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {tech.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tech.image} 
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <Badge variant="default" className="absolute top-4 left-4 text-xs">
                      {tech.badge}
                    </Badge>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-hero rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <tech.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{tech.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className={`text-center p-8 rounded-2xl bg-gradient-hero hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}>
            <div className="text-5xl font-bold text-primary-foreground mb-2">30%+</div>
            <div className="text-sm text-primary-foreground/90 font-medium uppercase tracking-wide">Yield Improvement</div>
          </div>
          <div className={`text-center p-8 rounded-2xl bg-gradient-hero hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.9s' }}>
            <div className="text-5xl font-bold text-primary-foreground mb-2">65%</div>
            <div className="text-sm text-primary-foreground/90 font-medium uppercase tracking-wide">Water Savings</div>
          </div>
          <div className={`text-center p-8 rounded-2xl bg-gradient-hero hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '1.0s' }}>
            <div className="text-5xl font-bold text-primary-foreground mb-2">25%</div>
            <div className="text-sm text-primary-foreground/90 font-medium uppercase tracking-wide">Income Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
