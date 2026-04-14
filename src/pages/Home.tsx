import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-midnight via-transparent to-midnight" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Est. 2026</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Culinary Art <br />
              <span className="text-gold-gradient italic">Redefined</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Experience a symphony of flavors where tradition meets innovation in the heart of the city.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/menu"
                className="px-10 py-4 bg-gold text-midnight font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300 w-full sm:w-auto"
              >
                Explore Menu
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-white/20 hover:border-gold transition-all duration-300 uppercase tracking-widest text-sm w-full sm:w-auto"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-20 bg-linear-to-b from-gold to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold/50">Scroll</span>
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Chef's Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Signature Creations</h2>
          </div>
          <Link to="/menu" className="group flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold">
            View Full Menu <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-4/5 overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-gold transition-colors">{item.name}</h3>
              <p className="text-white/50 text-sm font-light mb-4 line-clamp-2">{item.description}</p>
              <span className="text-gold font-bold">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-midnight-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square relative z-10">
              <img
                src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ambiance"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-gold/10 rounded-full" />
          </div>

          <div className="space-y-8">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Sanctuary for the <br />
              <span className="italic text-gold-gradient">Modern Epicurean</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed">
              At Lumière Gastronomy, we believe dining is more than just a meal—it's a sensory journey. From the soft glow of our ambient lighting to the meticulous plating of every dish, we've designed every detail to transport you to a world of refined elegance.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="flex items-start gap-4">
                <Star className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-serif font-bold mb-1">Michelin Quality</h4>
                  <p className="text-xs text-white/40">Excellence in every bite</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-serif font-bold mb-1">Seasonal Menu</h4>
                  <p className="text-xs text-white/40">Freshness guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <MapPin className="text-gold mx-auto" size={32} />
            <h3 className="font-serif text-2xl font-bold">Visit Us</h3>
            <p className="text-white/50 text-sm font-light">Lansikatu, Joensuu-80100</p>
          </div>
          <div className="text-center space-y-4">
            <Clock className="text-gold mx-auto" size={32} />
            <h3 className="font-serif text-2xl font-bold">Opening Hours</h3>
            <p className="text-white/50 text-sm font-light">Mon - Sun: 5:00 PM - 11:00 PM</p>
          </div>
          <div className="text-center space-y-4">
            <Star className="text-gold mx-auto" size={32} />
            <h3 className="font-serif text-2xl font-bold">Reservations</h3>
            <p className="text-white/50 text-sm font-light">+1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
}
