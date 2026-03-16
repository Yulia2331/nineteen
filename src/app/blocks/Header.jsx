import Image from "next/image";
import { Link, Element } from 'react-scroll'

export default function Header() {
  return (
    <div className="">
<header className=" w-full py-2 backdrop-blur-xs bg-white-op-30 mb-6 fixed top-0 z-30">
<div className="container">
    <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
            <img src="/img/logo.svg" alt="" className="w-12 lg:w-20"/>
           
            <div className="flex flex-col items-start leading-none font-medium tracking-[-.8] ml-2">
                <span className="text-[18px] sm:text-xl lg:text-2xl">Nineteen bees</span>
                <span className="text-[11px] sm:text-[12px] lg:text-[14px]">Развитие бизнеса в сети</span>
            </div>
        </a>
        <ul className="hidden lg:flex font-bold text-[12px] lg:text-sm xl:text-[16px] gap-4 xl:gap-7 uppercase">
            <li className="cursor-pointer"><Link to="marketing" smooth={true} duration={1500}>Услуги</Link></li>
            <li className="cursor-pointer"><Link to="cases" smooth={true} duration={1500}>Кейсы</Link></li>
            <li className="cursor-pointer"><Link to="about" smooth={true} duration={1500} href="">О компании</Link></li>
            <li className="cursor-pointer"><Link to="growth" smooth={true} duration={1500} href="">Связаться</Link></li>
        </ul>
        <a href="/promo" className="text-white text-[12px] sm:text-lg rounded-3xl py-2 px-2 sm:px-4 tracking-wide transition-all duration-1000 bg-text-grad-3
        before:bg-linear-to-bl before:from-text-grad-1 before:from-5.56% before:via-text-grad-2 before:via-41.24% before:to-text-grad-3 before:to-84.31%  before:absolute before:left-0 before:top-0  relative before:h-full before:w-full before:animate-pulse  overflow-hidden before:contrast-120 ">
            <span className="block z-20 relative">Быстрый старт</span></a>
        <div className="sm:flex items-center gap-5 hidden">
            <div className="flex md:gap-1 ">
                <a href="tel:89174351919" target="_blank"><img src="/img/icon/phone.svg" alt="" /></a>
                <a href="https://t.me/Allakoala9" target="_blank"><img src="/img/icon/tg.svg" alt="" /></a>
                <a href="https://wa.me/37259002425" target="_blank"><img src="/img/icon/wh.svg" alt="" /></a>
            </div>
            <div className="hidden  gap-2">
                <a href="" className="border-2 border-darck rounded-full flex items-center justify-center p-2"><img src="/img/icon/search.svg" alt="" /></a>
                <a href="" className="border-2 border-darck rounded-full flex items-center justify-center p-2"><img src="/img/icon/prof.svg" alt="" /></a>
            </div>
        </div>
    </div>
</div>
</header>
<div className="pt-16 lg:pt-22"></div></div>
    );
}