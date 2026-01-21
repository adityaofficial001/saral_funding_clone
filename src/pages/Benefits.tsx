import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, TrendingDown, Shield, Zap } from 'lucide-react';

const benefits = [
  { icon: TrendingDown, title: 'Lowest Interest Rates', description: 'Access rates starting from 8.5% p.a. through our network of 50+ banking partners.' },
  { icon: Shield, title: 'Complete Transparency', description: 'No hidden fees or charges. We show you exactly what you pay, upfront.' },
  { icon: Zap, title: '24-Hour Pre-Approval', description: 'Get your loan pre-approved within 24 hours with minimal documentation.' },
  { icon: Users, title: 'Dedicated Relationship Manager', description: 'A personal advisor guides you through the entire loan process.' },
  { icon: Award, title: 'Best Rate Guarantee', description: "If you find a lower rate elsewhere, we'll match it or beat it." },
  { icon: CheckCircle2, title: 'End-to-End Support', description: 'From application to disbursement, we handle all paperwork and follow-ups.' },
];

const Benefits = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Why Saral Funding</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Benefits of Choosing Us</h1>
            <p className="text-muted-foreground">We're committed to making your loan journey simple, transparent, and rewarding.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div key={index} className="p-8 bg-white rounded-2xl shadow-soft hover:shadow-card transition-all" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6"><benefit.icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-gradient-to-r from-primary to-teal-dark rounded-3xl p-12 text-center text-white" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Join 50,000+ customers who have found their perfect loan with Saral Funding.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/calculator" className="px-8 py-3 bg-accent hover:bg-accent/90 rounded-full font-medium transition-colors">Calculate EMI</a>
              <a href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Benefits;
