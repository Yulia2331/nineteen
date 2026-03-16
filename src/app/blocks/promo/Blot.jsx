import Image from "next/image";
import ButtonPop from "../../components/ButtonPop";
import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function Blot() {
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
     <section className="h-full w-full">
      <div className="flex justify-center">
        <img src="/img/promo/blot-full.svg" alt="" className="scale-120 md:scale-100"/>
      </div>
      <div className="container">
       <div className="flex flex-col items-center justify-center mt-6 md:mt-12">
            <ButtonPop text="Быстрый старт" class="w-48 md:w-72 mb-3"></ButtonPop>
            <span className="text-sm md:text-[16px]">Вход в зону роста</span>
          </div>
      </div>
    </section>
    </div>
    );
}