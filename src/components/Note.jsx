import { useState } from "react"

export function Note({setNotes}){
    const [data, setData] = useState({msg:"none"});

    const [isdisabled, setIsdisabled] = useState(true);

    function handleEliminate(){
        console.log("Eliminate")
    }

    function handleChange(e){
        setData({...data,msg:e.target.value})
    }




    return(
        <>
            <div className="note relative bg-red-200 rounded-xl w-[300px] h-[300px] ">
                <button onClick={handleEliminate} className="absolute  bg-white m-2 w-[40px] h-[40px] rounded-full top-0 left-0">b</button>
                <textarea onBlur={()=>setIsdisabled(!isdisabled)}  onChange={handleChange} type="text" className="w-full h-full bg-transparent focus:outline-none p-10 resize-none overflow-hidden" disabled={isdisabled} />
                <button  onClick={()=>setIsdisabled(!isdisabled)} className="absolute bg-white m-2 w-[40px] h-[40px] rounded-full bottom-0 right-0">e</button>
                <h1>{data.msg}</h1>
            </div>
        </>
    )
}