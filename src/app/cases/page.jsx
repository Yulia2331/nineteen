'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Marquee from 'react-double-marquee';
import Header from "../blocks/Header";
import BreadCrumbs from "../components/BreadCrumbs";
import CaseItemCat from "../components/CaseItemCat";
import Button from "../components/Button";
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
      <div className="container">
        <BreadCrumbs></BreadCrumbs>
      </div>
    <div className="container"> 
      <div className="py-16">
       <div className="">
          
       </div>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {posts.map((n, i) => ( 
          
          <CaseItemCat key={i} link={`cases/case?id=${n.id}`} title={n.title.rendered} img={n.cases_prew} descr={n.cases_shortdescr} onClick={() => setOpId(n.id)}>
           
          </CaseItemCat>
        ))
           }
       </div>
       
<div className="flex justify-center mt-10">
    <Button link="#" text="Показать больше" class="w-full  lg:w-1/3"></Button>
</div>
    </div>
    </div>
    </div>
    );
}
