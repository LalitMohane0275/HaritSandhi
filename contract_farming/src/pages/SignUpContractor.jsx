// src/pages/SignUpContractor.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignUpContractor = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [role, setRole] = useState("contractor");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Contractor sign up submitted");
  };

  const handleRoleChange = () => {
    setRole(role === "contractor" ? "farmer" : "contractor");
    navigate(role === "contractor" ? "/SignUpFarmer" : "/SignUpContractor");
  };

  const handleFormTypeChange = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthForm
      title={isSignUp ? "contractorsignup" : "contractorsignin"}
      buttonText={isSignUp ? "signUp" : "signIn"}
      isSignUp={isSignUp}
      handleSubmit={handleSignUp}
      onRoleChange={handleRoleChange}
      onFormTypeChange={handleFormTypeChange}
      role={role}
      backgroundImage={"/contractor.jpg"}
    />
  );
};

export default SignUpContractor;
