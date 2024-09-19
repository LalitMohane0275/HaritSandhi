import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src="/farm.jpg"
          alt="farm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            {t("welcomeToHaritSandhi")}
          </h1>
        </div>
      </div>
      <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        {i18n.language === "en" ? "हिंदी" : "English"}
      </button>
      <Hero />
    </div>
  );
};

export default Landing;
