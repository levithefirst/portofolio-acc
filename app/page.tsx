import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import {
  About,
  Services,
  Clients,
  Stats,
  Series,
  Highlights,
  Portfolios,
  Contact,
} from "@/components/Sections";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Stats />
      <Series />
      <Highlights />
      <Portfolios />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
