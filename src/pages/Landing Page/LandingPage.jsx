import "./LandingPage.css"
import { NavBar } from "../../components";
export const LandingPage=()=>{
    return(
        <>
        <div className="landing-card">
          <NavBar/>
          <main className="main flex-row">
        <section className="left-main">
          <p className="head">
            Create, Organize & <span className="highlight-text">Share</span>
          </p>
          <p className="subhead">
            one8-Note provides the best way to organize your tasks , lists & reminders.
          </p>
          <div className="flex-row main-buttons">
            <button className="btn btn-primary start-btn">Get Started</button>
         </div>
        </section>
        <section className="right-main flex-row">
          <img
            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1648197484/Notes%20app/Other_13_hv8wky.png"
            alt="coding-image"
            className="landing-image"
          />
        </section>
      </main>
        </div>
        </>
    );
}