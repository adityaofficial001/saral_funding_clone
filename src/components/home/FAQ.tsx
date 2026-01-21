import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the minimum credit score required for a home loan?',
      answer: 'Most banks require a minimum credit score of 650-700 for home loan approval. However, we work with lenders who may consider applications with lower scores on a case-by-case basis. A higher credit score typically helps you secure better interest rates.',
    },
    {
      question: 'How long does the loan approval process take?',
      answer: 'With Saral Funding, you can expect pre-approval within 24-48 hours. The complete loan disbursement typically takes 7-15 working days, depending on the documentation and property verification process.',
    },
    {
      question: 'What documents are required for a home loan?',
      answer: 'Basic documents include: Identity proof (Aadhaar, PAN), Address proof, Income proof (salary slips/ITR for last 2-3 years), Bank statements (6 months), Property documents, and Passport-size photographs. Additional documents may be required based on your profile.',
    },
    {
      question: 'Can I prepay my loan without any charges?',
      answer: 'For floating rate loans, banks cannot charge prepayment penalties as per RBI guidelines. For fixed rate loans, there might be a prepayment charge of 2-3%. We help you understand all charges upfront before you commit.',
    },
    {
      question: 'How does Saral Funding help me get better rates?',
      answer: "We partner with 50+ banks and NBFCs. By submitting your profile to multiple lenders simultaneously, we create competition for your loan application. This helps us negotiate the best possible rates - often 0.25% to 0.5% lower than what you'd get directly.",
    },
    {
      question: 'Is there any fee for using Saral Funding services?',
      answer: 'Our basic comparison and consultation services are absolutely free. We earn a commission from banks when your loan is disbursed, so you never pay us directly. Some premium services like expedited processing may have nominal charges.',
    },
    {
      question: 'Can I transfer my existing home loan to get better rates?',
      answer: 'Yes! Balance transfer is a great way to save on interest. If your current rate is higher than market rates, we can help you transfer to a bank offering lower rates. We handle all the paperwork and coordination between banks.',
    },
    {
      question: 'What is the maximum loan amount I can get?',
      answer: 'Loan eligibility depends on your income, existing obligations, credit score, and property value. Generally, you can get up to 80-90% of property value as a loan. Use our EMI calculator to get an estimate of your eligibility.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div 
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked{' '}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Get answers to common questions about home loans, our services, 
              and the loan application process.
            </p>
            <div className="p-6 bg-white rounded-2xl shadow-soft">
              <p className="text-foreground mb-4">
                Still have questions? Our loan experts are here to help.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['A', 'B', 'C'].map((initial, i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium border-2 border-white"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Talk to an expert</p>
                  <a href="tel:+919876543210" className="text-sm text-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left text-navy hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
