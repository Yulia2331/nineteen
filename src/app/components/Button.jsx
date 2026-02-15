import Link from 'next/link'
export default function Button(props) {
  return ( 
      <Link 
    href={props.link} 
    className={`${props.class} 
    cursor-pointer rounded-[60px]
    bg-linear-to-r from-[#1DC1F8] from-v to-[#477BEA] to-86.46%
    p-[2px] inline-flex items-center justify-center
    `}>
  <div className="flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] rounded-[60px] bg-white pointer-events-none p-4 w-full whitespace-nowrap">
        <span>{props.text}</span>
        
       <img src="/img/icon/arr-black.svg" alt="" className="w-5 sm:w-auto"/>
</div>
    </Link>  

    );
}