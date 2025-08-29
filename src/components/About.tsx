import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Award, TrendingUp, Users, CheckCircle } from "lucide-react";
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
    { icon: CheckCircle, title: "Sustainability", desc: "Promoting eco-friendly and regenerative agricultural practices" },
    { icon: Users, title: "Youth Empowerment", desc: "Unlocking the potential of young people as drivers of innovation" },
    { icon: TrendingUp, title: "Innovation", desc: "Adopting climate-smart and modern farming approaches" },
    { icon: Heart, title: "Community Impact", desc: "Enhancing livelihoods while conserving nature" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-earth">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              About <span className="gradient-text">Youth Agro Visionary Farm</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              A dynamic and youth-led agribusiness company legally registered with the Rwanda Development Board (RDB) in 2024, 
              committed to transforming Rwanda's agriculture sector through innovation and sustainability.
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
                To build a generation of visionary youth agripreneurs who transform agriculture 
                into a sustainable, profitable, and climate-resilient sector in Rwanda.
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
                To empower youth and communities through sustainable farming, agribusiness training, 
                and conservation initiatives that create jobs, improve food security, and protect the environment.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift group">
            <CardHeader>
              <div className="mx-auto p-4 bg-forest-green rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-primary-foreground" />
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
                Transforming Agriculture Across <span className="gradient-text">Rwanda</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We operate across multiple interconnected areas of agriculture and environmental sustainability, 
                from farming high-value crops to training the next generation of agripreneurs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our integrated approach combines modern farming techniques with traditional knowledge, 
                ensuring sustainable practices that benefit both farmers and the environment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Climate-Smart</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Youth-Led</span>
                <span className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium">Sustainable</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">2024</div>
                <div className="text-sm text-muted-foreground">Founded & Registered</div>
                <div className="text-xs text-muted-foreground/60">with RDB</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable Practices</div>
                <div className="text-xs text-muted-foreground/60">Certified methods</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <Users className="h-8 w-8 text-secondary-foreground mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Active Partners</div>
                <div className="text-xs text-muted-foreground/60">Community network</div>
              </div>
              
              <div className="text-center p-6 glass-card rounded-xl hover-lift">
                <Target className="h-8 w-8 text-forest-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">5</div>
                <div className="text-sm text-muted-foreground">Core Focus Areas</div>
                <div className="text-xs text-muted-foreground/60">Integrated approach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;