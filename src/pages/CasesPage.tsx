import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CASES = [
  {
    id: '01',
    title: 'Брендинг',
    category: 'Фирменный стиль',
    image: '/images/фирма.jpeg',
    description: 'Фирменный стиль, визуальная система и эстетика бренда для цифровой среды.'
  },
  {
    id: '02',
    title: 'AI Фешн Фильм',
    category: 'AI Видеопродакшн',
    image: '/images/видео.jpeg',
    description: 'Кинематографичные AI-видео, цифровая мода и визуалы уровня люкс.'
  },
  {
    id: '03',
    title: 'Виртуальное присутствие',
    category: 'Виртуальная студия',
    image: '/images/студия.jpeg',
    description: 'Гиперреалистичные AI-аватары и цифровые персонажи для брендов и медиа.'
  },
  {
    id: '04',
    title: 'Эстетика маркетплейсов',
    category: 'Карточки маркетплейсов',
    image: '/images/ozon.jpeg',
    description: 'Премиальный дизайн карточек товаров для Ozon, Wildberries и электронной коммерции.'
  }
];

export default function CasesPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 pb-24 px-6 md:px-10 bg-brand-bg min-h-screen relative overflow-hidden">
      <div className="grain-overlay" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <span className="sec-tag">Портфолио</span>
          <h1 className="font-display text-6xl lg:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.9]">
            Проекты <br /><em className="font-normal text-brand-gold not-italic">нового времени.</em>
          </h1>
          <p className="text-brand-secondary text-xl max-w-2xl font-light leading-relaxed">
            Мы объединяем возможности искусственного интеллекта в создании видео и графики с проверенными маркетинговыми стратегиями.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {CASES.map((c, i) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 border border-brand-border bg-white shadow-xl shadow-brand-dark/5">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  src={c.image} 
                  alt={c.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="px-2">
                <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-brand-gold mb-3 block">{c.category}</span>
                <h3 className="font-display text-3xl font-extrabold mb-4 group-hover:text-brand-gold transition-colors">{c.title}</h3>
                <p className="text-brand-secondary text-base font-light leading-relaxed mb-8 line-clamp-2 max-w-sm">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
