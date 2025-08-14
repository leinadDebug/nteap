import { useState } from "react";

export function LibrarianRegistrationFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const interests = [
    "Mathematics",
    "Accounting",
    "Biology",
    "English Language",
    "Physics",
    "Chemistry",
    "History",
    "Geography",
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  if (showSuccess) {
    return <SuccessPage />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="p-6 shadow-md">
        <h1 className="text-2xl font-bold text-green-600">NTEAP</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            {/* Greeting */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-green-500">
                <span className="text-green-700 italic">Hi, </span>
                Manny
              </h2>
              <p className="text-gray-700">
                Continue your account creation{" "}
                <span className="text-green-600">As a Librarian</span> by
                filling the form below
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mb-8 space-y-4">
              {/* Academic Details */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    currentStep >= 1 ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  {currentStep > 1 ? (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-white text-sm">1</span>
                  )}
                </div>
                <span
                  className={`font-semibold ${
                    currentStep === 1
                      ? "text-green-600"
                      : currentStep > 1
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  Academic Details
                </span>
              </div>
              {/* Step Content */}
              {currentStep === 1 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      University / Institution Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your University / Institution Name"
                      className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Faculty
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your faculty"
                        className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your department"
                        className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Level of Study
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your faculty"
                      className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-medium text-sm shadow-md"
                  >
                    Continue to Location
                  </button>
                </div>
              )}

              {/* Location */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    currentStep >= 2 ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  {currentStep > 2 ? (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-white text-sm">2</span>
                  )}
                </div>
                <span
                  className={`font-semibold ${
                    currentStep === 2
                      ? "text-green-600"
                      : currentStep > 2
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  Location
                </span>
              </div>
              {currentStep === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Select your Nationality"
                      className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State / Province
                      </label>
                      <input
                        type="text"
                        placeholder="Select your state"
                        className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Select your city"
                        className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      placeholder="Select your Nationality"
                      className="w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-medium text-sm shadow-md"
                  >
                    Continue to Profile
                  </button>
                </div>
              )}

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    currentStep >= 3 ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span className="text-white text-sm">3</span>
                </div>
                <span
                  className={`font-semibold ${
                    currentStep === 3 ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  Profile
                </span>
              </div>
            </div>

            {currentStep === 3 && (
              <div className="space-y-3">
                {/* Public Profile */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Public Profile
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Add an image of yourself. This will be displayed on your
                    profile.
                  </p>
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-2 border-dashed border-green-300">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Interests
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Select two or more areas of subjects of your studies
                  </p>
                  <div className="flex flex-wrap gap-2 border border-white rounded-lg bg-transparent p-4">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedInterests.includes(interest)
                            ? "bg-green-700 text-white text-xs"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowSuccess(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-medium text-sm shadow-md"
                >
                  Complete Registration
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center">
            {currentStep === 1 && (
              <div className="w-full max-w-md">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* University Building */}
                  <rect
                    x="50"
                    y="150"
                    width="300"
                    height="120"
                    fill="#E67E22"
                  />
                  <rect x="70" y="170" width="40" height="60" fill="#3498DB" />
                  <rect x="130" y="170" width="40" height="60" fill="#3498DB" />
                  <rect x="190" y="170" width="40" height="60" fill="#3498DB" />
                  <rect x="250" y="170" width="40" height="60" fill="#3498DB" />
                  <rect x="310" y="170" width="40" height="60" fill="#3498DB" />
                  <rect x="170" y="120" width="60" height="80" fill="#8B4513" />
                  <circle cx="200" cy="140" r="15" fill="#F39C12" />
                  <polygon points="150,120 200,80 250,120" fill="#C0392B" />
                  <rect x="190" y="240" width="20" height="30" fill="#8B4513" />
                  <circle cx="350" cy="200" r="30" fill="#27AE60" />
                  <rect x="345" y="190" width="10" height="20" fill="#8B4513" />
                </svg>
              </div>
            )}

            {currentStep === 2 && (
              <div className="w-full max-w-md">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* Map with Location Pin */}
                  <rect
                    x="50"
                    y="100"
                    width="300"
                    height="150"
                    fill="#ECF0F1"
                    stroke="#BDC3C7"
                    strokeWidth="2"
                  />
                  <path
                    d="M80 120 Q150 140 220 130 T320 140"
                    stroke="#E74C3C"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M100 180 Q180 160 260 170 T340 160"
                    stroke="#E74C3C"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="200" cy="150" r="25" fill="#E74C3C" />
                  <path
                    d="M200 125 Q185 140 200 160 Q215 140 200 125"
                    fill="#C0392B"
                  />
                  <circle cx="200" cy="140" r="8" fill="white" />
                </svg>
              </div>
            )}

            {currentStep === 3 && (
              <div className="w-full max-w-md">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* Person Avatar */}
                  <circle cx="200" cy="120" r="50" fill="#F4D03F" />
                  <circle cx="200" cy="100" r="30" fill="#D2691E" />
                  <rect
                    x="150"
                    y="170"
                    width="100"
                    height="80"
                    fill="#17A2B8"
                    rx="10"
                  />
                  <rect x="140" y="180" width="120" height="15" fill="white" />
                  <circle cx="185" cy="110" r="3" fill="#2C3E50" />
                  <circle cx="215" cy="110" r="3" fill="#2C3E50" />
                  <path
                    d="M190 125 Q200 135 210 125"
                    stroke="#2C3E50"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="p-6 shadow-md">
        <h1 className="text-2xl font-bold text-green-600">NTEAP</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl m-auto px-6 py-12 text-center shadow-xl shadow-green-100 rounded-lg mt-20">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-200 border-2 border-green-600  rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Account Successfully Created!
        </h2>
        <p className="text-gray-700 font-semibold">
          Your librarian account has been set up successfully.
        </p>
        <p className="text-gray-600 mb-8 text-pretty text-sm">
          A confirmation email has been sent to your registered email address.
          <br />
          Please check your inbox (and spam folder) to verify your email.
        </p>

        {/* Action Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-medium text-sm w-full shadow-md">
          Proceed to Dashboard
        </button>
      </div>
    </div>
  );
}
