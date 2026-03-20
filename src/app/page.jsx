'use client'
// import Image from "next/image";
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Marquee from 'react-double-marquee';
import Header from "./blocks/Header";
import Banner from "./blocks/Banner";
import Marketing from "./blocks/Marketing";
import Cases from "./blocks/Cases";
import Scheme from "./blocks/Scheme";
import AfterContacting from "./blocks/AfterContacting";
import Format from "./blocks/Format";
import Numbers from "./blocks/Numbers";
import WhenCome from "./blocks/WhenCome";
import Growth from "./blocks/Growth";
import ButtonBlack from "./components/ButtonBlack";
import ButtonBlackPop from "./components/ButtonBlackPop";
import Button from "./components/Button";
import ContactPop from "./components/ContactPop";
// import Test from "./blocks/Test";
import Footer from "./blocks/Footer";
import Test from "./blocks/Test";
import { Link, Element } from 'react-scroll';
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  const [isOpen, setOpen] = useState();
      const [op, setOp] = useState('opacity-0');
 const onScroll = useCallback(event => {
                const { pageYOffset, scrollY } = window;
                if(scrollY > 1600 || pageYOffset > 1600){
                  setOp('opacity-100')
                        }
            }, []);
          
            useEffect(() => {
              //add eventlistener to window
              window.addEventListener("scroll", onScroll, { passive: true });
              // remove event on unmount to prevent a memory leak with the cleanup
              return () => {
                 window.removeEventListener("scroll", onScroll, { passive: true });
              }
            }, []);

  return (
    <div className="min-h-screen justify-center w-full overflow-hidden relative">
      <div className="h-full w-full bg-[url('/img/bg-1.png')] bg-size-[100%_100%] bg-top bg-no-repeat">
          <Header></Header> 
            <Banner></Banner>

           <Marketing></Marketing>
      </div>
     
        <Cases></Cases>
      
      <div className="h-full w-full bg-[url('/img/bg-2.png')] bg-size-[100%_100%] bg-top bg-no-repeat py-20 lg:py-32">
 
        <Scheme></Scheme>
       
        <div className="flex flex-col items-center text-center mb-14 lg:mb-26">
          <span className="text-xl md:text-2xl font-bold leading-5 md:leading-6 ">Хотите усилить свой маркетинг?</span>
          <ButtonBlack link="https://t.me/Allakoala9" text="Запланировать диагностику маркетинга" class="sm:px-8 my-6"/>
          <span className="text-sm px-5">Если вам нужен рост, который можно считать и масштабировать</span>
        </div>
        <AfterContacting></AfterContacting>
         <Format></Format>
      </div>
             <div className="marquee mb-18 sm:mb-32">
  <div className="marquee__track">
    <div className="marquee__content flex gap-5">
            <img src="/img/logo.svg" alt="" className="w-24"/>
            <span className="text-[87px] font-bold uppercase">19bees</span>
             <img src="/img/logo.svg" alt="" className="w-24"/>
            <span className="text-[87px] font-bold uppercase">19bees</span>
            <img src="/img/logo.svg" alt="" className="w-24"/>
            <span className="text-[87px] font-bold uppercase">19bees</span>
            <img src="/img/logo.svg" alt="" className="w-24"/>
            <span className="text-[87px] font-bold uppercase">19bees</span>
             <img src="/img/logo.svg" alt="" className="w-24"/>
            <span className="text-[87px] font-bold uppercase">19bees</span> 
    </div>
  </div>
</div>
        <Numbers></Numbers>
        <WhenCome></WhenCome>
        
          <Growth></Growth>
       
        <div className="container relative">
          <div className={`fixed  bottom-3 right-3 z-50 transition-all duration-[.8s] ${op}`}>
                  <ButtonBlack link="https://t.me/Allakoala9" text="Начать проект" class="w-52 sm:w-72"/>
          </div>
        </div>
        {isOpen && (
      <div className="">
        <ContactPop></ContactPop>
      </div>
        )}
        <Footer></Footer>
    </div>
  );
}
