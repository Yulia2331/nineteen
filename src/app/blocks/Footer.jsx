import Image from "next/image";

export default function Footer() {
  return (
<footer className="w-full py-26 bg-black">
<div className="container">
    <div className="grid grid-cols-5">
        <div className="">
            <h5 className="text-[16px] text-white font-bold mb-5">О компании</h5>
            <a className="text-[16px] text-white mb-4" href="">О компании</a>
        </div>
    </div>
</div>
</footer>
    );
}