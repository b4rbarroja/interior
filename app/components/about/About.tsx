import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#F7F4EF] text-[#222222] font-sans py-14 sm:py-20 md:py-32 px-6 md:px-12 border-t border-gray-200/60 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Architectural Heading & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center text-right">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-arch font-bold leading-tight text-[#222222] mb-6 md:mb-8">
              نهج معماري يجمع بين <br />
              <span className="text-[#6B5E51] font-normal block mt-2">
                الأصالة والهندسة المعاصرة
              </span>
            </h2>

            <p className="text-base md:text-xl text-gray-700 font-medium leading-relaxed mb-6">
              نحن استوديو تصميم معماري وداخلي متخصص في ابتكار المساحات التي تروي
              قصصاً وتصنع تجارب حسية فريدة. نؤمن بأن المعمار ليس مجرد جدران
              وأسقف، بل هو ترتيب متناغم للضوء، الظل، والخامات الطبيعية.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-10">
              تستند رؤيتنا على دمج التفاصيل التراثية الشرقية بأسلوب الحد الأدنى
              (Minimalism)، مما يمنح كل مشروع طابعاً يتجاوز حدود الزمن ويحقق
              الراحة الوظيفية اليومية بأعلى معايير الدقة.
            </p>

            {/* Core Stats Bar - Horizontal on Mobile */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-gray-300/70 mb-8 md:mb-10 text-center sm:text-right">
              <div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-arch font-bold text-[#222222]">
                  +١٠
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium leading-tight">
                  سنوات من الخبرة
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-arch font-bold text-[#222222]">
                  +٨٥
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium leading-tight">
                  مشروعاً مكتظاً بالتفاصيل
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-arch font-bold text-[#222222]">
                  ١٠٠٪
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium leading-tight">
                  حلول معمارية مخصصة
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#222222] text-white px-6 sm:px-8 py-4 min-h-[48px] rounded-full text-base font-bold hover:bg-black transition-all shadow-md hover:shadow-lg"
              >
                <span>تعرّف على استوديوهاتنا</span>
                <svg
                  className="w-5 h-5 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Arch Image Display */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md h-[480px] md:h-[580px]">
              {/* Main Curved Image Container */}
              <div className="w-full h-full rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                <img
                  src="/hero/6.jpg"
                  alt="استوديو التصميم المعماري"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Geometric Sub-Card */}
              <div className="absolute -bottom-6 -right-6 md:-left-8 md:right-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[220px]">
                <p className="font-arch font-bold text-lg text-[#222222] mb-1">
                  الدقة والتوازن
                </p>
                <p className="text-xs text-gray-500 leading-normal">
                  اختيار الخامات الطبيعية وإعادة صياغة المساحة بأسلوب ذكي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
