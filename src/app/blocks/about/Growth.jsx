
import ButtonBlackPop from "../../components/ButtonBlackPop";
import ExportedImage from "next-image-export-optimizer";
import React, { useCallback, useEffect, useState, useRef } from 'react'

export default function Growth() {
    const [isOpen, setOpen] = useState();
  return (
    <div className="-mt-20 lg:-mt-32 bg-linear-to-r from-blue-400 to-blue-600 w-full relative overflow-hidden">
        <div className="container">
            <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1fr] relative py-20 pb-0 md:pb-16 md:py-16 z-20">
                <div className="h-46 md:h-auto relative flex justify-center  items-center">
                    <ExportedImage className="sm:max-w-2/3 md:max-w-none  absolute w-full md:scale-200 lg:scale-130" width={500} height={500}  src="/img/about/logo.png" alt="Static Image" />
                </div>
                <div className=" relative">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white mb-6">Маркетинг становится частью бизнес-системы</h2>
                         <span className="text-lg sm:text-xl md:text-2xl text-white block">Если вам близок такой подход, напишите нам. </span>
                        <span className="text-lg sm:text-xl md:text-2xl text-white">Обсудим задачу и предложим план действий.</span>

                   

<ButtonBlackPop  text="Запланировать стратегическую сессию" class="mt-14"/>
                </div>
            </div>
        </div>
    </div>
    );
}