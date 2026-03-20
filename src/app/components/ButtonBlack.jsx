import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import ContactPop from "../components/ContactPop";
export default function ButtonBlack(props) {
     const [isOpen, setOpen] = useState();
  return (  

       <a 
    href={props.link} 
    className={`${props.class} 
    cursor-pointer rounded-[60px] bg-darck flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] text-white px-6 py-3 whitespace-nowrap 
    hover:bg-linear-to-r hover:contrast-150 active:bg-linear-to-r active:contrast-150
    hover:from-text-grad-2 hover:from-41.24% active:from-text-grad-2 active:from-41.24%
    hover:to-text-grad-3 hover:to-84.31% active:to-text-grad-3 active:to-84.31%
    hover:shadow-xl hover:shadow-sh active:shadow-xl active:shadow-sh  transition-all duration-[.6s]`}>
 
        <span>{props.text}</span>
        
      <ExportedImage className="w-5 sm:w-auto" width={10} height={10}  src="/img/icon/arr.svg" alt="->" />

    </a>

    );
}