import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Correct import for Header component
import Home from "./pages/Home";
import About from "./pages/About";
import UploadResume from "./pages/UploadResume";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // Function to check and update admin route status
  const checkAdminRoute = () => {
    const path = window.location.pathname;
    // Add logic if needed
  };

  // Check route on component mount and route changes
  React.useEffect(() => {
    checkAdminRoute();
    window.addEventListener("popstate", checkAdminRoute);
    return () => window.removeEventListener("popstate", checkAdminRoute);
  }, []);

  return (
    <Router>
      <>
        <Header /> {/* Corrected usage of Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload-resume" element={<UploadResume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
