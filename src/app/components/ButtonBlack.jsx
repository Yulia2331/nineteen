export default function ButtonBlack(props) {
  return (
       <a 
    href={props.link} 
    className={`${props.class} 
    cursor-pointer rounded-[60px] bg-darck flex items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl tracking-[-0.5] text-white p-4 whitespace-nowrap`}>
 
        <span>{props.text}</span>
        
       <img src="/img/icon/arr.svg" alt="" className="w-5 sm:w-auto"/>

    </a>
    );
}