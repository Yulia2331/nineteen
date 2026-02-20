export default function Format() {
  return (
    <div className="h-full w-full bg-[url('/img/format-bg.png')] bg-size-[100%_100%] bg-center bg-no-repeat">
    <div className="container">    
            <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2] text-center"><span className=" bg-clip-text text-transparent bg-linear-to-l from-text-grad-1 from-5.56% via-text-grad-2 via-41.24% to-text-grad-3 to-84.31%">Наш формат</span> <br /> подходит, если</h2>
            </div>
            <div className="relative">
                    <div className="py-3 sm:py-5 px-4 md:px-8 pr-10 bg-white rounded-4xl absolute bottom-5/12 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80 left-10">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-1] leading-3.5 sm:leading-6">Вы   готовы принимать решения по цифрам, а не по ощущениям</p>
                    </div>
                    <div className="py-3 sm:py-5 px-4 md:px-8 pr-10 bg-white rounded-4xl absolute right-14 top-7 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-1] leading-3.5 sm:leading-6">вы готовы выстраивать систему маркетинга для своего бизнеса</p>
                    </div>
                    <div className="py-3 sm:py-5 px-4 md:px-8 pr-10 bg-white rounded-4xl right-10 absolute sm:right-30 bottom-0 md:bottom-48 shadow-[0_4px_34px_rgba(36,36,36,0.2)] w-48 sm:w-80">
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-1] leading-3.5 sm:leading-6">вам важен стабильный результат, а не разовый эффект</p>
                    </div>
                <div className="flex justify-center items-center ">
                    <img className="w-6/12" src="/img/7.png" alt="" />
                </div>
            </div>
         </div>   
        </div>
    );
}