import Image from "next/image";
import Button from "../components/Button";
export default function Banner() {
  return (
    <div className="container">    
<div className="flex-col md:flex-row flex justify-between md:items-center relative mt-10 sm:mt-20">
    <div className="lg:flex-1 relative z-20">
    <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[86px] leading-none tracking-[-4] font-bold uppercase">
        <span className="block">Рост бизнеса</span>
        <span className="block">начинается</span>
        <span>с <span className="font-extrabol bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">решения</span></span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl pt-4 mb-8">Строим систему привлечения клиентов <br /> через сайт, соцсети, рекламу и аналитику</p>
        <div className="flex-row inline-flex gap-2 flex-wrap">
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">300+ проектов</span>
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">7 лет опыта</span>
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">B2B и услуги</span>
        </div>
    </div>
    <div className="max-w-5/12 xl:max-w-1/2 lg:flex-1 flex flex-col items-center justify-end absolute right-0 md:relative z-10">
         <img className="w-full" src="/img/banner.png" alt="" />
    </div>
</div>
    <div className="mt-10 lg:mt-20">
        <Button link="#" text="Обсудить вашу задачу" class="w-full md:w-auto lg:w-1/2"></Button>
    </div>
    </div>
    );
}