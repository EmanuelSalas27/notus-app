import { useState } from "react";
import { CreationMenu } from "./components/CreationMenu";
import { Note } from "./components/Note";


function App() {
  const [notes, setNotes] = useState([{msg:""},{msg:"Hello"}]);

  return (
    <>
    
    <aside className="relative bg-slate-700">
      <CreationMenu setNotes={setNotes}/>
    </aside>
    
    <main className=" w-screen h-screen bg-zinc-100 flex items-center justify-center">
      <div className=" grid-cols-3 gap-5 justify-center  content-center grid justify-items-center items-center">
      {notes.map((note,idx)=><Note key={idx} setNotes={setNotes}/>)}

      </div>

    </main>
    </>
  )
}

export default App
