import { createContext, useContext, useState } from "react";
import { loginServices, signUpServices } from "../services/Services";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("auth"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [user, setUser] = useState(localStorageToken?.user);
  const navigate = useNavigate();

  const loginHandler = async (e, { email, password }, setLoginForm) => {
    try {
      if (e.target.innerText === "Login with test credentials") {
        setLoginForm({
          email: "prashantpeeyush@gmail.com",
          password: "prashant123",
        });
        var response = await loginServices(
          "prashantpeeyush@gmail.com",
          "prashant123"
        );
      } else var response = await loginServices(email, password);
      if (response.status === 201 || response.status === 200) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        setToken(response.data.encodedToken);
        setUser(response.data.foundUser);
        navigate("/");
      }
    } catch (error) {
      alert("Your account doesnot exist");
    }
  };

  const signUpHandler = async ({ name, email, password }, setSignUpForm) => {
    try {
      if (name && email && password !== "")
        var response = await signUpServices(name, email, password);
      if (response.status === 201) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.createdUser,
          })
        );
        setToken(response.data.encodedToken);
        setUser(response.data.createdUser);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginHandler, signUpHandler, setToken, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
