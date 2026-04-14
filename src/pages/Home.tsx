import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_ITEM_IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const hero = t<{
    eyebrow: string;
    titleLineOne: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
    heroAlt: string;
  }>('home.hero');

  const featured = t<{ eyebrow: string; title: string; cta: string }>('home.featured');

  const experience = t<{
    eyebrow: string;
    titleLineOne: string;
    titleAccent: string;
    description: string;
    imageAlt: string;
    features: Array<{ title: string; description: string }>;
  }>('home.experience');

  const info = t<{
    visitUs: string;
    openingHours: string;
    reservations: string;
    address: string;
    hours: string;
    phone: string;
  }>('home.info');

  const featuredItems = t<Array<{ key: string; label: string; items: Array<{ id: string; name: string; description: string; price: string }> }>>('menuPage.categories')
    .flatMap((category) => category.items)
    .slice(0, 4);

  return (
    <div className="overflow-hidden">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
            alt={hero.heroAlt}
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
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">{hero.eyebrow}</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              {hero.titleLineOne} <br />
              <span className="text-gold-gradient italic">{hero.titleAccent}</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/menu"
                className="px-10 py-4 bg-gold text-midnight font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300 w-full sm:w-auto"
              >
                {hero.primaryCta}
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-white/20 hover:border-gold transition-all duration-300 uppercase tracking-widest text-sm w-full sm:w-auto"
              >
                {hero.secondaryCta}
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
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold/50">{hero.scroll}</span>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">{featured.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">{featured.title}</h2>
          </div>
          <Link to="/menu" className="group flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold">
            {featured.cta} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
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
                  src={MENU_ITEM_IMAGES[item.id]}
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

      <section className="py-32 bg-midnight-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square relative z-10">
              <img
                src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={experience.imageAlt}
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-gold/10 rounded-full" />
          </div>

          <div className="space-y-8">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block">{experience.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {experience.titleLineOne} <br />
              <span className="italic text-gold-gradient">{experience.titleAccent}</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed">{experience.description}</p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="flex items-start gap-4">
                <Star className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-serif font-bold mb-1">{experience.features[0].title}</h4>
                  <p className="text-xs text-white/40">{experience.features[0].description}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-serif font-bold mb-1">{experience.features[1].title}</h4>
                  <p className="text-xs text-white/40">{experience.features[1].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <MapPin className="text-gold mx-auto" size={32} />
            <h3 className="font-serif text-2xl font-bold">{info.visitUs}</h3>
            <p className="text-white/50 text-sm font-light">{info.address}</p>
          </div>
          <div className="text-center space-y-4">
            <Clock className="text-gold mx-auto" size={32} />
            <h3 className="font-serif text-2xl font-bold">{info.openingHours}</h3>
            <p className="text-white/50 text-sm font-light">{info.hours}</p>
          </div>
          <div className="text-center space-y-4">
            <Star className="text-gold mx-auto" size={32} />
            <h3 className="font-serif text-2xl font-bold">{info.reservations}</h3>
            <p className="text-white/50 text-sm font-light">{info.phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
