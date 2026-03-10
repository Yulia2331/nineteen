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
// import SmCard from "../components/SmCard";
export default function PromoPage() {

  return (
    <div className="max-w-[1920px] m-auto overflow-hidden">
      <Header></Header>
      <div className="h-full w-full bg-[url('/img/promo/line-top.png')] bg-size-[100%_70%] bg-center bg-no-repeat">
      <Banner></Banner>
      <div className="relative overflow-hidden ">

      <WhoIt></WhoIt>

    <img src="/img/promo/bee.png" alt="" className=" absolute right-0 md:top-[12%] lg:top-[15.5%] translate-x-1/2 -z-10 scale-85 xl:scale-90"/>

      <Doing></Doing>

     <section className="my-5 md:my-20 py-10 md:py-32 h-full w-full bg-[url('/img/promo/star.png')] bg-contain bg-top bg-no-repeat">
      <div className="container">
        <div className="py-20">
          <h3 className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-2xl xs:text-3xl sm:text-4xl md:text-[52px] lg:text-[68px] xl:text-[80px] font-bold uppercase leading-none text-center tracking-[-1.6] md:tracking-[-4]">Каждый запуск <br /> — это конкретная задача, <br /> решение и результат</h3>
        </div>
      </div>
    </section>

    <Cases></Cases>

</div>
      </div>


      <section className="-mt-10 lg:mt-0 mb-14 md:mb-20 lg:pt-26 py-8 pb-20 xs:py-14 lg:pb-40 h-full w-full bg-[url('/img/promo/sale-bg.png')] bg-cover lg:bg-size-[100%_100%] bg-top bg-no-repeat relative overflow-hidden">
        <div className="container">
          <div className="sm:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white">
              Запуск и ведение Яндекс Директа 
              <span className="text-darck ml-2">под ключ</span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 xs:mt-7 mb-3 xs:mb-8 sm:mb-12 text-white w-72 md:w-3/4">Формат работы для компаний, которым нужен стабильный поток заявок и понятная модель привлечения клиентов</p>
              <span className="text-[16px] xs:text-xl md:text-3xl text-white font-semibold uppercase md:leading-9 text-right w-auto xs:w-64 sm:w-3/4 block">Сайт <br /> в подарок!</span>
            </div>
        </div>
        <img src="/img/promo/man.png" alt="" className="w-[175px] xs:w-[45%] sm:w-[500px] md:w-[550px] lg:w-[780px] absolute right-26 xs:right-0 sm:left-[45%] bottom-0"/>
      </section>

    <div className="h-full w-full relative ">
      <img src="/img/promo/line-center-2.png" alt="" className="-z-10 absolute left-0 md:left-3 h-1/2 top-72"/>
    <img src="/img/promo/line-center.png" alt="" className="z-20 absolute left-0 bottom-0"/>
     
     <Rate></Rate>


     <section className="py-10 xs:py-16 sm:py-26 pb-40 sm:h-[300px] md:h-auto lg:h-[490px] xl:h-[520px] w-full bg-linear-to-r from-blue-400 to-blue-600 relative overflow-hidden flex items-center">
       <img src="/img/promo/girl.png" alt="" className="z-20 w-[265px] xs:w-[260px] sm:w-[400px] md:w-[510px] lg:w-[700px] absolute left-0 bottom-0"/>
       <img src="/img/promo/star-group.svg" alt="" className="max-w-[180px] xs:max-w-[100px] md:max-w-[140px] lg:max-w-full absolute right-0 top-0"/>
        <div className="container">
          <div className="w-full flex justify-end items-center">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl tracking-tight leading-none text-white font-semibold uppercase block">Сайт <br /> в подарок</span>
            </div>
        </div>
        
      </section>

    </div>


    <div className="mt-5">

   <Promo></Promo>
    <WillGet></WillGet>
    <Blot></Blot>

    </div>

    <Cost></Cost>

     <Footer></Footer>
    </div>
    );
}
