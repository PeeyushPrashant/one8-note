import "./Label.css";
import { NavBar,Aside,NoteCard } from "../../components"
import { useData } from "../../context/data-context";
import { useEffect } from "react";

export const Label=()=>{
    const {noteState,noteDispatch}= useData();
    const notesArray= noteState.noteData;

    // console.log(notesArray);
    // var tags;
    
    //   useEffect(()=>{
    //       console.log(1);
         const tags= notesArray.reduce((acc,curr)=>{
            return acc.concat(
                 curr.tags.filter((item)=>{
                     return !acc.some((element)=>element===item || element==="")
                 })
            )
        },[]);
//       },[noteState,notesArray])
         
//    console.log(tags);
    

   
  return (
      <div className="notes-page">
          <NavBar/>
          <main className="main-cont flex-row">
          <Aside/>
          <div className="sub-container flex-col">
              {tags?.length> 0 && tags.map((item,index)=>{
                  const taggedItems=notesArray.filter((element)=>element.tags[0]===item);
                  return item===""?null:(
                      <div className="label-container flex-col" key={index}>
                      <h2 className="tag-heading">{item}</h2>
                      <div className="tag-item-cont flex-row">
                       {taggedItems.map((note)=>{
                           return(
                           <NoteCard
                           key={note._id}
                           note={note}
                           />
                           );
                       })}

                      </div>
                      </div>
                  );
              })}
          </div>
          </main>
      </div>
  )
}