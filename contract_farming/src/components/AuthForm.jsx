// src/components/AuthForm.js
import React from "react";
import { useTranslation } from "react-i18next";

const AuthForm = ({
  title,
  buttonText,
  isSignUp,
  handleSubmit,
  onRoleChange,
  onFormTypeChange,
  role,
  backgroundImage,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-800">
          {t(title)}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label
                className="block text-green-700 text-xl font-bold mb-2"
                htmlFor="name"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-green-700 text-xl font-bold mb-2"
              htmlFor="email"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-green-700 text-xl font-bold mb-2"
              htmlFor="password"
            >
              {t("password")}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-green-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 text-xl"
          >
            {t(buttonText)}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-green-800 mb-2">
            {t(role === "farmer" ? "notAFarmer" : "notAContractor")}
            <button
              onClick={onRoleChange}
              className="text-green-700 hover:text-green-700 underline ml-1"
            >
              {t(role === "farmer" ? "switchToContractor" : "switchToFarmer")}
            </button>
          </p>
          <p className="text-green-800">
            {t(isSignUp ? "alreadyHaveAccount" : "dontHaveAccount")}
            <button
              onClick={onFormTypeChange}
              className=" text-green-700 hover:text-green-700 underline ml-1"
            >
              {t(isSignUp ? "switchToSignIn" : "switchToSignUp")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
