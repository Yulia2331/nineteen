'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import ContactForm from "../components/ContactForm";
// import { Link, Element } from 'react-scroll'
import Link from 'next/link'

export default function Header() {
     const [isOpen, setOpen] = useState();
     const [isOpenPop, setOpenPop] = useState();
  return (
    <div className=" relative z-100">

<header className=" w-full py-2 backdrop-blur-sm bg-white-op-30 mb-6 fixed top-0 z-10">
<div className="container">
    <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
           <ExportedImage className="w-12 lg:w-20" width={82} height={62}  src="/img/logo.svg" alt="Static Image" />
            <div className="flex flex-col items-start leading-none font-medium tracking-tight ml-1 sm:ml-2">
                <span className="text-[18px] sm:text-xl lg:text-2xl">Nineteen Bees</span>
                <span className="text-[11px] sm:text-[12px] lg:text-[14px]">Развитие бизнеса в сети</span>
            </div>
        </a>
        <ul className="hidden lg:flex font-bold text-[12px] lg:text-sm xl:text-[16px] gap-4 xl:gap-7 uppercase">
            {/* <li className="cursor-pointer"><Link href="/#marketing" >Услуги</Link></li> */}
            <li className="cursor-pointer"><Link href="/cases">Кейсы</Link></li>
            <li className="cursor-pointer"><Link href="/about">О компании</Link></li>
            <li className="cursor-pointer"><Link href="/promo">Быстрый старт</Link></li>
        </ul>
        <div className="flex items-center gap-1 sm:gap-4">
        <span onClick={() => setOpenPop(true)} className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3
        before:bg-linear-to-bl before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0  relative before:h-full before:w-full before:animate-pulse  overflow-hidden before:contrast-120 hidden xs:flex cursor-pointer">
            <span className="block z-20 relative">Связаться</span></span>
            <a className="sm:hidden" href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
        <div className="sm:flex items-center gap-5 hidden">
            <div className="flex md:gap-1 ">
                <a href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
                <a href="https://t.me/nineteen_bees" target="_blank"><img src="/img/icon/tg.svg" alt="" /></a>
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
    <ul className="flex flex-col font-bold text-[12px] lg:text-sm xl:text-[16px] gap-4 xl:gap-7 uppercase mb-5">
            {/* <li className="cursor-pointer"><Link href="/#marketing" >Услуги</Link></li> */}
            <li className="cursor-pointer"><Link href="/cases">Кейсы</Link></li>
            <li className="cursor-pointer"><Link href="/about">О компании</Link></li>
            <li className="cursor-pointer"><Link href="/promo">Быстрый старт</Link></li>
    </ul>
    <span onClick={() => setOpenPop(true)} className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3 text-center max-w-60
        before:bg-linear-to-bl before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0 relative  before:h-full before:w-full before:animate-pulse  overflow-hidden before:contrast-120 ">
        <span className="block z-20 relative">Связаться</span></span>
        <div className="flex md:gap-1 mt-8">
                <a href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
                <a href="https://t.me/nineteen_bees" target="_blank"><img src="/img/icon/tg.svg" alt="" /></a>
                <a href="https://wa.me/37259002425" target="_blank"><img src="/img/icon/wh.svg" alt="" /></a>
        </div>
      
      
</div>
<div className="pt-16 lg:pt-22"></div>
 {isOpenPop && (                       
      <div className="h-full w-full fixed left-0 top-0 z-100 flex items-center justify-center">
        <div className="h-full w-full bg-black-op-80 fixed left-0 top-0" onClick={() => setOpenPop(false)}></div>
        <div className="pointer-events-none">
          <div className="bg-white rounded-4xl relative z-10 pointer-events-auto">
            <div className="p-5 -mb-3 cursor-pointer" onClick={() => setOpenPop(false)}> <img src="/img/icon/arr-black.svg" alt="" className='-rotate-180'/> </div>
            <ContactForm></ContactForm>
          </div>
          </div>
       </div>
                    )}
</div>
    );
}