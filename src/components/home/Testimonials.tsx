import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      company: 'Kumar Enterprises',
      image: 'RK',
      rating: 5,
      text: 'Saral Funding made my home loan journey incredibly smooth. They got me the best rate from HDFC Bank at 8.5% when others quoted 9.2%. The team was professional and kept me updated throughout.',
      loanType: 'Home Loan',
      amount: '₹45 Lakhs',
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Tech Solutions Ltd',
      image: 'PS',
      rating: 5,
      text: 'I was skeptical at first, but the team at Saral Funding exceeded my expectations. They compared offers from 10+ banks and helped me save over ₹3 lakhs in interest over my loan tenure.',
      loanType: 'Home Loan',
      amount: '₹72 Lakhs',
    },
    {
      name: 'Mohammed Ali',
      role: 'Retail Business Owner',
      company: 'Ali Textiles',
      image: 'MA',
      rating: 5,
      text: 'The MSME loan process was surprisingly quick. I got my funds disbursed within 10 days. Their knowledge of government schemes helped me get a subsidized rate. Highly recommended!',
      loanType: 'MSME Loan',
      amount: '₹25 Lakhs',
    },
    {
      name: 'Sneha Patel',
      role: 'Doctor',
      company: 'City Hospital',
      image: 'SP',
      rating: 5,
      text: 'Used Saral Funding for a mortgage loan to expand my clinic. The team understood my requirements perfectly and got me approval from Axis Bank in just 5 days. Excellent service!',
      loanType: 'Mortgage Loan',
      amount: '₹1.2 Crores',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who have achieved their financial goals with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-card p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-teal-light rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="px-4 py-2 bg-secondary rounded-full">
                      <span className="text-sm font-medium text-primary">{testimonials[currentIndex].loanType}</span>
                    </div>
                    <div className="px-4 py-2 bg-secondary rounded-full">
                      <span className="text-sm font-medium text-foreground">{testimonials[currentIndex].amount}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
