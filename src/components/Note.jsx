import { IoCloseOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";


import { useState } from "react"
//[{msg:""},{msg:"Hello"}]
export function Note({id,notes,setNotes,bgColor}){
    const [isdisabled, setIsdisabled] = useState(true);
    function handleEliminate(e){
        const filterArray = notes.filter((note) => {
            if(note.id != id){
                return true
            }
        })
        setNotes(filterArray)
    }

    function handleChange(e){
        const newNote = {
            id:id,
            content:e.target.value,
        }

        const notesArray = notes.map((note) => {if(note.id===newNote.id){
            console.log(note)
            return {...newNote,color:note.color}
        }else{
            return note
        }})
        setNotes(notesArray)
        
    }
    
    

    return(
        <>
            { 
            <div className={ ` ${!isdisabled && "animate-pulse"} ${bgColor} note animate-fade-in-up relative rounded-xl w-[300px] h-[300px]`}>
                <button onClick={handleEliminate} className="absolute  bg-white m-2 w-[40px] h-[40px] rounded-full top-0 left-0 flex justify-center items-center hover:animate-rotate-90"><IoCloseOutline /></button>
                <textarea onBlur={()=>setIsdisabled(!isdisabled)}  onChange={handleChange} type="text" disabled={isdisabled} className={`w-full h-full bg-transparent focus:outline-none p-10 resize-none overflow-hidden`}/>
                <button  onClick={()=>setIsdisabled(!isdisabled)} className="absolute bg-white m-2 w-[40px] h-[40px] rounded-full bottom-0 right-0  flex justify-center items-center "><MdModeEdit /></button>
            </div>
            }
        </>
    )
}