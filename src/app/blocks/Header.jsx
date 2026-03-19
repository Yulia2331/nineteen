'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Image from "next/image";
// import { Link, Element } from 'react-scroll'
import Link from 'next/link'

export default function Header() {
     const [isOpen, setOpen] = useState();
     const [isOpenPop, setOpenPop] = useState();
  return (
    <div className="">
<header className=" w-full py-2 backdrop-blur-sm bg-white-op-30 mb-6 fixed top-0 z-30">
<div className="container">
    <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
            <img src="/img/logo.svg" alt="" className="w-12 lg:w-20"/>
           
            <div className="flex flex-col items-start leading-none font-medium tracking-tight ml-1 sm:ml-2">
                <span className="text-[18px] sm:text-xl lg:text-2xl">Nineteen bees</span>
                <span className="text-[11px] sm:text-[12px] lg:text-[14px]">Развитие бизнеса в сети</span>
            </div>
        </a>
        <ul className="hidden lg:flex font-bold text-[12px] lg:text-sm xl:text-[16px] gap-4 xl:gap-7 uppercase">
            {/* <li className="cursor-pointer"><Link href="/#marketing" >Услуги</Link></li> */}
            <li className="cursor-pointer"><Link href="/cases">Кейсы</Link></li>
            <li className="cursor-pointer"><Link href="/">О компании</Link></li>
            <li className="cursor-pointer"><span onClick={() => setOpenPop(true)}>Связаться</span></li>
        </ul>
        <div className="flex items-center gap-1 sm:gap-4">
        <a href="/promo" className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3
        before:bg-linear-to-bl before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0  relative before:h-full before:w-full before:animate-pulse  overflow-hidden before:contrast-120 hidden xs:flex">
            <span className="block z-20 relative">Быстрый старт</span></a>
            <a className="sm:hidden" href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
        <div className="sm:flex items-center gap-5 hidden">
            <div className="flex md:gap-1 ">
                <a href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
                <a href="https://t.me/Allakoala9" target="_blank"><img src="/img/icon/tg.svg" alt="" /></a>
                <a href="https://wa.me/37259002425" target="_blank"><img src="/img/icon/wh.svg" alt="" /></a>
            </div>
            <div className="hidden gap-2">
                <a href="" className="border-2 border-darck rounded-full flex items-center justify-center p-2"><img src="/img/icon/search.svg" alt="" /></a>
                <a href="" className="border-2 border-darck rounded-full flex items-center justify-center p-2"><img src="/img/icon/prof.svg" alt="" /></a>
            </div>
            
        </div>
              <div onClick={() => setOpen(!isOpen)} className="lg:hidden flex flex-col justify-between h-4.5 w-5">
                <span className="h-[2px] w-full bg-darck"></span>
                <span className="h-[2px] w-full bg-darck"></span>
                <span className="h-[2px] w-full bg-darck"></span>
        </div>
        </div>
    </div>
</div>
</header>
<div className={`fixed top-[54px] sm:top-15 right-0 w-full xs:w-1/2 md:w-1/3 z-40 backdrop-blur-sm bg-white-op-30 p-5 flex flex-col transition-all duration-[.8s]  ${isOpen ? '' : 'opacity-0 translate-x-[100%]'}`}>
    <ul className="flex flex-col font-bold text-[12px] lg:text-sm xl:text-[16px] gap-4 xl:gap-7 uppercase">
            {/* <li className="cursor-pointer"><Link href="/#marketing" >Услуги</Link></li> */}
            <li className="cursor-pointer"><Link href="/cases">Кейсы</Link></li>
            <li className="cursor-pointer"><Link href="/">О компании</Link></li>
            <li className="cursor-pointer"><span onClick={() => setOpenPop(true)}>Связаться</span></li>
    </ul>
        <div className="flex md:gap-1 my-8">
                <a href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
                <a href="https://t.me/Allakoala9" target="_blank"><img src="/img/icon/tg.svg" alt="" /></a>
                <a href="https://wa.me/37259002425" target="_blank"><img src="/img/icon/wh.svg" alt="" /></a>
        </div>
      
      <a href="/promo" className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3 text-center max-w-60
        before:bg-linear-to-bl before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0 relative  before:h-full before:w-full before:animate-pulse  overflow-hidden before:contrast-120 ">
        <span className="block z-20 relative">Быстрый старт</span></a>
</div>
<div className="pt-16 lg:pt-22"></div>
 {isOpenPop && (                       
      <div className="h-full w-full fixed left-0 top-0 z-100 flex items-center justify-center">
        <div className="h-full w-full bg-black-op-80 fixed left-0 top-0" onClick={() => setOpenPop(false)}></div>
        <div className="pointer-events-none">
          <div className="bg-white rounded-4xl relative z-10 pointer-events-auto">
            <div className="p-5 -mb-3 cursor-pointer" onClick={() => setOpenPop(false)}> <img src="/img/icon/arr-black.svg" alt="" className='-rotate-180'/> </div>
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