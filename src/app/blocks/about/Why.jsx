
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
// import testPictureStatic from "/img/promo/big-logo.png";
export default function Why() {
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
    <div className={`my-16 sm:my-28  fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    
      <div className="container">
        <div className="p-8 rounded-4xl bg-white relative">
            <ExportedImage className="absolute lg:-top-22 -top-40 -left-36 lg:-left-52 pointer-events-none z-20" width={288} height={355}  src="/img/about/query2.png" alt="Static Image"/>
      <ExportedImage className="absolute -right-14 -bottom-22  pointer-events-none z-20" width={150} height={180}  src="/img/about/query.png" alt="Static Image"/>
          <div className="flex flex-col-reverse items-end sm:grid sm:grid-cols-[3fr_2fr] sm:items-start">
            <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] max-w-64 xs:max-w-none">
              Почему мы работаем <br />
              <span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%"> в этом формате</span></h2>
              <p className="text-sm xs:text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-8">Многие компании растут на клиентах по рекомендациям <br /> и работе с разными подрядчиками. До определенного момента это помогает, потом рост становится непредсказуемым.</p>
            </div>
            <div className="flex justify-end absolute top-4 right-8 sm:relative">
              <img src="/img/icon/arr-big.svg" alt="" className="w-16 sm:w-22 md:w-38"/>
            </div>
            </div>
        </div>
      </div>
       
    </div>
   
    );
}