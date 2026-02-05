import ShadowDot from "../components/ShadowDot";
export default function Growth() {
  return (
    <div className="bg-linear-to-r from-blue-400 to-blue-600 w-full">
        <div className="container">
            <div className="grid grid-cols-[1fr_1fr] py-30">
                <div className=""></div>
                <div className="">
                    <h2 className="text-[66px] font-bold uppercase tracking-[-2] text-white">Готовы <br /> к системному росту?</h2>
                    <div className="flex items-center mt-10">
                        <ShadowDot></ShadowDot>
                        <span className="text-3xl text-white">Начнём со стратегической <br /> сессии</span>
                    </div>
                     <div className="flex items-center mt-10">
                        <ShadowDot></ShadowDot>
                        <span className="text-3xl text-white">Разберём текущий маркетинг <br /> и покажем точки масштабирования</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}