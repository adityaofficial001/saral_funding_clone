import { motion } from 'framer-motion';

const PartnersCarousel = () => {
  const partners = [
    { name: 'SBI', color: '#22409A' },
    { name: 'HDFC', color: '#004C8F' },
    { name: 'ICICI', color: '#B02A30' },
    { name: 'Axis', color: '#97144D' },
    { name: 'Kotak', color: '#ED1C24' },
    { name: 'PNB', color: '#DE1F26' },
    { name: 'BOB', color: '#F47920' },
    { name: 'Canara', color: '#FFD500' },
    { name: 'Union', color: '#E31B23' },
    { name: 'IDFC', color: '#9C1F2E' },
    { name: 'Yes Bank', color: '#00529B' },
    { name: 'IndusInd', color: '#98002E' },
  ];

  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <motion.p 
          className="text-center text-muted-foreground text-sm uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Partnered with India's Leading Banks
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        {/* Scrolling container */}
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div 
                className="text-2xl font-bold"
                style={{ color: partner.color }}
              >
                {partner.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
