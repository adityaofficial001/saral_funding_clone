import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast({ title: 'Message Sent!', description: "We'll get back to you within 24 hours." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Contact Us</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get in Touch</h1>
            <p className="text-muted-foreground">Have questions? Our loan experts are here to help you find the perfect solution.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                <h3 className="text-xl font-semibold text-navy mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" required className="h-12" />
                    <Input type="email" placeholder="Email Address" required className="h-12" />
                  </div>
                  <Input type="tel" placeholder="Phone Number" required className="h-12" />
                  <select className="w-full h-12 px-4 rounded-lg border border-input bg-background">
                    <option value="">Select Loan Type</option>
                    <option>Home Loan</option>
                    <option>Mortgage Loan (LAP)</option>
                    <option>MSME Loan</option>
                    <option>Business Loan</option>
                    <option>Other</option>
                  </select>
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div className="space-y-6" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              {[
                { icon: MapPin, title: 'Visit Us', lines: ['123 Financial District', 'Mumbai, Maharashtra 400001'] },
                { icon: Phone, title: 'Call Us', lines: ['+91 98765 43210', '+91 22 1234 5678'] },
                { icon: Mail, title: 'Email Us', lines: ['info@saralfunding.com', 'support@saralfunding.com'] },
                { icon: Clock, title: 'Working Hours', lines: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 10:00 AM - 4:00 PM'] },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-primary" /></div>
                  <div><h4 className="font-semibold text-navy mb-1">{item.title}</h4>{item.lines.map((line, j) => <p key={j} className="text-muted-foreground text-sm">{line}</p>)}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
