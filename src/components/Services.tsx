import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, TreePine, Recycle, GraduationCap, CloudRain, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import trainingImage from "@/assets/training-education.jpg";
import agroforestryImage from "@/assets/agroforestry-restoration.jpg";
import compostImage from "@/assets/compost-soil.jpg";

const Services = () => {
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

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Sprout,
      title: "Farming & Production",
      description: "We specialize in high-value crops including Hass avocado, tomatoes, and other horticultural products using sustainable farming practices.",
      image: trainingImage,
      features: ["Hass Avocado Cultivation", "Tomato Production", "Horticultural Crops", "Organic Farming Methods"],
      badge: "Core Service",
      color: "success"
    },
    {
      icon: TreePine,
      title: "Agroforestry & Restoration",
      description: "Through tree nursery beds and forest restoration activities, we contribute to biodiversity conservation and landscape restoration.",
      image: agroforestryImage,
      features: ["Tree Nursery Management", "Forest Restoration", "Biodiversity Conservation", "Landscape Rehabilitation"],
      badge: "Environmental",
      color: "default"
    },
    {
      icon: Recycle,
      title: "Composting & Soil Health",
      description: "We produce organic compost tailored to improve soil fertility, reduce chemical inputs, and support sustainable farming.",
      image: compostImage,
      features: ["Organic Compost Production", "Soil Fertility Improvement", "Waste Management", "Natural Fertilizers"],
      badge: "Sustainability",
      color: "warning"
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "We train and mentor youth in agribusiness, equipping them with skills in climate-smart agriculture and value chain development.",
      image: trainingImage,
      features: ["Youth Mentorship", "Agribusiness Training", "Skills Development", "Leadership Programs"],
      badge: "Education",
      color: "secondary"
    },
    {
      icon: CloudRain,
      title: "Climate-Smart Agribusiness",
      description: "We integrate innovative, eco-friendly practices that enhance productivity while building resilience against climate change.",
      image: agroforestryImage,
      features: ["Climate Adaptation", "Sustainable Practices", "Innovation Integration", "Resilience Building"],
      badge: "Innovation",
      color: "default"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Our <span className="gradient-text">Work & Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              We operate across multiple interconnected areas of agriculture and environmental sustainability, 
              creating comprehensive solutions for Rwanda's agricultural transformation.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover-lift group">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
                    <div className={`relative h-80 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant={service.color as any} className="text-xs font-medium">
                          {service.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-hero rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <service.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h3>
                          <div className="w-12 h-1 bg-gradient-hero rounded-full mt-2"></div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-fit group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;