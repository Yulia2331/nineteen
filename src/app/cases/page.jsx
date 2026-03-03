'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Header from "../blocks/Header";
// import BreadCrumbs from "../components/BreadCrumbs";
import CaseItemCat from "../components/CaseItemCat";
import Button from "../components/Button";
import Footer from "../blocks/Footer";
import axios from "axios";

export default function СasesPage() {
const [posts, setPosts] = useState([])
const fetchPosts = () => {
    axios
      .get("https://back.19bees.ru/wp-json/wp/v2/cases")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, 
[])
// console.log(posts)
if (!posts || posts.length === 0) return <p></p>
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
 <div className="marquee my-14">
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
       <div className="flex flex-wrap gap-2 mb-10">
          <button className="text-2xl py-2 px-6 border-2 rounded-4xl border-transparent bg-linear-to-r from-blue-400 to-blue-600 text-white">Все работы</button>
          <button className="text-2xl py-2 px-6 border-2 border-darck-op rounded-4xl hover:border-transparent hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white cursor-pointer">Лендинг</button>
          <button className="text-2xl py-2 px-6 border-2 border-darck-op rounded-4xl hover:border-transparent hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white cursor-pointer">Многостраничный сайт</button>
          <button className="text-2xl py-2 px-6 border-2 border-darck-op rounded-4xl hover:border-transparent hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white cursor-pointer">Интернет-магазин</button>
       </div>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {posts.map((n, i) => ( 
          
          <CaseItemCat key={i} link={`case?id=${n.id}`} title={n.title.rendered} img={n.cases_prew} descr={n.cases_shortdescr} onClick={() => setOpId(n.id)}>
           
          </CaseItemCat>
        ))
           }
       </div>
       </div>
<div className="flex justify-center mt-10">
    <Button link="#" text="Показать больше" class="w-full  lg:w-1/3"></Button>
</div>
    </div>
    </div>
     <Footer></Footer>
    </div>
    );
}
