import { useState, useEffect, useRef } from "react";
import { 
  GraduationCap, 
  Lightbulb, 
  Rocket, 
  Users, 
  ChevronDown,
  Target,
  TrendingUp,
  Globe,
  Briefcase,
  DollarSign,
  Handshake,
  HeartHandshake,
  Network,
  Calendar
} from "lucide-react";
import impact1kLogo from "@/assets/impact1k-logo.jpg";

const Impact1K = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const services = [
    {
      id: "capacity-building",
      icon: GraduationCap,
      title: "Capacity Building",
      subtitle: "Enhance institutional capabilities through tailored training and development programmes",
      color: "from-blue-500 to-cyan-500",
      activities: [
        {
          icon: Target,
          title: "Impact Training Programmes",
          description: "Deliver hands-on learning in innovation, systems thinking, and entrepreneurship. For example, we run workshops on human-centered design for public servants to redesign citizen service delivery."
        },
        {
          icon: Briefcase,
          title: "Toolkits for Practitioners",
          description: "Provide locally tailored frameworks for innovation and organisational development. For instance, we provide a step-by-step guide for NGOs to measure and manage their social return on investment (SROI)."
        },
        {
          icon: Users,
          title: "Peer Exchange Circles",
          description: "Enable peer learning between institutions working on similar transformation goals. This involves facilitating virtual roundtables where city mayors from different regions share strategies for digital transformation."
        },
        {
          icon: TrendingUp,
          title: "Intrapreneur Coaching",
          description: "Support Impact Makers within institutions to champion innovation from within. For example, we coach employees in large corporations to develop and pitch internal social innovation projects."
        }
      ]
    },
    {
      id: "open-innovation",
      icon: Lightbulb,
      title: "Open Innovation",
      subtitle: "Leverage open innovation methodologies to co-develop solutions with diverse stakeholders",
      color: "from-purple-500 to-pink-500",
      activities: [
        {
          icon: Lightbulb,
          title: "GovTech Hackathons",
          description: "Mobilise diverse minds to co-create digital and social solutions to public needs. We organize a 48-hour event where developers, students, and civil servants prototype apps to improve public transportation access."
        },
        {
          icon: Globe,
          title: "Cross-Border Innovation Scouting",
          description: "Find proven solutions in other regions and adapt them for local contexts. This includes identifying a successful waste management model from one country and adapting its business model for implementation in another."
        },
        {
          icon: GraduationCap,
          title: "University Partnerships",
          description: "Tap into student talent and research to co-develop prototypes and insights. We collaborate with engineering faculties to have student teams build and test prototypes for affordable solar-powered irrigation systems."
        },
        {
          icon: Target,
          title: "Public Innovation Labs",
          description: "Set up long-term labs to pilot, iterate, and embed bold public solutions. For example, we establish a physical lab where citizens and government officials can co-design and test new digital literacy programs before city-wide rollout."
        }
      ]
    },
    {
      id: "entrepreneurial-support",
      icon: Rocket,
      title: "Entrepreneurial Support",
      subtitle: "Support social entrepreneurs in scaling solutions that address public sector challenges",
      color: "from-orange-500 to-red-500",
      activities: [
        {
          icon: Rocket,
          title: "Startup Programmes",
          description: "Engage in programmes that provide mentorship, resources, and networks to launch and grow your venture."
        },
        {
          icon: Target,
          title: "Incubation Tracks",
          description: "Turn your early-stage idea into a tested venture with expert support. A 3-month program where founders validate their concept and build a minimum viable product (MVP)."
        },
        {
          icon: TrendingUp,
          title: "Acceleration Programmes",
          description: "Grow your impact startup via local and global growth-stage accelerators. A 4-month intensive program focusing on scaling operations and preparing for a seed funding round."
        },
        {
          icon: Handshake,
          title: "Corporate & Public Pilots",
          description: "Join open innovation calls and pilot with leading institutions or companies. We connect startups with a corporate partner to pilot their clean-tech solution in a real-world factory setting."
        },
        {
          icon: DollarSign,
          title: "Investment Readiness",
          description: "Get training, mentoring, and exposure to raise funding and scale effectively. This includes organizing investor pitch sessions and providing financial modeling workshops to refine your funding proposal."
        },
        {
          icon: Briefcase,
          title: "Mentoring & Support",
          description: "Access personal coaching from entrepreneurs, investors, and sector experts. We match first-time founders with seasoned entrepreneurs for monthly one-on-one strategy sessions."
        },
        {
          icon: DollarSign,
          title: "Access to Finance",
          description: "Connect with impact funds, angel networks, and grant platforms. We host an annual 'Impact Investor Day' where curated startups pitch directly to a network of impact investors."
        },
        {
          icon: Target,
          title: "Business Model Tools",
          description: "Use proven templates to strengthen, pivot, or scale your social enterprise. Running workshops using the Business Model Canvas specifically adapted for social enterprises."
        },
        {
          icon: HeartHandshake,
          title: "Inclusive Growth",
          description: "Navigate equity, DEI, and sustainability challenges in your business journey. We provide specialized workshops on building a diverse supply chain and implementing fair wage policies within a growing venture."
        }
      ]
    },
    {
      id: "community-events",
      icon: Users,
      title: "Community & Events",
      subtitle: "Join a thriving community of 500k+ Impact Makers, dedicated to reshaping the future",
      color: "from-green-500 to-emerald-500",
      activities: [
        {
          icon: Globe,
          title: "Global Network Access",
          description: "Be part of a vibrant community spanning 120+ Impact Hubs in over 60 countries. Connect with a social entrepreneur in Berlin or a policy maker in Singapore through our digital platform."
        },
        {
          icon: Calendar,
          title: "Impact Meetups",
          description: "Connect with fellow Impact Makers through networking and learning sessions. We host monthly themed breakfasts on topics like sustainable fashion or ethical AI, fostering local connections."
        },
        {
          icon: Network,
          title: "Thematic Circles",
          description: "Build communities around global challenges like the SDGs, DEI, and the circular economy. We facilitate a dedicated 'Circular Economy Circle' where members share resources and collaborate on joint advocacy campaigns."
        },
        {
          icon: Calendar,
          title: "Event Hosting Support",
          description: "Host your own workshops, talks, or community events in a space designed for impact. We provide our members with discounted access to our meeting rooms and event production support to amplify their own initiatives."
        }
      ]
    }
  ];

  const buildTogether = [
    {
      icon: TrendingUp,
      title: "Inclusive Growth",
      description: "Connect entrepreneurs, institutions, and investors to grow markets that include everyone. Co-host a job fair focused on green skills, creating new employment pathways in the renewable energy sector."
    },
    {
      icon: Target,
      title: "Informed Policy",
      description: "Align governments, businesses, and communities so strategies reflect real needs and evidence from the ground. Synthesizing insights from our entrepreneur network into a white paper that influences local economic development policy."
    },
    {
      icon: Network,
      title: "Sustainable Value Chains",
      description: "Coordinate across sectors to reduce risk and spark innovation. Facilitate a partnership between a sustainable farm, a food processing company, and a retail chain to create a transparent, farm-to-table supply chain."
    },
    {
      icon: Handshake,
      title: "Collaborative Partnerships",
      description: "Create spaces where diverse actors align around shared goals and drive coordinated action. Form a multi-stakeholder coalition to tackle urban air pollution, combining data from universities, policy levers from government, and tech solutions from startups."
    },
    {
      icon: Target,
      title: "Visible Impact",
      description: "Make impact tangible and trusted. Co-create an annual impact report that showcases the collective outcomes achieved by our network, attracting further investment and policy support for the ecosystem."
    }
  ];

  return (
    <section
      id="impact1k"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <img src={impact1kLogo} alt="Impact1K+ Logo" className="h-32 w-32 object-contain animate-float" />
          </div>
          <h2 className="heading-gradient mb-4">
            Introducing the Impact1K+ Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our flagship initiative designed to catalyze systemic change by empowering a new generation of 
            impact-driven institutions and entrepreneurs through Capacity Building, Open Innovation, 
            Entrepreneurial Support, and Community & Events.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;
            
            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  {/* Service Header - Clickable */}
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-8 flex items-center justify-between hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex items-center space-x-6">
                      <div className={`p-4 bg-gradient-to-br ${service.color} rounded-xl`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-8 pt-0 grid md:grid-cols-2 gap-6">
                      {service.activities.map((activity, actIndex) => {
                        const ActivityIcon = activity.icon;
                        return (
                          <div
                            key={actIndex}
                            className="glass-card p-6 rounded-xl hover-lift"
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`p-3 bg-gradient-to-br ${service.color} rounded-lg flex-shrink-0`}>
                                <ActivityIcon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">{activity.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {activity.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We Can Build Together */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What We Can Build Together
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ecosystem building turns collective ambition into coordinated action. By aligning innovation, 
              policy, and investment, we open pathways to unlock impact no actor can achieve alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildTogether.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover-lift transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 bg-gradient-to-br from-primary to-primary/70 rounded-xl w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact1K;
