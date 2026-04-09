'use client'
import React, { useCallback, useEffect, useState, useRef, Suspense } from 'react'
import { usePathname, useRouter } from 'next/navigation';
export default  function Redirect() {
  const router = useRouter();
  const base = "https://19bees.ru";
  const pathName = usePathname();
    // const searchParams = useSearchParams();
   
    useEffect(() => {
      const url = pathName;
      // console.log(url)
      let result = url.split('/');
     
        if(result[1] === 'cases'){
          router.push(`/cases/case/?${result[2]}`);
        }
    }, [pathName]);
  
  return (
    <div className="">
    
    </div>
  )
}