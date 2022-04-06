import "./Aside.css"
import { NavLink } from "react-router-dom";
import { useData } from "../../context/data-context";


export const Aside=()=>{
    const {sideBar, sideBarHandler}= useData();

    const getActiveStyle= ({isActive})=>({
        backgroundColor: isActive? "#0b77e4": ""
    })
  return(
      <aside className={sideBar? "showSide flex-col": "sideBar flex-col"}>
          <NavLink to="/notes"
          style={getActiveStyle}
          >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="fas fa-home icon-md"></i>
            <p className="aside-subhead">Home</p>
        </div>
        </NavLink>
        <NavLink to="/labels"
        style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="bi bi-tag-fill icon-md"></i>
            <p className="aside-subhead">Labels</p>
        </div>
        </NavLink>
        <NavLink to="/archives"
        style={getActiveStyle}
        >
        <div className="aside-tab flex-row"
        onClick={sideBarHandler}
        >
        <i className="bi bi-archive icon-md"></i>
            <p className="aside-subhead">Archive</p>
        </div>
        </NavLink>
        <NavLink to="/trash"
        style={getActiveStyle}
        >
        <div className="aside-tab flex-row">
        <i className="far fa-trash-alt icon-md"></i>
            <p className="aside-subhead">Trash</p>
        </div>
        </NavLink>
        <NavLink to=""
        >
        <div className="aside-tab flex-row">
        <i className="bi bi-person-circle icon-md"></i>
         <p className="aside-subhead">Profile</p>
        </div>
        </NavLink>
      </aside>
      
  );
}