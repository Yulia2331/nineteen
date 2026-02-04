export default function Scheme() {
  return (
    <div className="container">
        <div className="mb-38 relative">
           <div className="flex justify-between items-center border-t-2 py-11 pr-20">
                <span className="text-[64px]">01/</span>
                    <div className="-my-40  -translate-y-3">
                        <img src="/img/bee.png" alt="" />
                    </div>
                <div className="w-1/2 pr-20">
                    <h4 className="text-[32px] uppercase font-semibold mb-1 tracking-[-1]">Диагностика и стратегия</h4>                 
                    <p className="text-2xl tracking-[-0.5]">Понимание текущей ситуации и точек роста</p>
                </div>
           </div>
             <div className="flex justify-between items-center border-t-2 border-darck-op py-11 pr-20">
                <span className="text-[64px] text-darck-op">02/</span>
                <div className="w-1/2 pr-20">
                    <h4 className="text-[32px] uppercase font-semibold mb-1 tracking-[-1] text-darck-op">Система под ключ</h4>
                    <p className="text-2xl tracking-[-0.5] text-darck-op">Архитектура маркетинга с чёткими <br /> метриками и связями</p>
                </div>
           </div>
             <div className="flex justify-between items-center border-y-2 border-darck-op py-11 pr-20">
                <span className="text-[64px] text-darck-op">03/</span>
                <div className="w-1/2 pr-20">
                    <h4 className="text-[32px] uppercase font-semibold mb-1 tracking-[-1] text-darck-op">Рост и масштабирование</h4>
                    <p className="text-2xl tracking-[-0.5] text-darck-op">Усиление работающих решений <br /> и устойчивый рост</p>
                </div>
           </div>
        </div>
    </div>
    );
}