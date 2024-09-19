import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex-grow bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-green-800 mb-8">
            {t("ourFeatures")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title={t("secureContracts")}
              description={t("secureContractsDesc")}
            />
            <FeatureCard
              title={t("transparentPayments")}
              description={t("transparentPaymentsDesc")}
            />
            <FeatureCard
              title={t("reliableMarketAccess")}
              description={t("reliableMarketAccessDesc")}
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-green-800 mb-8">
            {t("whatOurUsersSay")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <TestimonialCard
              quote={t("farmerTestimonial")}
              author={t("farmerName")}
            />
            <TestimonialCard
              quote={t("contractorTestimonial")}
              author={t("contractorName")}
            />
          </div>
        </div>

        {/* Continue As Section */}
        <div className="bg-green-400 bg-opacity-75 p-10 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t("continueAs")}</h2>
          <div className="flex justify-center gap-4">
            <button
              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-all w-40"
              onClick={() => navigate("/SignInContractor")}
            >
              {t("contractor")}
            </button>
            <button
              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-all w-40"
              onClick={() => navigate("/SignInFarmer")}
            >
              {t("farmer")}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 text-center">
        <p>&copy; 2024 Harit Sandhi. {t("allRightsReserved")}</p>
        <a
          href="mailto:contact@haritsandhi.com"
          className="text-blue-300 hover:text-blue-100"
        >
          {t("contactUs")}
        </a>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-green-700">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-gray-600">"{quote}"</p>
    <p className="mt-4 text-green-700 font-semibold">- {author}</p>
  </div>
);

export default Hero;
