'use client'

import React, { useCallback, useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import Header from "../../blocks/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import SmCard from "../../components/SmCard";
import ButtonBlackPop from "../../components/ButtonBlackPop";
import Footer from "../../blocks/Footer";
import axios from "axios";


function CasePage() {
 const searchParams = useSearchParams()
  const p = searchParams.get("id")
  const [post, setPost] = useState([])
  const fetchPost = () => {
    axios
      .get(`https://back.19bees.ru/wp-json/wp/v2/cases/${p}`)
      .then((res) => {
        setPost(res.data);
      });
  }

  useEffect(() => {
    fetchPost()
  }, 
[])
if (!post || post.length === 0) return <div className="h-full w-full bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% absolute top-0"></div>
  const wh = post.cases_cards;
  const image = post.cases_popup;
return(
  <div className="relative">
      <div className="h-full w-full bg-black-op-80 absolute top-0 z-50 hidden">
        <div className="container">
          <div className="flex justify-center">
          <div className="">
              {image.map((n, i) => ( 
                <img src={n.item_img} key={i} alt="" className=""/>
                    ))
                  }
            </div>
              </div>
         </div>
      </div>
      <Header></Header>
      <div className="mb-20">
      <div className="bg-[url('/img/sot.png')] bg-cover sm:bg-size-[75%_100%] lg:bg-size-[50%_100%] bg-right bg-no-repeat py-6 max-w-[1450px] m-auto pb-14">
      <div className="container">

      <div className="flex items-center gap-4">
        <a href="/" className="text-[16px] text-darck-op-30 hover:text-darck">Главная</a>
        <span className="h-1 w-1 bg-darck-op-30 rounded-full"></span>
        <a href="/cases" className="text-[16px] text-darck-op-30 hover:text-darck">Кейсы</a>
        <span className="h-1 w-1 bg-darck rounded-full"></span>
        <span className="text-[16px] text-darck font-bold">{post.title.rendered}</span>
    </div>

        <h1 className="text-4xl sm:text-6xl md:text-[64px] xl:text-[76px] leading-none tracking-[-4] font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% mt-16">{post.title.rendered}
        </h1>
      </div>
    </div>
    <div className="container ">
      <div className="grid lg:grid-cols-2 gap-5 md:gap-10">
      <div className="">
        <div className="text-xl flex flex-col gap-3" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        <div className="mt-12 bg-[url('/img/cases-item-bg.png')] bg-size-[112%_100%] bg-center bg-no-repeat">
          <span className="text-[32px]">Что сделано:</span>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {wh.map((n, i) => ( 
              <SmCard key={i} text={n.cases_card_text}></SmCard>
                    ))
                       }
          </div>
          <ButtonBlackPop text="Получить консультацию" class="mt-24 lg:mt-38"/>
        </div>
      </div>
      <div className="relative mt-20 lg:mt-0">
        <img className="w-full" src={post.cases_mainimg} alt="" />
        <img className="absolute top-8 right-8 cursor-pointer" src="/img/icon/pop-trig.svg" alt="" />
      </div>
      </div>
    </div>
    </div>
   <Footer></Footer>
    </div>        
)
}

export default  function Page() {
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CasePage />
    </Suspense>
    
  )
}
