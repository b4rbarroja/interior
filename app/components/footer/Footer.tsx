"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-[#181818] text-[#F7F4EF] font-sans border-t border-white/10 pt-14 md:pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo Symbol */}
              <div className="w-10 h-10 rounded-lg  text-[#181818] font-arch font-bold flex items-center justify-center text-xl tracking-tighter">
                <img
                  src="/whitesk.png"
                  alt="SK Architecture"
                  className="w-full h-full object-contain"
                ></img>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              استوديو متخـصص في التصـميم المـعماري والداخلي الفاخر. ندمـج بين
              المينيماليزم العصري والهوية المعمارية لتجسيد مساحات تلبي أسلوب
              حياتك.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A39585]">
              التصفح
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  عن الاستوديو
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  أعمالنا المختارة
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  الخدمات المعمارية
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  آراء العملاء
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A39585]">
              معلومات
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  أسئلة شائعة
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  حجز استشارة
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A39585]">
              النشرة المعمارية
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              اشترك للحصول على إلهامات معمارية ومقالات حول أحدث اتجاهات التصميم.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني..."
                  className="w-full bg-[#222222] border border-white/10 rounded-xl px-4 py-3 text-base md:text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#A39585] transition-colors"
                />
                <button
                  type="submit"
                  className="static md:absolute w-full md:w-auto mt-2 md:mt-0 md:left-1.5 md:top-1.5 md:bottom-1.5 px-4 md:px-3 py-3 md:py-0 bg-[#A39585] text-[#181818] rounded-lg text-xs font-bold hover:bg-white transition-colors"
                >
                  اشتراك
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section: Socials & Rights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-6">
            {["Instagram", "X (Twitter)", "LinkedIn", "Behance"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="py-1.5 md:py-0 hover:text-[#A39585] transition-colors"
                >
                  {platform}
                </a>
              ),
            )}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left dir-ltr">
            © {new Date().getFullYear()} SK Architecture Studio. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
