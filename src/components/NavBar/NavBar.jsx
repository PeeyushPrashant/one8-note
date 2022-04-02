import  "./NavBar.css";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";

export const NavBar=()=>{
  const {token,logOutHandler}= useAuth();
  const navigate= useNavigate();
  const {filterDispatch,sideBarHandler}= useData();
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
        {!token?
        <div className="saved-item flex-row"
        onClick={()=>navigate("/login")}>
        <i class="fas fa-sign-in-alt  nav-icon"></i>
        </div>:
        <div className="saved-item flex-row"
        onClick={logOutHandler}
        >
          <i class="fas fa-sign-out-alt  nav-icon"></i>
          </div>}
          <div className="saved-item flex-row">
            <a href="https://github.com/PeeyushPrashant" target="_blank">
          <i className="fab fa-github  nav-icon"></i>
          </a>
          </div>
          <div className="saved-item flex-row">
            <a href="https://twitter.com/PrashantPeeyush" target="_blank">
          <i className="fab fa-twitter  nav-icon"></i>
          </a>
          </div>
          <div className="saved-item flex-row"
          onClick={sideBarHandler}
          >
          <i class="fas fa-bars nav-icon hamburger"></i>
          </div>
        </div>
      </nav>
    );
}