import Image from "next/image";

export default function Footer() {
  return (
<footer className="w-full pt-20 pb-10 bg-[url('/img/footer.png')] bg-size-[100%_100%] bg-top bg-no-repeat relative z-10">
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
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Политика конфиденциальности</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Cookies</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Пользовательское соглашение</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Согласие на обработку данных</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a href="">Обработка данных (DPA)</a></li>
            </ul> 
        </div>
          <div className="">
            <h5 className="text-sm sm:text-[16px] text-white font-bold mb-4">Контакты</h5>
            <ul>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a  href="mailto:agency@19bees.com">Email: agency@19bees.com</a></li>
                <li className="mb-2 text-sm sm:text-[16px] text-white"><a  href="tel:89174351919">Телефон: +7 (917) 435-19-19</a></li>
                {/* <li className="mb-2 text-sm sm:text-[16px] text-white">Адрес: Город, улица, дом</li> */}
                <li className="mb-2 text-sm sm:text-[16px] text-white flex gap-5"><a  href="https://t.me/Allakoala9" target="_blank">Telegram</a><a  href="https://vk.com/19bees" target="_blank">VK</a></li>
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
    );
}