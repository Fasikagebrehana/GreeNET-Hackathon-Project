import "./App.css";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import HomeNavbar from "./Components/HomeNavbar";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weekly from "./Components/Weekly";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <div className="app"> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as necessary */}
          <Route path="/homenav" element={<HomeNavbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/homepage" element={<Overview />} />
        </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
