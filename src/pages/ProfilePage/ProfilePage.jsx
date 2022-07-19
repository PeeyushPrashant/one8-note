import "./ProfilePage.css"
import { NavBar } from "../../components"
import { Aside } from "../../components"
import { useAuth } from "../../context/auth-context"
import { useData } from "../../context/data-context"
import { useNavigate } from "react-router-dom"

export const ProfilePage=()=>{
    const {setLoader}= useData();
    const {user,setToken,setUser}= useAuth();
    const navigate = useNavigate();

    const logOutHandler = () => {
        localStorage.removeItem("auth");
        setLoader(true);
        setTimeout(()=>setLoader(false),1000);
        setToken(undefined);
        setUser(undefined);
        navigate("/");
      };

    return(
        <>
        <div className="notes-page">
            <NavBar/>
          <main className="main-cont flex-row">
              <Aside/>
              <div className="profile-container flex-row">
              <div className="card profile-card">
               <header className="flex-row">
                   <div className="header-tab">Profile</div>
               </header>
                <h3 className="profile-card-headings">Profile Details</h3>
               <section className="user-details flex-col">
                   <div className="user-data flex-row">
                       <h4 className="profile-card-headings">Name:</h4>
                       <p>{user.name}</p>
                   </div>
                   <div className=" user-data flex-row">
                       <h4 className="profile-card-headings">Email:</h4>
                       <p>{user.email}</p>
                   </div>
               </section>
               <h3 className="profile-card-headings">Account Settings</h3>
               <footer>
                   <button className="btn logout-btn"
                   onClick={logOutHandler}
                   >Log Out</button>
               </footer>
            </div>
              </div>
          </main>
        </div>
        </>
    )
}