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
 <Header></Header>
      <div className="container">
        <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[86px] leading-none tracking-[-4] font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% mt-10">{post.title}
        </h1>
        <div className="text-xl flex flex-col gap-1.5 text-content post-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
    </div>
   <Footer></Footer>
    </div>        
)
}