import Image from "next/image";
import office1 from "../img/office1.jpg";
import office2 from "../img/office2.jpg";

export default function WhoCanPublish() {
  return (
    <>
      {/* 2x2 Grid Layout - Mobile: 1 column, SM+: 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {/* Top Left - Who Can Publish Image */}
        <div className="relative">
          <div className="w-full h-48 sm:h-full sm:min-h-[300px] relative">
            <Image
              src={office1}
              alt="People collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Top Right - Who Can Publish Content */}
        <div className="bg-green-600 text-white p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
            Who Can Publish
          </h2>
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                University Lecturers & Researchers
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Academic Authors & Independent Writers
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Institutions with Educational Materials
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Subject Matter Experts
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Postgraduate Students with Scholarly Work
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom Left - What You Can Publish Content */}
        <div className="bg-green-600 text-white p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
            What You Can Publish
          </h2>
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Textbooks
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Lectures Notes
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Academic Research Papers
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Study Guides
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Exam Preparation Materials
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Technical Manuals
              </span>
            </li>
            <li className="flex items-start gap-4 group hover:bg-green-700/50 p-2 -m-2 rounded-lg transition-all duration-200">
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed group-hover:text-green-100 transition-colors duration-200">
                Educational Workbooks
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom Right - What You Can Publish Image */}
        <div className="relative">
          <div className="w-full h-48 sm:h-full sm:min-h-[300px] relative">
            <Image
              src={office2}
              alt="People collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
