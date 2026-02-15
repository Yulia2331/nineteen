'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Marquee from 'react-double-marquee';
import Header from "../blocks/Header";
import BreadCrumbs from "../components/BreadCrumbs";
import KeysItemCat from "../components/KeysItemCat";
import Button from "../components/Button";
import axios from "axios";
export default function KeysPage() {

const [posts, setPosts] = useState([])
const fetchPosts = () => {
    axios
      .get("http://back.daisywebstudio.ru/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, 
[])
console.log(posts)

  return (
    <div className="">
      <Header></Header>
      <BreadCrumbs></BreadCrumbs>
      
    <div className="container"> 
      <div className="py-16">
       <div className="">
          
       </div>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {posts.map((n, i) => ( 
          <KeysItemCat key={i} link={n.slug} title={n.title.rendered}/>
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

