import "./NoteCard.css"
import { archiveNote,deleteNote,restoreNote,deleteArchive } from "../../services/Services";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { useEffect, useState } from "react";

export const NoteCard=({title,body,editHandler,CreatedAt,backgroundColor,id})=>{
    
    
    const {note,noteState,noteDispatch,archiveState,archiveDispatch}=useData();
    const {token}= useAuth();
    const archived= archiveState.archiveData.some((ele)=>ele._id===id);
    console.log(archived);
    const deleteHandler=async (id)=>{
        try{
            if(!archived){
                const response= await deleteNote(id,{token});
                if(response.status===200 || response.status===201)
                  {
                  noteDispatch({type:"ADD_NOTE",payload:response.data.notes})
                   
                  }
            }
            else{
                const response= await deleteArchive(id,{token});
                if(response.status===200 || response.status===201)
                  {
                  archiveDispatch({type:"ADD_TO_ARCHIVE",payload:response.data.archives})
                   
                  }
            }
        }
        catch(error){
            console.log(error);
        }
      }

    const noteToArchiveHandler=async (id)=>{
        try{
              const response= await archiveNote(id,{token,note});
              if(response.status===200 || response.status===201)
              {
                 noteDispatch({type:"ADD_NOTE",payload:response.data.notes});
                 archiveDispatch({type:"ADD_TO_ARCHIVE", payload: response.data.archives});
                 
              }
        }
        catch(error){
            console.log(error);
        }
     }

     const archiveToNoteHandler=async(id)=>{
        try{
           const response= await restoreNote(id,{token});
           if(response.status===200 || response.status===201)
           {
            noteDispatch({type:"ADD_NOTE",payload:response.data.notes});
            archiveDispatch({type:"ADD_TO_ARCHIVE", payload: response.data.archives});
           }
        }
        catch(error){
            console.log(error);
        }
     }

    

return (
    <div className="card note-card" style={{backgroundColor: backgroundColor}}>
      <header>
          <h3 className="note-card-title">{title}</h3>
      </header>
      <section className="note-body flex-col">
          <p>{body}</p>
          <p>Created At: {CreatedAt}</p>
      </section>
      <footer className="note-card-footer flex-row">
          <div className="note-card-icon" onClick={()=>deleteHandler(id)}><i class="far fa-trash-alt icon-sm"></i></div>
          <div className="note-card-icon" onClick={editHandler}><i class="fas fa-edit icon-sm"></i></div>
          {!archived?<div className="note-card-icon" onClick={()=>noteToArchiveHandler(id)}>
              <i class="bi bi-arrow-down-square-fill icon-sm"></i></div>:
          <div className="note-card-icon" onClick={()=>archiveToNoteHandler(id)}>
              <i class="bi bi-arrow-up-square-fill"></i></div>
        }
        
           
      </footer>
    </div>
);
}