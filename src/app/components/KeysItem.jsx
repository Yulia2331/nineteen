export default function KeysItem() {
  return (
    <div className="relative md:min-h-80 overflow-hidden rounded-4xl cursor-pointer">
      <div className="absolute w-full overflow-hidden rounded-4xl">
        <img className="w-full rounded-4xl" src="/img/keys.png" alt="" />
      </div>
        <div className="relative z-30 bg-[url('/img/keys-bg.png')] bg-cover bg-top bg-no-repeat  w-full h-full ">
         <div className="p-5 sm:p-10 lg:p-13 flex flex-col justify-between h-full">
          <div className="">
            <h3 className="text-white text-2xl md:text-[32px] uppercase mb-3">НАЗВАНИЕ</h3>
            <p className="text-white text-lg md:text-2xl">Описание кейса в две строки интересноено не слишком много текста</p>
            </div>
            <div className="flex gap-2 mt-12 flex-wrap">
              <span className="py-2 px-5 border-2 border-white-op-30 rounded-4xl text-white">Веб-дизайн</span>
              <span className="py-2 px-5 border-2 border-white-op-30 rounded-4xl text-white">Айдентика</span>
            </div>
         </div>
        </div>
      

    </div>
        );
}