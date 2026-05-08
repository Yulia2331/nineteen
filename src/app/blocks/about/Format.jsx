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
     <div className={`mt-10 md:mt-20 fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    <div className="h-full w-full bg-[url('/img/format-bg.png')] bg-size-[180%_100%] bg-center bg-no-repeat">
    <div className="container">    
            <div className="mb-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center"><span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">Как мы работаем</span></h2>
            </div>
            <div className="relative pb-60 flex justify-center">
              <div className="absolute top-24 xs:top-1/4 backdrop-blur-sm bg-white-op-30 p-5 sm:p-7 rounded-4xl">
                <h3 className="text-center text-xl xs:text-2xl md:text-3xl uppercase font-semibold">Мы всегда начинаем <br /> с клиента</h3>
              </div>
                    <div className="py-3 sm:py-5 px-4 sm:px-8 pr-10 bg-white rounded-4xl absolute bottom-72 lg:bottom-5/12 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80 left-0 lg:left-24">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8]">За что он готов <br /> платить</p>
                    </div>
                    <div className="py-3 sm:py-5 px-4 sm:px-8 pr-10 bg-white rounded-4xl absolute right-0 lg:right-24 lg:top-10 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-[375px]">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8]">Кто ваш клиент и чего <br /> он хочет</p>
                    </div>
                    <div className="py-3 sm:py-5 px-4 sm:px-8 pr-5 bg-white rounded-4xl right-0 absolute lg:right-60 bottom-52 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-54 sm:w-[345px]">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8]">Почему должен выбрать вас, а не конкурента</p>
                    </div>
                <div className="flex justify-center items-center ">
                  <ExportedImage className="w-full" width={3840} height={3840}  src="/img/19.gif" alt="Static Image" unoptimized={true}/>
                </div>
            </div>
         </div>   
        </div>
        </div>
    );
}