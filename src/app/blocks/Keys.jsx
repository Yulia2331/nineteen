import KeysItem from "../components/KeysItem";
import Button from "../components/Button";
export default function Keys() {
  return (
    <div className="container">
        <div className="mb-36">
        <div className="mb-12">
            <div className="flex justify-between items-center  lg:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-2]">наши кейсы</h2>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
            <KeysItem></KeysItem>
            <KeysItem></KeysItem>
            <KeysItem></KeysItem>
            <KeysItem></KeysItem>
        </div>
<div className="flex justify-end mt-10">
    <Button link="/keys" text="Смотреть все кейсы" class="w-full  lg:w-1/3"></Button>
</div>

    </div>
    </div>
    );
}