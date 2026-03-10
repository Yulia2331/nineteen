'use client'
import React, { useCallback, useEffect, useState, useRef, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import Header from "../blocks/Header";
// import BreadCrumbs from "../components/BreadCrumbs";
import CaseItemCat from "../components/CaseItemCat";
import Button from "../components/Button";
import CaseCategories from "../components/CaseCategories";
import Footer from "../blocks/Footer";
import axios from "axios";

function СasesPage() {
  let p = '';
  const searchParams = useSearchParams()
    const pp = searchParams.get("id")
    if(pp){
          p = `?cases_tax=${pp}`
    }
const [posts, setPosts] = useState([])
const fetchPosts = () => {
 
    axios
      .get(`https://back.19bees.ru/wp-json/wp/v2/cases${p}`)
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, 
[])
console.log(posts)
if (!posts || posts.length === 0) return <div className="h-full w-full flex justify-center items-center"><div className="animate-spin h-20 w-20 rounded-full bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% flex justify-center items-center "><div className="h-10 w-10 bg-white rounded-full"></div></div></div>
  return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {posts.map((n, i) => ( 
          
          <CaseItemCat key={i} link={`case?id=${n.id}`} title={n.title.rendered} img={n.cases_prew} descr={n.cases_shortdescr} onClick={() => setOpId(n.id)}>
           
          </CaseItemCat>
        ))
           }
       </div>
    );
}


export default  function PageP() {
 
  return (
    <div className="">
      <Header></Header>
      <div className="bg-[url('/img/cases-cat-bg.png')] bg-size-[120%_550px] bg-top-left bg-no-repeat pb-20">
      <div className="container">
         <div className="flex items-center gap-4">
        <a href="/" className="text-[16px] text-darck-op-30 hover:text-darck">Главная</a>
        <span className="h-1 w-1 bg-darck-op-30 rounded-full"></span>
        <a href="/cases" className="text-[16px]text-darck">Кейсы</a>
    </div>
      </div>
 <div className="marquee mt-10 ">
  <div className="marquee__track">
    <div className="marquee__content flex items-center gap-5">
          <img src="/img/case-text.png" alt="" className="min-w-72 mb-2"/>
          <img src="/img/logo-border.svg" alt="" className="w-24"/>
             <img src="/img/case-text.png" alt="" className="min-w-72 mb-2"/>

            <img src="/img/logo.svg" alt="" className="w-24"/>
              <span className="text-[87px] font-bold uppercase">Кейсы</span>
            <img src="/img/logo.svg" alt="" className="w-24"/>

            <img src="/img/case-text.png" alt="" className="min-w-72 mb-2"/>
             <img src="/img/logo-border.svg" alt="" className="w-24"/>

           <img src="/img/case-text.png" alt="" className="min-w-72 mb-2"/>
             <img src="/img/logo-border.svg" alt="" className="w-24"/>
             <img src="/img/case-text.png" alt="" className="min-w-72 mb-2"/>
             <img src="/img/logo-border.svg" alt="" className="w-24"/>
    </div>
  </div>
</div>
    <div className="container"> 
      <div className="py-16">
     
    <CaseCategories></CaseCategories>

    <Suspense fallback={<div>Loading...</div>}>
      <СasesPage />
    </Suspense>
   
       </div>
<div className="flex justify-center mt-10">
    <Button link="#" text="Показать больше" class="w-full  lg:w-1/3"></Button>
</div>
    </div>
    </div>
     <Footer></Footer>
    </div>

    
  )
}
