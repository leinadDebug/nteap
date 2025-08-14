export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4 sm:mb-6 text-center sm:text-left">
          Get Published
        </h1>

        {/* Mobile Button Stack */}
        <div className="flex sm:flex-row gap-3 sm:gap-0 mb-6 sm:mb-8">
          <button className="bg-green-500 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg sm:rounded text-sm sm:text-base font-medium transition-colors">
            Empower Learning
          </button>
          <button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg sm:rounded text-sm sm:text-base font-medium transition-colors sm:-mx-2">
            Share Knowledge
          </button>
          <button className="bg-green-900 hover:bg-green-800 text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg sm:rounded text-sm sm:text-base font-medium transition-colors">
            Inspire Students
          </button>
        </div>

        <p className="text-gray-700 max-w-3xl leading-relaxed text-sm sm:text-base text-center sm:text-left">
          Edulibrary invites authors, educators, researchers, and academic
          publishers to become part of a vibrant knowledge ecosystem. Whether
          you're a first-time author or an established academic, Edulibrary
          offers a seamless platform to publish and distribute your educational
          content to thousands of students and institutions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
        {/* Desktop Side Panel */}
        <div className="lg:flex flex-1/3 w-full lg:w-64 bg-[#F0FBF1] p-6 sm:p-8 hidden items-center justify-center rounded-t-[30%] lg:rounded-t-[20%]">
          <div className="text-center h-80 lg:h-96 flex items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 leading-tight">
              Why
              <br />
              Published
              <br />
              with us
            </h2>
          </div>
        </div>

        {/* Mobile Title */}
        <div className="block lg:hidden w-full bg-green-50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 text-center">
            Why Get Published with Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#81C784] font-bold text-sm sm:text-base">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Wide Reach Across Institutions
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Instantly connect with students, universities, and
                  professionals across Nigeria and beyond.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#81C784] font-bold text-sm sm:text-base">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Secure Connection Protection
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We protect your intellectual property with advanced DRM and
                  anti-piracy measures.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#81C784] font-bold text-sm sm:text-base">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Digital & Print Publishing Options
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Choose between digital publication for instant access and
                  print-on-demand services for physical distribution.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#81C784] font-bold text-sm sm:text-base">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Professional Support
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  From formatting to cover design and editing, our expert team
                  is here to support your publishing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
