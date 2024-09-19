import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  return (
    <div className="absolute h-16 w-full bg-green-600 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-b-lg flex items-center justify-between p-8 text-xl">
      <div className="w-52">
        <img
          className="w-full -ml-6"
          src="/logo.png"
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex items-center justify-between gap-7">
        <button
          className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
          onClick={() => navigate("/about")}
        >
          {t("aboutUs")}
        </button>
        <button
          className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer"
          onClick={toggleLanguage}
        >
          {i18n.language === "en" ? "हिंदी" : "English"}
        </button>
        <button
          className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
          onClick={() => navigate("/SignInFarmer")}
        >
          {i18n.language === "en" ? "Sign in" : "साइन इन"}
        </button>
        {/* <button 
          className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
        >
          {i18n.language === "en" ? "Sign out" : "साइन आउट"}
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
