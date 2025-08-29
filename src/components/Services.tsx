import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, TreePine, Recycle, GraduationCap, CloudRain, ArrowRight } from "lucide-react";
import trainingImage from "@/assets/training-education.jpg";
import agroforestryImage from "@/assets/agroforestry-restoration.jpg";
import compostImage from "@/assets/compost-soil.jpg";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Farming & Production",
      description: "We specialize in high-value crops including Hass avocado, tomatoes, and other horticultural products using sustainable farming practices.",
      image: trainingImage,
      features: ["Hass Avocado Cultivation", "Tomato Production", "Horticultural Crops", "Organic Farming Methods"]
    },
    {
      icon: TreePine,
      title: "Agroforestry & Restoration",
      description: "Through tree nursery beds and forest restoration activities, we contribute to biodiversity conservation and landscape restoration.",
      image: agroforestryImage,
      features: ["Tree Nursery Management", "Forest Restoration", "Biodiversity Conservation", "Landscape Rehabilitation"]
    },
    {
      icon: Recycle,
      title: "Composting & Soil Health",
      description: "We produce organic compost tailored to improve soil fertility, reduce chemical inputs, and support sustainable farming.",
      image: compostImage,
      features: ["Organic Compost Production", "Soil Fertility Improvement", "Waste Management", "Natural Fertilizers"]
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "We train and mentor youth in agribusiness, equipping them with skills in climate-smart agriculture and value chain development.",
      image: trainingImage,
      features: ["Youth Mentorship", "Agribusiness Training", "Skills Development", "Leadership Programs"]
    },
    {
      icon: CloudRain,
      title: "Climate-Smart Agribusiness",
      description: "We integrate innovative, eco-friendly practices that enhance productivity while building resilience against climate change.",
      image: agroforestryImage,
      features: ["Climate Adaptation", "Sustainable Practices", "Innovation Integration", "Resilience Building"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Work & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We operate across multiple interconnected areas of agriculture and environmental sustainability, 
            creating comprehensive solutions for Rwanda's agricultural transformation.
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className={`overflow-hidden border-border/50 shadow-soft hover:shadow-strong transition-all duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-hero rounded-lg mr-4">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-fit group">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;