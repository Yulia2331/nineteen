import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Scheme() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] mb-20">Наш подход</h2>
                  
        <div className="mb-14 md:mb-20 lg:mb-24 relative">
           <div className="relative flex flex-col md:flex-row gap-3 justify-between md:items-center border-t-2 py-11 lg:pr-20 border-darck-op text-darck-op hover:text-darck hover:border-darck 
           after:bg-[url('/img/bee.png')] after:bg-contain after:bg-no-repeat after:bg-center after:absolute 
             after:w-full after:h-full  hover:after:opacity-100 after:transition-all after:duration-[.6s] 
             after:-top-20 after:left-32 lg::after:scale-125 xl:after:scale-145 md:after:-left-56 md:after:-top-2 lg:after:-left-72 after:opacity-0 after:-translate-y-20 hover:after:translate-0
           ">
                <span className="text-5xl md:text-6xl lg:text-[64px]">01/</span>
                <div className="md:w-4/6 lg:w-1/2 lg:pr-20">
                    <h4 className="text-lg sm:text-2xl lg:text-[32px] uppercase font-semibold mb-1 tracking-[-1]">Диагностика и стратегия</h4>                 
                    <p className="text-lg sm:text-2xl tracking-[-0.5]">Разбираем текущую ситуацию, ваши цели и точки роста
</p>
                </div>
           </div>
             <div className="relative flex flex-col md:flex-row gap-3 justify-between md:items-center border-t-2 border-darck-op py-11 lg:pr-20 text-darck-op hover:text-darck hover:border-darck
              after:bg-[url('/img/bee.png')] after:bg-contain after:bg-no-repeat after:bg-center after:absolute 
             after:w-full after:h-full  hover:after:opacity-100 after:transition-all after:duration-[.6s] 
             after:-top-20 after:left-32 lg:after:scale-125 xl:after:scale-145 md:after:-left-56 md:after:-top-2 lg:after:-left-72 after:opacity-0 after:translate-x-36 hover:after:translate-0
             ">
                <span className="text-5xl md:text-6xl lg:text-[64px] ">02/</span>
                <div className="md:w-4/6 lg:w-1/2 lg:pr-20">
                    <h4 className="text-2xl lg:text-[32px] uppercase font-semibold mb-1 tracking-[-1] ">Система под ключ</h4>
                    <p className="text-2xl tracking-[-0.5] ">Оффер, сайт, реклама, аналитика. <br /> Все работает как единое целое.</p>
                </div>
           </div>
             <div className="relative flex flex-col md:flex-row gap-3 justify-between md:items-center border-y-2 border-darck-op py-11 lg:pr-20 text-darck-op hover:text-darck hover:border-t-darck
              after:bg-[url('/img/bee.png')] after:bg-contain after:bg-no-repeat after:bg-center after:absolute 
             after:w-full after:h-full  hover:after:opacity-100 after:transition-all after:duration-[.6s] 
             after:-top-20 after:left-32 lg::after:scale-125 xl:after:scale-145 md:after:-left-56 md:after:-top-2 lg:after:-left-72 after:opacity-0 after:translate-16 hover:after:translate-0
             ">
                <span className="text-5xl md:text-6xl lg:text-[64px] ">03/</span>
                <div className="md:w-4/6 lg:w-1/2 lg:pr-20">
                    <h4 className="text-2xl lg:text-[32px] uppercase font-semibold mb-1 tracking-[-1] ">Рост и масштабирование</h4>
                    <p className="text-2xl tracking-[-0.5] ">Усиливаем то, что дает результат. <br /> Улучшаем на основе цифр.</p>
                </div>
           </div>
        </div>
    </div>
    </div>
    );
}