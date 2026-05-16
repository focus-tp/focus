/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Menu,
  X,
  Plus,
  Copy,
  Check,
  ChevronDown,
  Globe2,
  Video,
  ShoppingBag,
  Film,
  UserCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import tanyaImg from './assets/tanya.jpeg';
import polinaImg from './assets/polina.jpeg';
import CasesPage from './pages/CasesPage';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | React.ReactNode;
  previewImage?: string;
  price: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'ai-video',
    title: 'AI-видео и аватары',
    description: 'Реалистичный AI-персонаж для вашего бренда. Говорит на любом языке без актёров, студии и сложной логистики.',
    icon: '🤖',
    previewImage: '/images/avatar.jpeg',
    price: 'от 5 000 ₽'
  },
  {
    id: 'marketplaces',
    title: 'Карточки для маркетплейсов',
    description: 'Продающие карточки для Wildberries, Ozon и других площадок. AI-фото в стиле бренда — быстро и дёшево.',
    icon: '🛍️',
    previewImage: '/images/ozon.jpeg',
    price: 'от 2 000 ₽'
  },
  {
    id: 'multilingual',
    title: 'Контент на разных языках',
    description: 'Видео, тексты и реклама на русском, английском и испанском. Локализация смысла, а не буквальный перевод.',
    icon: '🌍',
    previewImage: '/images/content.jpeg',
    price: 'от 5 000 ₽'
  },
  {
    id: 'animation',
    title: 'Мультяшная анимация',
    description: 'Анимированные персонажи и ролики для соцсетей, рекламы и сторис. Запоминаются лучше любого баннера.',
    icon: '✨',
    previewImage: '/images/mult.jpeg',
    price: 'от 5 000 ₽'
  },
  {
    id: 'smm',
    title: 'SMM и стратегия',
    description: 'Контент-план, ведение соцсетей и маркетинговая стратегия под ключ. Системный подход, а не разовые посты.',
    icon: '📱',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    price: 'от 10 000 ₽'
  },
  {
    id: 'ai-clone',
    title: 'Личный AI-клон',
    description: 'Ваш цифровой двойник работает 24/7. Выступает, объясняет продукт, ведёт соцсети — без вашего участия.',
    icon: '👤',
    previewImage: '/images/clon.jpeg',
    price: 'от 50 000 ₽'
  },
];

const TEAM: TeamMember[] = [
  {
    name: 'Татьяна',
    role: 'Контент-мейкер и AI-продюсер',
    description: 'Создаю видео с AI-аватарами, мультяшную анимацию и контент на разных языках. 15+ лет опыта в технологиях.',
    image: tanyaImg,
    tags: ['AI-видео', 'Аватары', 'Анимация', 'Локализация']
  },
  {
    name: 'Полина',
    role: 'Маркетолог и стратег',
    description: 'Выстраиваю SMM, контент-план и продвижение. Превращаю идеи в системный маркетинг.',
    image: polinaImg,
    tags: ['SMM', 'Стратегия', 'Реклама', 'CRM']
  }
];

const FAQS = [
  {
    q: 'Сколько времени занимает производство?',
    a: 'Зависит от формата. Карточки товаров — от 1 рабочего дня. AI-видео и аватары — от 3 до 5 дней. Личный AI-клон — индивидуально, обычно 2–3 недели.'
  },
  {
    q: 'Нужно ли мне разбираться в AI-инструментах?',
    a: 'Нет, совсем не нужно. Ваша задача — объяснить, что вы хотите получить. Всё остальное: выбор инструментов, настройки, производство — берём на себя.'
  },
  {
    q: 'Работаете ли вы с иностранными клиентами?',
    a: 'Да. Создаём контент на русском, английском и испанском языках. Работаем удалённо — география не ограничена.'
  },
  {
    q: 'Можно заказать только одну услугу?',
    a: 'Конечно. Можно заказать хоть одну карточку товара, хоть один ролик. Минимального объёма нет.'
  }
];

// --- Components ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Nav({ setMobileMenuOpen }: { setMobileMenuOpen: (o: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 border-b border-brand-border ${scrolled ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm' : 'bg-brand-bg/80 backdrop-blur-sm'}`}>
      <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 group">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold group-hover:scale-125 transition-transform" />
        <span className="font-display font-extrabold text-lg tracking-widest text-brand-dark uppercase">Фокус</span>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {[
          { name: 'Что делаем', id: 'about' },
          { name: 'Услуги', id: 'services' },
          { name: 'Команда', id: 'team' },
          { name: 'Контакты', id: 'contact' }
        ].map((item) => (
          isHome ? (
            <a key={item.id} href={`#${item.id}`} className="text-[0.83rem] font-bold uppercase tracking-wider text-brand-dark/80 hover:text-brand-gold transition-colors">
              {item.name}
            </a>
          ) : (
            <Link key={item.id} to={`/#${item.id}`} className="text-[0.83rem] font-bold uppercase tracking-wider text-brand-dark/80 hover:text-brand-gold transition-colors">
              {item.name}
            </Link>
          )
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="#contact" className="hidden sm:inline-flex button-primary py-2 px-6 text-sm">
          Написать нам
        </a>
        <button className="lg:hidden p-2 text-brand-dark" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function HomePage({ copyToClipboard, copiedId }: { copyToClipboard: (t: string, id: string) => void, copiedId: string | null }) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="relative z-10">
      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 px-6 md:px-10 max-w-[1240px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[0.75rem] font-bold tracking-widest uppercase mb-6">
              ✦ Екатеринбург · Удалённо
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-[5.8rem] font-extrabold leading-[0.98] tracking-tight mb-8">
              ФОКУС<br />
              <em className="font-normal text-brand-gold not-italic">AI-контент</em><br />
              и маркетинг
            </h1>
            <p className="text-brand-secondary text-lg leading-relaxed max-w-sm mb-10">
              Создаём AI-видео, аватаров, карточки товаров и маркетинговые стратегии. Быстро, современно и на любом языке.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-primary">Обсудить проект</a>
              <button 
                onClick={() => navigate('/cases')} 
                className="button-ghost"
              >
                Смотреть кейсы
              </button>
            </div>
            
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="relative">
              {/* Liquid SVG Shape */}
              <div className="relative w-full max-w-[500px] mx-auto filter drop-shadow-[0_30px_60px_rgba(196,145,26,0.2)]">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <defs>
                    <radialGradient id="g1" cx="40%" cy="35%" r="60%">
                      <stop offset="0%" stopColor="#f0c96a"/>
                      <stop offset="50%" stopColor="#c4911a"/>
                      <stop offset="100%" stopColor="#7a5010"/>
                    </radialGradient>
                  </defs>
                  <motion.path 
                    animate={{ 
                      d: [
                        "M 200 80 C 320 60, 420 140, 400 240 C 380 340, 300 420, 200 400 C 100 380, 60 280, 80 190 C 100 100, 140 95, 200 80 Z",
                        "M 220 70 C 340 50, 450 150, 430 250 C 410 350, 320 430, 220 410 C 120 390, 80 290, 100 200 C 120 110, 160 105, 220 70 Z",
                        "M 200 80 C 320 60, 420 140, 400 240 C 380 340, 300 420, 200 400 C 100 380, 60 280, 80 190 C 100 100, 140 95, 200 80 Z"
                      ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    fill="url(#g1)" 
                    opacity="0.92"
                  />
                </svg>
                {/* Float badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-[8%] -left-[5%] bg-white border border-brand-border rounded-xl px-4 py-2 text-[0.8rem] font-bold shadow-lg text-brand-gold whitespace-nowrap"
                >
                  🤖 AI-аватары
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.8 }}
                  className="absolute bottom-[15%] -right-[5%] bg-white border border-brand-border rounded-xl px-4 py-2 text-[0.8rem] font-bold shadow-lg whitespace-nowrap"
                >
                  🎬 Видеопродакшн
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                  className="absolute top-[50%] -left-[8%] bg-white border border-brand-border rounded-xl px-4 py-2 text-[0.8rem] font-bold shadow-lg whitespace-nowrap"
                >
                  📊 SMM-стратегия
                </motion.div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-white border-y border-brand-border">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <SectionReveal>
            <span className="sec-tag">Что мы делаем</span>
            <h2 className="sec-title mb-8">AI-продакшн<br />и маркетинг<br />нового поколения<br />— в одном окне.</h2>
            <div className="bg-brand-bg border-l-4 border-brand-gold rounded-r-2xl p-8 italic text-lg leading-relaxed text-brand-dark-light">
              «Вы ставите бизнес-задачу — мы находим технологичное решение.»
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-brand-secondary leading-relaxed mb-6 text-[1.05rem]">
              Мы объединили <strong className="text-brand-dark">возможности искусственного интеллекта</strong> в создании видео и графики с проверенными маркетинговыми стратегиями. Это позволяет запускать рекламные кампании и генерировать премиальный контент <strong className="text-brand-dark">в разы быстрее</strong>, чем классические агентства.
            </p>
            <p className="text-brand-secondary leading-relaxed mb-10 text-[1.05rem]">
              Больше не нужно выбирать между красивой картинкой и сильным маркетингом. Мы делаем оба — и связываем их в единую систему.
            </p>
            <div className="space-y-4">
              {[
                'Контент за дни, а не недели',
                'Работаем на русском, английском и испанском',
                'Персонаж или аватар без съёмок и актёров',
                'Стратегия и контент от одной команды'
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-4 text-[0.95rem] font-medium text-brand-dark">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold text-[0.7rem] overflow-hidden">
                    ✓
                  </div>
                  {perk}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-[1100px] mx-auto text-center mb-16">
          <SectionReveal>
            <span className="sec-tag mx-auto">Наша команда</span>
            <h2 className="sec-title">Два специалиста.<br />Один результат.</h2>
          </SectionReveal>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, i) => (
            <div key={member.name}>
              <SectionReveal delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-brand-border group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-brand-gold mb-2">{member.role}</div>
                    <h3 className="font-display text-2xl font-extrabold mb-4">{member.name}</h3>
                    <p className="text-brand-secondary text-sm leading-relaxed mb-6">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map(tag => (
                        <span key={tag} className="bg-brand-gold/5 border border-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-[0.7rem] font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white border-y border-brand-border">
        <div className="max-w-[1240px] mx-auto px-6">
          <SectionReveal>
            <span className="sec-tag">Услуги</span>
            <h2 className="sec-title mb-4">Что мы создаём</h2>
            <p className="text-brand-secondary text-base max-w-sm mb-16">Каждый формат — отдельная услуга. Заказывайте одно или сразу всё.</p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.id}>
                <SectionReveal delay={(i % 3) * 0.1}>
                  <div className="bg-brand-bg rounded-[2rem] overflow-hidden border border-brand-border group hover:border-brand-gold/40 transition-all duration-300 h-full">
                    <div className="h-[220px] overflow-hidden bg-brand-dark/5 flex items-center justify-center text-5xl">
                      {s.previewImage ? (
                        <img 
                          src={s.previewImage} 
                          alt={s.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : s.icon}
                    </div>
                    <div className="p-8">
                      <div className="inline-block bg-white border border-brand-border px-3 py-1 rounded-full text-brand-gold text-[0.75rem] font-bold mb-4">
                        {s.price}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-4">{s.title}</h3>
                      <p className="text-brand-secondary text-[0.9rem] leading-relaxed line-clamp-3">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 px-6 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto">
          <SectionReveal>
            <span className="sec-tag">Как мы работаем</span>
            <h2 className="sec-title mb-16">От идеи до результата<br />— 4 шага</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-[2.5rem] left-[5%] right-[5%] h-px bg-brand-gold/20" />
            
            {[
              { num: '01', t: 'Бриф', d: 'Вы рассказываете задачу — мы погружаемся в ваш продукт и аудиторию.' },
              { num: '02', t: 'Стратегия', d: 'Предлагаем формат и решение: какой контент и с каким посылом.' },
              { num: '03', t: 'Производство', d: 'Создаём контент с помощью AI-инструментов. Вносим правки.' },
              { num: '04', t: 'Результат', d: 'Сдаём готовые материалы. При необходимости помогаем с запуском.' }
            ].map((step, i) => (
              <div key={step.num}>
                <SectionReveal delay={i * 0.1}>
                  <div className="bg-white border border-brand-border rounded-2xl p-8 relative hover:-translate-y-1 transition-transform h-full">
                    <div className="font-display text-4xl font-extrabold text-brand-gold/20 leading-none mb-6">{step.num}</div>
                    <h4 className="font-display font-bold text-lg mb-3">{step.t}</h4>
                    <p className="text-brand-secondary text-sm leading-relaxed">{step.d}</p>
                  </div>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-32 bg-brand-dark text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionReveal>
            <span className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-brand-gold mb-3 block">Преимущества</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-16">Почему выбирают нас</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '⚡', t: 'В разы быстрее', d: 'Карточки за 1 день, видео — за 3-5 дней. Агентства тратят недели.' },
              { emoji: '💰', t: 'Дешевле съёмок', d: 'Никаких затрат на студию и актёров. Премиальный результат за меньшие деньги.' },
              { emoji: '🌍', t: 'Любой язык', d: 'Контент на русском, английском, испанском. Один проект — несколько рынков.' },
              { emoji: '🧠', t: 'Контент + стратегия', d: 'Каждый материал встроен в маркетинговую логику и решает задачу.' },
              { emoji: '🤖', t: 'AI без лишних слов', d: 'Мы сами выбираем инструменты и настройки, чтобы вы получили результат.' },
              { emoji: '🎯', t: 'Под ключ', d: 'Одна команда закрывает весь цикл: продакшн, стратегию, публикацию.' }
            ].map((adv, i) => (
              <div key={i}>
                <SectionReveal delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-colors h-full">
                    <div className="text-3xl mb-6">{adv.emoji}</div>
                    <h4 className="font-display font-bold text-lg mb-3">{adv.t}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{adv.d}</p>
                  </div>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionReveal>
            <span className="sec-tag text-center border-none">Вопросы и ответы</span>
            <h2 className="sec-title text-center mb-16">Часто спрашивают</h2>
          </SectionReveal>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <SectionReveal delay={i * 0.05}>
                  <div className="border-b border-brand-border">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                    >
                      <span className="font-bold text-brand-dark group-hover:text-brand-gold transition-colors">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-gold/60 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-brand-secondary text-[0.92rem] leading-relaxed max-w-[640px]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-brand-bg-dark text-center border-t border-brand-border">
        <div className="max-w-[600px] mx-auto px-6">
          <SectionReveal>
            <span className="sec-tag mx-auto">Связаться с нами</span>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Готовы обсудить<br /><em className="font-normal text-brand-gold not-italic">ваш проект?</em>
            </h2>
            <p className="text-brand-secondary mb-12">Напишите нам — обсудим задачу, форматы и стоимость. Отвечаем быстро.</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="https://t.me/trvlas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-brand-border rounded-xl font-bold hover:border-brand-gold transition-all hover:shadow-lg hover:-translate-y-1">
                <span className="text-xl">✈️</span> Telegram
              </a>
              <a href="mailto:tr-vlasova@mail.ru" className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-brand-border rounded-xl font-bold hover:border-brand-gold transition-all hover:shadow-lg hover:-translate-y-1">
                <span className="text-xl">📧</span> Почта
              </a>
            </div>
            
            <div className="text-[0.82rem] text-brand-secondary uppercase font-bold tracking-tight">
              Работаем удалённо · Весь мир · Любой часовой пояс
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-brand-gold/10 overflow-x-hidden text-brand-dark bg-brand-bg relative">
        <div className="grain-overlay" />
        
        <Nav setMobileMenuOpen={setMobileMenuOpen} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage copyToClipboard={() => {}} copiedId={null} />} />
            <Route path="/cases" element={<CasesPage />} />
          </Routes>
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="py-12 bg-brand-dark text-white/40 text-center text-sm border-t border-white/5">
          <div className="font-display font-extrabold text-white text-lg tracking-widest uppercase mb-2">Фокус</div>
          <div className="mb-4">AI-контент и маркетинг нового поколения</div>
          <div className="flex justify-center gap-8 text-[0.7rem] font-bold uppercase tracking-widest text-brand-gold/60">
            <a href="https://t.me/trvlas" className="hover:text-brand-gold transition-colors">Telegram</a>
            <a href="mailto:tr-vlasova@mail.ru" className="hover:text-brand-gold transition-colors">Email</a>
          </div>
          <div className="mt-8 opacity-40 uppercase tracking-tighter">© {new Date().getFullYear()} ФОКУС SYSTEM. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
        </footer>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[200] bg-brand-bg flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-16">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 group"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold group-hover:scale-125 transition-transform" />
                  <span className="font-display font-extrabold text-lg tracking-widest text-brand-dark uppercase">Фокус</span>
                </Link>
                <button className="p-2 border border-brand-border rounded-full" onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { name: 'Что делаем', id: 'about' },
                  { name: 'Услуги', id: 'services' },
                  { name: 'Команда', id: 'team' },
                  { name: 'Контакты', id: 'contact' }
                ].map((item, i) => (
                  <motion.a 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={`#${item.id}`}
                    className="font-display text-4xl font-extrabold tracking-tighter text-brand-dark"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto">
                <button className="w-full button-primary py-4">Обсудить проект</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
