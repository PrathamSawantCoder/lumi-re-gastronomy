import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGE_URLS } from '../constants';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const gallery = t<{
    eyebrow: string;
    title: string;
    follow: string;
    instagramHandle: string;
    categories: Array<{ key: string; label: string }>;
    images: Array<{ id: string; alt: string; category: string }>;
  }>('gallery');

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredImages = activeCategory === 'all'
    ? gallery.images
    : gallery.images.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-16 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">{gallery.eyebrow}</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">{gallery.title}</h1>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {gallery.categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'text-xs uppercase tracking-[0.3em] font-bold transition-all border-b-2 py-2',
                activeCategory === cat.key ? 'text-gold border-gold' : 'text-white/40 border-transparent hover:text-white'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square group overflow-hidden bg-midnight-light rounded-xl"
              >
                <img
                  src={GALLERY_IMAGE_URLS[image.id]}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-gold font-serif text-xl italic">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <section className="mt-32 py-20 text-center px-6 border-t border-white/5">
        <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-6">{gallery.follow}</p>
        <h2 className="text-3xl font-serif font-bold mb-10">{gallery.instagramHandle}</h2>
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-16 rounded-full border border-gold/30 p-1">
              <div className="w-full h-full rounded-full bg-gold/10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
