import StepCard from "./step-card";

export default function HowItWorks() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center my-16 sm:my-20 lg:my-30 px-4 sm:px-6 lg:px-8">
      {/* Central Circle - Mobile: left side, Desktop: center */}
      <div className="absolute z-10 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white border-2 border-green-600 rounded-full flex items-center justify-center left-6 sm:left-auto shadow-lg">
        <div className="text-center text-green-600 px-2">
          <div className="text-base sm:text-2xl lg:text-3xl font-bold leading-tight">
            How It
          </div>
          <div className="text-base sm:text-2xl lg:text-3xl font-bold leading-tight">
            Works
          </div>
        </div>
      </div>

      {/* Curved connecting lines - Hidden on mobile */}
      <svg
        className="absolute inset-0 w-full h-full hidden sm:block"
        viewBox="0 0 600 600"
      >
        {/* Outer ring */}
        <circle
          cx="300"
          cy="300"
          r="280"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
          strokeDasharray="10,5"
        />
        {/* Middle ring */}
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        />
        {/* Inner ring */}
        <circle
          cx="300"
          cy="300"
          r="160"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        />
      </svg>

      {/* Mobile Layout: Cards on the right with better spacing */}
      <div className="sm:hidden absolute right-0 top-0 w-2/3 h-full flex flex-col justify-center space-y-3 pr-2 animate-scroll-y">
        <StepCard
          stepNumber={1}
          title="Submit Your Manuscript"
          description="Upload your book or educational content in PDF, DOCX, or EPUB formats"
          position="mobile"
        />

        <StepCard
          stepNumber={2}
          title="Content Review & Approval"
          description="Our editorial team will review your work for quality and academic relevance"
          position="mobile"
        />

        <StepCard
          stepNumber={3}
          title="Choose Distribution Options"
          description="Decide whether to go digital, print, or both"
          position="mobile"
        />

        <StepCard
          stepNumber={4}
          title="Get Published & Go Live"
          description="Your content becomes available to thousands of learners instantly"
          position="mobile"
        />
      </div>

      {/* Desktop Layout: Original positioning with better spacing */}
      <div className="hidden sm:block">
        <StepCard
          stepNumber={1}
          title="Submit Your Manuscript"
          description="Upload your book or educational content in PDF, DOCX, or EPUB formats"
          position="left"
        />

        <StepCard
          stepNumber={2}
          title="Content Review & Approval"
          description="Our editorial team will review your work for quality and academic relevance"
          position="top"
        />

        <StepCard
          stepNumber={3}
          title="Choose Distribution Options"
          description="Decide whether to go digital, print, or both"
          position="right"
        />

        <StepCard
          stepNumber={4}
          title="Get Published & Go Live"
          description="Your content becomes available to thousands of learners instantly"
          position="bottom"
        />
      </div>
    </div>
  );
}
