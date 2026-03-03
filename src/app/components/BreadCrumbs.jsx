import Link from 'next/link'
export default function BreadCrumbs(props) {
  return ( 

    <div className="flex items-center gap-4">
        <a href="/" className="text-[16px] text-darck-op-30 hover:text-darck">Главная</a>
        <span className="h-1 w-1 bg-darck-op-30 rounded-full"></span>
        <a href="/cases" className="text-[16px] text-darck-op-30 hover:text-darck">Кйсы</a>
    </div>


    );
}