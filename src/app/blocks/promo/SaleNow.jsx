import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import ContactForm from "../../components/ContactForm";
export default function SaleNow() {
    const [isOpen, setOpen] = useState();
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
    <div className="">
    <div className={`fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
           <section className="relative overflow-hidden pb-40 h-62 xs:h-72 sm:h-[400px] md:h-[490px] lg:h-[590px] xl:h-[680px] w-full">
             <ExportedImage className="bg-cover  bg-top bg-no-repeat" fill src="/img/promo/sale-ru.jpg" alt="Сайт в подарок" />

               <div className="container relative z-10">
                 {/* <ExportedImage className="max-w-[180px] xs:max-w-[100px] sm:max-w-[150px] max-h-22 sm:max-h-32 md:max-h-64 lg:max-w-full absolute left-10 xs:left-32 sm:left-60 top-0" width={254} height={312}  src="/img/promo/star-group.svg" alt="Static Image" /> */}
                {/* <div className="w-full flex justify-end items-center pr-16 xs:pr-32 pt-20 sm:pr-42 sm:pt-32 md:pr-52 md:pt-42">
                    <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-8xl tracking-tight leading-none text-white font-semibold uppercase block">Сайт <br /> в подарок</span>
                  </div> */}
                    <div className="flex flex-col items-start justify-center gap-5 w-96 relative left-5/12 top-12 md:top-42">
                      <span className="text-[16px] xs:text-xl md:text-2xl lg:text-3xl text-white font-semibold uppercase md:leading-9 ">Сайт <br /> в подарок!</span>
              <button  onClick={() => setOpen(true)} className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3
        before:bg-linear-to-br before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0  relative before:h-full before:w-full before:animate-pulse  overflow-hidden  cursor-pointer inset-ring-2  shadow-[15px_15px_55px_rgba(255,255,255,0.55)] ">
            <span className="block z-20 relative">Быстрый старт</span></button>
            
                  </div>
             
              </div>
             
            </section>
          
    </div>
       {isOpen && (                       
                  <div className="h-full w-full fixed left-0 top-0 z-100 flex items-center justify-center">
                    <div className="h-full w-full bg-black-op-80 fixed left-0 top-0" onClick={() => setOpen(false)}></div>
                    <div className="pointer-events-none">
                      <div className="bg-white rounded-4xl relative z-10 pointer-events-auto">
                        <div className="p-5 -mb-3 cursor-pointer" onClick={() => setOpen(false)}> <img src="/img/icon/arr-black.svg" alt="" className='-rotate-180'/> </div>
                       <ContactForm></ContactForm>
                      </div>
                      </div>
                   </div>
                                )}
    </div>
    );
}