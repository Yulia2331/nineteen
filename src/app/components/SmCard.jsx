
export default function SmCard(props) {
  return ( 
     <div className="py-4 px-8  bg-white rounded-4xl shadow-[0_8px_12px_rgba(36,36,36,0.1)]">
        <p className="text-[16px] leading-5">{props.text}</p>
     </div>

    );
}