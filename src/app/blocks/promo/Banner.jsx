import Image from "next/image";
import ButtonBlack from "../../components/ButtonBlack";
export default function Banner() {
  return (
    <div className="h-full w-full relative">  
    <div className="absolute h-full w-[140%] -right-[60%] -top-32 "><img src="/img/promo/banner-grad.png" alt="" className="max-h-[1200px]"/></div>
    <div className="container">
        <div className="flex flex-col items-center relative z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[86px] leading-none tracking-[-1.6] md:tracking-[-4] font-bold uppercase">
            Клиенты нужны вчера?</h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">Запускаем рекламу и приводим заявки в короткий срок</p>

        </div>  
        <div className="h-full py-16 relative z-20">         
            <div className="flex justify-between items-center">
                <img src="/img/promo/gift.png" alt="" />
                <div className="flex flex-col justify-end text-right">
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-[32px] font-semibold uppercase tracking-[-.8]">По карману каждому!</span>
                    <span className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8]">Для услуг и B2B, когда ждать нельзя</span>
                </div>
            </div>
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] w-96 mb-26">
                <span className="font-bold block">Фиксированный тариф:</span>
                <span>от упаковки идеи и креативов <br /> до запуска рекламы</span>
            </div>
        <div className="mt-10 flex flex-col items-center justify-center">
                <ButtonBlack link="https://t.me/Allakoala9" text="Запустить рекламу под ключ" class="w-full md:w-auto lg:w-1/2 mb-3"></ButtonBlack>
                <span className="text-[16px]">(ответим в течение X минут)</span>
            </div>
        </div>
    </div>
    <div className="absolute h-full w-10/12 right-0 bottom-0 flex flex-col items-center">           
            <img className="w-[380px] translate-y-40 -translate-x-28 z-10 animate-bounce-sm" src="/img/promo/big-logo.svg" alt="" />
                <img className="w-full max-h-[640px] translate-y-3 z-20 animate-bounce-hand" src="/img/promo/hand.png" alt="" />
            </div>
    </div>
    );
}