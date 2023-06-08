/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
const Header = () => {
    const imageURL = "/public/next.svg"
    return <header className="flex justify-between p-4 h-20 bg-blue-900 text-white">
        <Image src={imageURL} width={100} height={100} />
        <ul className=" flex w-5/12 p-4 pointer-events-none list-none text-md justify-around">
            <li>This</li>
            <li>is</li>
            <li>a</li>
            <li>header</li>
        </ul>
    </header>
}
export default Header;