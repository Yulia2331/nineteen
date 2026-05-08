
export default function Card(props) {
  return ( 
<div className="p-5 xs:p-3 sm:p-5 lg:px-8 lg:pr-10 bg-white rounded-[20px] md:rounded-4xl ">
            <p className="text-lg xs:text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[-.8] leading-5 xs:leading-4 sm:leading-5 md:leading-7 lg:leading-9">{props.text}</p>
          </div>
    );
}