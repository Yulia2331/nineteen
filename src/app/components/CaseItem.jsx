import React, { useCallback, useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import axios from "axios";
export default  function CaseItem(props) {
      const [tags, setTags] = useState([])
const fetchTags = () => {
    axios
      .get("http://back.19bees.ru/wp-json/wp/v2/cases_tag")
      .then((res) => {
        setTags(res.data);
      });
  }

  useEffect(() => {
    fetchTags()
  }, 
[])
console.log(tags)
//     const tagArr = []
// const pp = props.tags

//     pp.forEach((t) => {
//   tags.forEach((tag) => {
//     if(t === tag.id){
//       tagArr.push(tag.name)
//     }
//   })
// })
 

// console.log(tagArr)

//   const tags = [];
  // const tagsId = props.tag;
  // console.log(tagsId);
  // const tag = await fetch(`http://back.19bees.ru/wp-json/wp/v2/cases_tag/15`);
  // console.log(tag)
//   tagsId.forEach((i) => {
//   const tag = fetch(`http://back.19bees.ru/wp-json/wp/v2/cases_tag/15`);

//   tags.push(tag);
// });
//  tagsId.foreach((n) => ( 
//                tags.push(fetch(`http://back.19bees.ru/wp-json/wp/v2/cases/${n}`))  ))
//                console.log(tags);
                       
  return (
    <Link href={props.link} className="relative md:min-h-80 overflow-hidden rounded-4xl cursor-pointer">
      <div className="absolute w-full overflow-hidden rounded-4xl">
        <img className="w-full rounded-4xl" src={props.img} alt="" />
      </div>
        <div className="relative z-30 bg-[url('/img/cases-bg.png')] bg-cover bg-top bg-no-repeat  w-full h-full opacity-0 hover:opacity-100 transition-all duration-[.8s]">
         <div className="p-5 sm:p-10 lg:p-13 flex flex-col justify-between h-full">
          <div className="">
            <h3 className="text-white text-2xl md:text-[32px] uppercase mb-3">{props.title}</h3>
            <p className="text-white text-lg md:text-2xl line-clamp-2">{props.descr}</p>
            </div>
            <div className="flex gap-2 mt-12 flex-wrap">
{/* {tags.map((tag, i) => ( 
  <span key={i} className="py-2 px-5 border-2 border-white-op-30 rounded-4xl text-white">{tag}</span>
  ))
                       } */}
                      
              <span className="py-2 px-5 border-2 border-white-op-30 rounded-4xl text-white">Веб-дизайн</span>
              <span className="py-2 px-5 border-2 border-white-op-30 rounded-4xl text-white">Айдентика</span>
            </div>
         </div>
        </div>
      

    </Link>
        );
}