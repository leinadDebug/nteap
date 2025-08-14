import Footer from "../components/Footer";
import Header from "../components/Header";

const Questions = {
  section1: [
    {
      question: "What is NTEAP?",
      answer:
        "NTEAP is a modern academic book platform designed to give university students and educators easy, affordable, and flexible access to a wide range of educational books. From textbooks to research papers, lecture notes, and scholarly works, EduLibrary brings the academic resources you need right to your fingertips.",
    },
    {
      question: "Is NTEAP free to use?",
      answer:
        "NTEAP is free to explore, but books on the platform must be purchased to access",
    },
    {
      question: "How do I purchase physical books?",
      answer:
        "Select a book on the Browse Books or Subjects page, add to cart, enter your delivery details, and complete payment. Your book will be delivered to your doorstep.",
    },
  ],
  section2: [
    {
      question: "How do I publish a book?",
      answer:
        "Create an account, go to the “Get Published” page, upload your manuscript and submit. Our team will review and publish it once approved",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery within Nigeria takes 3–7 business days. Times may vary based on your location",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes! Once your order is confirmed, you’ll receive a tracking link via email or SMS to monitor delivery status.",
    },
  ],
};
const { section1, section2 } = Questions;

export default function Support() {
  return (
    <div className="bg-white">
      <Header />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-green-600 mb-6">
            Frequently Asked Questions (FAQs)
          </h1>

          <div className="flex-cols sm:flex gap-4 md:gap-10 items-center my-16">
            <div className="lg:flex-col flex-1/2 space-y-4 items-center justify-center flex-wrap">
              {section1.map((Element, index: number) => (
                <div className="space-y-3" key={index}>
                  <div className="flex items-center gap-3.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex flex-shrink-0"></div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {Element.question}
                    </h3>
                  </div>
                  <p className="text-gray-600">{Element.answer}</p>
                </div>
              ))}
            </div>
            <div className="lg:flex-col flex-1/2 space-y-4 items-center justify-center">
              {section2.map((Element, index: number) => (
                <div className="space-y-3" key={index}>
                  <div className="flex items-center gap-3.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex flex-shrink-0"></div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {Element.question}
                    </h3>
                  </div>
                  <p className="text-gray-600">{Element.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*Need help Section */}
      <div className="bg-green-700 p-12">
        <div className="flex flex-col sm:flex-row gap-10 mx-auto max-w-7xl">
          <div className="bg-green-600 text-white  p-12 rounded-xl flex-1/2 flex flex-col text-left justify-center relative">
            <h2 className="text-3xl font-bold mb-8">
              Need Help With Something Else?
            </h2>
            <p>
              If you can’t find what you’re looking for, we’ve got you covered.
            </p>

            <button className="rounded-full w-12 h-12 absolute -right-5 text-white bg-[#66d6698f] hover:bg-green-400 transition-all">
              {">"}
            </button>
          </div>
          {/*second flex */}
          <div className="text-white space-y-4 flex-1/2 ">
            <div>
              <h2 className="text-xl text-green-400 font-bold mb-2">
                Live Chat Support
              </h2>
              <div className="border-l-4 border-green-400 leading-tight font-light tracking-normal pl-5">
                <p>Chat with one of our support agents in real-time.</p>
                <p>Available Monday to Friday, 9:00 AM – 6:00 PM (WAT)</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl text-green-400 font-bold mb-2">
                Live Chat Support
              </h2>
              <div className="border-l-4 border-green-400 leading-tight font-light tracking-normal pl-5">
                <p>Chat with one of our support agents in real-time.</p>
                <p>Available Monday to Friday, 9:00 AM – 6:00 PM (WAT)</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl text-green-400 font-bold mb-2">
                Live Chat Support
              </h2>
              <div className="border-l-4 border-green-400 leading-tight font-light tracking-normal pl-5">
                <p>Chat with one of our support agents in real-time.</p>
                <p>Available Monday to Friday, 9:00 AM – 6:00 PM (WAT)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center p-6 md:p-12">
        {/* Student Help Center */}
        <div className="text-black shadow-2xl p-6 rounded-2xl space-y-4 w-full md:max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
            <span className="text-green-600">NTEAP</span> Help Center{" "}
            <br className="hidden md:block" /> for Students
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Guides on how to use NTEAP tools, access downloads, and personalize
            your experience.
          </p>
          <button className="shadow bg-green-600 rounded-full text-white py-2 px-6 hover:bg-green-700 transition-colors">
            Visit Student Help Center <span>{">"}</span>
          </button>
        </div>

        {/* Author Help Center */}
        <div className="text-black shadow-2xl p-6 rounded-2xl space-y-4 w-full md:max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
            <span className="text-green-600">NTEAP</span> Author{" "}
            <br className="hidden md:block" /> Help Center
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Resources, guidelines, and publishing tips for academic authors and
            contributors.
          </p>
          <button className="shadow bg-green-600 rounded-full text-white py-2 px-6 hover:bg-green-700 transition-colors">
            Visit Author Help Center <span>{">"}</span>
          </button>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="px-6 md:px-12 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-green-500 to-green-900 flex flex-col md:flex-row text-white max-w-6xl mx-auto p-8 md:p-12 items-center md:justify-between gap-6 md:gap-0 text-center md:text-left">
          <p className="leading-6 text-sm md:text-lg">
            Your privacy is important to us. <br className="hidden md:block" />
            Learn how we handle your data & <br className="hidden md:block" />
            keep your information safe.
          </p>
          <button className="shadow bg-green-300 text-green-900 rounded-full py-2 px-6 hover:bg-green-200 transition-colors">
            Read our Privacy Policy
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
