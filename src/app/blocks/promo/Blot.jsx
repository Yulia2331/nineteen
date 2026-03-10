import Image from "next/image";
import ButtonPop from "../../components/ButtonPop";
export default function Blot() {
  return (
     <section className="h-full w-full">
      <div className="flex justify-center">
        <img src="/img/promo/blot-full.svg" alt="" className="scale-120 md:scale-100"/>
      </div>
      <div className="container">
       <div className="flex flex-col items-center justify-center mt-6 md:mt-12">
            <ButtonPop text="Быстрый старт" class="w-48 md:w-72 mb-3"></ButtonPop>
            <span className="text-sm md:text-[16px]">Вход в зону роста</span>
          </div>
      </div>
    </section>
    );
}