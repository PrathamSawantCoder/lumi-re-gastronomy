import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { OpenRouter } from '@openrouter/sdk';
import Markdown from 'react-markdown';
import { cn } from '../lib/utils';

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

const SYSTEM_PROMPT = `You are the Lumière Gastronomy AI Concierge. 
Your goal is to help guests with information about the restaurant and assist with table reservations.
Restaurant Info:
- Name: Lumière Gastronomy
- Cuisine: Modern French / Artisanal
- Location: 123 Gastronomy Lane, Culinary District, NY
- Signature Dishes: Truffle Infused Risotto, Pan-Seared Scallops, Wagyu Ribeye.
- Hours: Mon-Thu 5pm-10pm, Fri-Sat 5pm-11:30pm, Sun 12pm-9pm.
- Reservations: We take reservations for parties up to 10 people.
- Dress Code: Smart Casual / Formal.

When a user wants to reserve:
1. Ask for the date and time.
2. Ask for the number of guests.
3. Ask for a name and contact info.
4. Confirm the details (simulated).

Be elegant, professional, and welcoming. Use sophisticated language.`;

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
          text: "The AI concierge is not configured yet. Add `VITE_OPENROUTER_API_KEY` to your environment variables.",
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
              content: SYSTEM_PROMPT,
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

      const modelText =
        response.choices?.[0]?.message?.content ||
        "I apologize, I'm having trouble processing that request.";
      
      setMessages((prev) => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages((prev) => [...prev, { role: 'model', text: "I'm sorry, I'm currently resting. Please try again later." }]);
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
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gold/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                  <Bot className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gold tracking-wider">Lumière Concierge</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Always at your service</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <Bot className="w-12 h-12 text-gold/30 mx-auto" />
                  <p className="text-white/40 text-sm font-light italic">
                    "Welcome to Lumière Gastronomy. How may I assist you with your dining experience today?"
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={cn('flex gap-3', m.role === 'user' ? 'flex-row-reverse' : 'flex-row')}>
                  <div className={cn('w-8 h-8 rounded-full flex items-center justify-center border shrink-0', 
                    m.role === 'user' ? 'bg-white/10 border-white/20' : 'bg-gold/10 border-gold/30')}>
                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-gold" />}
                  </div>
                  <div className={cn('max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed',
                    m.role === 'user' ? 'bg-white/5 text-white' : 'bg-gold/5 text-white/90')}>
                    <div className="prose prose-invert prose-sm max-w-none">
                      <Markdown>
                        {m.text}
                      </Markdown>
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

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-midnight">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about reservations or menu..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gold disabled:opacity-30 transition-opacity"
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
        className="w-16 h-16 rounded-full bg-gold shadow-2xl flex items-center justify-center text-midnight hover:scale-110 transition-transform active:scale-95 group relative"
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
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping" />
        )}
      </button>
    </div>
  );
}
