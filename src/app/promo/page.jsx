'use client'

import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Banner from "../blocks/promo/Banner";
// import SmCard from "../components/SmCard";
export default function PromoPage() {

  return (
    <div className="max-w-[1920px] m-auto overflow-hidden">
      <Header></Header>
      <div className="">
      <Banner></Banner>
      <div className="relative overflow-hidden ">
    <section className="my-20">
      <div className="container">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Кому подходит</h2>
        </div>
        <div className="md:text-lg lg:text-2xl grid grid-cols-5">
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Услуги, эксперты, товары, личный бренд</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Деньги или заявки закончились</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Старый сайт не продаёт или его нет</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Нужно проверить спрос перед масштаби-рованием</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Нет времени и ресурса на долгий маркетинг</span>
        </div>
      </div>
    </section>
    <img src="/img/promo/bee.png" alt="" className=" absolute right-0 md:top-[12%] lg:top-[15.5%] translate-x-1/2 -z-10 scale-85 xl:scale-90"/>
 <section className="my-20">
      <div className="container">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Что мы делаем</h2>
        </div>
        <div className="text-2xl grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
         <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>         


        </div>
      </div>
    </section>

     <section className="my-20">
      <div className="container">
        <div className="py-20">
          <h3 className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-4xl sm:text-5xl md:text-[52px] lg:text-[68px] xl:text-[80px] font-bold uppercase leading-none text-center tracking-[-1.6] md:tracking-[-4]">Каждый запуск <br /> — это конкретная задача, <br /> решение и результат</h3>
        </div>
      </div>
    </section>


</div>
      </div>


      <section className="mb-20 lg:pt-26 py-8 pb-20 xs:py-14 lg:pb-40 h-full w-full bg-[url('/img/promo/sale-bg.png')] bg-cover lg:bg-size-[100%_100%] bg-top bg-no-repeat relative overflow-hidden">
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

    <div className="">

        <section className="my-20">
      <div className="container">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Состав тарифа</h2>
        </div>
        <div className="text-2xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
             <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
         <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Упаковываем идею</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>формулируем <br /> ценность и <br /> продающий оффер</li>
              <li>определяем <br /> ключевые сегменты и преимущества</li>
              <li>собираем путь <br /> клиента от первого касания к заявке</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


     <section className="py-10 xs:py-16 sm:py-26 pb-40 sm:h-[300px] md:h-auto lg:h-[490px] xl:h-[520px] w-full bg-linear-to-r from-blue-400 to-blue-600 relative overflow-hidden flex items-center">
       <img src="/img/promo/girl.png" alt="" className="w-[265px] xs:w-[260px] sm:w-[400px] md:w-[510px] lg:w-[700px] absolute left-0 bottom-0"/>
       <img src="/img/promo/star-group.svg" alt="" className="max-w-[180px] xs:max-w-[100px] md:max-w-[140px] lg:max-w-full absolute right-0 top-0"/>
        <div className="container">
          <div className="w-full flex justify-end items-center">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl tracking-tight leading-none text-white font-semibold uppercase block">Сайт <br /> в подарок</span>
            </div>
        </div>
        
      </section>

    </div>


    <div className="mt-5">

    <section className="h-full w-full bg-[url('/img/promo/block-bg.png')] bg-cover bg-top bg-no-repeat pb-40">
      
  <div className="py-14 md:py-20 ">
  <div className="-ml-[200%] lg:-ml-[100%] translate-x-[55%] lg:translate-x-[50%] -rotate-8 sm:-rotate-5 border-b-2 border-b-[#20ADEC] border-t-2 border-t-[#20ADEC] p-1 sm:p-2 bg-white">
      <div className="marquee__track_promo">
    <div className="marquee__content flex items-center ">     
         <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему</span>
    </div>

    </div>
  </div>
<div className=" rotate-8 sm:rotate-5 border-b-2 border-b-[#20ADEC] border-t-2 border-t-[#20ADEC] p-1 sm:p-2 bg-white">
      <div className="marquee__track_promo">
    <div className="marquee__content flex items-center">     
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему сайт в подарок</span>
        <span className="h-2 w-2 sm:h-[10px] sm:w-[10px] rounded-full bg-darck"></span>
        <span className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% tracking-tight">Почему</span>
    </div>

    </div>
</div>

  </div>

      <div className="container">
        <div className="grid xs:grid-cols-3 gap-3 xs:gap-2 md:gap-3 lg:gap-5 md:mt-3">
          <div className="p-3 sm:p-5 lg:px-8 lg:pr-10 bg-white rounded-[20px] md:rounded-4xl ">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-3.5 xs:leading-4 sm:leading-5 md:leading-7 lg:leading-9">Посадочная страница — центр воронки продаж</p>
          </div>
          <div className="p-3 sm:p-5 lg:px-8 lg:pr-10 bg-white rounded-[20px] md:rounded-4xl xs:translate-y-8 md:translate-y-12">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-3.5 xs:leading-4 sm:leading-5 md:leading-7 lg:leading-9">Реклама приводит трафик. Сайт решает, станет ли он заявками</p>
          </div>
          <div className="p-3 sm:p-5 lg:px-8 lg:pr-10 bg-white rounded-[20px] md:rounded-4xl ">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-4 sm:leading-5 md:leading-7 lg:leading-9">Собираем сайт под вашу воронку и сразу подключаем аналитику</p>
          </div>
        </div>
      </div>
    </section>

    <section className="">
      <div className="container">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Что вы получаете на выходе</h2>
        </div>
         <div className="mb-14 md:mb-20 lg:mb-24 relative">
           <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-8 lg:pr-5 border-darck-op">
                <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">01</span>
                <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Проработанную стратегию старта</p>
           </div>
          <div className="relative flex  flex-row gap-3 justify-between items-center border-t-2 py-4 sm:py-8 lg:pr-5 border-darck-op">
                <span className="text-5xl xs:text-6xl lg:text-[64px] text-darck-op">02</span>
                <p className="w-4/6 lg:w-1/2 text-lg xs:text-xl sm:text-[32px] tracking-[-0.5] leading-6 sm:leading-10">Сайт, заточенный под ваш продукт и рекламу</p>
           </div>
        </div>
      </div>
    </section>

    </div>


     <Footer></Footer>
    </div>
    );
}
