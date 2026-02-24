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

console.log(posts)

  return (
    <div className="container">
        <div className="mb-32">
        <div className="mb-12">
            <div className="flex justify-between items-center  ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2]">наши кейсы</h2>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
             {posts.map((n, i) => ( 
                       <CaseItem key={i} link={`cases/case?id=${n.id}`} title={n.title.rendered} img={n.cases_prew} descr={n.cases_shortdescr} tag={n.cases_tag}/>
                    ))
                       }

        </div>
<div className="flex justify-end mt-10">
    <Button link="/cases" text="Смотреть все кейсы" class="w-full  lg:w-1/3"></Button>
</div>

    </div>
    </div>
    );
}