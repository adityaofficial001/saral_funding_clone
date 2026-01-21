import { motion } from 'framer-motion';
import { TrendingDown, Shield, Users, Zap, Award, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingDown,
      title: 'Lowest Interest Rates',
      description: 'We negotiate with 50+ banks to get you the most competitive interest rates in the market.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Shield,
      title: 'Zero Hidden Charges',
      description: 'Complete transparency in all fees and charges. No surprises, just honest service.',
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: Users,
      title: 'Personalized Solutions',
      description: 'Our experts analyze your profile to recommend the best loan options for your needs.',
      color: 'bg-success/10 text-success',
    },
    {
      icon: Zap,
      title: 'Quick Approval',
      description: 'Get pre-approval within 24 hours. Our streamlined process saves you time.',
      color: 'bg-warning/10 text-warning',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Our certified financial advisors guide you through every step of the loan process.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to answer your queries and resolve issues.',
      color: 'bg-accent/10 text-accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Making Your Loan Journey{' '}
            <span className="text-primary">Simple & Transparent</span>
          </h2>
          <p className="text-muted-foreground">
            We're committed to helping you achieve your financial goals with personalized 
            loan solutions and exceptional service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
