export default function AfterContacting() {
  return (
    <div className="container">
        <div className="mb-38">
            <div className="mb-16">
                <h2 className="text-5xl font-bold uppercase tracking-[-2]">Что будет после обращения</h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="p-8 pr-20 bg-white rounded-4xl">
                    <span className="text-[64px]">01/</span>
                    <p className="text-2xl tracking-[-1]">Уточняем задачу и цели <br /> (30-45 минут)</p>
                </div>
                <div className="p-8 pr-20 bg-white rounded-4xl">
                    <span className="text-[64px]">02/</span>
                    <p className="text-2xl tracking-[-1]">Проводим экспресс- <br /> диагностику по данным <br /> и доступам (1–2 дня)</p>
                </div>
                <div className="p-8 pr-20 bg-white rounded-4xl">
                    <span className="text-[64px]">03/</span>
                    <p className="text-2xl tracking-[-1]">Согласуем план работ <br /> и метрики результата</p>
                </div>
            </div>
            <div className="bg-linear-to-r from-blue-400 to-blue-600 mt-6 rounded-4xl rounded-tr-[100px] rounded-bl-[100px] p-8 grid grid-cols-3 h-74 w-full overflow-hidden">
                <h2 className="text-5xl font-bold uppercase tracking-[-2] text-white">Вы получите</h2>
                <ul className="text-2xl text-white tracking-[-0.5] list-disc max-w-4/5">
                    <li className="mb-6">список узких мест <br /> и утечек в текущей системе</li>
                    <li className="mb-6">приоритет гипотез <br /> на первые этап работы</li>
                    <li>метрики и формат отчётности</li>
                </ul>
                <div className="-mt-8 flex justify-end opacity-85"><img  src="/img/freepik.png" alt="" /></div>
                
            </div>
        </div>
    </div>
    );
}