import React, { useState } from 'react';

const RegistrationForm = () => {
  const steps = ["Personal Info", "Account Details", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Registration Complete!");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md md:max-w-3xl p-6 md:p-10 bg-white rounded-lg shadow-lg">
        {/* Progress Indicator */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full ${
                  index === currentStep ? 'bg-[#106C4F] text-white' : 'bg-gray-300 text-gray-500'
                } text-sm md:text-base`}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-gray-700 text-sm md:text-base">{step}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 0 && (
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-4">Personal Info</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm md:text-base">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
                  placeholder="john@example.com"
                />
              </div>
            </form>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-4">Account Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm md:text-base">Username</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
                  placeholder="username123"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm md:text-base">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
                  placeholder="••••••••"
                />
              </div>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-lg md:text-2xl font-semibold mb-4">Confirmation</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Please review your details and click "Submit" to complete your registration.
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#106C4F] text-white rounded transition duration-300 hover:bg-[#106C4F]"
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;