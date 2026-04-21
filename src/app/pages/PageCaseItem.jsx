'use client'
import React, { useCallback, useEffect, useState, Suspense, useRef } from 'react'
import Header from "../blocks/Header";
import BreadCrumbs from "../components/BreadCrumbs";
import SmCard from "../components/SmCard";
import ButtonBlackPop from "../components/ButtonBlackPop";
import Footer from "../blocks/Footer";
import Slider from 'react-slick';

export default function CasePage(post) {
 const [isOpen, setOpen] = useState();
 const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlidem, setCurrentSlidem] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
     beforeChange: (oldIndex, nextIndex) => setCurrentSlide(nextIndex),
  };
  const settingsm = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (oldIndex, nextIndex) => setCurrentSlidem(nextIndex),
  };
 
const slider = React.useRef(null);
const sliderm = React.useRef(null);
 const [vis1, setVis1] = useState(false);
const r1 = useRef(null);
            useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setVis1(true);
                    observer.unobserve(entry.target); // Остановить наблюдение
                  }
                },
                { threshold: 0.1 } // Срабатывает, когда видно 10% блока
              );
          
              if (r1.current) {
                observer.observe(r1.current);
              }
          
              return () => {
                if (r1.current) observer.unobserve(r1.current);
              };
            }, []);


// if (!post || post.length === 0) return <div className="h-full w-full bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% absolute top-0"></div>
//   const wh = post.cases_cards;
//   const image = post.cases_popup;
return(
  <div className="relative">
    {isOpen && (  
      <div className="h-screen w-full fixed top-0 z-50 overflow-hidden">
        <div className="bg-black-op-80 h-full w-full fixed top-0 " onClick={() => setOpen(false)}></div>
        <div className="container">
          <div className="flex justify-center relative pointer-events-none">
            <button onClick={() => setOpen(false)} className="text-white text-4xl md:text-6xl fixed top-0 left-0 md:left-10 cursor-pointer">&times;</button>
          <div className="w-full md:w-6/12 pointer-events-auto overflow-hidden">
          <Slider ref={slider} {...settings} className=''>
            {post.image.map((n, i) => ( 
              <div key={i} className="px-1 h-screen overflow-y-auto">
                <img src={n.item_img} alt="" className="w-full"/>
              </div>
                    ))
                  }
            </Slider>
             <div className="fixed bottom-6 left-0 w-full flex justify-center">
            <div className="h-10 w-38 md:h-16 md:w-60 bg-white border-2 border-[#1DC1F8] rounded-4xl flex items-center justify-between p-4">
              <button onClick={() => slider?.current?.slickPrev()} className="cursor-pointer -rotate-180 "><img src="/img/icon/arr-black.svg" alt="" className='w-6 md:w-9 pointer-events-none'/></button>
                <span className="md:text-3xl text-darck-op-30">{currentSlide + 1}/{post.image.length}</span>
              <button onClick={() => slider?.current?.slickNext()} className="cursor-pointer"><img src="/img/icon/arr-black.svg" alt="" className='w-6 md:w-9 pointer-events-none'/></button>
            </div>
            </div>
            </div>
              </div>
         </div>
      </div>
      )}
      <Header></Header>
      <div className="mb-20">
        <div className="flex items-center justify-between fixed w-full top-8/12 md:top-5/12 xl:px-10 z-30 pointer-events-none">
          <a href={`/cases/${post.prev_post_id}`} className="h-12 w-12 xl:h-16 xl:w-16 bg-darck rounded-full flex items-center justify-center pointer-events-auto"><img src="/img/icon/arr.svg" alt="" className='xl:w-10 rotate-180 pointer-events-none'/></a>
          <a href={`/cases/${post.next_post_id}`} className="h-12 w-12 xl:h-16 xl:w-16 bg-darck rounded-full flex items-center justify-center pointer-events-auto"><img src="/img/icon/arr.svg" alt="" className='xl:w-10 pointer-events-none'/></a>
        </div>
    <div className="bg-[url('/img/sot.png')] bg-cover sm:bg-size-[75%_100%] lg:bg-size-[50%_100%] bg-right bg-no-repeat py-6 max-w-[1450px] m-auto pb-14">
      <div className="container">
        <div className="flex flex-wrap items-center gap-x-4">
                <a href="/" className="text-[16px] text-darck-op-30 hover:text-darck">Главная</a>
                <span className="h-1 w-1 bg-darck-op-30 rounded-full"></span>
                <a href="/cases" className="text-[16px] text-darck-op-30 hover:text-darck">Кейсы</a>
                <span className="h-1 w-1 bg-darck rounded-full"></span>
                <span className="text-[16px] text-darck font-bold">{post.title}</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-[64px] xl:text-[76px] leading-none tracking-tight font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% mt-16 py-2">{post.title}
        </h1>
      </div>
    </div>
    <div className="container">
        <div className="grid lg:grid-cols-2 md:gap-10 pb-12  overflow-hidden">
            <div className="px-5 md:px-0 md:pl-5">
                <div className="text-xl flex flex-col gap-4 text-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                <div  className="mt-12 bg-[url('/img/cases-item-bg.png')] bg-size-[112%_100%] bg-center bg-no-repeat">
                          <span className="text-[28px] md:text-[32px]">Что сделано:</span>
                          <div className="mt-8 md:mt-12 grid sm:grid-cols-2 gap-5">
                            {post.card.map((n, i) => ( 
                              <SmCard key={i} text={n.cases_card_text}></SmCard>
                                    ))
                                       }
                          </div>
                          <ButtonBlackPop text="Получить консультацию" class="mt-14 sm:mt-24 lg:mt-38"/>
                        </div>
            </div>
            <div className="relative mt-10 lg:mt-0 overflow-hidden">
        {/* <img className="w-full" src={post.cases_mainimg} alt="" /> */}
{!post.vid && (
         <Slider ref={sliderm} {...settingsm} className=''>
            {post.image.map((n, i) => ( 
              <div key={i} className="overflow-hidden px-2">
                <img src={n.item_img} alt="" className="w-full"/>
              </div>
                    ))
                  }
            </Slider>
)}
{post.vid && (
                 <video autoPlay loop muted playsInline preload="none" className="w-full ">
                   <source src={post.vid} type="video/mp4" />
                 </video> 
                 )} 
                 {!post.vid && (
              <div className="w-full flex justify-center">
            <div className={`lg:fixed lg:bottom-5 h-10 w-38 md:h-16 md:w-60  border-2 bg-white border-[#1DC1F8] rounded-4xl  items-center justify-between p-4 flex  `}>
              <button onClick={() => sliderm?.current?.slickPrev()} className="cursor-pointer -rotate-180 "><img src="/img/icon/arr-black.svg" alt="" className='w-6 md:w-9 pointer-events-none'/></button>
                <span className="md:text-3xl text-darck-op-30">{currentSlidem + 1}/{post.image.length}</span>
              <button onClick={() => sliderm?.current?.slickNext()} className="cursor-pointer"><img src="/img/icon/arr-black.svg" alt="" className='w-6 md:w-9 pointer-events-none'/></button>
            </div>
            </div>
             )}
            {!post.vid && (
        <img onClick={() => setOpen(true)} className="w-10 md:w-16 absolute top-4 right-4 md:top-8 md:right-8 cursor-pointer" src="/img/icon/pop-trig.svg" alt="" />
        )}
      </div>
        </div>
    </div>
        </div>
   <Footer></Footer>
    </div>        
)
}