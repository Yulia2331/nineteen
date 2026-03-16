import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Star() {
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
        <section className="my-5 md:my-20 py-10 md:py-28 h-full w-full bg-[url('/img/promo/star.png')] bg-contain bg-top bg-no-repeat">
              <div className="container">
                <div className="py-20">
                  <h3 className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-2xl xs:text-3xl sm:text-4xl md:text-[52px] lg:text-[68px] xl:text-[80px] font-bold uppercase leading-none text-center tracking-[-1.6] md:tracking-[-4]">Каждый запуск <br /> — это конкретная задача, <br /> решение и результат</h3>
                </div>
              </div>
            </section>
    </div>
    );
}