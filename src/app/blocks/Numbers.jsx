export default function Numbers() {
  return (
    <div className="container">    
        <div className="pb-20 lg:pb-32 h-full w-full bg-[url('/img/numbers-bg.png')] bg-size-[100%_100%] bg-center bg-no-repeat">
            <div className="mb-10 ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2] text-center"><span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">Результат, <span className="text-darck">измеримый</span></span> <br /> в цифрах</h2>
            </div>
            <div className="grid md:grid-cols-3 items-start gap-3 lg:gap-5">
                <div className="py-5 px-2 lg:px-8 xl:pr-10 bg-white rounded-4xl shadow-[0_4px_34px_rgba(36,36,36,0.2)]">
                    <span className="text-5xl lg:text-[64px] bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">+124%</span>
                    <p className="text-lg  md:text-xl xl:text-2xl tracking-[-1.2] mt-2 whitespace-nowrap">заявок</p>
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-[16px] tracking-[-1.2]">за 3 месяца</span>
                </div>
                 <div className="py-5 px-2 lg:px-8 xl:pr-10 bg-white rounded-4xl md:mt-8 lg:mt-14 shadow-[0_4px_34px_rgba(36,36,36,0.2)]">
                    <span className="text-5xl lg:text-[64px] bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">38%</span>
                    <p className="text-lg  xl:text-2xl tracking-[-1.2] mt-2 whitespace-nowrap">стоимости лида</p>
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-[16px] tracking-[-1.2]">за 5 недель</span>
                </div>
                 <div className="py-5 px-2 lg:px-8 xl:pr-10 bg-white rounded-4xl shadow-[0_4px_34px_rgba(36,36,36,0.2)]">
                    <span className="text-5xl lg:text-[64px] bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">×2,5</span>
                    <p className="text-lg  md:text-xl xl:text-2xl tracking-[-1.2] mt-2 whitespace-nowrap">рост входящих обращений</p>
                    <span className="bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31% text-[16px] tracking-[-1.2]">после переработки сайта и рекламы</span>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h4 className="text-xl sm:text-2xl md:text-[32px] uppercase font-semibold">Устранение хаоса из подрядчиков</h4>
                <div className="flex gap-2 mt-8 flex-wrap">
                    <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">Один менеджер</span>
                    <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">Одна система</span>
                    <span className="py-2 px-5 border-2 border-darck-op rounded-4xl">Единая отчётность</span>
                </div>
            </div>
         </div>   
    </div>
    );
}