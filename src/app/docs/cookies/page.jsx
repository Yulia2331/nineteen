'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import Header from "../../blocks/Header";
import Footer from "../../blocks/Footer";
import axios from "axios";
export default function Cookies() {
   const [post, setPost] = useState([])
const fetchPost = () => {
 
    axios
      .get(`https://back.19bees.ru/wp-json/wp/v2/pages/?slug=cookies`)
      .then((res) => {
        setPost(res.data[0]);
      });
  }

  useEffect(() => {
    fetchPost()
  }, 
[])
if (!post || post.length === 0) return <div className="h-full w-full bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% absolute top-0"></div>
  return (
    <div className="min-h-screen justify-center w-full overflow-hidden relative">   
          <Header></Header> 
       <div className="container">
         <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-[42px] leading-none tracking-tight font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% my-5 py-2">{post.title.rendered}
        </h1>
        <div className="text-lg leading-6 flex flex-col gap-4 text-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
       </div>
        <Footer></Footer>
    </div>
  );
}