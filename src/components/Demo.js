import { useEffect, useMemo, useState } from "react";
import findNthPrime from "../utils/findPrime";

const Demo = () =>{
    const [isDark,setIsDark] = useState(false)
    const [num,setNum] = useState(0)
    const [primeval,setPrimeVal] = useState(0)
    useEffect(()=>{
        console.log(" cal received ");
        val = findNthPrime(num)
        setPrimeVal(val)
    },[num])
    // const primeNumber = useMemo(()=> findNthPrime(num),[num]);
    return(
        <>
            <div className="flex justify-center">
                <div className={"w-96 h-96 border border-black m-3 p-4" + (isDark && ' bg-gray-900')}>
                    <div className="flex justify-center">
                        <button className="m-10 p-2 bg-green-200 " onClick={()=>{console.log('clicked');setIsDark(()=>!isDark)}}>Toggle</button>
                    </div>
                    <div className="m-4">
                        <input type="number" className="border border-black" onChange={(e)=>setNum(e.target.value)}></input>
                        <h2 className={"font-bold py-2 "+ (isDark && ' text-white')} >Nth prime is : {primeval}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo;