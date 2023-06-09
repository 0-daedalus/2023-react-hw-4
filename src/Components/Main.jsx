/* eslint-disable react/react-in-jsx-scope */
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
const Main = () =>{
    const [display, setDisplay] = useState(true);
    const [data,setData] = useState([]);
    useEffect(() => {
        const getData = async () =>{
            const res = await axios.get("https://api.kanye.rest");
            setData(res.data.quote);
        }
        getData()
    }, [display])
    
    return (<div className="flex-1 bg-gray-100 flex justify-center items-center">
        <div className="flex flex-col items-center gap-5">
            <button onClick={() => {
                setDisplay(!display);
            }}>
                <Image 
                src="/pngegg.png" 
                width={467}
                height={620}
                className="block active:drop-shadow-[0_35px_35px_rgba(255,0,0,0.5)]"
                ></Image>
            </button>
            <div className="text-center text-xl font-bold">{data}</div>
        </div>
    </div>
    )
}
export default Main;