import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import "./Auth.css"
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";


export const Login=()=>{
    const [loginForm,setLoginForm]= useState({email:"",password:""});
   
    const {loginHandler,token} = useAuth();
    const {setLoader}= useData();
    const navigate= useNavigate();
    
    useEffect(()=>{
      if(token){
        setLoader(true);
        setTimeout(()=>setLoader(false),1000)
      }
    },[token])


    return (
        <main className="main">
        <div className="auth-container flex-row">
          <div className="auth-card flex-col">
            <h1 className="auth-heading">Login</h1>
            <p>Please enter your valid email and password.</p>
            <div className="auth-input flex-row">
              <label for="" className="input-label"><strong>Email</strong></label>
              <input
                type="text"
                className="input-feild"
                value={loginForm.email}
                placeholder="Enter your email here"
                onChange={(e)=>setLoginForm({...loginForm,email:e.target.value})}
                required
              />
            </div>
            <div className="auth-input flex-row">
              <label for="" className="input-label"
                ><strong>Password</strong></label
              >
              <input
                type="password"
                className="input-feild"
                value={loginForm.password}
                placeholder="Enter your password"
                onChange={(e)=>setLoginForm({...loginForm,password:e.target.value})}
                required
              />
            </div>
            <button className="btn btn-secondary auth-btn" 
            onClick={(e)=>loginHandler(e,loginForm,setLoginForm)}
            >Login</button>
            <button className="btn btn-icon auth-btn"
            onClick={(e)=>loginHandler(e,loginForm,setLoginForm)}
            >Login with test credentials</button>
            <div className="auth-footer flex-row"
            onClick={()=>navigate("/signup")}
            >
              Create new account<i className="fas fa-angle-right icon-md"></i
              >
            </div>
          </div>
        </div>
      </main>
    );
}