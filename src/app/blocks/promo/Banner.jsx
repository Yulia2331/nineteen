import Image from "next/image";
import ButtonBlack from "../../components/ButtonBlack";
export default function Banner() {
  return (
    <div className="h-full w-full relative mt-5 lg:mt-0">  
    <div className="absolute h-full w-full right-0 top-46 scale-200 rotate-30 lg:hidden"><img src="/img/numbers-bg.png" alt="" className="max-h-[1200px]"/></div>
     <div className="absolute h-full w-full right-0 top-46 scale-200 opacity-60 -rotate-30"><img src="/img/numbers-bg.png" alt="" className="max-h-[1200px]"/></div>
    <div className="absolute h-full w-[140%] -right-[75%] scale-145 sm:scale-100 sm:-right-[60%] top-40 md:top-0 xl:-top-56 "><img src="/img/promo/banner-grad.png" alt="" className="max-h-[1200px]"/></div>
    <div className="container">
        <div className="flex flex-col items-center relative z-20">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-[66px] leading-none tracking-tight font-bold uppercase text-center">
            Клиенты <span className=" md:inline block">нужны<span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% ml-2">вчера?</span></span></h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-1 text-center">Запускаем рекламу и приводим заявки в короткий срок</p>
        </div>  
        <div className="h-full py-6 sm:py-12 xl:py-1 relative z-20">         
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <img src="/img/promo/gift.png" alt="" className="w-40 sm:w-56 md:w-64 lg:w-80 order-2 md:order-1"/>
                <div className="flex flex-col justify-end md:text-right order-1 md:order-2">
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-xl sm:text-2xl lg:text-[32px] font-semibold uppercase tracking-[-.8]">По карману каждому!</span>
                    <span className="text-sm sm:text-lg lg:text-2xl tracking-[-.8]">Для услуг и товаров, когда ждать нельзя</span>
                </div>
            </div>
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] w-96 mt-42 sm:mt-26 lg:mt-0 mb-8 lg:mb-22">
                <span className="font-bold block">Фиксированный тариф:</span>
                <span>от упаковки идеи и креативов <br /> до запуска рекламы</span>
            </div>
        <div className=" flex flex-col items-center justify-center relative z-30">
                <ButtonBlack link="https://t.me/Allakoala9" text="Запустить рекламу под ключ" class="w-full md:w-auto lg:w-1/2 mb-3"></ButtonBlack>
                <span className="text-sm md:text-[16px]">ответим в течение 60 минут</span>
            </div>
        </div>
    </div>
        <div className="absolute h-full w-10/12 right-0 -bottom-20 xs:bottom-0 flex flex-col items-center pointer-events-none">           
            <img className="w-[168px] xs:w-[200px] sm:w-[260px] lg:w-[290px] xl:w-[310px] translate-x-5 xs:translate-x-0 translate-y-38 xs:translate-y-44 sm:translate-y-48 md:translate-y-30 xl:translate-y-28 md:-translate-x-20 lg:-translate-x-20 z-10 animate-bounce-sm" src="/img/promo/big-logo.png" alt="" />
                <img className="w-full scale-210 sm:scale-160 md:scale-140 xl:scale-94 md:max-h-[540px] lg:max-h-[580px] translate-x-10 xs:translate-x-10 md:translate-x-12 translate-y-42 xs:translate-y-46 md:translate-y-24 xl:-translate-y-10 z-20 animate-bounce-hand" src="/img/promo/hand.png" alt="" />
            </div>
    </div>
    );
}