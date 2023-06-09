/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
const Header = () => {
    return <header className="flex rounded-b-lg drop-shadow-xl shadow-gray-500 justify-between items-center p-4 h-24 bg-gray-400 bg-opacity-70 text-gray-900">
        <Image src="/download.png" width={224} height={224} className="w-16 h-16 rounded-full" priority/>
        <ul className=" flex w-5/12 p-4 pointer-events-none list-none text-3xl font-bold justify-end gap-10">
            <li>Kanye</li>
            <li>Rest</li>
            <li>Quotes</li>
        </ul>
    </header>
}
export default Header;