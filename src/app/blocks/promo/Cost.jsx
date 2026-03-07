import Image from "next/image";
import ButtonBlackPop from "../../components/ButtonBlackPop";
export default function Cost() {
  return (
    <div className="overflow-hidden pt-14">
     <section className="relative  pt-20">
      <img src="/img/promo/line-foot.png" alt="" className=" absolute -left-14 top-0 scale-115" />
      <div className="w-full py-12 bg-linear-to-r from-blue-400 to-blue-600">
        <div className="container">
          <div className="z-20 relative">
           <div className="mb-8 sm:mb-12 flex items-center justify-center gap-8">
                <img src="/img/promo/sm-star.svg" alt="" />
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center text-white">Формат и стоимость</h2>
             </div>
          <div className="grid grid-cols-3 gap-7">
            <div className="p-3 sm:p-5 lg:p-7 bg-white rounded-[30px] md:rounded-4xl ">
              <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-[-.8] leading-3.5 xs:leading-4 sm:leading-5 md:leading-7 lg:leading-9">Фиксированный <br /> тариф</p>
            </div>
            <div className="p-3 sm:p-5 lg:p-7 bg-white rounded-[30px] md:rounded-4xl ">
              <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-[-.8] leading-3.5 xs:leading-4 sm:leading-5 md:leading-7 lg:leading-9">Чёткий объём работ</p>
            </div>
            <div className="p-3 sm:p-5 lg:p-7 bg-white rounded-[30px] md:rounded-4xl ">
              <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-[-.8] leading-3.5 xs:leading-4 sm:leading-5 md:leading-7 lg:leading-9">Без бесконечных <br /> правок и доработок</p>
            </div>
          </div>
          <span className="text-2xl text-white text-center block mt-4">Цена, сроки и ожидаемый результат фиксируются до старта</span>
          <div className="mt-14 flex flex-col justify-center items-center gap-2">
              <ButtonBlackPop text="Запустить рекламу под ключ"/>
              <span className="text-[16px] text-white text-center">Если заявки нужны сейчас, а не после «идеального брендинга»</span>
          </div>
        </div>
        </div>
      </div>
      </section>
      </div>
    );
}