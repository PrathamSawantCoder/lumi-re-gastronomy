import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={cn(
        'relative inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm',
        mobile ? 'w-full max-w-40 justify-center self-start' : ''
      )}
      role="group"
      aria-label={t<string>('languageSwitcher.label')}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        className={cn(
          'absolute top-1 bottom-1 w-[calc(50%-0.125rem)] rounded-full border border-gold/30 bg-gold/12',
          language === 'en' ? 'left-1' : 'left-[calc(50%+0.125rem)]'
        )}
      />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={cn(
          'relative z-10 min-w-14 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight active:scale-95',
          language === 'en' ? 'text-gold' : 'text-white/45 hover:text-white/80 cursor-pointer'
        )}
      >
        {t<string>('languageSwitcher.shortEnglish')}
      </button>
      <button
        type="button"
        onClick={() => setLanguage('fi')}
        aria-pressed={language === 'fi'}
        className={cn(
          'relative z-10 min-w-14 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight active:scale-95',
          language === 'fi' ? 'text-gold' : 'text-white/45 hover:text-white/80 cursor-pointer'
        )}
      >
        {t<string>('languageSwitcher.shortFinnish')}
      </button>
    </div>
  );
}
