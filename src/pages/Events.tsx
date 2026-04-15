import { motion } from 'motion/react';
import { Users, GlassWater, Music, Camera, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {useNavigate } from 'react-router';

export default function Events() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const events = t<{
    eyebrow: string;
    title: string;
    description: string;
    sapphire: {
      title: string;
      description: string;
      button: string;
      quote: string;
      imageAlt: string;
      features: string[];
    };
    grand: {
      title: string;
      description: string;
      button: string;
      imageAlt: string;
      cards: Array<{ title: string; description: string }>;
    };
    testimonial: { quote: string; name: string; role: string };
  }>('events');

  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-20 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">{events.eyebrow}</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">{events.title}</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light">{events.description}</p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl font-serif font-bold">{events.sapphire.title}</h2>
            <p className="text-white/60 font-light leading-relaxed">{events.sapphire.description}</p>
            <ul className="space-y-4">
              {[
                { icon: Users, text: events.sapphire.features[0] },
                { icon: GlassWater, text: events.sapphire.features[1] },
                { icon: Music, text: events.sapphire.features[2] }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-white/70">
                  <item.icon className="text-gold" size={20} />
                  {item.text}
                </li>
              ))}
            </ul>
            <button className="px-10 py-4 bg-gold text-midnight font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-colors cursor-pointer" onClick={() => navigate('/contact')}>
              {events.sapphire.button}
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpdmF0ZSUyMGRpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt={events.sapphire.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl hidden md:block">
              <p className="text-gold font-serif text-xl italic">"{events.sapphire.quote}"</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
                alt={events.grand.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">{events.grand.title}</h2>
            <p className="text-white/60 font-light leading-relaxed">{events.grand.description}</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl space-y-2">
                <Camera className="text-gold" size={24} />
                <h4 className="font-serif font-bold">{events.grand.cards[0].title}</h4>
                <p className="text-xs text-white/40">{events.grand.cards[0].description}</p>
              </div>
              <div className="p-6 glass rounded-2xl space-y-2">
                <Users className="text-gold" size={24} />
                <h4 className="font-serif font-bold">{events.grand.cards[1].title}</h4>
                <p className="text-xs text-white/40">{events.grand.cards[1].description}</p>
              </div>
            </div>
            <button className="group flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold">
              {events.grand.button} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </div>

      <section className="mt-32 py-32 bg-gold/5 relative">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <span className="text-gold text-4xl font-serif">"</span>
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">{events.testimonial.quote}</p>
          <div className="space-y-1">
            <h4 className="font-bold uppercase tracking-widest text-xs">{events.testimonial.name}</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">{events.testimonial.role}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
