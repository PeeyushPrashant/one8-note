import "./App.css";
import logo from "./logo.png";
import { LandingPage, Login, SignUp, LogOut } from "./pages";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </div>
  );
}

export default App;
