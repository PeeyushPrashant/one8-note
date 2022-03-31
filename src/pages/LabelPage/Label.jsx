import "./Label.css";
import { NavBar,Aside,NoteCard } from "../../components"
import { useData } from "../../context/data-context";

export const Label=()=>{
    const {noteState,noteDispatch}= useData();
    const notesArray= noteState.noteData;
    const tags= notesArray.reduce((acc,curr)=>{
        return acc.concat(
             curr.tags.filter((item)=>{
                 return !acc.some((element)=>element===item || element==="")
             })
        )
    },[]);
   
  return (
      <div className="notes-page">
          <NavBar/>
          <main className="main-cont flex-row">
          <Aside/>
          <div className="sub-container flex-col">
              {tags.length> 0 && tags.map((item)=>{
                  const taggedItems=notesArray.filter((element)=>element.tags[0]===item);
                  return item===""?null:(
                      <>
                      <h2 className="tag-heading">{item}</h2>
                      <div className="tag-item-cont flex-row">
                       {taggedItems.map(({title,body,CreatedAt,_id,backGround,tag})=>{
                           return(
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
                      </>
                  );
              })}
          </div>
          </main>
      </div>
  )
}