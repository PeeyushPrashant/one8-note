import { NavBar,Aside,NoteCard } from "../../components"
import { useData } from "../../context/data-context"
import "./Archive.css"


export const Archive=()=>{
    const {archiveState}= useData();
    const archiveArray= archiveState.archiveData;
    return (
      <div className="notes-page">
          <NavBar/>
          <main className="main-cont flex-row">
              <Aside/>
              <div className="sub-container flex-row">
                 {archiveArray.map((note)=>{
                     return (
                         <NoteCard
                         key={note._id}
                         note={note}
                         />
                     );
                 })}
              </div>
          </main>
      </div>
    )
}