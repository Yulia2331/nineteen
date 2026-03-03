import Link from 'next/link'
export default function Button(props) {

  return ( 
      <Link target='blank'
    href={props.link} 
    className={`${props.class} 
 gradient-button
     inline-flex
     items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] w-full whitespace-nowrap
     hover:shadow-lg hover:shadow-sh  transition-all duration-[.6s]
    `}>
        <span>{props.text}</span>
        
       <img src="/img/icon/arr-black.svg" alt="" className="w-5 sm:w-auto"/>

    </Link>  

    );
}