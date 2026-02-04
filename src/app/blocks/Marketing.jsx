export default function Marketing() {
  return (
    <div className="container">
        <div className="mt-38">
            <div className="flex justify-between items-start mb-16">
                <h2 className="text-5xl font-bold uppercase tracking-[-2]">Модульная система <br /> маркетинга</h2>
            </div>
            <div className="grid grid-cols-4 gap-5 text-center">
                <div className="bg-linear-to-r from-blue-400 to-blue-600 pt-12 rounded-[20px] rounded-tl-[100px] aspect-square flex flex-col justify-between overflow-hidden">
                    <h3 className="text-3xl text-white uppercase font-semibold">Стратегия</h3>
                    <div className="opacity-85 flex items-end justify-center">
                        <img src="/img/marketing/1.png" alt="" />
                    </div>
                </div>
                <div className="bg-white px-5 pt-12 rounded-[20px] shadow-[0_9px_33px_rgba(36,36,36,0.2)] aspect-square">
                    <h3 className="text-3xl mb-3 uppercase font-semibold">Сайт</h3>
                    <p className="text-2xl">Настроены <br /> на конверсии <br /> от первого экрана <br /> до заказа</p>
                </div>
                <div className="bg-linear-to-r from-blue-400 to-blue-600 pt-12 rounded-[20px] rounded-tr-[100px] aspect-square flex flex-col justify-between overflow-hidden">
                    <h3 className="text-3xl text-white uppercase font-semibold">Дизайн</h3>
                    <div className="opacity-85 flex items-end justify-center">
                        <img src="/img/marketing/2.png" alt="" />
                    </div>
                </div>
                <div className="bg-linear-to-r from-blue-400 to-blue-600 pt-12 rounded-[20px] rounded-tr-[100px] aspect-square flex flex-col justify-between overflow-hidden">
                    <h3 className="text-3xl text-white uppercase font-semibold">Продвижение</h3>
                    <div className="opacity-85 flex items-end justify-center">
                        <img src="/img/marketing/3.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 text-center items-end mt-5">
                <div className="bg-darck h-12"></div>
                <div className="bg-linear-to-r from-blue-400 to-blue-600 pt-12 rounded-[20px] rounded-tr-[100px] aspect-square flex flex-col justify-between overflow-hidden">
                    <h3 className="text-3xl text-white uppercase font-semibold">Аналитика</h3>
                    <div className="opacity-85 flex items-end justify-center">
                        <img src="/img/marketing/4.png" alt="" />
                    </div>
                </div>
                <div className="bg-linear-to-r from-blue-400 to-blue-600 pt-12 rounded-[20px] rounded-tr-[100px] aspect-square flex flex-col justify-between overflow-hidden">
                    <h3 className="text-3xl text-white uppercase font-semibold">Техподдержка</h3>
                    <div className="opacity-85 flex items-end justify-center">
                        <img src="/img/marketing/5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}