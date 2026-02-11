export default function AfterContacting() {
  return (
    <div className="container">
        <div className="mb-20 md:mb-30 lg:mb-38">
            <div className="mb-10 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2]">Что будет после обращения</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3 xl:gap-5">
                <div className="p-4 py-6 lg:p-8 xl:pr-20 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[64px]">01/</span>
                    <p className="text-xl lg:text-2xl tracking-[-1] mt-6">Уточняем задачу и цели <br /> (30-45 минут)</p>
                </div>
                <div className="p-4 py-6 lg:p-8 xl:pr-20 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[64px]">02/</span>
                    <p className="text-xl lg:text-2xl tracking-[-1] mt-6">Проводим экспресс- <br /> диагностику по данным <br /> и доступам (1–2 дня)</p>
                </div>
                <div className="p-4 py-6 lg:p-8 xl:pr-20 bg-white rounded-4xl">
                    <span className="text-5xl md:text-6xl lg:text-[64px]">03/</span>
                    <p className="text-xl lg:text-2xl tracking-[-1] mt-6">Согласуем план работ <br /> и метрики результата</p>
                </div>
            </div>
            <div className="bg-linear-to-r from-blue-400 to-blue-600 mt-6 rounded-4xl rounded-tr-[100px] rounded-bl-[100px] p-8 sm:grid grid-cols-2  lg:grid-cols-3 min-h-74 w-full overflow-hidden relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-[-2] text-white relative z-20 mb-5">Вы получите</h2>
                <ul className="ml-5 sm:ml-0 sm:text-xl xl:text-2xl text-white tracking-[-0.5] list-disc max-w-4/5 relative z-20">
                    <li className="mb-4 sm:mb-6">список узких мест <br /> и утечек в текущей системе</li>
                    <li className="mb-4 sm:mb-6">приоритет гипотез <br /> на первые этап работы</li>
                    <li>метрики и формат отчётности</li>
                </ul>
                <div className="absolute right-0 top-0 opacity-40 lg:opacity-100 lg:relative lg:-mb-24 w-full h-auto flex justify-end "><img  src="/img/freepik.png" alt="" className="lg:w-full h-96 object-contain"/></div>
                
            </div>
        </div>
    </div>
    );
}