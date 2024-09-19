// src/pages/SignUpFarmer.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignUpFarmer = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [role, setRole] = useState("farmer");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign up submitted");
  };

  const handleRoleChange = () => {
    setRole(role === "farmer" ? "contractor" : "farmer");
    navigate(role === "farmer" ? "/SignUpContractor" : "/SignUpFarmer");
  };

  const handleFormTypeChange = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthForm
      title={isSignUp ? "farmersignup" : "farmersignin"}
      buttonText={isSignUp ? "signUp" : "signIn"}
      isSignUp={isSignUp}
      handleSubmit={handleSignUp}
      onRoleChange={handleRoleChange}
      onFormTypeChange={handleFormTypeChange}
      role={role}
      backgroundImage={"/farmer.jpeg"}
    />
  );
};

export default SignUpFarmer;
