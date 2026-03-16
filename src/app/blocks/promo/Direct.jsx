import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Direct() {
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
         <section className="mt-12 sm:mt-20 mb-14 md:mb-20 lg:pt-26 py-8 pb-20 xs:py-14 lg:pb-40 h-full w-full bg-[url('/img/promo/sale-bg.png')] bg-cover lg:bg-size-[100%_100%] bg-top bg-no-repeat relative overflow-hidden">
                <div className="container">
                  <div className="sm:w-2/3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white">
                      Запуск и ведение Яндекс Директа 
                      <span className="text-darck ml-2">под ключ</span>
                      </h2>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 xs:mt-7 mb-3 xs:mb-8 sm:mb-12 text-white w-72 md:w-3/4">Формат работы для компаний, которым нужен стабильный поток заявок и понятная модель привлечения клиентов</p>
                      <span className="text-[16px] xs:text-xl md:text-3xl text-white font-semibold uppercase md:leading-9 text-right w-auto xs:w-64 sm:w-3/4 block">Сайт <br /> в подарок!</span>
                    </div>
                </div>
                <img src="/img/promo/man.png" alt="" className="w-[175px] xs:w-[45%] sm:w-[500px] md:w-[550px] lg:w-[780px] absolute right-26 xs:right-0 sm:left-[45%] bottom-0"/>
              </section>
    </div>
    );
}