import "./Aside.css"
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";


export const Aside=()=>{
    const {sideBar, sideBarHandler}= useData();
  return(
      <aside className={sideBar? "showSide flex-col": "sideBar flex-col"}>
          <Link to="/notes">
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="fas fa-home icon-md"></i>
            <p className="aside-subhead">Home</p>
        </div>
        </Link>
        <Link to="/labels">
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="bi bi-tag-fill icon-md"></i>
            <p className="aside-subhead">Labels</p>
        </div>
        </Link>
        <Link to="/archives">
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="bi bi-archive icon-md"></i>
            <p className="aside-subhead">Archive</p>
        </div>
        </Link>
        <Link to="/trash">
        <div className="aside-tab flex-row">
        <i className="far fa-trash-alt icon-md"></i>
            <p className="aside-subhead">Trash</p>
        </div>
        </Link>
        <Link to="">
        <div className="aside-tab flex-row">
        <i className="bi bi-person-circle icon-md"></i>
         <p className="aside-subhead">Profile</p>
        </div>
        </Link>
      </aside>
      
  );
}