import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Brain, Smartphone, Database, Users, CheckCircle, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Brain, title: "AI & Innovation", desc: "Advanced technology for smarter farming decisions" },
    { icon: Smartphone, title: "Digital Inclusion", desc: "Accessible platforms for all farmers, even without smartphones" },
    { icon: Database, title: "Fair Data Economy", desc: "Farmers benefit from their own data through revenue sharing" },
    { icon: CheckCircle, title: "Sustainability", desc: "Climate-smart practices that protect the environment" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-earth">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge variant="success" className="text-sm font-medium mb-4 inline-block">
              Welcome to Smart Hinga
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Where Innovation Meets <span className="gradient-text">Agriculture</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              We are dedicated to empowering farmers, agribusinesses, and communities through smart, data-driven, 
              and climate-resilient farming solutions for Rwanda's agricultural transformation.
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Card className="text-center hover-lift group">
            <CardHeader>
              <div className="mx-auto p-4 bg-gradient-hero rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To empower every Rwandan smallholder farmer to make data-driven decisions, increase productivity, 
                and earn from the digital value of their farm data—creating a climate-smart, inclusive, and 
                profitable agricultural ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift group">
            <CardHeader>
              <div className="mx-auto p-4 bg-gradient-accent rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Provide accessible, real-time agricultural insights and smart farming tools through AI and IoT 
                technologies, while ensuring fair data ownership, compensation, and digital inclusion for youth 
                and women farmers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift group">
            <CardHeader>
              <div className="mx-auto p-4 bg-forest-green rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl font-bold">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-2 text-left">
                    <value.icon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground text-sm">{value.title}</div>
                      <div className="text-xs text-muted-foreground">{value.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={`glass-card rounded-2xl p-8 lg:p-12 shadow-strong border border-border/50 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                Technology That Transforms <span className="gradient-text">Livelihoods</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At the heart of our work is a belief that technology can unlock the full potential of Rwanda's 
                agricultural sector. Through advanced AI tools, IoT sensors, real-time insights, and farmer-focused 
                digital platforms, we help farmers increase productivity, reduce losses, adapt to climate change, 
                and earn more from their hard work.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're looking to monitor your crops, access hyper-local weather data, automate irrigation, 
                detect diseases early, or connect directly with buyers, we provide the tools and support you need 
                to grow smarter and succeed.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">AI-Powered</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">IoT Enabled</span>
                <span className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium">Data-Driven</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Disease Detection</div>
                <div className="text-xs text-muted-foreground/60">Success rate</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">25%</div>
                <div className="text-sm text-muted-foreground">Higher Income</div>
                <div className="text-xs text-muted-foreground/60">Through market access</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <Smartphone className="h-8 w-8 text-secondary-foreground mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Accessible</div>
                <div className="text-xs text-muted-foreground/60">USSD & mobile app</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <Database className="h-8 w-8 text-forest-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Fair</div>
                <div className="text-sm text-muted-foreground">Data Economy</div>
                <div className="text-xs text-muted-foreground/60">Revenue sharing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;