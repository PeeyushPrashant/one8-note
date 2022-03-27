import "./Aside.css"
export const Aside=()=>{
  return(
      <aside className="aside flex-col">
        <div className="aside-tab flex-row">
        <i className="fas fa-home icon-md"></i>
            <p className="aside-subhead">Home</p>
        </div>
        <div className="aside-tab flex-row">
        <i className="bi bi-tag-fill icon-md"></i>
            <p className="aside-subhead">Labels</p>
        </div>
        <div className="aside-tab flex-row">
        <i className="bi bi-archive icon-md"></i>
            <p className="aside-subhead">Archive</p>
        </div>
        <div className="aside-tab flex-row">
        <i className="far fa-trash-alt icon-md"></i>
            <p className="aside-subhead">Trash</p>
        </div>
        <div className="aside-tab flex-row">
        <i className="bi bi-person-circle icon-md"></i>
         <p className="aside-subhead">Profile</p>
        </div>
      </aside>
  );
}