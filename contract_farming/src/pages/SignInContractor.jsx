// src/pages/SignInContractor.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignInContractor = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("contractor");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Contractor sign in submitted");
  };

  const handleRoleChange = () => {
    setRole(role === "contractor" ? "farmer" : "contractor");
    navigate(role === "contractor" ? "/SignInFarmer" : "/SignInContractor");
  };

  const handleFormTypeChange = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthForm
      title={isSignUp ? "contractorsignup" : "contractorsignin"}
      buttonText={isSignUp ? "signUp" : "signIn"}
      isSignUp={isSignUp}
      handleSubmit={handleSignIn}
      onRoleChange={handleRoleChange}
      onFormTypeChange={handleFormTypeChange}
      role={role}
      backgroundImage={"/contractor.jpg"}
    />
  );
};

export default SignInContractor;
