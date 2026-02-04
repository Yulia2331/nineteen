'use client'
// import Image from "next/image";
// import React, { useCallback, useEffect, useState, useRef } from 'react'
import Header from "./blocks/Header";
import Banner from "./blocks/Banner";
import Marketing from "./blocks/Marketing";
import Scheme from "./blocks/Scheme";
import AfterContacting from "./blocks/AfterContacting";
import Format from "./blocks/Format";
import Numbers from "./blocks/Numbers";
export default function Home() {
  return (
    <div className="min-h-screen justify-center w-full ">
      <div className="h-full w-full bg-[url('/img/bg-1.png')] bg-size-[100%_100%] bg-top bg-no-repeat pb-38">
          <Header></Header>
          <Banner></Banner>
          <Marketing></Marketing>
      </div>
      <div className="h-full w-full bg-[url('/img/bg-2.png')] bg-size-[100%_100%] bg-top bg-no-repeat pb-38">
        <Scheme></Scheme>
        <AfterContacting></AfterContacting>
         <Format></Format>
      </div>
       
        <Numbers></Numbers>
    </div>
  );
}
