import "./Aside.css"
import { useNavigate } from "react-router-dom";


export const Aside=()=>{
    const navigate= useNavigate();
  return(
      <aside className="aside flex-col">
        <div className="aside-tab flex-row"
        
        onClick={()=>navigate("/notes")}
        >
        <i className="fas fa-home icon-md"></i>
            <p className="aside-subhead">Home</p>
        </div>
        <div className="aside-tab flex-row"
        onClick={()=>navigate("/labels")}
        >
        <i className="bi bi-tag-fill icon-md"></i>
            <p className="aside-subhead">Labels</p>
        </div>
        <div className="aside-tab flex-row"
       
         onClick={()=>navigate("/archives")}
        >
        <i className="bi bi-archive icon-md"></i>
            <p className="aside-subhead">Archive</p>
        </div>
        <div className="aside-tab flex-row"
        
        >
        <i className="far fa-trash-alt icon-md"></i>
            <p className="aside-subhead">Trash</p>
        </div>
        <div className="aside-tab flex-row"
        
        >
        <i className="bi bi-person-circle icon-md"></i>
         <p className="aside-subhead">Profile</p>
        </div>
      </aside>
  );
}