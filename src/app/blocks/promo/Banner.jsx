import Image from "next/image";
import ButtonBlack from "../../components/ButtonBlack";
export default function Banner() {
  return (
    <div className="h-full w-full relative mt-2">  
    <div className="absolute h-full w-[140%] -right-[75%] scale-115 sm:scale-100 sm:-right-[60%] top-30 xs:top-12 md:top-0 lg:-top-32 "><img src="/img/promo/banner-grad.png" alt="" className="max-h-[1200px]"/></div>
    <div className="container">
        <div className="flex flex-col items-center relative z-20">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[86px] leading-none tracking-tight font-bold uppercase text-center">
            Клиенты нужны вчера?</h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 text-center">Запускаем рекламу и приводим заявки в короткий срок</p>
        </div>  
        <div className="h-full py-6 sm:py-12 lg:py-16 relative z-20">         
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <img src="/img/promo/gift.png" alt="" className="w-40 sm:w-56 md:w-64 lg:w-auto order-2 md:order-1"/>
                <div className="flex flex-col justify-end md:text-right order-1 md:order-2">
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-xl sm:text-2xl lg:text-[32px] font-semibold uppercase tracking-[-.8]">По карману каждому!</span>
                    <span className="text-sm sm:text-lg lg:text-2xl tracking-[-.8]">Для услуг и B2B, когда ждать нельзя</span>
                </div>
            </div>
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] w-96 mb-5 xs:mb-10 md:mb-16 lg:mb-26">
                <span className="font-bold block">Фиксированный тариф:</span>
                <span>от упаковки идеи и креативов <br /> до запуска рекламы</span>
            </div>
        <div className=" flex flex-col items-center justify-center">
                <ButtonBlack link="https://t.me/Allakoala9" text="Запустить рекламу под ключ" class="w-full md:w-auto lg:w-1/2 mb-3"></ButtonBlack>
                <span className="text-sm md:text-[16px]">(ответим в течение X минут)</span>
            </div>
        </div>
    </div>
    <div className="absolute h-full w-10/12 right-0 -bottom-20 xs:bottom-0 flex flex-col items-center ">           
            <img className="w-[100px] xs:w-[140px] sm:w-[240px] lg:w-[380px] translate-x-10 translate-y-28 sm:translate-y-38 md:translate-y-30 lg:translate-y-40 md:-translate-x-20 lg:-translate-x-28 z-10 animate-bounce-sm" src="/img/promo/big-logo.svg" alt="" />
                <img className="w-full scale-120 md:scale-100 md:max-h-[540px] lg:max-h-[640px] translate-x-20 md:translate-x-0 translate-y-22 md:translate-y-14 lg:translate-y-3 z-20 animate-bounce-hand" src="/img/promo/hand.png" alt="" />
            </div>
    </div>
    );
}