import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link'
import axios from "axios";
export default  function CaseItem(props) {
      const [tags, setTags] = useState([])
const fetchTags = () => {
    axios
      .get("https://back.19bees.ru/wp-json/wp/v2/cases_tag")
      .then((res) => {
        setTags(res.data);
      });
  }

  useEffect(() => {
    fetchTags()
  }, 
[])
// console.log(tags)
const itemTags = props.tag;

const tagArr = []
for (var key in tags) {
  console.log(tags[key]);
  const h = tags[key];
  const b = h.id;

  itemTags.forEach((i) => {
    if(b == i){
      tagArr.push(h.name)
    }
  })

}
                       
  return (
    <Link href={props.link} className="relative h-[275px] max-w-[480px] md:max-w-none overflow-hidden rounded-4xl cursor-pointer">
      <div className="absolute w-full h-full overflow-hidden rounded-4xl">
        <img className="w-full h-full object-cover rounded-4xl" src={props.img} alt="" />
        {/* <ExportedImage className="w-full h-full object-cover rounded-4xl" width={900} height={900}  src={props.img} alt="Static Image" /> */}
      </div>
        <div className="relative z-30 bg-[url('/img/cases-bg.png')] bg-cover bg-top bg-no-repeat  w-full h-full opacity-0 active:opacity-100 hover:opacity-100 transition-all duration-[.8s]">
         <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
          <div className="">
            <h3 className="text-white text-xl sm:text-2xl lg:text-[26px] uppercase mb-3 lg:pr-10">{props.title}</h3>
            <p className="text-white text-lg md:text-xl leading-7 line-clamp-2">{props.descr}</p>
            </div>
            <div className="flex gap-2 mt-10 flex-wrap">
              {tagArr.map((tag, i) => ( 
                <span key={i} className="py-2 px-5 border-2 border-white-op-30 rounded-4xl text-white">{tag}</span>
                ))
              } 
            </div>
         </div>
        </div>
    </Link>
        );
}