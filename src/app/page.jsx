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
import Test from "./components/ContactForm";
import { Link, Element } from 'react-scroll';
import ExportedImage from "next-image-export-optimizer";
import Direct from "./blocks/promo/Direct";

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
       <section className={`mt-12 sm:mt-20 mb-14 md:mb-20 lg:pt-26 py-8 pb-20 xs:py-14 lg:pb-40 h-full w-full bg-[url('/img/promo/sale-bg.png')] bg-cover lg:bg-size-[100%_100%] bg-top bg-no-repeat relative overflow-hidden`}>
                <div className="container">
                  <div className="sm:w-2/3 relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white">
                      Запуск и ведение Яндекс <br /> Директа 
                      <span className="text-darck ml-2">под ключ</span>
                      </h2>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 xs:mt-7 mb-3 xs:mb-6 sm:mb-10 text-white w-60 sm:w-72 md:w-3/4">Формат работы для компаний, которым нужен стабильный поток заявок и понятная модель привлечения клиентов</p>
                      <div className="flex items-start md:items-end flex-col md:w-9/12 gap-y-4">   
             <span className="text-[16px] xs:text-xl md:text-2xl lg:text-3xl text-white font-semibold uppercase md:leading-9 md:text-right w-auto md:w-2/4 block">Сайт <br /> в подарок!</span>
              <a  href="/promo" className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3
        before:bg-linear-to-br before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0  relative before:h-full before:w-full before:animate-pulse  overflow-hidden  cursor-pointer inset-ring-2  shadow-[15px_15px_55px_rgba(255,255,255,0.55)] ">
            <span className="block z-20 relative">Быстрый старт</span></a>
            </div>
                     
                    </div>
                </div>
                {/* <img src="/img/promo/man.png" alt="" className="w-[250px] xs:w-[290px] sm:w-[500px] md:w-[550px] lg:w-[780px] absolute right-0 sm:left-[45%] bottom-0"/> */}
                <ExportedImage className="w-[310px] xs:w-[380px] sm:w-[500px] md:w-[550px] lg:w-[780px] absolute -right-10 sm:left-[45%] bottom-0" width={810} height={648}  src="/img/promo/man.png" alt="Static Image" />
              </section>
        <Cases></Cases>
      
      <div className="h-full w-full bg-[url('/img/bg-2.png')] bg-size-[100%_100%] bg-top bg-no-repeat py-20 lg:py-32">
 
        <Scheme></Scheme>
       
        <div className="flex flex-col items-center text-center mb-14 lg:mb-26">
          <span className="text-xl md:text-2xl font-bold leading-5 md:leading-6 ">Хотите усилить свой маркетинг?</span>
          <ButtonBlack link="https://t.me/nineteen_bees" text="Запланировать диагностику маркетинга" class="sm:px-8 my-6"/>
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
        
       
       
        <div className="container relative">
          <div className={`fixed bottom-3 right-1 md:right-3 z-100 transition-all duration-[.8s] ${op}`}>
                  <ButtonBlack link="https://t.me/nineteen_bees" text="Начать проект" class="w-52 sm:w-72"/>
          </div>
        </div>

          <Growth></Growth>
          
        <Footer></Footer>
      
    </div>
  );
}
