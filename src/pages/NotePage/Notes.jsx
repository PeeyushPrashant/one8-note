import "./Notes.css"
import { NavBar, Aside } from "../../components"
import { useState } from "react";


export const Notes=()=>{
const [noteCard,setNoteCard] = useState(false);
const expandCard=()=>{
    setNoteCard(true);
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
                       <input type="text" className="note-title" placeholder="Title"/>
                       <p><i className="bi bi-pin-fill icon-md pin-icon"></i></p>
                   </header>}
                   <section>
                       <textarea onClick={expandCard} className="note-text" placeholder="Take a Note"></textarea>
                   </section>
                   {noteCard && <footer className="flex-row">
                        <button className="add-note-btn btn">Add</button>
                   </footer>}
               </div>
            </section>
        </div>
    </main>
    </div>
);
}