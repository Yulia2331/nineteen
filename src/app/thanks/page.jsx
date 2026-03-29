// 'use client'
// import React, { useCallback, useEffect, useState, useRef } from 'react'
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Cases from "../blocks/Cases";
export default function Thankyou() {
  return (
    <div className="min-h-screen justify-center w-full overflow-hidden relative">   
          <Header></Header> 
          <div className="container">
            <div className="pt-10 pb-20">
       <h1 className='text-4xl xs:text-5xl sm:text-[68px] md:text-[56px] lg:text-[68px] leading-none tracking-tight font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-center mb-8 sm:mb-14'>Спасибо! <br /> Мы получили вашу заявку.</h1>
       <p className="text-xl sm:text-2xl mb-5">Специалист 19BEES свяжется с вами в ближайшее время, чтобы коротко обсудить задачу и понять, какое решение подойдёт вашему бизнесу.</p>
       <p className="text-xl sm:text-2xl mb-5">Обычно ответ занимает до 60 минут в рабочее время.</p>
       <p className="text-xl sm:text-2xl mb-8 sm:mb-14">Пока ждёте, посмотрите кейсы 19BEES. Там можно увидеть, какие задачи мы решаем и какие результаты получают клиенты.</p>
              <Cases></Cases>
       </div>
       </div>
        <Footer></Footer>
    </div>
  );
}
