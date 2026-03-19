import Button from "../components/Button";
import ButtonPop from "../components/ButtonPop";
import ContactPop from "../components/ContactPop";
import React, { useCallback, useEffect, useState, useRef } from 'react'
export default function AfterContacting() {
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
    <div className="mb-20 md:mb-30 lg:mb-26">
    <div className={`fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    <div className="container">
        <div className="mb-3">
            <div className="mb-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2]">Что будет после обращения</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                <div className="p-4 lg:px-8 lg:p-5 xl:pr-20 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[58px]">01/</span>
                    <p className="text-xl lg:text-2xl tracking-[-.8] mt-4 leading-7">Уточняем задачу и цели <br /> (30-45 минут)</p>
                </div>
                <div className="p-4 lg:px-8 lg:p-5 xl:pr-20 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[58px]">02/</span>
                    <p className="text-xl lg:text-2xl tracking-[-.8] mt-4 leading-7">Проводим экспресс- <br /> диагностику по данным <br /> и доступам (1–2 дня)</p>
                </div>
                <div className="p-4 lg:px-8 lg:p-5 xl:pr-20 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[58px]">03/</span>
                    <p className="text-xl lg:text-2xl tracking-[-.8] mt-4 leading-7">Согласуем план работ <br /> и метрики результата</p>
                </div>
            </div>
            <div className="bg-linear-to-r from-blue-400 to-blue-600 mt-3 rounded-4xl rounded-tr-[100px] rounded-bl-[100px] p-8 lg:pt-4 lg:pb-0 sm:grid grid-cols-2  lg:grid-cols-3  w-full overflow-hidden relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white relative z-20 mb-5">Вы получите</h2>
                <ul className="ml-5 sm:ml-0 sm:text-xl text-white tracking-[-0.5] list-disc max-w-4/5 relative z-20">
                    <li className="mb-4">детальный разбор текущего маркетинга с выделением зон роста</li>
                    <li className="mb-4">приоритет гипотез <br /> на первые этап работы</li>
                    <li>единый план развития сайта и рекламы</li>
                </ul>
                <div className="absolute right-0 top-0 opacity-40 lg:opacity-100 lg:relative lg:-mb-32 w-full h-auto flex justify-end "><img  src="/img/freepik.png" alt="" className="lg:w-full h-96 object-contain"/></div>
                
            </div>
      
        </div>
    </div>
    </div>
    <div className="container ">      
        <div className=" flex flex-col items-end">
                <div className="flex flex-col items-center w-full lg:w-1/2" >
                    <ButtonPop text="Запланировать стратегическую сессию" class="w-full"></ButtonPop>
                    <span className="text-[16px] mt-1 text-center">Если вам нужен рост, который можно считать и масштабировать</span>
                </div>
            </div>
        </div>
    </div>
    );
}