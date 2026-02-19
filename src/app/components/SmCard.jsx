
export default function SmCard(props) {
  return ( 
     <div className="py-4 px-8 h-26 bg-amber-50 rounded-4xl">
        <p className="text-[16px] leading-5">{props.text}</p>
     </div>

    );
}