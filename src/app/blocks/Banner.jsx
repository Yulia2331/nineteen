import Image from "next/image";
import Button from "../components/Button";
export default function Banner() {
  return (
    <div className="container">  
                        {/* <video autoPlay loop muted className="absolute top-0 left-0 w-full ">
                   <source src="/img/6.mp4" type="video/mp4" />
                 </video>  */}
<div className="flex-col md:flex-row flex justify-between md:items-center relative mt-14">
    <div className="lg:flex-1 relative z-20">
    <h1 className="text-4xl xs:text-5xl sm:text-[56px] lg:text-[68px] xl:text-[86px] leading-none tracking-tight font-bold uppercase">
        <span className="block">Рост бизнеса</span>
        <span className="block">начинается</span>
        <span>с <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">решения</span></span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl pt-5 mb-8">Строим систему привлечения клиентов <br /> через сайт, соцсети, рекламу и аналитику</p>
        <div className="flex-row inline-flex gap-2 flex-wrap">
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">300+ проектов</span>
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">7 лет опыта</span>
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">B2B и услуги</span>
        </div>
    </div>
    <div className=" max-w-4/12 md:max-w-5/12 xl:max-w-5/12 lg:flex-1 scale-120 sm:scale-100 translate-x-1/2 translate-y-1/2 sm:translate-0 flex flex-col items-center justify-end absolute right-0 md:relative z-10">
         <img className="w-full" src="/img/banner.png" alt="" />
    </div>
</div>
    <div className="mt-12">
        <Button link="https://t.me/Allakoala9" text="Обсудить вашу задачу" class="w-full md:w-auto lg:w-1/2"></Button>
    </div>
    </div>
    );
}