import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Impact1K from "@/components/Impact1K";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Technology />
        <Services />
        <Impact1K />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
