import "./LandingPage.css"
import { NavBar } from "../../components";
export const LandingPage=()=>{
    return(
        <>
        <div className="landing-card">
          <NavBar/>
          <main class="main flex-row">
        <section class="left-main">
          <p class="head">
            Create, Organize & <span class="highlight-text">Share</span>
          </p>
          <p class="subhead">
            one8-Note provides the best way to organize your tasks , lists & reminders.
          </p>
          <div class="flex-row main-buttons">
            <button class="btn btn-primary start-btn">Get Started</button>
         </div>
        </section>
        <section class="right-main flex-row">
          <img
            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1648197484/Notes%20app/Other_13_hv8wky.png"
            alt="coding-image"
            class="landing-image"
          />
        </section>
      </main>
        </div>
        </>
    );
}