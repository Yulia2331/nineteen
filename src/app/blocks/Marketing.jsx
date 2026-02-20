'use client'
import MarketingItem from "../components/MarketingItem";
import ButtonBlack from "../components/ButtonBlack";
export default function Marketing() {

  return (
    <div className="container">
        <div className="mt-20 lg:mt-38">
            <div className="flex justify-between items-center mb-6 ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2]">Модульная система <br /> маркетинга</h2>
                <a href="">
                    <img src="/img/icon/arr-big.svg" alt="" className="w-16 sm:w-24 md:w-auto"/>
                </a>
            </div>

        <div className="flex flex-wrap items-end justify-between text-center">
                <MarketingItem title="Стратегия" src="/img/marketing/1.png" text="Чёткая дорожная карта роста на основе анализа клиентов и рынка" class="rounded-tl-[100px]"/>
                <MarketingItem title="Сайт" src="/img/marketing/2.png" text="Настроен на конверсии от первого экрана до заказа" class="" order=""/>
                <MarketingItem title="Дизайн" src="/img/marketing/3.png" text="Визуально усиливаем доверие и делаем бренд запоминающимся
                " class="rounded-tr-[100px] "/>
                 <MarketingItem title="Продвижение" src="/img/marketing/4.png" text="Запускаем и ведем продвижение с фокусом на заявки и стоимость лида" class="rounded-tr-[100px]"/>
                  <ButtonBlack link="#" text="Получить консультацию" class="basis-2/2 mt-5 md:basis-1/2 -ml-5 translate-x-3 mb-4 order-7 lg:order-5"/>
                 <MarketingItem title="Аналитика" src="/img/marketing/5.png" text="Видим, что приносит заявки и как их можно увеличить" class="rounded-tr-[100px]" order="lg:order-6"/>
                  <MarketingItem title="Техподдержка" src="/img/marketing/6.png" text="Обновления, правки, защита, скорость - стабильность 24/7" class="rounded-tr-[100px]" order="lg:order-7"/>
            </div>
            

        </div>
    </div>
    );
}