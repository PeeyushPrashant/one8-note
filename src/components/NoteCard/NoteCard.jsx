import "./NoteCard.css"

export const NoteCard=({title,body,CreatedAt, editHandler,deleteHandler,backgroundColor})=>{
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
           <button className="btn note-card-btn edit-btn"
           onClick={editHandler}
           >Edit</button>
           <button className="btn note-card-btn del-btn"
           onClick={deleteHandler}
           >Delete</button>
      </footer>
    </div>
);
}