import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { OpenRouter } from '@openrouter/sdk';
import Markdown from 'react-markdown';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const OPENROUTER_MODEL = 'openai/gpt-oss-120b:free';

const ai = new OpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
});

interface Message {
  role: 'user' | 'model';
  text: string;
}

function toOpenRouterRole(role: Message['role']): 'user' | 'assistant' {
  return role === 'user' ? 'user' : 'assistant';
}

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const systemPrompt = t<string>('ai.systemPrompt');
  const notConfigured = t<string>('ai.notConfigured');
  const processingError = t<string>('ai.processingError');
  const resting = t<string>('ai.resting');
  const title = t<string>('ai.title');
  const subtitle = t<string>('ai.subtitle');
  const welcome = t<string>('ai.welcome');
  const placeholder = t<string>('ai.placeholder');
  const open = t<string>('ai.open');
  const close = t<string>('ai.close');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    if (!import.meta.env.VITE_OPENROUTER_API_KEY) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: notConfigured,
        },
      ]);
      return;
    }

    const userMessage = input.trim();
    const nextMessages: Message[] = [...messages, { role: 'user', text: userMessage }];

    setInput('');
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await ai.chat.send({
        chatRequest: {
          model: OPENROUTER_MODEL,
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            ...nextMessages.map((message) => ({
              role: toOpenRouterRole(message.role),
              content: message.text,
            })),
          ],
          temperature: 0.7,
          stream: false,
        },
      });

      const modelText = response.choices?.[0]?.message?.content || processingError;

      setMessages((prev) => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages((prev) => [...prev, { role: 'model', text: resting }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-60">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-87.5 sm:w-100 h-125 glass rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gold/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                  <Bot className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gold tracking-wider">{title}</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">{subtitle}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label={close} className="text-white/50 hover:text-white transition-colors cursor-pointer">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <Bot className="w-12 h-12 text-gold/30 mx-auto" />
                  <p className="text-white/40 text-sm font-light italic">"{welcome}"</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={cn('flex gap-3', m.role === 'user' ? 'flex-row-reverse' : 'flex-row')}>
                  <div className={cn('w-8 h-8 rounded-full flex items-center justify-center border shrink-0', m.role === 'user' ? 'bg-white/10 border-white/20' : 'bg-gold/10 border-gold/30 ')}>
                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-gold" />}
                  </div>
                  <div className={cn('max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed', m.role === 'user' ? 'bg-white/5 text-white' : 'bg-gold/5 text-white/90')}>
                    <div className="prose prose-invert prose-sm max-w-none">
                      <Markdown>{m.text}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Loader2 size={14} className="text-gold animate-spin" />
                  </div>
                  <div className="bg-gold/5 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-midnight">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gold disabled:opacity-30 transition-opacity cursor-pointer"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? close : open}
        className="w-16 h-16 rounded-full bg-gold shadow-2xl flex items-center justify-center text-midnight hover:scale-110 transition-transform active:scale-95 group relative cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping" />}
      </button>
    </div>
  );
}
