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
          email: "adarshbalika@gmail.com",
          password: "adarshBalika123",
        });
        var response = await loginServices(
          "adarshbalika@gmail.com",
          "adarshBalika123"
        );
      } else var response = await loginServices(email, password);

      if (response.status === 201 || response.status === 200) {
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
      alert("Your account doesnot exist");
    }
  };

  const signUpHandler = async (e, { name, email, password }) => {
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

  const logOutHandler = () => {
    localStorage.removeItem("auth");
    setToken(undefined);
    setUser(undefined);
    navigate("/logout");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginHandler, signUpHandler, logOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
