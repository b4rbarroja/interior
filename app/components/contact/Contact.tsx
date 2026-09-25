"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "سكني فاخر (فيلا / قصر)",
    budget: "٥٠٠ ألف - ١ مليون",
    spaceSize: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="bg-[#1C1C1C] text-[#F7F4EF] font-sans py-16 md:py-36 px-6 md:px-12 relative border-t border-white/10"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 pb-6 md:pb-8 border-b border-white/10 gap-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A39585] mb-3 block">
              — بدء الاستشارة المعمارية
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-arch font-bold leading-tight">
              ابدأ دراسة مشروعك معنا
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
            نستقبل عدداً محدداً من المشاريع شهرياً لضمان تركيز أعلى وتفاصيل
            هندسية دقيقة تليق برؤيتك.
          </p>
        </motion.div>

        {/* Workflow Steps - Horizontal Process Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 pb-10 md:pb-16 border-b border-white/10"
        >
          <div className="flex items-start gap-4">
            <span className="text-xl font-arch font-bold text-[#A39585]">
              01.
            </span>
            <div>
              <h4 className="font-bold text-white mb-1">تأهيل الطلب</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                مراجعة تفاصيل ونطاق العمل والميزانية لضمان ملاءمتها مع نهج
                المكتب.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl font-arch font-bold text-[#A39585]">
              02.
            </span>
            <div>
              <h4 className="font-bold text-white mb-1">جلسة استكشافية</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                اجتماع مباشر (حضوري أو أونلاين) لمناقشة الفلسفة والمخططات وتصورك
                للمساحة.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl font-arch font-bold text-[#A39585]">
              03.
            </span>
            <div>
              <h4 className="font-bold text-white mb-1">المقترح المعماري</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                تقديم خطة العمل والتكلفة التقديرية والجدول الزمني لبدء التنفيذ.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content: Info & Modern Minimalist Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Architectural Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-8 md:space-y-12"
          >
            <div>
              <h3 className="text-[#A39585] text-xs font-bold uppercase tracking-wider mb-2">
                تواصل مباشر للمشاريع العاجلة
              </h3>
              <a
                dir="ltr"
                href="tel:+9660531226345"
                className="text-2xl md:text-3xl font-arch font-bold text-white hover:text-[#A39585] transition-colors block dir-ltr text-right"
              >
                +966 0531226345
              </a>
              <p className="text-sm text-gray-400 mt-1">
                projects@sk-architecture.com
              </p>
            </div>

            {/* Architectural Accent Box */}
          </motion.div>

          {/* Right Column: Open Border-Bottom Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              {/* Inputs Group 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل *"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#A39585] transition-colors"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="رقم الجوال / واتساب *"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#A39585] transition-colors"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Inputs Group 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-xs text-gray-400 mb-2">
                    نوع المشروع *
                  </label>
                  <select
                    className="w-full bg-[#222222] border-b border-white/20 py-3 text-base md:text-sm text-white focus:outline-none focus:border-[#A39585] transition-colors rounded-t-md px-2 min-h-[46px]"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                  >
                    <option value="سكني فاخر (فيلا / قصر)">
                      سكني فاخر (فيلا / قصر)
                    </option>
                    <option value="تجاري (كافيه / مطعم / معرض)">
                      تجاري (كافيه / مطعم / معرض)
                    </option>
                    <option value="ضيافة (فندق / منتجع)">
                      ضيافة (فندق / منتجع)
                    </option>
                    <option value="تصميم خارجي / حدائق">
                      تصميم خارجي / حدائق
                    </option>
                  </select>
                </div>
                <div className="relative flex items-end">
                  <input
                    type="text"
                    placeholder="المساحة التقريبية (مثال: 450 م²)"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#A39585] transition-colors"
                    value={formData.spaceSize}
                    onChange={(e) =>
                      setFormData({ ...formData, spaceSize: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Budget Selector */}
              <div>
                <label className="block text-xs text-gray-400 mb-3">
                  الميزانية المرصودة للمشروع (تقديرياً) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "٢٥٠ - ٥٠٠ ألف ريال",
                    "٥٠٠ ألف - ١ مليون",
                    "أكثر من ١ مليون ريال",
                  ].map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() =>
                        setFormData({ ...formData, budget: option })
                      }
                      className={`py-3.5 md:py-3 px-4 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                        formData.budget === option
                          ? "bg-[#A39585] text-[#1C1C1C] border-[#A39585]"
                          : "bg-transparent text-gray-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <textarea
                  rows={3}
                  placeholder="نبذة عن رؤيتك أو متطلبات المشروع (اختياري)..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#A39585] transition-colors resize-none"
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-[#F7F4EF] text-[#1C1C1C] font-bold text-sm rounded-xl hover:bg-[#A39585] hover:text-white transition-all duration-300 shadow-xl"
              >
                إرسال طلب الاستشارة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
