export default function Numbers() {
  return (
    <div className="container">    
        <div className="pb-36 h-full w-full bg-[url('/img/numbers-bg.png')] bg-size-[100%_100%] bg-center bg-no-repeat">
            <div className="mb-16">
                <h2 className="text-5xl font-bold uppercase tracking-[-2] text-center"><span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">Результат, <span className="text-darck">измеримый</span></span> <br /> в цифрах</h2>
            </div>
            <div className="grid grid-cols-3 items-start gap-5">
                <div className="py-5 px-5 pr-10 bg-white rounded-4xl shadow-[0_4px_34px_rgba(36,36,36,0.2)]">
                    <span className="text-[64px] bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">+124%</span>
                    <p className="text-2xl tracking-[-1]">заявок</p>
                </div>
                 <div className="py-5 px-8 pr-10 bg-white rounded-4xl mt-14 shadow-[0_4px_34px_rgba(36,36,36,0.2)]">
                    <span className="text-[64px] bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">38%</span>
                    <p className="text-2xl tracking-[-1]">стоимости лида</p>
                </div>
                 <div className="py-5 px-8 pr-10 bg-white rounded-4xl shadow-[0_4px_34px_rgba(36,36,36,0.2)]">
                    <span className="text-[64px] bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">×2,5</span>
                    <p className="text-2xl tracking-[-1]">рост входящих обращений</p>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h4 className="text-[32px] uppercase font-semibold">Устранение хаоса из подрядчиков</h4>
                <div className="flex gap-2 mt-8">
                    <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">Один менеджер</span>
                    <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">Одна система</span>
                    <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">Единая отчётность</span>
                </div>
            </div>
         </div>   
    </div>
    );
}