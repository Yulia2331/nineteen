export default function WhenCome() {
  return (
    <div className="container">
        <div className="mb-38">
            <div className="flex justify-center mb-16">
                <h2 className="text-5xl font-bold uppercase tracking-[-2]">Когда к нам приходят</h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-linear-to-r from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-12 pt-11 pb-0">
                    <h5 className="text-2xl text-white">Инструменты есть, <br /> системы нет
                    </h5>
                    <div className="flex items-end justify-center hover:scale-130 transition-all duration-700">
                        <img src="/img/whencome/1.png" alt="" />
                    </div>
                </div>
                 <div className="bg-linear-to-r from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-12 pt-11 pb-0">
                    <h5 className="text-2xl text-white">Маркетинг работает <br /> нестабильно
                    </h5>
                    <div className="flex items-end justify-center hover:scale-130 transition-all duration-700">
                        <img src="/img/whencome/2.png" alt="" />
                    </div>
                </div>
                 <div className="bg-linear-to-r from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-12 pt-11 pb-0">
                    <h5 className="text-2xl text-white">Нужен предсказуемый <br /> рост
                    </h5>
                    <div className="flex items-end justify-center hover:scale-130 transition-all duration-700">
                        <img src="/img/whencome/3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}