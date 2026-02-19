import Link from 'next/link'
export default function BreadCrumbs(props) {
  return ( 

    <div className="flex items-center gap-4">
        <a href="/">Главная</a>
        <span className="h-1 w-1 bg-darck rounded-full"></span>
        <span>кйсы</span>
    </div>


    );
}