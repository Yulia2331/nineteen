'use client';
import React, { useCallback, useEffect, useState, useRef } from 'react'
import ExportedImage from "next-image-export-optimizer";
import ButtonBlack from "../components/ButtonBlack";

export default function Footer() {
     const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Показываем кнопку после прокрутки на 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };
  const [op, setOp] = useState('opacity-0');
   const onScroll = useCallback(event => {
                  const { pageYOffset, scrollY } = window;
                  if(scrollY > 1600 || pageYOffset > 1600){
                    setOp('opacity-100')
                          }
              }, []);
            
              useEffect(() => {
                //add eventlistener to window
                window.addEventListener("scroll", onScroll, { passive: true });
                // remove event on unmount to prevent a memory leak with the cleanup
                return () => {
                   window.removeEventListener("scroll", onScroll, { passive: true });
                }
              }, []);
  return (
    <div className="">
<footer className="w-full py-20 pb-24 bg-[url('/img/footer.png')] bg-size-[100%_100%] bg-top bg-no-repeat relative">
<div className="container">
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14">
        {/* <div className="">
            <h5 className="text-sm sm:text-[16px] text-white font-bold mb-4">О компании</h5>
            <ul>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">О компании</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Команда</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Как мы работаем</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Карьера</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Партнёрам</a></li>
            </ul> 
        </div>
          <div className="">
            <h5 className="text-sm sm:text-[16px] text-white font-bold mb-4">Услуги</h5>
            <ul>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Сайты</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Продвижение</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Дизайн</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Стратегия</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Аудиты</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">ИИ-ассистент</a></li>
            </ul> 
        </div>
          <div className="">
            <h5 className="text-sm sm:text-[16px] text-white font-bold mb-4">Ресурсы</h5>
            <ul>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Академия</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Блог</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Кейсы</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Поиск</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Спецпредложения</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Оцените свой маркетинг</a></li>
            </ul> 
        </div> */}
          <div className="">
            <h5 className="text-sm sm:text-[16px] text-white font-bold mb-4">Документы</h5>
            <ul>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="/docs/privacy-policy">Политика конфиденциальности</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="/docs/cookies">Cookies</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Пользовательское соглашение</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="/docs/soglasie-polzovatelya-na-obrabotku-personalnyh-dannyh">Согласие на обработку данных</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Обработка данных (DPA)</a></li>
            </ul> 
        </div>
          <div className="">
            <h5 className="text-sm sm:text-[16px] text-white font-bold mb-4">Контакты</h5>
            <ul>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a  href="mailto:agency@19bees.ru">Email: agency@19bees.ru</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a  href="tel:89174351919">Телефон: +7 (917) 435-19-19</a></li>
                {/* <li className="mb-2 text-sm sm:text-[16px] text-white">Адрес: Город, улица, дом</li> */}
                <li className="mb-2 text-sm sm:text-[16px] text-white flex gap-5"><a  href="https://t.me/nineteen_bees" target="_blank">Telegram</a><a  href="https://vk.com/19bees" target="_blank">VK</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white flex gap-5"><a href="https://wa.me/37259002425" target="_blank">WhatsApp</a><a href="https://max.ru/u/f9LHodD0cOL1TBKpIYV2yvfq7IPI0UFN4TRvrHlzh88Y3BU8ff3tQ3Sybic" target="_blank">Max</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white flex"><a href="https://www.youtube.com/@19Bees" target="_blank">YouTube</a></li>
            </ul> 
        </div>
    </div>
    <div className="flex flex-wrap gap-4 md:gap-16 mt-10 md:mt-16">
        <span className="text-white-op-30 text-sm sm:text-[16px]">2026, 19BEES.</span>
        <span className="text-white-op-30 text-sm sm:text-[16px]">Системный маркетинг под цели бизнеса</span>
        <span className="text-white-op-30 text-sm sm:text-[16px]">Сделано командой 19BEES</span>
    </div>
</div>

</footer>
        <div className="fixed bottom-3 w-full flex justify-end pr-1 md:pr-2  z-30">
          <div className={`  transition-all duration-[.8s] ${op}`}>
                  <ButtonBlack link="https://t.me/nineteen_bees" text="Начать проект" class="w-52 sm:w-72"/>
          </div>
        </div>
<button onClick={scrollToTop} className={` z-30 fixed bottom-16 sm:bottom-20 right-1 md:right-5 h-12 w-12 flex items-center justify-center rounded-full bg-linear-to-bl from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% cursor-pointer hover:bg-linear-to-tl transition-all duration-[.8s] ${op}`}>
    <ExportedImage className="w-5 sm:w-auto -rotate-90" width={40} height={40}  src="/img/icon/arr.svg" alt="->" /></button>

</div>
    );
}