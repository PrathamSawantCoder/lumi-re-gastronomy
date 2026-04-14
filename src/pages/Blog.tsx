import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <header className="text-center mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Culinary Stories</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">The Chef's Table</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light">
            Insights from our kitchen, seasonal recipes, and a behind-the-scenes look at the art of gastronomy.
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1 bg-gold text-midnight text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-white/40">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-gold" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={12} className="text-gold" />
                  {post.author}
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold group-hover:text-gold transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-white/60 font-light leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold pt-4">
                Read Full Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter */}
      <section className="mt-32 max-w-4xl mx-auto px-6">
        <div className="glass p-12 rounded-3xl text-center space-y-8">
          <h2 className="text-3xl font-serif font-bold">Join the Inner Circle</h2>
          <p className="text-white/50 font-light">
            Subscribe to receive exclusive recipes, early access to seasonal menus, and invitations to private tasting events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button className="px-8 py-4 bg-gold text-midnight font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gold-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
