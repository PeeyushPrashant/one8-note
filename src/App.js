import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import {
  LandingPage,
  Login,
  SignUp,
  LogOut,
  Notes,
  Archive,
  Label,
  Trash,
  ProfilePage,
} from "./pages";
import { useTheme } from "./context/theme-context";
import { useData } from "./context/data-context";
import Loader from "./components/Loader/Loader";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const { theme } = useTheme();
  const { loader } = useData();
  return (
    <div className="App" data-theme={theme}>
      {loader && <Loader />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archives" element={<Archive />} />
        <Route path="/labels" element={<Label />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
