import React from "react";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import HomeNavbar from "./Components/HomeNavbar";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/Overview";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Weekly from "./Components/Weekly";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/sign-in" />;
}

function HomePageLayout() {
  return (
    <>
      <HomeNavbar />
      {/* <Sidebar /> */}
      <Overview />
    </>
  );
}

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="App">
      <Router>
        {!isAuthenticated && <NavBar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <HomePageLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
