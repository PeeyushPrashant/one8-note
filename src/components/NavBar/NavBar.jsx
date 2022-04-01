import  "./NavBar.css";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";

export const NavBar=()=>{
  const {token,logOutHandler}= useAuth();
  const navigate= useNavigate();
  const {filterDispatch}= useData();
    return(
        <nav className="navbar flex-row">
          
          <div className="nav-heading flex-row">
            <img
              src="https://res.cloudinary.com/doohtm4bs/image/upload/v1648196922/Notes%20app/one8_sppttb.png"
              alt="one8 logo"
              className="nav-logo"
            />
            <small className="nav-heading-small">Note</small>
          </div>
          <div className="nav-search flex-row">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="nav-input" placeholder="Type to search"
          onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.target.value === ''){
              filterDispatch({type:"SEARCH_FILTER", payload:["search",e.target.value]})
            }
          }}
          />
        </div>
        <div className="saved-item-container flex-row">
        {!token?<button className="btn btn-primary btn-login"
        onClick={()=>navigate("/login")}
        >Login</button>:
        <button className="btn btn-primary btn-login"
        onClick={logOutHandler}
        >Logout</button>}
          <div className="saved-item flex-row">
          <i className="fab fa-github icon-md nav-icon"></i>
          </div>
          <div className="saved-item flex-row">
          <i className="fab fa-twitter icon-md nav-icon"></i>
          </div>
          
        </div>
      </nav>
    );
}