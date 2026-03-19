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
    <div id="marketing" className={`fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    <div className="container">
        {/* <video autoPlay loop muted className="absolute top-0 left-0 w-full rotate-180 -scale-x-100">
                   <source src="/img/6.mp4" type="video/mp4" />
                 </video>  */}
        <div className="mt-20 lg:mt-32">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2]">Модульная система <br /> маркетинга</h2>
                  <a href="" className="hover:-rotate-45 transition-all duration-[.8s] hover:scale-115">
                      <img src="/img/icon/arr-big.svg" alt="" className="w-16 sm:w-22 md:w-38"/>
                  </a>
            </div>

        <div className=" pb-42 sm:pb-52 lg:pb-30 gap-1 xs:gap-2 sm:gap-x-8 sm:gap-4 sm:gap-y-4 md:gap-3 xl:gap-5
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end justify-center sm:justify-between text-center
        ">
                <MarketingItem title="Стратегия" src="/img/marketing/1.png" text="Чёткая дорожная карта роста на основе анализа клиентов и рынка" class="rounded-tl-[60px] md:rounded-tl-[100px]"/>
                <MarketingItem title="Сайт" src="/img/marketing/2.png" text="Настроен на конверсии от первого экрана до заказа" class="" order=""/>
                <MarketingItem title="Дизайн" src="/img/marketing/3.png" text="Визуально усиливаем доверие и делаем бренд запоминающимся
                " class="md:rounded-tr-[100px] "/>
                 <MarketingItem title="Продвижение" src="/img/marketing/4.png" text="Запускаем и ведем продвижение с фокусом на заявки и стоимость лида" class="md:rounded-bl-[100px] lg:rounded-bl-[20px] lg:rounded-tr-[100px]"/>
                 <div className="absolute flex flex-col items-start justify-center order-7 lg:order-5 translate-y-28 sm:translate-y-40 lg:translate-y-0 mb-4 px-4 max-w-11/12 lg:max-w-6/12 xl:max-w-5/12 w-full">
                  <span className="text-sm sm:text-2xl mb-2 sm:mb-4 block text-center w-full lg:pr-10">Хотите запустить продвижение бизнеса?</span>
                  <ButtonBlack link="https://t.me/Allakoala9" text="Записаться на бесплатную консультацию" class="px-8 w-full xl:w-11/12"/>
                 </div>
                 <div className="hidden lg:block"></div><div className="hidden lg:block"></div>
                 <MarketingItem title="Аналитика" src="/img/marketing/5.png" text="Видим, что приносит заявки и как их можно увеличить" class="lg:rounded-bl-[100px]" order="lg:order-6"/>
                  <MarketingItem title="Техподдержка" src="/img/marketing/6.png" text="Обновления, правки, защита, скорость - стабильность 24/7" class="rounded-br-[60px] lg:rounded-br-[100px]" order="lg:order-7"/>
            </div>
            

        </div>
    </div>
     </div>
    );
}