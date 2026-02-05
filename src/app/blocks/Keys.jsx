import KeysItem from "../components/KeysItem";
export default function Keys() {
  return (
    <div className="container">
        <div className="mb-36">
        <div className="mb-12">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-5xl font-bold uppercase tracking-[-2]">наши кейсы</h2>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
            <KeysItem></KeysItem>
            <KeysItem></KeysItem>
            <KeysItem></KeysItem>
            <KeysItem></KeysItem>
        </div>
    </div>
    </div>
    );
}