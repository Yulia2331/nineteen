import Image from "next/image";
import ButtonBlack from "../../components/ButtonBlack";
import Card from "../../components/Card";
import ExportedImage from "next-image-export-optimizer";
// import testPictureStatic from "/img/promo/big-logo.png";
export default function Banner() {
    const card = ['Берём на себя весь набор задач: от формулировки ваших преимуществ и дизайна до сайта, рекламы и аналитики', 'Подключаем все инструменты продвижения, подходящие вашему бизнесу — Директ, SEO, таргет', 'Работаем с вами как одна команда и держим фокус на результате: сайт, заявки, стоимость лида, продажи, окупаемость']
  return (
    <div className="h-full w-full relative mt-8 lg:mt-0 ">  
      {/* <ExportedImage className="bg-cover sm:bg-size-[75%_100%] lg:bg-size-[50%_100%] bg-right bg-no-repeat py-6 max-w-[650px] m-auto pb-14" fill src="/img/sot.png" alt="bee" /> */}
    <div className="container">
          <div className="flex flex-wrap items-center gap-x-4">
                <a href="/" className="text-[16px] text-darck-op-30 hover:text-darck">Главная</a>
                <span className="h-1 w-1 bg-darck-op-30 rounded-full"></span>
                <span className="text-[16px] text-darck font-bold">О компании</span>
            </div>
            </div>
    <div className="bg-[url('/img/sot.png')] bg-cover sm:bg-size-[75%_100%] lg:bg-size-[50%_100%] bg-right bg-no-repeat py-6 max-w-[1450px] m-auto py-10">
    <div className="container">
       <h1 className="text-4xl xs:text-5xl sm:text-[68px] md:text-[56px] lg:text-[68px] xl:text-[86px] leading-none tracking-tight font-bold uppercase">
        <span className="block">О компании </span>
        <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%"> 19BEES</span>
        </h1>
        <p className="text-sm xs:text-lg sm:text-xl lg:text-2xl pt-10">Мы - команда, которая помогает бизнесу <br /> продвигаться в интернете через систему маркетинга</p>
        </div>
      </div>
      <div className="container">
<div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-2 md:gap-3 lg:gap-5 md:mt-3 relative z-10">
    {card.map((n, i) => ( 
                                  <Card key={i} text={n}></Card>
                                        ))
                                           }
</div>
      </div>
    </div>
   
    );
}