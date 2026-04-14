import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-midnight-light border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-gold" />
            <span className="text-xl font-serif font-bold tracking-widest text-gold-gradient uppercase">
              Lumière
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed font-light">
            Crafting unforgettable culinary moments through artisanal techniques and the finest seasonal ingredients.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/menu" className="hover:text-gold transition-colors">The Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Chef's Blog</Link></li>
            <li><Link to="/events" className="hover:text-gold transition-colors">Private Dining</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">Hours</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>17:00 - 22:00</span></li>
            <li className="flex justify-between"><span>Fri - Sat</span> <span>17:00 - 23:30</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>12:00 - 21:00</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">Location</h4>
          <address className="not-italic text-sm text-white/60 space-y-4">
            <p>Lansikatu<br />Joensuu-80100</p>
            <p>+1 (555) 123-4567</p>
            <p>reservations@lumiere.com</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
          © 2026 Lumière Gastronomy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
