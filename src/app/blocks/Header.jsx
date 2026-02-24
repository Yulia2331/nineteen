import Image from "next/image";

export default function Header() {
  return (
<header className=" w-full py-3 backdrop-blur-xs bg-white-op-30 mb-6">
<div className="container">
    <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
            <img src="/img/logo.svg" alt="" className="w-12 lg:w-20"/>
           
            <div className="flex flex-col items-start leading-none font-medium tracking-[-1] ml-2">
                <span className="text-[15px] lg:text-2xl">Nineteen bees</span>
                <span className="text-[9px] lg:text-[14px]">Развитие бизнеса в сети</span>
            </div>
        </a>
        <ul className="hidden lg:flex font-bold text-[12px] lg:text-sm xl:text-[16px] gap-4 xl:gap-7 uppercase">
            <li className=""><a href="">Решения</a></li>
            <li className=""><a href="">Кейсы</a></li>
            <li className=""><a href="">Отрасли</a></li>
            <li className=""><a href="">О компании</a></li>
            <li className=""><a href="">Связаться</a></li>
        </ul>
        <div className="flex items-center gap-5">
            <div className="flex md:gap-1">
                <a href=""><img src="/img/icon/phone.svg" alt="" /></a>
                <a href=""><img src="/img/icon/tg.svg" alt="" /></a>
                <a href=""><img src="/img/icon/wh.svg" alt="" /></a>
            </div>
            <div className="hidden md:flex gap-2">
                <a href="" className="border-2 border-darck rounded-full flex items-center justify-center p-2"><img src="/img/icon/search.svg" alt="" /></a>
                <a href="" className="border-2 border-darck rounded-full flex items-center justify-center p-2"><img src="/img/icon/prof.svg" alt="" /></a>
            </div>
        </div>
    </div>
</div>
</header>
    );
}