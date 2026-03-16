import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Doing() {
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
      <section className="my-10 lg:my-20">
      <div className="container">
        <div className="mb-8 sm:mb-5 flex items-center justify-center gap-1.5 md:gap-8">
           <img src="/img/promo/sm-star.svg" alt="" className="w-10 xs:w-12 md:w-auto"/>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Что мы делаем</h2>
        </div>
        <div className="text-xl lg:text-2xl grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-5">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
         <div className="">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">02</span>
            <h3 className="text-3xl mb-5">Создаём сайт под запуск</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>создаём сайт под <br /> конкретный оффер</li>
              <li>один сценарий → <br /> одна цель → заявка</li>
              <li>индивидуальный сайт <br /> на WordPress, готовый <br /> к приёму заявки <br /> масштабированию</li>
            </ul>
          </div>
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">03</span>
            <h3 className="text-3xl mb-5">Креативы для рекламы</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>тексты и визуалы под <br /> гипотезы</li>
              <li>объявления с учётом <br /> конкурентов</li>
              <li>фокус на <br /> кликабельности и <br /> целевых заявках</li>
            </ul>
          </div>
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">04</span>
            <h3 className="text-3xl mb-5">Запуск рекламной кампании</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>настройка</li>
              <li>запуск</li>
              <li>первые заявки</li>
            </ul>
          </div>         


        </div>
      </div>
    </section>
    </div>
    );
}