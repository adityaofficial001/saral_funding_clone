import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Hero from '@/components/home/Hero';
import PartnersCarousel from '@/components/home/PartnersCarousel';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import LoanTypes from '@/components/home/LoanTypes';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnersCarousel />
      <WhyChooseUs />
      <LoanTypes />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
