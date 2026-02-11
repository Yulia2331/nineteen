import React, { useCallback, useEffect, useState } from 'react'
export default function MarketingItem(props) {
 
   
  return (
    <div className={`w-full relative card cursor-pointer sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2 xl:p-3 ${props.order}
    after:bg-[url('/img/marketing/shad.png')] after:bg-contain after:bg-no-repeat after:bg-center after:absolute after:-bottom-20 after:left-0  after:w-full after:h-4/5 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-[.8s]
    `} >
        <div  className={`card-front bg-linear-to-br from-blue-400 to-blue-600 pt-12 rounded-[20px] sm:aspect-square flex flex-col justify-between overflow-hidden cursor-pointer ${props.class} relative z-30 
        transition-all duration-[.8s] 
        `} >
                    <h3 className="text-2xl lg:text-3xl text-white uppercase font-semibold">{props.title}</h3>
                    <div className="w-3/4 m-auto -mb-7 flex items-end justify-center">
                        <img src={props.src} alt=""  className="w-62 h-52 object-contain"/>
                    </div>
                </div>
                <div className={`card-back h-full bg-white px-5 pt-12 rounded-[20px] shadow-[0_9px_33px_rgba(36,36,36,0.2)] sm:aspect-square ${props.class} absolute top-0 z-20  transition-all duration-[.8s] rotate-y-180 opacity-0`}>
                    <h3 className="text-2xl lg:text-3xl mb-3 uppercase font-semibold">{props.title}</h3>
                    <p className="text-xl lg:text-2xl">{props.text}</p>
                </div>
        </div>
        );
}