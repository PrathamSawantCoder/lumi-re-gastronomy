import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const contact = t<{
    eyebrow: string;
    title: string;
    description: string;
    sections: { location: string; phone: string; email: string; hours: string };
    details: {
      address: string;
      phones: string[];
      emails: string[];
      hours: string;
      mapAlt: string;
      mapCta: string;
    };
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      button: string;
    };
  }>('contact');

  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-20 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">{contact.eyebrow}</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">{contact.title}</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light">{contact.description}</p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <MapPin size={20} />
                <h3 className="font-serif font-bold text-lg">{contact.sections.location}</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">{contact.details.address}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <Phone size={20} />
                <h3 className="font-serif font-bold text-lg">{contact.sections.phone}</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {contact.details.phones[0]}<br />
                {contact.details.phones[1]}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <Mail size={20} />
                <h3 className="font-serif font-bold text-lg">{contact.sections.email}</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {contact.details.emails[0]}<br />
                {contact.details.emails[1]}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <Clock size={20} />
                <h3 className="font-serif font-bold text-lg">{contact.sections.hours}</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">{contact.details.hours}</p>
            </div>
          </div>

          <div className="aspect-video bg-midnight-light rounded-2xl border border-white/5 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
              alt={contact.details.mapAlt}
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-midnight/80 px-6 py-3 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-widest font-bold">
                {contact.details.mapCta}
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-serif font-bold mb-8">{contact.form.title}</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{contact.form.nameLabel}</label>
                <input
                  type="text"
                  placeholder={contact.form.namePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{contact.form.emailLabel}</label>
                <input
                  type="email"
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{contact.form.subjectLabel}</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                {contact.form.subjectOptions.map((option) => (
                  <option key={option} className="bg-midnight">{option}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{contact.form.messageLabel}</label>
              <textarea
                rows={5}
                placeholder={contact.form.messagePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>
            <button className="w-full py-5 bg-gold text-midnight font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-gold-light transition-colors shadow-xl shadow-gold/10">
              {contact.form.button}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
