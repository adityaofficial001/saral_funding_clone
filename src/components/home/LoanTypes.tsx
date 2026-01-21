import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoanTypes = () => {
  const loanTypes = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Turn your dream of owning a home into reality. Get competitive rates starting from 8.5% p.a.',
      features: ['Up to ₹5 Crore', 'Up to 30 Years Tenure', 'Quick Disbursement'],
      rate: '8.5%',
      color: 'from-primary to-teal-dark',
      bgColor: 'bg-teal-light',
    },
    {
      icon: Building2,
      title: 'Mortgage Loan (LAP)',
      description: 'Unlock the value of your property for business expansion, education, or any financial need.',
      features: ['Up to 70% of Property Value', 'Flexible Tenure', 'Lower Interest Rates'],
      rate: '9.5%',
      color: 'from-accent to-orange-light',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Briefcase,
      title: 'MSME Loan',
      description: 'Fuel your business growth with our tailored MSME financing solutions.',
      features: ['Collateral Free Options', 'Fast Processing', 'Government Subsidies'],
      rate: '10.5%',
      color: 'from-navy to-primary',
      bgColor: 'bg-navy/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Choose the Right Loan{' '}
            <span className="text-primary">For Your Needs</span>
          </h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of loan products designed to meet your 
            diverse financial requirements.
          </p>
        </motion.div>

        {/* Loan Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className={`bg-gradient-to-r ${loan.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <loan.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{loan.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{loan.rate}</span>
                      <span className="text-white/80">p.a. onwards</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">{loan.description}</p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/calculator">
                    <Button 
                      className="w-full rounded-full bg-primary hover:bg-primary/90 text-white group"
                    >
                      Check Eligibility
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            Not sure which loan is right for you?
          </p>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              Talk to Our Experts
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanTypes;
