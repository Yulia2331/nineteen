'use client'

import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Banner from "../blocks/promo/Banner";
import WhoIt from "../blocks/promo/WhoIt";
import Doing from "../blocks/promo/Doing";
import Rate from "../blocks/promo/Rate";
import Promo from "../blocks/promo/Promo";
import WillGet from "../blocks/promo/WillGet";
import Blot from "../blocks/promo/Blot";
import Cost from "../blocks/promo/Cost";
import Cases from "../blocks/Cases";
import Star from "../blocks/promo/Star";
import Direct from "../blocks/promo/Direct";
import Sale from "../blocks/promo/Sale";
import { Link, Element } from 'react-scroll';
// import SmCard from "../components/SmCard";
export default function PromoPage() {

  return (
    <div className="max-w-[1920px] m-auto overflow-hidden">
      <Header></Header>
      <div className="h-full w-full bg-[url('/img/promo/line-top-mob.png')] sm:bg-[url('/img/promo/line-top.png')] bg-size-[100%_65%] sm:bg-size-[100%_70%] bg-position-[100%_20%] sm:bg-center bg-no-repeat">
      <Banner></Banner>
      <div className="relative overflow-hidden ">

      <WhoIt></WhoIt>

    <img src="/img/promo/bee.png" alt="" className=" absolute right-0 md:top-[12%] lg:top-[15.5%] translate-x-1/2 -z-10 scale-85 xl:scale-90"/>

      <Doing></Doing>

     <Star></Star>

    <Cases></Cases>

</div>

      </div>

  <Direct></Direct>
     

    <div className="h-full w-full relative ">
      <img src="/img/promo/line-center-2.png" alt="" className="-z-10 absolute left-0 md:left-3 h-1/2 top-72 hidden sm:block"/>
     <img src="/img/promo/line-center2-mob.png" alt="" className="z-10 absolute left-0 md:left-3 h-full -top-46 sm:hidden"/>
     <Rate></Rate>
      <Sale></Sale>
      

    </div>


    <div className="mt-5 h-full w-full bg-[url('/img/promo/mob-line.png')] sm:bg-[url('/img/promo/line-bot.png')] bg-size-[100%_50%] sm:bg-size-[100%_60%] bg-center bg-no-repeat">

   <Promo></Promo>
    <WillGet></WillGet>
    <Blot></Blot>

    </div>

    <Cost></Cost>

     <Footer></Footer>
    </div>
    );
}
