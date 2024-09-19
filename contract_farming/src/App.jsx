import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Landing from "./pages/landing";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero.jsx";
import SignInFarmer from "./pages/SignInFarmer";
import SignUpFarmer from "./pages/SignUpFarmer";
import SignInContractor from "./pages/SignInContractor";
import SignUpContractor from "./pages/SignUpContractor";
import Home from "./pages/Home"; 
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar /> {/* This will appear on all routes */}
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignInFarmer" element={<SignInFarmer />} />
          <Route path="/SignUpFarmer" element={<SignUpFarmer />} />
          <Route path="/SignInContractor" element={<SignInContractor />} />
          <Route path="/SignUpContractor" element={<SignUpContractor />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
