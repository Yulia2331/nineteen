import Link from 'next/link'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import ContactForm from "../components/ContactForm";
export default function Button(props) {
    const [isOpen, setOpen] = useState();
  return ( 
    <div className={`${props.class}`} >
      <button onClick={() => setOpen(true)}
    className={` 
 gradient-button
     inline-flex
     items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-tight w-full whitespace-nowrap
     hover:shadow-lg hover:shadow-sh  transition-all duration-[.6s]
    `}>
        <span>{props.text}</span>
        
       <ExportedImage className="w-5 sm:w-auto" width={10} height={10}  src="/img/icon/arr-black.svg" alt="->" />

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