'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import ContactForm from "../components/ContactForm";
import axios from "axios";
export default function ButtonBlackPop(props) {
     const [isOpen, setOpen] = useState();
  return (  
<div className={`${props.class}`}>
       <button onClick={() => setOpen(true)}
    className={` 
    cursor-pointer rounded-[60px] bg-darck flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-tight text-white px-6 py-3 whitespace-nowrap 
    hover:bg-linear-to-r hover:contrast-150 active:bg-linear-to-r active:contrast-150
    hover:from-text-grad-2 hover:from-41.24% active:from-text-grad-2 active:from-41.24%
    hover:to-text-grad-3 hover:to-84.31% active:to-text-grad-3 active:to-84.31%
    hover:shadow-xl hover:shadow-sh active:shadow-xl active:shadow-sh  transition-all duration-[.6s]
   w-full
    `}>
 
        <span>{props.text}</span>
        
       <ExportedImage className="w-5 sm:w-auto" width={10} height={10}  src="/img/icon/arr.svg" alt="->" />


    </button>
      {isOpen && (                 
      <div className="h-full w-full fixed left-0 top-0 z-100 flex items-center justify-center">
        <div className="h-full w-full bg-black-op-80 fixed left-0 top-0" onClick={() => setOpen(false)}></div>
        <div className="pointer-events-none">
          <div className="bg-white rounded-4xl relative z-10 pointer-events-auto">
            <div className="p-5 -mb-3 cursor-pointer" onClick={() => setOpen(false)}> <img src="/img/icon/arr-black.svg" alt="" className='-rotate-180'/> </div>
              <ContactForm></ContactForm>
          </div>
          </div>
       </div>
            )}      
</div>
    );
}