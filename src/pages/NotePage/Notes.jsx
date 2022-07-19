import "./Notes.css";
import { useLocation } from "react-router-dom";
import { NavBar, Aside } from "../../components"
import { useState } from "react";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { postNote,editNote,deleteNote,archiveNote } from "../../services/Services";
import { NoteCard } from "../../components";

export const Notes=()=>{
const [noteCard,setNoteCard] = useState(false);
const expandCard=()=>{
    setNoteCard(true);
}

const {noteState,noteDispatch,archiveDispatch,note,setNote,initialVal,filterState}= useData();

const notesArray= noteState.noteData;

const {token}= useAuth();
const addNoteHandler=async()=>{
   
   try{
       if(!note._id)
       {
    
        let newNote={...note, tags:[note.tag]};
        const response= await postNote({token:token,note:newNote});
        if(response.status===200 || response.status===201)
        {
            setNote(initialVal);
            setNoteCard(false);
            noteDispatch({type:"ADD_NOTE",payload:response.data.notes})
         
        }
       }
       else{
           const response = await editNote({note,token})
           if(response.status===200 || response.status===201)
        {
            setNote(initialVal);
            setNoteCard(false);
            noteDispatch({type:"ADD_NOTE",payload:response.data.notes})
         
        }
       }
       
   }
   catch(error){
       console.log(error);
   }
}

const editHandler=(id)=>{
    const item= notesArray.find((elem)=>elem._id===id);
    setNoteCard(true);
    setNote(item);
}
const searchFilter=(notes,filter)=>{
    let newArray=[];
    let flag=false;
    if(filter!==""){
        newArray= notes.filter((item)=>item.tag===filter)
        
    }
    return (newArray.length>0? newArray:notes);
}
const sortNotes =(notes, sortBy)=>{
    if(sortBy==="latest")
     return [...notes].sort((a, b) => b.timestamp - a.timestamp);
    else
    return [...notes].sort((a, b) => a.timestamp - b.timestamp);
}
const filterNotes=()=>{
    let data=searchFilter(notesArray,filterState.filter.search);
    if(filterState.filter.sort)
     data= sortNotes(data,filterState.filter.sort); 
    return data;
}
const filteredNotes= filterNotes();

const unPinnedNotes= filteredNotes.filter((item)=>!item.isPinned);
const pinnedNotes = filteredNotes.filter((item)=> item.isPinned);

return (
    <div className="notes-page">
    <NavBar/>
    <main className="main-cont flex-row">
        <Aside/>
        <div className="sub-container flex-col">
            
            <section className="input-card-container flex-row">
               <div className="card note-input-card">
                   {noteCard && <header className="note-header flex-row">
                       <input type="text" className="note-title" placeholder="Title"
                       value={note.title}
                       onChange={(e)=>setNote({...note,title:e.target.value})}
                       />
                       
                   </header>}
                   <section>
                       <textarea onClick={expandCard} className="note-text" placeholder="Take a Note"
                       value={note.body}
                       onChange={(e)=>setNote({...note,body:e.target.value})}
                       ></textarea>
                   </section>
                   {noteCard && <footer className="note-footer flex-row">
                       <div className="footer-left flex-row"><input type="color" value={note.backGround}
                       onChange={(e)=>setNote({...note,backGround:e.target.value})}
                       />
                       <input type="text" placeholder="Label" className="label-input"
                       value={note.tag}
                       onChange={(e)=>setNote({...note,tag:e.target.value})}
                       />
                       </div>

                        <button className="add-note-btn btn"
                        onClick={addNoteHandler}
                        >{!note._id?"Add":"Update"}</button>
                   </footer>}
               </div>
            </section>

            {pinnedNotes.length>0 && (
             <div className="added-notes flex-col">
              <h4 className="note-category">Pinned Notes</h4>
              <section className="note-card-container ">
               {pinnedNotes.map((note)=>{
 
                   return (
                       <NoteCard
                       key={note._id}
                       note={note}
                       editHandler={()=>editHandler(note._id)}
                     
                       />
                   )
               })}
             </section>
             </div> 
            )}

            {unPinnedNotes.length>0 && (
                <div className="added-notes flex-col">
                <h4 className="note-category">Others</h4>
                <section className="note-card-container ">
                {unPinnedNotes.map((note)=>{
  
                    return (
                        <NoteCard
                        key={note._id}
                        note={note}
                        editHandler={()=>editHandler(note._id)}
                      
                        />
                    )
                })}
              </section>
              </div>
            )}
        </div>
    </main>
    </div>
);
}