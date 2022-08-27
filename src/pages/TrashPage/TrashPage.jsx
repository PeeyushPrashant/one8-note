import { NavBar,Aside,NoteCard } from "../../components"
import { useData } from "../../context/data-context"
import "./TrashPage.css";

export const Trash=()=>{
    const {trashState}= useData();
    const trashArray= trashState.trashData;
     return(
         <div className="notes-page">
             <NavBar/>
             <main className="main-cont flex-row">
             <Aside/>
             <div className="sub-container flex-row">
             {trashArray?.map((note)=>{
                 return (
                     <NoteCard
                     key={note._id}
                     note={note}
                     />
                 )
             })}
              </div>
             </main>
         </div>
     )
}