'use client'

import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Banner from "../blocks/promo/Banner";
export default function PromoPage() {

  return (
    <div className="max-w-[1920px] m-auto overflow-hidden">
      <Header></Header>
      <div className="">
      <Banner></Banner>
      <div className="relative overflow-hidden">
    <section className="my-20">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Кому подходит</h2>
        </div>
        <div className="text-2xl grid grid-cols-5">
          <span className="border-l-2 border-l-greys p-4">Услуги, эксперты, товары, личный бренд</span>
          <span className="border-l-2 border-l-greys p-4">Деньги или заявки закончились</span>
          <span className="border-l-2 border-l-greys p-4">Старый сайт не продаёт или его нет</span>
          <span className="border-l-2 border-l-greys p-4">Нужно проверить спрос перед масштаби-рованием</span>
          <span className="border-l-2 border-l-greys p-4">Нет времени и ресурса на долгий маркетинг</span>
        </div>
      </div>
    </section>
    <img src="/img/promo/bee.png" alt="" className=" absolute right-0 top-[15.5%] translate-x-1/2 -z-10"/>
 <section className="my-20">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Что мы делаем</h2>
        </div>
        <div className="text-2xl grid grid-cols-4 gap-5">
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
          <h3 className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-4xl sm:text-5xl lg:text-[68px] xl:text-[80px] font-bold uppercase leading-none text-center tracking-[-1.6] md:tracking-[-4]">Каждый запуск <br /> — это конкретная задача, <br /> решение и результат</h3>
        </div>
      </div>
    </section>


</div>
      </div>


      <section className="mb-20 pt-26 pb-40 h-full w-full bg-[url('/img/promo/sale-bg.png')] bg-size-[100%_100%] bg-top bg-no-repeat relative overflow-hidden">
        <div className="container">
          <div className="w-2/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-white">
              Запуск и ведение Яндекс Директа 
              <span className="text-darck ml-2">под ключ</span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-7 mb-12 text-white w-3/4">Формат работы для компаний, которым нужен стабильный поток заявок и понятная модель привлечения клиентов</p>
              <span className="text-xl md:text-3xl text-white font-semibold uppercase md:leading-9 text-right w-3/4 block">Сайт <br /> в подарок!</span>
            </div>
        </div>
        <img src="/img/promo/man.png" alt="" className="w-[780px] absolute left-[45%] top-0"/>
      </section>

    <div className="">

        <section className="my-20">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Состав тарифа</h2>
        </div>
        <div className="text-2xl grid grid-cols-3 gap-5">
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


     <section className="py-26 pb-40 h-[544px] w-full bg-linear-to-r from-blue-400 to-blue-600 relative overflow-hidden flex items-center">
       <img src="/img/promo/girl.png" alt="" className="w-[720px] absolute left-0 top-0"/>
       <img src="/img/promo/star-group.svg" alt="" className=" absolute right-0 top-0"/>
        <div className="container">
          <div className="w-full flex justify-end items-center">
              <span className="text-8xl tracking-tight text-white font-semibold uppercase block">Сайт <br /> в подарок</span>
            </div>
        </div>
        
      </section>

    </div>


    <div className="">
      
    </div>


     <Footer></Footer>
    </div>
    );
}
