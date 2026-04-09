'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from "axios";
import CaseItem from "../components/CaseItem";
import Button from "../components/Button";
export default function Cases() {

    const [posts, setPosts] = useState([])
    // const [tags, setTags] = useState([])
const fetchPosts = () => {
    axios
      .get("https://back.19bees.ru/wp-json/wp/v2/cases/?per_page=4")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, 
[])

// console.log(posts)
     const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Остановить наблюдение
        }
      },
      { threshold: 0.1 } // Срабатывает, когда видно 10% блока
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div id="cases" className={`fade-block ${isVisible ? 'visible' : ''} -mt-10 pt-10`}  ref={ref}>
    <div className="container">
        <div className="mb-5">
            <div className="flex justify-between items-center  ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2]">наши кейсы</h2>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-4 lg:gap-y-2 gap-x-2 lg:gap-x-5 justify-center">
             {posts.map((n, i) => ( 
                       <CaseItem key={i} link={`/cases/${n.slug}`} title={n.title.rendered} img={n.cases_prew} descr={n.cases_shortdescr} tag={n.cases_tag}/>
                    ))
                       }

        </div>
<div className="flex justify-end mt-4 xl:mt-2">
    <Button link="/cases" text="Смотреть все кейсы" class="w-full  lg:w-1/3"></Button>
</div>
    </div>
    </div>
    );
}