
export default function Rate() {
  return (
       <section className="my-10 lg:my-20">
      <div className="container">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Состав тарифа</h2>
        </div>
        <div className="text-2xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
             <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">01</span>
            <h3 className="text-3xl mb-7">Подготовка рекламной модели</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>проводим стратегическую <br /> сессию</li>
              <li>формируем офферы</li>
              <li>выстраиваем путь клиента</li>
              <li>определяем структуру сайта <br /> и требования к контенту и <br /> дизайну с учётом рекламных <br /> сценариев</li>
            </ul>
          </div>
         <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">02</span>
            <h3 className="text-3xl mb-7">Создание и настройка инфраструктуры</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>разрабатываем сайт до 8 <br /> страниц под задачи рекламы</li>
              <li>интегрируем формы обратной <br /> связи и системы аналитики</li>
              <li>выполняем базовые <br /> технические SEO-настройки</li>
              <li>приводим сайт в соответствие <br /> с действующими требованиями <br /> законодательства</li>
            </ul>
          </div>
          <div className="">
            <span className="text-5xl md:text-6xl lg:text-[64px] text-darck-op border-b-2 border-b-greys py-2 mb-5 block">03</span>
            <h3 className="text-3xl mb-7">Запуск и сопровождение рекламы</h3>
            <ul className="list-disc flex flex-col gap-2 pl-5">
              <li>подбираем ключевые и минус- <br /> слова</li>
              <li>разрабатываем рекламные <br /> креативы</li>
              <li>готовим и запускаем <br /> рекламные кампании в Яндекс <br /> Директе</li>
              <li>осуществляем ведение и <br /> оптимизацию кампаний</li>
              <li>вносим корректировки на <br /> основе данных аналитики</li>
              <li>предоставляем регулярную <br /> отчётность</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    );
}