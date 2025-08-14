import Link from "next/link";
import DotGrid from "./dot-grid";

export default function ReadyToGetStarted() {
  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6">
      {/* Background dots - left side */}
      <div className="absolute left-0 top-0 h-full w-6 flex flex-col gap-2 py-4 opacity-50">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-green-700/40"></div>
        ))}
      </div>

      {/* Background dots - right side */}
      <div className="absolute right-0 top-1/2 h-full w-6 flex flex-col gap-2 py-4 -translate-y-1/2 opacity-60">
        <DotGrid rows={6} cols={2} dotSize={8} gap={4} color="bg-green-800" />
      </div>

      {/* Main Card */}
      <div className="bg-green-400 rounded-2xl shadow-xl overflow-hidden relative z-10">
        {/* Top CTA section */}
        <div className="bg-[#81C784] px-6 sm:px-10 py-8 sm:py-12 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-white text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Join a growing community of academic authors shaping the future of
            education in Africa.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              href="#"
              className="inline-block bg-white hover:bg-white/90 text-green-700 text-sm sm:text-lg font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-200"
            >
              Submit your Manuscript Now
            </Link>
          </div>
        </div>

        {/* Bottom Contact section */}
        <div className="bg-green-700 px-4 sm:px-6 py-4 sm:py-6 text-center">
          <p className="text-white text-sm sm:text-base">
            Need more information? Reach out to our publishing team at{" "}
            <Link
              href="mailto:publishing@nteap.com"
              className="text-green-300 hover:underline"
            >
              publishing@nteap.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
