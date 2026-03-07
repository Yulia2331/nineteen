import React, { useCallback, useEffect, useState, useRef } from 'react'
import ContactPop from "../components/ContactPop";
export default function ButtonBlackPop(props) {
     const [isOpen, setOpen] = useState();
  return (  
<div className={`${props.class}`}>
       <button onClick={() => setOpen(true)}
    className={` 
    cursor-pointer rounded-[60px] bg-darck flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] text-white p-4 whitespace-nowrap 
    hover:bg-linear-to-r hover:contrast-150
    hover:from-text-grad-2 hover:from-41.24%
    hover:to-text-grad-3 hover:to-84.31% 
    hover:shadow-xl hover:shadow-sh  transition-all duration-[.6s]
   w-full px-8
    `}>
 
        <span>{props.text}</span>
        
       <img src="/img/icon/arr.svg" alt="" className="w-5 sm:w-auto"/>

    </button>
    {isOpen && (                       
      <div className="h-full w-full bg-black-op-80 fixed left-0 top-0 z-40 flex items-center justify-center">
          <div className="bg-white rounded-4xl">
            <div className="p-5 -mb-3 cursor-pointer" onClick={() => setOpen(false)}> <img src="/img/icon/arr-black.svg" alt="" className='-rotate-180'/> </div>
            <div className="bg-[url('/img/cases-item-bg.png')] bg-size-[150%_70%] bg-bottom bg-no-repeat p-8">
                <h3 className="text-2xl sm:text-[32px] mb-5">Обсудить задачу</h3>
                <span className="text-[16px] before:h-2 before:w-2 before:rounded-full before:bg-green flex items-center gap-2">Мы в онлайне:</span>
                <div className="flex items-center gap-7 mt-3 mb-12">
                  <a href="https://t.me/Allakoala9" className="flex items-center gap-1">
                    <img src="/img/icon/tg.svg" alt="" />
                    <span className="text-[16px]">Telegram</span>
                  </a>
                   <a href="" className="flex items-center gap-1">
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
                    )}
</div>
    );
}