import Image from "next/image";

export default function Banner() {
  return (
    <div className="container">    
<div className="flex justify-between items-center">
    <div className="flex-1">
    <h1 className="text-[86px] leading-none tracking-[-4] font-bold uppercase">
        <span className="block">Рост бизнеса</span>
        <span className="block">начинается</span>
        <span>с <span className="font-extrabol bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">решения</span></span>
        </h1>
        <p className="text-2xl pt-4 mb-8">Строим систему привлечения клиентов <br /> через сайт, соцсети, рекламу и аналитику</p>
        <div className="flex gap-2">
            <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">300+ проектов</span>
            <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">7 лет опыта</span>
            <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">B2B и услуги</span>
        </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-end">
         <img src="/img/banner.png" alt="" />
    </div>
</div>
<div className="flex items-center justify-between mt-20">
        <a className="btn p-btn" href=""><span>Обсудить вашу задачу</span></a>
        <a className="btn black-btn" href=""><span>Начать проект</span></a>
    </div></div>
    );
}