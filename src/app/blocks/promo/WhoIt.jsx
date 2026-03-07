export default function WhoIt() {
  return (
         <section className="my-20">
      <div className="container">
        <div className="mb-8 sm:mb-12 flex items-center justify-center gap-8">
          <img src="/img/promo/sm-star.svg" alt="" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2] text-center">Кому подходит</h2>
        </div>
        <div className="md:text-lg lg:text-2xl grid grid-cols-5">
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Услуги, эксперты, товары, личный бренд</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Деньги или заявки закончились</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Старый сайт не продаёт или его нет</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Нужно проверить спрос перед масштаби-рованием</span>
          <span className="border-l border-l-greys py-3 px-2 lg:p-4">Нет времени и ресурса на долгий маркетинг</span>
        </div>
      </div>
    </section>
    );
}