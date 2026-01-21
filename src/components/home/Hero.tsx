import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const benefits = [
    'Lowest Interest Rates',
    'Quick Approval',
    '50+ Banking Partners',
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light via-white to-white" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🏦 Trusted by 50,000+ Customers
            </motion.span>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get Your Dream{' '}
              <span className="text-primary">Home Loan</span>{' '}
              at the Best Rates
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Compare offers from 50+ banks and NBFCs. Get the lowest interest rates, 
              transparent fees, and personalized loan solutions tailored just for you.
            </motion.p>

            {/* Benefits */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <span 
                  key={index}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {benefit}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-orange btn-shine group"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/calculator">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate EMI
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div>
                <p className="text-3xl font-bold text-primary">₹500Cr+</p>
                <p className="text-sm text-muted-foreground">Loans Disbursed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Banking Partners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Approval Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main card */}
              <motion.div 
                className="bg-white rounded-3xl shadow-card p-8 relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-light rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">🏠</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Your Dream Home</p>
                    <p className="text-2xl font-bold text-navy">₹75,00,000</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                    <span className="text-sm text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold text-primary">8.5% p.a.</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                    <span className="text-sm text-muted-foreground">Monthly EMI</span>
                    <span className="font-semibold text-navy">₹65,432</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                    <span className="text-sm text-muted-foreground">Tenure</span>
                    <span className="font-semibold text-navy">20 Years</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-success/10 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                  <div>
                    <p className="text-sm font-medium text-success">Pre-Approved!</p>
                    <p className="text-xs text-muted-foreground">You're eligible for this loan</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-orange"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-3xl font-bold text-white">8.5%</span>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-soft p-4 flex items-center gap-3"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Approved Today</p>
                  <p className="text-sm font-semibold text-navy">234 Loans</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
