import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Users, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-earth">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Ready to join our mission of transforming agriculture through youth innovation? 
              Contact us to learn more about our programs or partnership opportunities.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-xl hover-lift">
              <div className="p-4 bg-gradient-hero rounded-xl w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Youth Programs</h3>
              <p className="text-muted-foreground text-sm">Join our training and mentorship initiatives</p>
            </div>
          </div>
          
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8 rounded-xl hover-lift">
              <div className="p-4 bg-gradient-accent rounded-xl w-fit mx-auto mb-4">
                <Handshake className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Partnerships</h3>
              <p className="text-muted-foreground text-sm">Collaborate with us on sustainable agriculture</p>
            </div>
          </div>
          
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-8 rounded-xl hover-lift">
              <div className="p-4 bg-forest-green rounded-xl w-fit mx-auto mb-4">
                <Send className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Get Support</h3>
              <p className="text-muted-foreground text-sm">Need help with agribusiness development?</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
              Let's Transform Agriculture <span className="gradient-text">Together</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Kigali, Rwanda</p>
                  <p className="text-xs text-muted-foreground/80">East Africa's Technology Hub</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+250784741836</p>
                  <p className="text-xs text-muted-foreground/80">Available during business hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">yavf2020@gmail.com</p>
                  <p className="text-xs text-muted-foreground/80">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <Card className="glass-card border-border/50 shadow-strong hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Handshake className="h-6 w-6 text-primary mt-1" />
                  <h4 className="font-semibold text-foreground">Partnership Opportunities</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We welcome partnerships with organizations, institutions, and individuals who share our vision 
                  of sustainable agriculture and youth empowerment. Together, we can create lasting impact in Rwanda's agricultural sector.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <Card className="glass-card border-border/50 shadow-strong">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Send Us a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address" 
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number" 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?" 
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry or how you'd like to get involved..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;