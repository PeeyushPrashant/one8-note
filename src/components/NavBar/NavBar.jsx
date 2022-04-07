import  "./NavBar.css";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import { Filter } from "../Filter/Filter";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";

export const NavBar=()=>{
  const [sortFilter, setSortFilter]= useState(false);
  const {token,logOutHandler}= useAuth();
  const navigate= useNavigate();
  const {filterDispatch,sideBarHandler}= useData();
  const {theme,changeTheme}= useTheme();
  const sortFilterHandler=()=>{
    setSortFilter((curr)=>!curr);
  
  }
    return(
      <>
        <nav className="navbar flex-row">
          
          <div className="nav-heading flex-row"
          onClick={()=>navigate("/")}
          >
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
              filterDispatch({type:"FILTER", payload:["search",e.target.value]})
            }
          }}
          />
         <div className="filter-icon" onClick={sortFilterHandler}><i className="fas fa-filter icon-sm"></i></div>
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
          onClick={changeTheme}
          >
            {theme==="dark"?<i className="bi bi-brightness-high nav-icon"></i>:<i className="bi bi-moon-fill nav-icon"></i>}
          </div>
          <div className="saved-item flex-row"
          onClick={sideBarHandler}
          >
          <i class="fas fa-bars nav-icon hamburger"></i>
          </div>
        </div>
      </nav>
      <section className="mobile-search-cont">
       <div className="mobile-nav-search ">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="nav-input" placeholder="Type to search"
          onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.target.value === ''){
              filterDispatch({type:"FILTER", payload:["search",e.target.value]})
            }
          }}
          />
           <div className="filter-icon" onClick={sortFilterHandler}><i className="fas fa-filter icon-sm"></i></div>
        </div>
        </section>
        {sortFilter && <Filter closeFilter={sortFilterHandler}/>}
      </>
    );
}