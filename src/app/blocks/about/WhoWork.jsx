
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
// import testPictureStatic from "/img/promo/big-logo.png";
export default function WhoWork() {
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
    <div className={`my-28 fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
      <div className="container">
        <div className=" rounded-4xl xs:rounded-bl-[100px] xs:rounded-tr-[100px] bg-white overflow-hidden relative bg-[url('/img/about/rb.png')] bg-cover md:bg-size-[120%_100%] xl:bg-size-[80%_100%] bg-top-right bg-no-repeat">
          <div className="grid md:grid-cols-[3fr_2fr] items-start">
            <div className=" bg-white-op-70 md:bg-transparent p-6 xs:p-8 xs:pb-16 lg:pb-26">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2]">
              С кем 
              <span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%"> мы работаем</span></h2>
              <p className="text-sm xs:text-lg sm:text-xl lg:text-2xl mt-4 md:mt-8">Мы работаем с бизнесом, которому важен управляемый рост. Обычно это компании, которые готовы строить систему и улучшать результат по данным.</p>
            </div>
{/*             
              <div className=" absolute top-0 right-0 w-[80%]">
                <ExportedImage className="h-full " width={3000} height={3000}  src="/img/about/rb.png" alt="bee" />
              </div> */}
            </div>
          
        </div>
      </div>
    </div>
   
    );
}