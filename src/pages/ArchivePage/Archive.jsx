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
                 {archiveArray.map(({title,body,CreatedAt,_id,backGround,tag})=>{
                     return (
                         <NoteCard
                         key={_id}
                        id={_id}
                      title={title}
                      body={body}
                      tag={tag}
                      CreatedAt={CreatedAt}
                      backgroundColor={backGround}
                         />
                     );
                 })}
              </div>
          </main>
      </div>
    )
}