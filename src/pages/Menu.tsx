import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants';

const CATEGORIES = ['Appetizers', 'Main Course', 'Desserts', 'Wines'] as const;

export default function Menu() {
  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Selection</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Menu</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light italic">
            "A curated collection of culinary masterpieces, crafted with passion and precision."
          </p>
        </motion.div>
      </header>

      <div className="max-w-5xl mx-auto px-6 space-y-32">
        {CATEGORIES.map((category) => (
          <section key={category}>
            <div className="flex items-center gap-8 mb-12">
              <h2 className="text-3xl font-serif font-bold text-gold shrink-0">{category}</h2>
              <div className="h-px w-full bg-linear-to-r from-gold/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {MENU_ITEMS.filter(item => item.category === category).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex gap-6"
                >
                  <div className="w-24 h-24 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-serif font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                      <span className="text-gold font-bold ml-4">{item.price}</span>
                    </div>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
              {/* Fallback items if category is empty in constants */}
              {MENU_ITEMS.filter(item => item.category === category).length === 0 && (
                <p className="text-white/20 italic text-sm">Seasonal selections coming soon...</p>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Wine List CTA */}
      <section className="mt-32 bg-midnight-light py-20 text-center px-6 border-y border-white/5">
        <h2 className="text-3xl font-serif font-bold mb-6">The Wine Cellar</h2>
        <p className="text-white/50 max-w-xl mx-auto mb-10 font-light">
          Our sommelier has curated an extensive collection of vintage wines from the world's most prestigious vineyards.
        </p>
        <button className="px-10 py-4 border border-gold text-gold uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-midnight transition-all">
          Download Wine List (PDF)
        </button>
      </section>
    </div>
  );
}
