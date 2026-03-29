import ShadowDot from "../components/ShadowDot";
import ButtonBlack from "../components/ButtonBlack";
import ContactPop from "../components/ContactPop";
import ButtonBlackPop from "../components/ButtonBlackPop";
import React, { useCallback, useEffect, useState, useRef } from 'react'

export default function Growth() {
    const [isOpen, setOpen] = useState();
  return (
    <div id="growth" className="bg-linear-to-r from-blue-400 to-blue-600 w-full relative overflow-hidden">
         {/* {isOpen && (                       
                <ContactPop></ContactPop>
                )} */}
        <div className="bg-[url('/img/blue-bee.png')] bg-size-[100%_100%] bg-tl bg-no-repeat absolute left-0 top-0 h-full w-full lg:w-4/6 translate-x-1/2 lg:-translate-x-1/2 scale-200 md:scale-120"></div>
        <div className="container">
            <div className="grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1fr] relative py-20 md:py-30 z-20">
                <div className="">
                </div>
                <div className="">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-bold uppercase tracking-[-1] md:tracking-[-2] text-white">Готовы <br /> к системному росту?</h2>
                    <div className="flex items-center mt-10">
                        <ShadowDot></ShadowDot>
                        <span className="text-lg sm:text-xl md:text-3xl text-white">Начнём со стратегической <br /> сессии</span>
                    </div>
                     <div className="flex items-center mt-10">
                        <ShadowDot></ShadowDot>
                        <span className="text-lg sm:text-xl md:text-3xl text-white">Разберём текущий маркетинг <br /> и покажем точки масштабирования</span>
                    </div>
                   

<ButtonBlackPop  text="Запланировать стратегическую сессию" class="mt-14"/>
                </div>
            </div>
        </div>
    </div>
    );
}