import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, IndianRupee } from 'lucide-react';

const CalculatorPage = () => {
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [monthlyEMI, setMonthlyEMI] = useState(15000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const monthlyIncome = annualIncome / 12;
  const maxEMI = monthlyIncome * 0.5;
  const additionalEMI = Math.max(0, maxEMI - monthlyEMI);
  
  const r = interestRate / 100 / 12;
  const n = loanTenure * 12;
  const loanEligibility = additionalEMI > 0 ? (additionalEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n)) : 0;

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">EMI Calculator</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Home Loan & LAP Calculator</h1>
            <p className="text-muted-foreground">Calculate your loan eligibility and EMI based on your income and existing obligations.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div className="bg-white rounded-3xl p-8 shadow-card" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="space-y-8">
                <div>
                  <label className="flex justify-between mb-4"><span className="font-medium text-navy">Annual Income</span><span className="text-primary font-semibold">{formatCurrency(annualIncome)}</span></label>
                  <Slider value={[annualIncome]} onValueChange={(v) => setAnnualIncome(v[0])} min={300000} max={50000000} step={100000} className="w-full" />
                </div>
                <div>
                  <label className="flex justify-between mb-4"><span className="font-medium text-navy">Current Monthly EMI</span><span className="text-primary font-semibold">{formatCurrency(monthlyEMI)}</span></label>
                  <Slider value={[monthlyEMI]} onValueChange={(v) => setMonthlyEMI(v[0])} min={0} max={500000} step={5000} className="w-full" />
                </div>
                <div>
                  <label className="flex justify-between mb-4"><span className="font-medium text-navy">Loan Tenure</span><span className="text-primary font-semibold">{loanTenure} Years</span></label>
                  <Slider value={[loanTenure]} onValueChange={(v) => setLoanTenure(v[0])} min={5} max={30} step={1} className="w-full" />
                </div>
                <div>
                  <label className="flex justify-between mb-4"><span className="font-medium text-navy">Interest Rate</span><span className="text-primary font-semibold">{interestRate}% p.a.</span></label>
                  <Slider value={[interestRate]} onValueChange={(v) => setInterestRate(v[0])} min={6} max={15} step={0.1} className="w-full" />
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-gradient-to-br from-primary to-teal-dark rounded-3xl p-8 text-white" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Calculator className="w-6 h-6" /></div>
                <h3 className="text-xl font-semibold">Your Eligibility</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-white/10 rounded-xl"><p className="text-white/70 text-sm mb-1">Monthly Income</p><p className="text-2xl font-bold">{formatCurrency(monthlyIncome)}</p></div>
                <div className="p-4 bg-white/10 rounded-xl"><p className="text-white/70 text-sm mb-1">Max Allowed EMI (50%)</p><p className="text-2xl font-bold">{formatCurrency(maxEMI)}</p></div>
                <div className="p-4 bg-white/10 rounded-xl"><p className="text-white/70 text-sm mb-1">Additional EMI Available</p><p className="text-2xl font-bold">{formatCurrency(additionalEMI)}</p></div>
                <div className="p-6 bg-white rounded-xl text-navy">
                  <p className="text-muted-foreground text-sm mb-1">Estimated Loan Eligibility</p>
                  <p className="text-3xl font-bold text-primary flex items-center gap-2"><IndianRupee className="w-6 h-6" />{loanEligibility >= 100000 ? `${(loanEligibility / 100000).toFixed(2)} Lakhs` : loanEligibility.toLocaleString('en-IN')}</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-accent hover:bg-accent/90 rounded-full h-12">Apply Now</Button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CalculatorPage;
