import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
export default function Direct() {
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
         <section className="mt-12 sm:mt-20 mb-14 md:mb-20 lg:pt-26 py-8 pb-20 xs:py-14 lg:pb-40 h-full w-full bg-[url('/img/promo/sale-bg.png')] bg-cover lg:bg-size-[100%_100%] bg-top bg-no-repeat relative overflow-hidden">
                <div className="container">
                  <div className="sm:w-2/3 relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white">
                      Запуск и ведение Яндекс <br /> Директа 
                      <span className="text-darck ml-2">под ключ</span>
                      </h2>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 xs:mt-7 mb-3 xs:mb-8 sm:mb-12 text-white w-72 md:w-3/4">Формат работы для компаний, которым нужен стабильный поток заявок и понятная модель привлечения клиентов</p>
                      <div className="flex items-start md:items-end flex-col md:flex-row gap-y-4">
                        <button  onClick={() => setOpen(true)} className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3
        before:bg-linear-to-br before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0  relative before:h-full before:w-full before:animate-pulse  overflow-hidden  cursor-pointer inset-ring-2  shadow-[15px_15px_55px_rgba(255,255,255,0.55)] ">
            <span className="block z-20 relative">Быстрый старт</span></button>
             <span className="text-[16px] xs:text-xl md:text-3xl text-white font-semibold uppercase md:leading-9 sm:text-right w-auto sm:w-64 md:w-2/4 block">Сайт <br /> в подарок!</span>
            </div>
                     
                    </div>
                </div>
                {/* <img src="/img/promo/man.png" alt="" className="w-[250px] xs:w-[290px] sm:w-[500px] md:w-[550px] lg:w-[780px] absolute right-0 sm:left-[45%] bottom-0"/> */}
                <ExportedImage className="w-[250px] xs:w-[290px] sm:w-[500px] md:w-[550px] lg:w-[780px] absolute right-0 sm:left-[45%] bottom-0" width={810} height={648}  src="/img/promo/man.png" alt="Static Image" />
              </section>
    </div>
     {isOpen && (                       
      <div className="h-full w-full fixed left-0 top-0 z-100 flex items-center justify-center">
        <div className="h-full w-full bg-black-op-80 fixed left-0 top-0" onClick={() => setOpen(false)}></div>
        <div className="pointer-events-none">
          <div className="bg-white rounded-4xl relative z-10 pointer-events-auto">
            <div className="p-5 -mb-3 cursor-pointer" onClick={() => setOpen(false)}> <img src="/img/icon/arr-black.svg" alt="" className='-rotate-180'/> </div>
            <div className="bg-[url('/img/cases-item-bg.png')] bg-size-[150%_70%] bg-bottom bg-no-repeat p-8">
                <h3 className="text-2xl sm:text-[32px] mb-5">Обсудить задачу</h3>
                <span className="text-[16px] before:h-2 before:w-2 before:rounded-full before:bg-green flex items-center gap-2">Мы в онлайне:</span>
                <div className="flex items-center gap-7 mt-3 mb-12">
                  <a href="https://t.me/Allakoala9" className="flex items-center gap-1">
                    <img src="/img/icon/tg.svg" alt="" />
                    <span className="text-[16px]">Telegram</span>
                  </a>
                   <a href="https://max.ru/u/f9LHodD0cOL1TBKpIYV2yvfq7IPI0UFN4TRvrHlzh88Y3BU8ff3tQ3Sybic" className="flex items-center gap-1">
                    <img src="/img/icon/max.svg" alt="" />
                    <span className="text-[16px]">Max</span>
                  </a>
                </div>
                <h4 className="text-lg sm:text-2xl">Оставьте номер телефона <br /> и мы вам перезвоним</h4>
                <form action="" className="mt-5">
                  <label htmlFor="" className="text-[16px] block mb-3">Телефон</label>
                  <input type="text" className="text-[16px] bg-white rounded-[10px] w-full p-4 outline-darck-op"/>
                  <button className="cursor-pointer rounded-[60px] bg-darck flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] text-white p-4 whitespace-nowrap w-full mt-12">Отправить</button>
                </form>
            </div>
          </div>
          </div>
       </div>
                    )}
    </div>
    );
}