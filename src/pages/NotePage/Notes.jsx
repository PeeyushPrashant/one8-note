import "./Notes.css"
import { NavBar, Aside } from "../../components"
import { useState } from "react";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { postNote,editNote,deleteNote } from "../../services/Services";
import { NoteCard } from "../../components";

export const Notes=()=>{
const [noteCard,setNoteCard] = useState(false);

const expandCard=()=>{
    setNoteCard(true);
}
const date = new Date();
const initialVal= {
    _id:"",
    title:"",
    body:"",
    backGround:"#e7dcdc",
    CreatedAt:`${date.getDate()}/0${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
}

const [note,setNote]= useState(initialVal);
const {noteState,noteDispatch}= useData();

const notesArray= noteState.noteData;

const {token}= useAuth();
const addNoteHandler=async()=>{
   
   try{
       if(!note._id)
       {
        const response= await postNote({token,note});
        
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

const deleteHandler=async (id)=>{
  try{
      const response= await deleteNote(id,{token});
      if(response.status===200 || response.status===201)
        {
        noteDispatch({type:"ADD_NOTE",payload:response.data.notes})
         
        }
  }
  catch(error){
      console.log(error);
  }
}

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
                       <p><i className="bi bi-pin-fill icon-md pin-icon"></i></p>
                   </header>}
                   <section>
                       <textarea onClick={expandCard} className="note-text" placeholder="Take a Note"
                       value={note.body}
                       onChange={(e)=>setNote({...note,body:e.target.value})}
                       ></textarea>
                   </section>
                   {noteCard && <footer className="note-footer flex-row">
                       <div><input type="color" value={note.backGround}
                       onChange={(e)=>setNote({...note,backGround:e.target.value})}
                       /></div>
                        <button className="add-note-btn btn"
                        onClick={addNoteHandler}
                        >{!note._id?"Add":"Update"}</button>
                   </footer>}
               </div>
            </section>

            <section className="note-card-container flex-row">
              {notesArray.map(({title,body,CreatedAt,_id,backGround})=>{
                  return (
                      <NoteCard
                      key={_id}
                      title={title}
                      body={body}
                      CreatedAt={CreatedAt}
                      editHandler={()=>editHandler(_id)}
                      deleteHandler={()=>deleteHandler(_id)}
                      backgroundColor={backGround}
                      />
                  )
              })}
            </section>
        </div>
    </main>
    </div>
);
}