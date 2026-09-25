"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  projectType: string;
  comment: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "م. خالد السلمان",
    role: "مالك مشروع",
    location: "الرياض، السعودية",
    projectType: "تصميم فيلا سكنية فاخرة",
    comment:
      "الدقة والتفاصيل التي قُدمت في المخططات وفهمهم لاحتياجاتنا جعلت تجربة بناء الفيلا أسهل بكثير مما توقعنا. التزام ممتاز بالوقت وجودة معمارية تبهر كل من يزور المكان.",
    rating: 5,
  },
  {
    id: 2,
    name: "أحمد المحمدي",
    role: "المؤسس والرئيس التنفيذي",
    location: "جدة، السعودية",
    projectType: "تصميم كافيه ومقهى متخصص",
    comment:
      "نجح الفريق في تحويل هويتنا إلى واقع معماري يعكس مفهوم المينيماليزم العصري. توزيع المساحات وتصميم الإضاءة أضافا قيمة استثمارية ضخمة للمشروع.",
    rating: 5,
  },
  {
    id: 3,
    name: "سارة الظاهري",
    role: "مالكة عقار",
    location: "دبي، الإمارات",
    projectType: "تصميم داخلي وحدائق منزلية",
    comment:
      "الاهتمام بالتفاصيل والخامات كان على أعلى مستوى. التوازن بين الإضاءة الطبيعية والخصوصية في الحديقة والمجلس كان حلًا هندسيًا عبقريًا.",
    rating: 5,
  },
  {
    id: 4,
    name: "د. فهد العتيبي",
    role: "مستثمر عقاري",
    location: "الخبر، السعودية",
    projectType: "مجمع تجاري ومكاتب",
    comment:
      "احترافية عالية في إدارة المخططات المعقدة، والتزام صارم بجدول التنفيذ والتكلفة التقديرية. خيارنا الأول والوحيد لمشاريعنا القادمة.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section
      dir="rtl"
      className="bg-[#1C1C1C] text-[#F7F4EF] font-sans py-16 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* خلفية نمط هندسي خفيف جداً */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg
          className="w-full h-full text-white"
          fill="none"
          viewBox="0 0 800 400"
        >
          <circle
            cx="400"
            cy="200"
            r="300"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          <circle
            cx="400"
            cy="200"
            r="180"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 md:mb-16"
        >
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#A39585] mb-4">
            آراء عملائنا — آراء وتوصيات
          </span>
          <h2 className="text-3xl md:text-5xl font-arch font-bold leading-tight">
            شركاء النجاح ثقتهم هي رأسمالنا
          </h2>
        </motion.div>

        {/* Testimonial Card Display */}
        <div className="bg-[#242424] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-16 shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col justify-between min-h-[260px]"
            >
              <div>
                {/* Rating Stars & Project Type Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-1 text-[#A39585]">
                    {[...Array(current.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#A39585] bg-[#A39585]/10 px-3 py-1 rounded-full border border-[#A39585]/20">
                    {current.projectType}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-lg md:text-2xl font-arch text-gray-200 leading-relaxed italic mb-8">
                  "{current.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white font-arch">
                    {current.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400">
                    {current.role} —{" "}
                    <span className="text-gray-500">{current.location}</span>
                  </p>
                </div>

                {/* Index Counter */}
                <div className="text-xs font-mono text-gray-500 tracking-widest">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls (< > Buttons) */}
        <div className="flex items-center justify-between mt-8">
          {/* Slider Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-2 rounded-full transition-all duration-300 after:absolute after:-inset-2 after:content-[''] after:rounded-full ${
                  currentIndex === idx
                    ? "w-8 bg-[#A39585]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full bg-[#242424] border border-white/10 text-white flex items-center justify-center hover:bg-[#A39585] hover:text-[#1C1C1C] hover:border-[#A39585] transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 transform rotate-180 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full bg-[#242424] border border-white/10 text-white flex items-center justify-center hover:bg-[#A39585] hover:text-[#1C1C1C] hover:border-[#A39585] transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
