import { useState } from "react";
import { FaPlus } from "react-icons/fa";
export function CreationMenu({setNotes, setColor}){

    

    function generateUniqueId() {
        return Math.random().toString(36).substr(2, 9);
      }

    function handleClick(bgColor){
        
        setNotes((notes)=>{
            return[
                ...notes,{id:generateUniqueId(),content:" ",color:bgColor}
            ]
        })
    }

    return(
        <div className="flex z-10 flex-col gap-2 pt-5 pb-5 justify-center items-center bg-white absolute w-[80px] rounded-2xl top-10 left-10">
            <button onClick={()=>{handleClick("bg-amber-200")}} className={` bg-amber-200 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-orange-300")}} className={` bg-orange-300 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-red-300")}} className={`bg-red-300 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-green-300")}} className={` bg-green-300 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-emerald-400")}} className={`  bg-emerald-400 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-cyan-300")}} className={`  bg-cyan-300 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-purple-300")}} className={` bg-purple-300 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            <button onClick={()=>{handleClick("bg-indigo-400")}} className={`  bg-indigo-400 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white hover:animate-rotate-90`}><FaPlus/></button>
            
        </div>
    )
}