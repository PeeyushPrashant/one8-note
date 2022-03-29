import "./NoteCard.css"

export const NoteCard=({title,body,CreatedAt, editHandler,deleteHandler,backgroundColor,archiveHandler})=>{
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
          <div className="note-card-icon" onClick={deleteHandler}><i class="far fa-trash-alt icon-sm"></i></div>
          <div className="note-card-icon" onClick={editHandler}><i class="fas fa-edit icon-sm"></i></div>
          <div className="note-card-icon" onClick={archiveHandler}><i class="bi bi-arrow-down-square-fill icon-sm"></i></div>
           
      </footer>
    </div>
);
}