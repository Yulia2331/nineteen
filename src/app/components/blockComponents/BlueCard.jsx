import ExportedImage from "next-image-export-optimizer";
export default function Card(props) {
  return ( 
   <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-[20px] rounded-tr-[100px] flex flex-col justify-between overflow-hidden px-6 lg:px-12 pt-7 lg:pt-11 pb-0">
                    <h5 className="text-xl lg:text-2xl text-white relative z-10" dangerouslySetInnerHTML={{__html: props.text}}></h5>
                    <div className="-mb-24 lg:-mb-14 flex items-end justify-center hover:scale-110 transition-all duration-700">
                        <ExportedImage className="w-full h-72 object-contain pointer-events-none" width={288} height={288}  src={props.img} alt="Static Image" />
                    </div>
                </div>
    );
}