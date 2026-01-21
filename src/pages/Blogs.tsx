import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  { id: 1, title: 'How to Improve Your Credit Score for Better Loan Rates', excerpt: 'Learn proven strategies to boost your credit score and qualify for the lowest interest rates.', author: 'Amit Sharma', date: 'Jan 10, 2026', category: 'Tips', image: '📊' },
  { id: 2, title: 'Home Loan vs Mortgage Loan: Which is Right for You?', excerpt: 'Understand the key differences and choose the best option for your financial needs.', author: 'Priya Patel', date: 'Jan 8, 2026', category: 'Guide', image: '🏠' },
  { id: 3, title: 'RBI Rate Cut: What It Means for Your EMI', excerpt: 'Breaking down the latest RBI policy and its impact on home loan interest rates.', author: 'Rajesh Kumar', date: 'Jan 5, 2026', category: 'News', image: '📈' },
  { id: 4, title: '5 Mistakes to Avoid When Applying for a Business Loan', excerpt: 'Common pitfalls that can hurt your loan application and how to avoid them.', author: 'Sneha Gupta', date: 'Jan 3, 2026', category: 'Tips', image: '💼' },
  { id: 5, title: 'Understanding Processing Fees and Hidden Charges', excerpt: 'A complete guide to all the fees involved in taking a home loan.', author: 'Vikram Singh', date: 'Dec 28, 2025', category: 'Guide', image: '💰' },
  { id: 6, title: 'Government Schemes for First-Time Home Buyers', excerpt: 'Explore PMAY and other subsidies that can reduce your loan burden significantly.', author: 'Anita Desai', date: 'Dec 25, 2025', category: 'Guide', image: '🏛️' },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Blog</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Financial Insights & Tips</h1>
            <p className="text-muted-foreground">Stay updated with the latest news, tips, and guides on loans and personal finance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">{blog.image}</div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">{blog.category}</span>
                  <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{blog.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blog.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blogs;
