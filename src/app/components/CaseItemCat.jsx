
import Link from 'next/link'
export default function CaseItemCat(props) {
  return (
    <Link  href={props.link} className="relative rounded-4xl cursor-pointer max-w-96">
      <div className=" w-full overflow-hidden rounded-4xl relative aspect-square ">
        <img className="w-full h-full object-cover rounded-4xl" src={props.img} alt="" />
         <div className=" z-30 bg-[url('/img/cases-bg.png')] bg-cover bg-top bg-no-repeat  w-full h-full opacity-0 hover:opacity-100 transition-all duration-[.8s] absolute top-0 flex items-center justify-center">
          <img src="/img/icon/loop.svg" alt="" />
        </div>
      </div>
       
      
 <div className="py-5">
            <h3 className="text-2xl md:text-[28px] uppercase mb-3">{props.title}</h3>
            <p className="text-lg md:text-xl line-clamp-2">{props.descr}</p>
            </div>
    </Link>
        );
}