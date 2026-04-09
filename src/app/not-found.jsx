'use client'
import React, { useCallback, useEffect, useState, useRef, Suspense } from 'react'
import Header from "./blocks/Header";
import { usePathname, useRouter } from 'next/navigation';
// import Header from "./blocks/Header";
// import Redirect from "./components/Redirect";
export default  function NotFound() {
  const router = useRouter();
  const pathName = usePathname();
    useEffect(() => {
      const url = pathName;
      // console.log(url)
      let result = url.split('/');
     
        if(result[1] === 'cases'){
          router.push(`/cases/case/?${result[2]}`);
        }
    }, [pathName]);
  
//  useEffect(() => {
//   console.log('Предыдущая страница:', document.referrer);
//    const referrerURL = new URL(document.referrer);
//   const pathname = referrerURL.pathname;
//   console.log(pathname);
// }, []);
  
  return (
    <div className="">
      {/* <Redirect></Redirect> */}
      <Header></Header>
    <div className="container">
      <div className="flex items-center justify-center h-full w-full py-40">
        <h1 className="text-5xl md:text-7xl lg:text-9xl leading-none tracking-tight font-bold uppercase text-center bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">
            404</h1>
        </div>
    </div>
    </div>
  )
}