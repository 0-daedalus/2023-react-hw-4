import React from 'react'
import axios from 'axios'

const getData = async () =>{
  const res = await axios.get("https://api.kanye.rest");
  return res.data.quote;
}

export const Api = async () => {
  const data = await getData();
    return (
    <div className="text-center text-lg font-bold">
      {data}
    </div>
  )
}
export default Api;