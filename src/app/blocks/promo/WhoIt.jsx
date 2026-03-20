import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
export default function WhoIt() {
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
        <div className="mb-8 sm:mb-7 flex items-center justify-center gap-2 md:gap-8">
          <ExportedImage className="w-10 xs:w-12 md:w-auto" width={220} height={220}  src="/img/promo/sm-star.svg" alt="Static Image" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Кому подходит</h2>
        </div>
        <div className="md:text-lg lg:text-2xl grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center sm:items-start">
          <span className="border-l border-l-greys py-2 xs:py-1 sm:py-3 px-2 lg:p-4">Услуги, эксперты, товары, личный бренд</span>
          <span className="border-l border-l-greys py-2 xs:py-1 sm:py-3 px-2 lg:p-4">Деньги или заявки закончились</span>
          <span className="border-l border-l-greys py-2 xs:py-1 sm:py-3 px-2 lg:p-4">Старый сайт не продаёт или его нет</span>
          <span className="border-l border-l-greys py-2 xs:py-1 sm:py-3 px-2 lg:p-4">Нужно проверить спрос перед масштаби-рованием</span>
          <span className="border-l border-l-greys py-2 xs:py-1 sm:py-3 px-2 lg:p-4">Нет времени и ресурса на долгий маркетинг</span>
        </div>
      </div>
    </section>
    </div>
    );
}