
import ExportedImage from "next-image-export-optimizer";
import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function AfterContacting() {
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
        <div className="mb-3">
            <div className="mb-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">На этапе роста компании</span> важно понять:</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 lg:px-8 lg:p-5 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[58px]">01/</span>
                    <p className="text-xl lg:text-2xl tracking-[-.8] mt-8 leading-7">Что именно приносит <br /> заявки</p>
                </div>
                <div className="p-4 lg:px-8 lg:p-5 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[58px]">02/</span>
                    <p className="text-xl lg:text-2xl tracking-[-.8] mt-8 leading-7">Где теряются деньги <br /> и время</p>
                </div>
                <div className="p-4 lg:px-8 lg:p-5 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[58px]">03/</span>
                    <p className="text-xl lg:text-2xl tracking-[-.8] mt-8 leading-7">Что дает рост и что можно <br /> масштабировать</p>
                </div>
            </div>
            <div className="bg-linear-to-r from-blue-400 to-blue-600 mt-3 rounded-4xl rounded-tr-[100px] rounded-bl-[100px] flex flex-col justify-between  w-full overflow-hidden relative md:h-56 lg:h-72">
                <p className="relative text-xl xs:text-2xl text-white p-5 xs:p-8 md:w-9/12">Мы помогаем перейти к потоку заявок, который можно планировать, считать и улучшать. Маркетинг превращается в понятный инструмент.</p>
                <div className="-mt-5 xs:-mt-12 sm:-mt-8 md:mt-0  md:absolute  w-full h-full flex justify-end items-end">
                    <ExportedImage className="sm:w-1/2 md:w-1/3 h-auto max-h-64 md:h-48 lg:h-60 object-contain" width={288} height={288}  src="/img/about/photo.png" alt="Static Image" />
                </div>
                
            </div>
      
        </div>
    </div>
    </div>
    );
}