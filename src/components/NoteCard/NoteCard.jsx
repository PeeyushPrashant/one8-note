import "./NoteCard.css"
import { archiveNote,deleteTrash,restoreNote,deleteArchive,trashNote,trashToNote } from "../../services/Services";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NoteCard=({editHandler,note})=>{

    const sampleLocation = useLocation();
    const path= sampleLocation.pathname;
    const {noteState,noteDispatch,archiveState,archiveDispatch,trashState,trashDispatch}=useData();
    const {token}= useAuth();
    const {title,body,CreatedAt,backGround,_id,tag,actualTime}=note;
    const archived= archiveState.archiveData.some((ele)=>ele._id===_id);
    const trashed= trashState.trashData.some((ele)=>ele._id===_id);

    const removeFromTrash=async (id)=>{
        try{
            const response= await deleteTrash(id,{token});
                if(response.status===200 || response.status===201)
                  {
                  trashDispatch({type:"ADD_TO_TRASH",payload:response.data.trash})
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

     const noteToTrashHandler=async (id)=>{
         try{
             if(!archived){
                const response= await trashNote(id,{note,token});
                if(response.status===200 || response.status===201)
                {
                   noteDispatch({type:"ADD_NOTE",payload:response.data.notes});
                   trashDispatch({type:"ADD_TO_TRASH", payload: response.data.trash});
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
         catch (error){
             console.log(error);
         }
     }

     const trashToNoteHnadler= async(id)=>{
         try{
               const response= await trashToNote(id, {token});
               if(response.status===200 || response.status===201)
           {
            noteDispatch({type:"ADD_NOTE",payload:response.data.notes});
            trashDispatch({type:"ADD_TO_TRASH", payload: response.data.trash});
           }
         }
         catch (error){
             console.log(error);
         }
     }
    

return (
    <div className="card note-card" style={{backgroundColor: backGround}}>
      <header>
          <h3 className="note-card-title">{title}</h3>
      </header>
      <section className="note-body flex-col">
          <p>{body}</p>
          <p>Created At: {CreatedAt}</p>
          <p>{actualTime}</p>
      </section>
      {tag && <section><p className="tag">{tag}</p></section>}
      <footer className="note-card-footer flex-row">
          {trashed && <div className="note-card-icon" onClick={()=>trashToNoteHnadler(_id)}><i class="fas fa-redo-alt icon-sm"></i></div>}
          {!trashed? <div className="note-card-icon" onClick={()=>noteToTrashHandler(_id)}><i class="far fa-trash-alt icon-sm"></i></div>:
          <div className="note-card-icon" onClick={()=>removeFromTrash(_id)}><i class="far fa-trash-alt icon-sm"></i></div>
          }
        
          {(path==="/notes") && <div className="note-card-icon" onClick={editHandler}><i class="fas fa-edit icon-sm"></i></div>}
          {!trashed && (!archived?<div className="note-card-icon" onClick={()=>noteToArchiveHandler(_id)}>
              <i class="bi bi-arrow-down-square-fill icon-sm"></i></div>:
          <div className="note-card-icon" onClick={()=>archiveToNoteHandler(_id)}>
              <i class="bi bi-arrow-up-square-fill"></i></div>)}
      </footer>
    </div>
);
}