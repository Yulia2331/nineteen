'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import MarketingItem from "../components/MarketingItem";
import ButtonBlack from "../components/ButtonBlack";
export default function Marketing() {
             const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Остановить наблюдение
        }
      },
      { threshold: 0.1 } // Срабатывает, когда видно 10% блока
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div className={`fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    <div className="container">
        <div className="mt-20 lg:mt-32">
            <div className="flex justify-between items-center mb-6 ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2]">Модульная система <br /> маркетинга</h2>
                  <a href="" className="hover:-rotate-45 transition-all duration-[.8s] hover:scale-115">
                      <img src="/img/icon/arr-big.svg" alt="" className="w-16 sm:w-24 md:w-auto"/>
                  </a>
            </div>

        <div className="flex flex-wrap items-end justify-end text-center">
                <MarketingItem title="Стратегия" src="/img/marketing/1.png" text="Чёткая дорожная карта роста на основе анализа клиентов и рынка" class="rounded-tl-[100px]"/>
                <MarketingItem title="Сайт" src="/img/marketing/2.png" text="Настроен на конверсии от первого экрана до заказа" class="" order=""/>
                <MarketingItem title="Дизайн" src="/img/marketing/3.png" text="Визуально усиливаем доверие и делаем бренд запоминающимся
                " class="md:rounded-tr-[100px] "/>
                 <MarketingItem title="Продвижение" src="/img/marketing/4.png" text="Запускаем и ведем продвижение с фокусом на заявки и стоимость лида" class="md:rounded-bl-[100px] lg:rounded-bl-[20px] lg:rounded-tr-[100px]"/>
                 <div className="flex flex-col items-start order-7 lg:order-5 basis-2/2 mt-5 md:basis-1/2 -ml-4 translate-x-3 mb-4 ">
                  <span className="text-sm sm:text-2xl mb-2 sm:mb-4 block text-center w-full">Хотите запустить продвижение бизнеса?</span>
                  <ButtonBlack link="https://t.me/Allakoala9" text="Записаться на бесплатную консультацию" class="px-8 w-full"/>
                 </div>
                 <MarketingItem title="Аналитика" src="/img/marketing/5.png" text="Видим, что приносит заявки и как их можно увеличить" class="lg:rounded-bl-[100px]" order="lg:order-6"/>
                  <MarketingItem title="Техподдержка" src="/img/marketing/6.png" text="Обновления, правки, защита, скорость - стабильность 24/7" class="rounded-br-[100px] lg:rounded-br-[100px]" order="lg:order-7"/>
            </div>
            

        </div>
    </div>
     </div>
    );
}