import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Sale() {
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
           <section className="py-10 xs:py-16 sm:py-26 pb-40 sm:h-[300px] md:h-auto lg:h-[490px] xl:h-[520px] w-full bg-linear-to-r from-blue-400 to-blue-600 relative overflow-hidden flex items-center">
                <img src="/img/promo/line-center.png" alt="" className="z-20 absolute -left-1 bottom-0 h-full"/>
             <img src="/img/promo/girl.png" alt="" className="z-20 w-[265px] xs:w-[260px] sm:w-[400px] md:w-[510px] lg:w-[700px] absolute left-0 bottom-0"/>
             <img src="/img/promo/star-group.svg" alt="" className="max-w-[180px] xs:max-w-[100px] md:max-w-[140px] lg:max-w-full absolute right-0 top-0"/>
              <div className="container">
                <div className="w-full flex justify-end items-center">
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl tracking-tight leading-none text-white font-semibold uppercase block">Сайт <br /> в подарок</span>
                  </div>
              </div>
              
            </section>
    </div>
    );
}