import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Navbar />
      <Hero />
      <ServiceGrid />
      <FeatureCards />
      <ContactForm />
      <Footer />
    </main>
  );
}