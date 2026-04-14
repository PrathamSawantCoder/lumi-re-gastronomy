import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Contact Us</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light">
            Whether you have a question about our menu, want to book a private event, or simply want to say hello, we'd love to hear from you.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <MapPin size={20} />
                <h3 className="font-serif font-bold text-lg">Location</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                Lansikatu, Joensuu-80100
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <Phone size={20} />
                <h3 className="font-serif font-bold text-lg">Phone</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                +1 (555) 123-4567<br />
                +1 (555) 987-6543
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <Mail size={20} />
                <h3 className="font-serif font-bold text-lg">Email</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                hello@lumiere.com<br />
                events@lumiere.com
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold">
                <Clock size={20} />
                <h3 className="font-serif font-bold text-lg">Hours</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                Mon - Sun: 5:00 PM - 11:00 PM
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video bg-midnight-light rounded-2xl border border-white/5 overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
              alt="Map Placeholder"
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-midnight/80 px-6 py-3 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-widest font-bold">
                View on Google Maps
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                <option className="bg-midnight">General Inquiry</option>
                <option className="bg-midnight">Table Reservation</option>
                <option className="bg-midnight">Private Event</option>
                <option className="bg-midnight">Career Opportunities</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>
            <button className="w-full py-5 bg-gold text-midnight font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-gold-light transition-colors shadow-xl shadow-gold/10">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
