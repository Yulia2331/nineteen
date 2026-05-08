
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
// import testPictureStatic from "/img/promo/big-logo.png";
export default function Plan() {
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
    <div className={`-mt-50 pb-32 fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
      <div className="container">
                     <div className="flex justify-center mb-10 lg:mb-16">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[-1] md:tracking-[-2]">После этого собираем понятный плант</h3>
            </div>
            <div className="text-2xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="">
                <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">01</span>
                <h4 className="text-2xl mb-5">Стратегия и офферы</h4>
              </div>
              <div className="">
                <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">02</span>
                <h4 className="text-2xl mb-5">Структура сайта и посадочных страниц</h4>
              </div>
              <div className="">
                <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">03</span>
                <h4 className="text-2xl mb-5">Каналы продвижения</h4>
              </div>
              <div className="">
                <span className="text-5xl md:text-6xl lg:text-[58px] text-darck-op border-b-2 border-b-greys py-2 mb-4 block">04</span>
                <h4 className="text-2xl mb-5">Аналитика</h4>
              </div>
            </div>
            <h2 className="text-2xl text-center mt-8">Если инструмент не влияет на результат — <br /> мы его не используем</h2>
      </div>
    </div>
   
    );
}