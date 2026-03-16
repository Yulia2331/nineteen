import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Rate() {
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
        <div className="mb-8 sm:mb-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Состав тарифа</h2>
        </div>
        <div className="text-2xl grid sm:grid-cols-2 grid-rows-1 lg:grid-cols-3 gap-5">
             <div className="">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">01</span>
            <h3 className="text-3xl mb-5">Подготовка рекламной модели</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>проводим стратегическую <br /> сессию</li>
              <li>формируем офферы</li>
              <li>выстраиваем путь клиента</li>
              <li>определяем структуру сайта <br /> и требования к контенту и <br /> дизайну с учётом рекламных <br /> сценариев</li>
            </ul>
          </div>
         <div className="">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">02</span>
            <h3 className="text-3xl mb-5">Создание и настройка инфраструктуры</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>разрабатываем сайт до 8 <br /> страниц под задачи рекламы</li>
              <li>интегрируем формы обратной <br /> связи и системы аналитики</li>
              <li>выполняем базовые <br /> технические SEO-настройки</li>
              <li>приводим сайт в соответствие <br /> с действующими требованиями <br /> законодательства</li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">03</span>
            <h3 className="text-3xl mb-5">Запуск и сопровождение рекламы</h3>
            <ul className="list-disc flex flex-col gap-1.5 pl-5 leading-7.5">
              <li>подбираем ключевые и минус- <br /> слова</li>
              <li>разрабатываем рекламные <br /> креативы</li>
              <li>готовим и запускаем <br /> рекламные кампании в Яндекс <br /> Директе</li>
              <li>осуществляем ведение и <br /> оптимизацию кампаний</li>
              <li>вносим корректировки на <br /> основе данных аналитики</li>
              <li>предоставляем регулярную <br /> отчётность</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
}