import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from "axios";
import KeysItem from "../components/KeysItem";
import Button from "../components/Button";
export default function Keys() {

    const [posts, setPosts] = useState([])
    // const [tags, setTags] = useState([])
const fetchPosts = () => {
    axios
      .get("http://back.19bees.ru/wp-json/wp/v2/keys/?per_page=4")
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
                       <KeysItem key={i} link={`keys/${n.id}`} title={n.title.rendered} img={n.keys_prew} descr={n.keys_shortdescr} tag={n.keys_tag}/>
                    ))
                       }

        </div>
<div className="flex justify-end mt-10">
    <Button link="/keys" text="Смотреть все кейсы" class="w-full  lg:w-1/3"></Button>
</div>

    </div>
    </div>
    );
}