// src/pages/SignInFarmer.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignInFarmer = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("farmer");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Farmer sign in submitted");
  };

  const handleRoleChange = () => {
    setRole(role === "farmer" ? "contractor" : "farmer");
    navigate(role === "farmer" ? "/SignInContractor" : "/SignInFarmer");
  };

  const handleFormTypeChange = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthForm
      title={isSignUp ? "farmersignup" : "farmersignin"}
      buttonText={isSignUp ? "signUp" : "signIn"}
      isSignUp={isSignUp}
      handleSubmit={handleSignIn}
      onRoleChange={handleRoleChange}
      onFormTypeChange={handleFormTypeChange}
      role={role}
      backgroundImage={"/farmer.jpeg"}
    />
  );
};

export default SignInFarmer;
