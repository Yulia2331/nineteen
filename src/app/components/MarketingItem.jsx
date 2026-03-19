import React, { useCallback, useEffect, useState } from 'react'
export default function MarketingItem(props) {
 
   
  return (
    <div className={`w-full relative card cursor-pointer ${props.order}
    after:bg-[url('/img/marketing/shad.png')] after:bg-contain after:bg-no-repeat after:bg-center after:absolute after:-bottom-20 after:left-0  after:w-full after:h-4/5 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-[.8s] 
    `} >
        <div  className={`card-front bg-linear-to-br from-blue-400 to-blue-600 pt-6 sm:pt-12 rounded-[20px] aspect-square flex flex-col justify-between overflow-hidden cursor-pointer ${props.class} relative z-30
        transition-all duration-[.8s] 
        `} >
                    <h3 className="text-sm xs:text-lg sm:text-[26px] lg:text-2xl xl:text-3xl text-white uppercase font-semibold">{props.title}</h3>
                    <div className="w-3/4 m-auto -mb-7 flex items-end justify-center">
                        <img src={props.src} alt=""  className="w-52 h-42 sm:w-62 sm:h-52 object-contain"/>
                    </div>
                </div>
                <div className={`card-back h-full w-full aspect-square absolute left-0  top-0 z-20  transition-all duration-[.8s] rotate-y-180 opacity-0`}>
                    <div className={`h-full bg-white px-1 xs:px-5 pt-6 sm:pt-12 rounded-[20px] shadow-[0_9px_33px_rgba(36,36,36,0.2)] ${props.class}`}>
                        <h3 className="text-sm xs:text-lg sm:text-[26px] lg:text-2xl xl:text-3xl mb-1 xs:mb-3 uppercase font-semibold">{props.title}</h3>
                        <p className=" leading-4.5 sm:leading-normal text-sm xs:text-[16px] sm:text-2xl md:text-xl xl:text-2xl sm:px-2">{props.text}</p>
                    </div>
                </div>
        </div>
        );
}