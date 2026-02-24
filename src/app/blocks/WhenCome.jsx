export default function WhenCome() {
  return (
    <div className="container">
        <div className="mb-20 md:mb-30 lg:mb-32">
            <div className="flex justify-center mb-10 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2]">Когда к нам приходят</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3 lg:gap-5">
                <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-6 lg:px-12 pt-7 lg:pt-11 pb-0">
                    <h5 className="text-xl lg:text-2xl text-white">Есть сайт и реклама, <br /> но заявок нет
                    </h5>
                    <div className="-mb-24 lg:-mb-14 flex items-end justify-center hover:scale-110 transition-all duration-700">
                        <img className="w-full h-72 object-contain" src="/img/whencome/1.png" alt="" />
                    </div>
                </div>
                 <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-6 lg:px-12 pt-7 lg:pt-11 pb-0">
                    <h5 className="text-xl lg:text-2xl text-white">Подрядчиков много, <br /> результата не видно
                    </h5>
                    <div className="-mb-24 lg:-mb-14 flex items-end justify-center hover:scale-110 transition-all duration-700">
                        <img className="w-full h-72 object-contain" src="/img/whencome/2.png" alt="" />
                    </div>
                </div>
                 <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-6 lg:px-12 pt-7 lg:pt-11 pb-0">
                    <h5 className="text-xl lg:text-2xl text-white">Нужен предсказуемый <br /> рост
                    </h5>
                    <div className="-mb-24 lg:-mb-14 flex items-end justify-center hover:scale-110 transition-all duration-700">
                        <img className="w-full h-72 object-contain" src="/img/whencome/3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}