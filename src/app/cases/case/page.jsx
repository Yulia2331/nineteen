'use client'

import React, { useCallback, useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import Header from "../../blocks/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import SmCard from "../../components/SmCard";
import ButtonBlack from "../../components/ButtonBlack";
import axios from "axios";

// export default async function getPost() {
//   const res = await fetch(`https://back.19bees.ru/wp-json/wp/v2/cases/7`);
//   let post = await res.json()
//   return(post)
// }
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
return(
  <div className="relative">
      <div className="h-full w-full bg-black-op-80 absolute top-0 z-50 hidden">

      </div>
      <Header></Header>
      <div className="bg-[url('/img/sot.png')] bg-size-[50%_100%] bg-right bg-no-repeat py-6 max-w-[1450px] m-auto">
      <div className="container">
        <BreadCrumbs></BreadCrumbs>
        <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[86px] leading-none tracking-[-4] font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% mt-40">{post.title.rendered}
        </h1>
      </div>
    </div>
    <div className="container ">
      <div className="grid grid-cols-2 gap-5 mt-20">
      <div className="">
        <p className="text-2xl">{post.cases_descr}</p>
        <div className="mt-12 bg-[url('/img/cases-item-bg.png')] bg-size-[112%_100%] bg-center bg-no-repeat">
          <span className="text-[32px]">Что сделано:</span>
          <div className="mt-12 grid grid-cols-2 gap-5">
            {wh.map((n, i) => ( 
              <SmCard key={i} text={n.cases_card_text}></SmCard>
                    ))
                       }
          </div>
          <ButtonBlack link="#" text="Получить консультацию" class="mt-38"/>
        </div>
      </div>
      <div className="relative">
        <img className="w-full" src={post.cases_mainimg} alt="" />
        <img className="absolute top-8 right-8 cursor-pointer" src="/img/icon/pop-trig.svg" alt="" />
      </div>
      </div>
    </div>
   
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
