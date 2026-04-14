import { motion } from 'motion/react';
import { Users, GlassWater, Music, Camera, ArrowRight } from 'lucide-react';

export default function Events() {
  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Exclusive Gatherings</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Events & Private Dining</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light">
            From intimate celebrations to corporate galas, we provide the perfect backdrop for your most memorable moments.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Private Dining Room */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl font-serif font-bold">The Sapphire Room</h2>
            <p className="text-white/60 font-light leading-relaxed">
              Our premier private dining space, The Sapphire Room, offers complete seclusion for up to 20 guests. Featuring a dedicated service team, a custom-built mahogany table, and integrated audiovisual capabilities.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Users, text: 'Capacity: 12-20 Guests' },
                { icon: GlassWater, text: 'Dedicated Sommelier' },
                { icon: Music, text: 'Custom Playlist Integration' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-white/70">
                  <item.icon className="text-gold" size={20} />
                  {item.text}
                </li>
              ))}
            </ul>
            <button className="px-10 py-4 bg-gold text-midnight font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-colors">
              Inquire Now
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpdmF0ZSUyMGRpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Private Dining Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl hidden md:block">
              <p className="text-gold font-serif text-xl italic">"The ultimate in exclusivity."</p>
            </div>
          </div>
        </section>

        {/* Full Buyout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
                alt="Full Restaurant Buyout"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Grand Occasions</h2>
            <p className="text-white/60 font-light leading-relaxed">
              For larger celebrations, Lumière Gastronomy is available for full restaurant buyouts. We can accommodate up to 120 guests for a seated dinner or 200 for a cocktail reception.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl space-y-2">
                <Camera className="text-gold" size={24} />
                <h4 className="font-serif font-bold">Weddings</h4>
                <p className="text-xs text-white/40">Elegant ceremonies & receptions</p>
              </div>
              <div className="p-6 glass rounded-2xl space-y-2">
                <Users className="text-gold" size={24} />
                <h4 className="font-serif font-bold">Corporate</h4>
                <p className="text-xs text-white/40">Product launches & galas</p>
              </div>
            </div>
            <button className="group flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold">
              View Event Brochure <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </div>

      {/* Testimonial */}
      <section className="mt-32 py-32 bg-gold/5 relative">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <span className="text-gold text-4xl font-serif">"</span>
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
            Lumière Gastronomy hosted our corporate gala, and the attention to detail was unparalleled. The food, the service, and the ambiance were all world-class.
          </p>
          <div className="space-y-1">
            <h4 className="font-bold uppercase tracking-widest text-xs">Sarah Jenkins</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">Global Events Director, Sdr Tech</p>
          </div>
        </div>
      </section>
    </div>
  );
}
