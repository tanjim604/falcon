import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import FeatureCards from '@/components/FeatureCards';
import WhyUs from '@/components/WhyUs';
import SubContract from '@/components/SubContract'; // Added this import
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <WhyUs />
      <ServiceGrid />
      <SubContract /> 
      <ContactForm />
      <Footer />
    </main>
  );
}