'use client'
import React, { useCallback, useEffect, useState, useRef, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import axios from "axios";

function CaseCategoriesP() {
  const searchParams = useSearchParams()
      const pp = searchParams.get("id")
  const [active, setActive] = useState(pp)
const [posts, setPosts] = useState([])
const fetchPosts = () => {
    axios
      .get("https://back.19bees.ru/wp-json/wp/v2/cases_tax")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, 
[])
// console.log(posts)
if (!posts || posts.length === 0) return <div className=""></div>
return (
      <div className="flex flex-wrap gap-2 mb-10">
        <a href='?'  className={`
           text-2xl py-2 px-6 border-2 border-darck-op rounded-4xl hover:border-none hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white cursor-pointer ${active == null ? 'border-none bg-linear-to-r from-blue-400 to-blue-600 text-white' : ''}
           `}>Все работы</a>
 {posts.map((n, i) => ( 
          n.count != 0 && ( 
           <a href={`?id=${n.id}`} key={i} className={`
           text-2xl py-2 px-6 border-2 border-darck-op rounded-4xl hover:border-none hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white cursor-pointer ${active == n.id ? 'border-none bg-linear-to-r from-blue-400 to-blue-600 text-white' : ''}
           `}>{n.name}</a>
        ))
      )
           }
        
    </div>
)
}


export default function CaseCategories() {
 
return (
    <Suspense fallback={<div>Loading...</div>}>
          <CaseCategoriesP />
      </Suspense>
)
}