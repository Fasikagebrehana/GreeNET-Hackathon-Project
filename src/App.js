import "./App.css";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
