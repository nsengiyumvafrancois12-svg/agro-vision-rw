import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Youth Agro Visionary Farm
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dynamic and youth-led agribusiness company legally registered with the Rwanda Development Board (RDB) 
            in 2024, committed to transforming Rwanda's agriculture sector through sustainable innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-border/50 shadow-soft hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a generation of visionary youth agripreneurs who transform agriculture into a 
                sustainable, profitable, and climate-resilient sector in Rwanda.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-soft hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower youth and communities through sustainable farming, agribusiness training, 
                and conservation initiatives that create jobs, improve food security, and protect the environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-soft hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sustainability, Youth Empowerment, Innovation, and Community Impact guide 
                everything we do in transforming Rwanda's agricultural landscape.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Empowering Youth, Transforming Agriculture
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Youth Agro Visionary Farm Ltd operates across multiple interconnected areas of agriculture 
                and environmental sustainability. We specialize in high-value crops, promote agroforestry 
                and restoration, produce organic compost, and provide comprehensive training programs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our integrated approach combines climate-smart agriculture with youth empowerment, 
                creating a sustainable ecosystem that benefits both people and the environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Core Areas</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Youth Led</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">RDB</div>
                <div className="text-sm text-muted-foreground">Registered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;