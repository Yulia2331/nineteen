import React, { useCallback, useEffect, useState, useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax';
export default function Scheme() {
   const [isVisible, setIsVisible] = useState(false);
 const [vis1, setVis1] = useState(false);
 const [vis2, setVis2] = useState(false);
const [vis3, setVis3] = useState(false);
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
            const r1 = useRef(null);
            const r2 = useRef(null);
            const r3 = useRef(null);
            useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setVis1(true);
                    observer.unobserve(entry.target); // Остановить наблюдение
                  }
                },
                { threshold: 0.9 } // Срабатывает, когда видно 10% блока
              );
          
              if (r1.current) {
                observer.observe(r1.current);
              }
          
              return () => {
                if (r1.current) observer.unobserve(r1.current);
              };
            }, []);
    useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setVis2(true);
                    observer.unobserve(entry.target); // Остановить наблюдение
                  }
                },
                { threshold: 0.9 } // Срабатывает, когда видно 10% блока
              );
          
              if (r2.current) {
                observer.observe(r2.current);
              }
          
              return () => {
                if (r2.current) observer.unobserve(r2.current);
              };
            }, []);
 useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setVis3(true);
                    observer.unobserve(entry.target); // Остановить наблюдение
                  }
                },
                { threshold: 0.9 } // Срабатывает, когда видно 10% блока
              );
          
              if (r3.current) {
                observer.observe(r3.current);
              }
          
              return () => {
                if (r3.current) observer.unobserve(r3.current);
              };
            }, []);
  return (
 <ParallaxProvider>
    <div className={`fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] mb-5">Наш подход</h2>
      
        <div className="mb-14 md:mb-20 lg:mb-24 relative z-10">
           <div  className={`relative flex flex-col md:flex-row gap-3 justify-between md:items-center border-t-2 py-8 lg:pr-20  hover:text-darck hover:border-darck 
          pr-20 ${vis1 ? 'text-darck border-darck' : 'text-darck-op border-darck-op'}
           `}>
                <span className="text-5xl md:text-6xl lg:text-[64px]">01/</span>
                <div className="md:w-4/6 lg:w-1/2 lg:pr-20">
                    <h4 className="text-xl sm:text-2xl lg:text-[32px] uppercase font-semibold mb-1 tracking-[-1]">Диагностика и стратегия</h4>                 
                    <p  className="text-lg xs:text-xl sm:text-2xl tracking-tight">Разбираем текущую ситуацию, ваши цели и точки роста
</p>
                </div>
           </div>
             <div ref={r1} className={`relative flex flex-col md:flex-row gap-3 justify-between md:items-center border-t-2 py-8 lg:pr-20  hover:text-darck hover:border-darck
           pr-20 ${vis2 ? 'text-darck border-darck' : 'text-darck-op border-darck-op'}
           `}>
                <span className="text-5xl md:text-6xl lg:text-[64px] ">02/</span>
                <div className="md:w-4/6 lg:w-1/2 lg:pr-20">
                    <h4 className="text-xl sm:text-2xl lg:text-[32px] uppercase font-semibold mb-1 tracking-[-1] ">Система под ключ</h4>
                    <p className="text-lg xs:text-xl sm:text-2xl tracking-tight ">Оффер, сайт, реклама, аналитика. <br /> Все работает как единое целое.</p>
                </div>
           </div>
             <div  className={`relative flex flex-col md:flex-row gap-3 justify-between md:items-center border-y-2  py-8 lg:pr-20 hover:text-darck hover:border-t-darck
             pr-20 ${vis3 ? 'text-darck border-darck' : 'text-darck-op border-darck-op'}
             `}>
                <span className="text-5xl md:text-6xl lg:text-[64px] ">03/</span>
                <div className="md:w-4/6 lg:w-1/2 lg:pr-20">
                    <h4 className="text-xl sm:text-2xl lg:text-[32px] uppercase font-semibold mb-1 tracking-[-1] ">Рост и масштабирование</h4>
                    <p className="text-lg xs:text-xl sm:text-2xl tracking-tight ">Усиливаем то, что дает результат. <br /> Улучшаем на основе цифр.</p>
                </div>
           </div>
              <Parallax speed={-16}>
                  <img src="/img/bee.png" alt="" className={`absolute -top-80 scale-60 -right-30 xs:-right-40 md:left-0 md:right-0 lg:scale-100 lg:left-24 pointer-events-none z-20`} />
         </Parallax> 
        </div>
    </div>
    </div>
    <div ref={r2} className=""></div>
    <div className=" relative">
      <div ref={r3} className="h-58 absolute w-full pointer-events-none"></div>
    </div>
</ParallaxProvider>
    );
}