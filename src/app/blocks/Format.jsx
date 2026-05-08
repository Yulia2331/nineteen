import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
export default function Format() {
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
    <div className="h-full w-full bg-[url('/img/format-bg.png')] bg-size-[180%_100%] bg-center bg-no-repeat">
    <div className="container">    
            <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center"><span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">Наш формат</span> <br /> подходит, если</h2>
            </div>
            <div className="relative">
                    <div className="py-3 sm:py-5 px-4 sm:px-8 pr-10 bg-white rounded-4xl absolute bottom-5/12 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80 lg:left-24">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-3.5 sm:leading-6">вы готовы принимать решения по цифрам, а не по ощущениям</p>
                    </div>
                    <div className="py-3 sm:py-5 px-4 sm:px-8 pr-10 bg-white rounded-4xl absolute right-24 lg:top-7 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-3.5 sm:leading-6">вы готовы выстраивать систему маркетинга для своего бизнеса</p>
                    </div>
                    <div className="py-3 sm:py-5 px-4 sm:px-8 pr-10 bg-white rounded-4xl right-10 absolute sm:right-30 bottom-0 lg:bottom-32 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-3.5 sm:leading-6">вам важен стабильный результат, а не разовый эффект</p>
                    </div>
                <div className="flex justify-center items-center ">
                  <ExportedImage className="w-11/12 lg:w-8/12 xl:w-5/12" width={3840} height={3840}  src="/img/19.gif" alt="Static Image" unoptimized={true}/>
                    {/* <img className="w-11/12 lg:w-8/12 xl:w-5/12" src="/img/19.gif" alt="" /> */}
                </div>
            </div>
         </div>   
        </div>
        </div>
    );
}