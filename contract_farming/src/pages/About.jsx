import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-green-50 min-h-screen pt-20 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-800 text-center mb-8">
          {t("aboutUs")}
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-200">
          <p className="text-lg text-green-700 mb-4">
            {t("welcomeText", { name: "Harit Sandhi" })}
          </p>
          <p className="text-lg text-green-700 mb-4">{t("missionText")}</p>
          <p className="text-lg text-green-700 mb-4">{t("featuresText")}</p>
          <p className="text-lg text-green-700">{t("thankYouText")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
