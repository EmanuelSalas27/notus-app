export function CreationMenu({setNotes}){

    function handleClick(){
        setNotes((notes)=>{
            console.log(notes)
            return[
                ...notes,[{msg:"hr"}]
            ]
        })
    }

    return(
        <div className="flex z-10 flex-col gap-2 pt-5 pb-5 justify-center items-center bg-white absolute w-[80px]  rounded-2xl top-10 left-10">
            <button onClick={handleClick} className="w-[40px] h-[40px] rounded-full bg-black text-white ">+</button>
            <button className="w-[30px] h-[30px] rounded-full bg-black ">+</button>
            <button className="w-[30px] h-[30px] rounded-full bg-black ">+</button>
            
        </div>
    )
}