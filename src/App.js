import "./App.css";
import logo from "./logo.png";
import { LandingPage, Login, SignUp, LogOut, Notes, Archive } from "./pages";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archives" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
