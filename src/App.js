import "./App.css";
import logo from "./logo.png";
import {
  LandingPage,
  Login,
  SignUp,
  LogOut,
  Notes,
  Archive,
  Label,
} from "./pages";
import { useTheme } from "./context/theme-context";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archives" element={<Archive />} />
        <Route path="/labels" element={<Label />} />
      </Routes>
    </div>
  );
}

export default App;
