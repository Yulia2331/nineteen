'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Header from "../blocks/Header";
import Banner from "../blocks/about/Banner";
import Why from "../blocks/about/Why";
import WhoWork from "../blocks/about/WhoWork";
import Scheme from "../blocks/about/Scheme";
import AfterContacting from "../blocks/about/AfterContacting";
import Format from "../blocks/about/Format";
import Plan from "../blocks/about/Plan";
import WhenCome from "../blocks/WhenCome";
import Growth from "../blocks/about/Growth";
import Footer from "../blocks/Footer";
import ExportedImage from "next-image-export-optimizer";


export default function AboutPage() {
  const [isOpen, setOpen] = useState();
   
  return (
    <div className="min-h-screen justify-center w-full overflow-hidden relative">
      <div className="h-full w-full bg-[url('/img/about/sh1.png')] bg-size-[200%_80%] bg-position-[25%_-160%] bg-no-repeat ">
      <div className="h-full w-full relative bg-[url('/img/about/sh2.png')] bg-size-[100%_78%] bg-top bg-no-repeat">
      {/* <ExportedImage className="bg-size-[100%_100%] bg-top bg-no-repeat" fill src="/img/about/sh2.png" alt="bee" /> */}
          <Header></Header> 
          
          <Banner></Banner>
          <div className="h-full w-full relative bg-[url('/img/about/sh3.png')] bg-size-[190%_100%] bg-top bg-no-repeat">
          <Why></Why>
        
            <AfterContacting></AfterContacting>
            </div>
            </div>
            
      </div>   
      <div className="h-full w-full bg-[url('/img/about/sh4.png')] bg-size-[280%_90%] bg-position-[85%_100%] bg-no-repeat">
        <Format></Format>

      <div className="h-full w-full bg-[url('/img/about/plan-bg.png')] bg-size-[100%_50%] bg-position-[100%_-10%] bg-no-repeat py-5 lg:py-8">
        <Plan></Plan>
        <WhenCome cardCome = {[
          {text: 'Перед началом работ фиксируем цель и показатели. Дальше регулярно сверяемся с ними.', img: '/img/about/1.png'}, 
          {text: 'Проверяем гипотезы по данным. То, что окупает себя — усиливаем, что не дает результата — отключаем.', img: '/img/about/2.png'}, 
          {text: 'Вы видите логику действий и прозрачную картину: что сделано, что сработало, что улучшаем дальше.', img: '/img/about/3.png'}]}>
        </WhenCome>
      </div>

     <div className="h-full w-full bg-[url('/img/about/sh5.png')] bg-size-[235%_150%] bg-position-[80%_38%] bg-no-repeat pb-20 lg:pb-32">
        
        <Scheme></Scheme>
      <WhoWork></WhoWork>  
        </div>
      </div>
    <Growth></Growth>
        <Footer></Footer>
      
    </div>
  );
}
