import  "./NavBar.css";

export const NavBar=()=>{
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
         
        <div className="saved-item-container flex-row">
        <button className="btn btn-primary btn-login">Login</button>
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