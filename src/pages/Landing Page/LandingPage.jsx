import "./LandingPage.css"
import { NavBar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useTheme } from "../../context/theme-context";
import { useData } from "../../context/data-context";
import { useEffect } from "react";
export const LandingPage=()=>{
  const navigate= useNavigate();
  const {token}= useAuth();
  const {theme}= useTheme();
  const {loader,setLoader}= useData();

   return(
        <>
        <div className="landing-card">
          <NavBar />
          <main className="main flex-row">
        <section className="left-main">
          <p className="head">
            Create, Organize & <span className="highlight-text">Share</span>
          </p>
          <p className="subhead">
            one8-Note provides the best way to organize your tasks , lists & reminders.
          </p>
          <div className="flex-row main-buttons">
            <button className="btn btn-primary start-btn"
            onClick={()=>!token?navigate("/login"):navigate("/notes")}
            >Get Started</button>
         </div>
        </section>
        <section className="right-main flex-row">
          <img
            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1649010122/Notes%20app/Other_13_hv8wky_ccexpress_fkcbd9.png"
            alt="coding-image"
            className="landing-image"
          />
        </section>
      </main>
        </div>
        </>
    );
}