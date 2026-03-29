import Image from "next/image";
import Button from "../components/Button";
import ExportedImage from "next-image-export-optimizer";
export default function Banner() {
  return (
    <div className="container ">  
    <div id="about" className="absolute top-0 left-0 w-full  rotate-90 lg:rotate-0 scale-400 md:scale-200 lg:scale-100 flex items-end justify-start pointer-events-none
     lg:after:bg-white after:z-20  lg:after:w-72  lg:after:translate-x-30
      after:absolute lg:after:-bottom-10 after:rotate-90 lg:after:rotate-0  lg:after:left-0 after:scale-120
     lg:after:min-w-full after:bg-white after:bottom-0 
     after:left-6/12 after:flex after:w-full after:h-22 after:justify-center after:blur-lg -mt-32 lg:mt-0
    ">
                <video autoPlay loop muted preload="none" className="w-full scale-101 block">
                   <source src="/img/6.mp4" type="video/mp4" />
                 </video> 
                 </div>
<div className="flex-col md:flex-row flex justify-between md:items-center relative mt-14">
    <div className="lg:flex-1 relative z-20">
    <h1 className="text-4xl xs:text-5xl sm:text-[68px] md:text-[56px] lg:text-[68px] xl:text-[86px] leading-none tracking-tight font-bold uppercase">
        <span className="block">Рост бизнеса</span>
        <span className="block">начинается</span>
        <span>с <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">решения</span></span>
        </h1>
        <p className="text-sm xs:text-lg sm:text-xl lg:text-2xl pt-5 mb-8">Строим систему привлечения клиентов <br /> через сайт, соцсети, рекламу и аналитику</p>
        <div className="flex-row inline-flex gap-2 flex-wrap">
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">300+ проектов</span>
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">7 лет опыта</span>
            <span className="text-sm md:text-[16px] lg:text-2xl py-2 px-3 lg:px-5 border-2 border-darck-op rounded-4xl">B2B и услуги</span>
        </div>
    </div>
    <div className="md:max-w-5/12 flex flex-col items-center z-10 pt-5 md:pt-0 pointer-events-none">
         {/* <img className="w-full max-w-10/12 md:max-w-full" src="/img/banner.png" alt="" /> */}
         <ExportedImage className="w-full max-w-10/12 md:max-w-full " width={3000} height={3000}  src="/img/banner.png" alt="bee" />
    </div>
</div>
    <div className="mt-12">
        <Button link="https://t.me/nineteen_bees" text="Обсудить вашу задачу" class="w-full md:w-auto lg:w-1/2"></Button>
    </div>
    </div>
    );
}