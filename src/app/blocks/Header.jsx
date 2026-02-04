import Image from "next/image";

export default function Header() {
  return (
<header className=" w-full py-5 backdrop-blur-xs bg-white-op-30 mb-20">
<div className="container">
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <Image
            src="/img/logo.svg"
            alt="Picture of the author"
            width={82}
            height={62}
            />
            <div className="flex flex-col items-center leading-none font-medium tracking-[-1] ml-2">
                <span className="text-xl">Nineteen bees</span>
                <span className="text-[12px]">Развитие бизнеса в сети</span>
            </div>
        </div>
        <ul className="flex font-bold text-[16px] gap-7 uppercase">
            <li className=""><a href="">Решения</a></li>
            <li className=""><a href="">Кейсы</a></li>
            <li className=""><a href="">Отрасли</a></li>
            <li className=""><a href="">О компании</a></li>
            <li className=""><a href="">Связаться</a></li>
        </ul>
        <div className="w-24"></div>
    </div>
</div>
</header>
    );
}