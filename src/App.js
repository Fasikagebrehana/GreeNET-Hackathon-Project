import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import OTPLogin from "./Components/OTPLogin";
// require('dotenv').config()
function App() {
  
  return (
    <BrowserRouter>
    <GoogleOAuthProvider>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<LandingPage/>}></Route>
        <Route path ='/sign-in' exact element = {<SignIn />} ></Route>
        <Route path ='/sign-up' exact element = {<SignUp />} ></Route>
        <Route path="/otp-login" element={<OTPLogin />} />
      </Routes>
      <Footer />
    </div>
    </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
