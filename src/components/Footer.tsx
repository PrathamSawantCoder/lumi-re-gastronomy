import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const brand = t<string>('meta.siteName');
  const description = t<string>('footer.description');
  const quickLinks = t<string>('footer.quickLinks');
  const menu = t<string>('footer.menu');
  const gallery = t<string>('footer.gallery');
  const blog = t<string>('footer.blog');
  const events = t<string>('footer.events');
  const hours = t<string>('footer.hours');
  const location = t<string>('footer.location');
  const schedule = t<Array<{ day: string; time: string }>>('footer.schedule');
  const address = t<string>('footer.address');
  const phone = t<string>('footer.phone');
  const email = t<string>('footer.email');
  const copyright = t<string>('footer.copyright');

  return (
    <footer className="bg-midnight-light border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-gold" />
            <span className="text-xl font-serif font-bold tracking-widest text-gold-gradient uppercase">
              {brand}
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed font-light">
            {description}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">{quickLinks}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/menu" className="hover:text-gold transition-colors">{menu}</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">{gallery}</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">{blog}</Link></li>
            <li><Link to="/events" className="hover:text-gold transition-colors">{events}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">{hours}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            {schedule.map((entry) => (
              <li key={entry.day} className="flex justify-between"><span>{entry.day}</span> <span>{entry.time}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">{location}</h4>
          <address className="not-italic text-sm text-white/60 space-y-4">
            <p>{address.split('\n')[0]}<br />{address.split('\n')[1]}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
