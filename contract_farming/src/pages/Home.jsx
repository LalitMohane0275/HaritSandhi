// src/pages/Home.jsx
import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Navbar */}
      <NavBar />
      {/* Main Content Wrapper */}
      <div className="pt-16"> {/* Adjust pt value to match the height of the Navbar */}
        {/* Features Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Our Features</h2>
            <div className="mt-8 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">Secure Contracts</h3>
                <p className="mt-4 text-gray-600">Easily create and manage secure contracts with trusted partners.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">Transparent Payments</h3>
                <p className="mt-4 text-gray-600">Ensure timely and transparent payments for your produce.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">Reliable Market Access</h3>
                <p className="mt-4 text-gray-600">Access a reliable market for your crops with our platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">What Our Users Say</h2>
            <div className="mt-8 flex flex-col items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-gray-600">
                  "FarmConnect has been a game changer for my farm. The secure contracts and timely payments have made managing my produce so much easier!"
                </p>
                <p className="mt-4 text-gray-800 font-semibold">- Jane Doe, Farmer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-md">
                <p className="text-gray-600">
                  "As a contractor, finding reliable farmers through FarmConnect has been incredibly smooth. The platform is user-friendly and efficient."
                </p>
                <p className="mt-4 text-gray-800 font-semibold">- John Smith, Contractor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 FarmConnect. All rights reserved.</p>
          <p>
            <a href="mailto:contact@farmconnect.com" className="text-blue-400 hover:text-blue-600">Contact Us</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
