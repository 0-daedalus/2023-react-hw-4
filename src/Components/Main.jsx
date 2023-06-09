/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Api from "./Api";
const Main = () =>{
    return (<div className="flex-1 bg-gray-100 flex justify-center items-center">
        <div className="flex flex-col gap-5">
            <Image 
            src="/6960604_preview.jpeg" 
            width={820}
            height={619}
            className="block"
            ></Image>
            <Api />
        </div>
    </div>
    )
}
export default Main;