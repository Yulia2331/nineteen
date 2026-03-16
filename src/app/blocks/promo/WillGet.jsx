import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function WillGet() {
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
      <section className="">
           <div className="container">
             <div className="mb-7 sm:mb-9 flex items-center justify-center gap-1.5 md:gap-8">
                <img src="/img/promo/sm-star.svg" alt="" />
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Что вы получаете на выходе</h2>
             </div>
              <div className="mb-14 md:mb-20 lg:mb-24 relative">
                <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-6 lg:pr-5 border-darck-op">
                     <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">01</span>
                     <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Проработанную стратегию старта</p>
                </div>
               <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-6 lg:pr-5 border-darck-op">
                     <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">02</span>
                     <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Сайт, заточенный под ваш продукт и рекламу</p>
                </div>
                 <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-6 lg:pr-5 border-darck-op">
                     <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">03</span>
                     <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Запущенную рекламу</p>
                </div>
                 <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-6 lg:pr-5 border-darck-op">
                     <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">04</span>
                     <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Первые заявки или чёткое понимание, что и почему нужно скорректировать</p>
                </div>
                 <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-6 lg:pr-5 border-darck-op">
                     <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">05</span>
                     <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Основание для масштабирования или корректировки</p>
                </div>
             </div>
           </div>
         </section>
     </div>
    );
}