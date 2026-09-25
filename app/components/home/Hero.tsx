import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "خدماتنا", href: "/services" },
  { label: "مشاريعنا", href: "/projects" },
];

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="bg-[#F7F4EF] min-h-screen text-[#222222] font-sans pt-8 pb-16 overflow-hidden flex flex-col justify-between"
    >
      {/* Header / Navigation */}
      <header className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-y-3 md:gap-y-0 mb-8 md:mb-16 relative">
        <nav className="order-3 w-full md:order-none md:w-1/3 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1 md:gap-10 text-sm md:text-base font-semibold tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-2 md:py-0 hover:text-gray-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="order-1 md:order-none md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center"
        >
          <img
            src="/skwbg.png"
            alt="SK Architecture Logo"
            width="85"
            height="85"
            className="object-contain mix-blend-multiply hover:opacity-80 transition-opacity"
            loading="eager"
          />
        </Link>

        {/* CTA Button */}
        <div className="order-2 md:order-none md:w-1/3 flex justify-end">
          <Link
            href="https://wa.me/+9660531226345"
            className="bg-white border border-gray-300 text-[#222222] px-6 sm:px-8 py-3 min-h-[44px] rounded-full text-base font-semibold hover:bg-gray-50 transition-colors shadow-sm"
          >
            تواصل معنا
          </Link>
        </div>
      </header>

      {/* Hero Typography - Scaled Up */}
      <div className="container mx-auto px-6 flex flex-col items-center text-center mb-10 md:mb-12">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-arch font-black leading-tight mb-6 max-w-5xl tracking-wide uppercase">
          نصنع أجواءً، <br />
          <span className="font-normal text-[#4A433B] text-3xl sm:text-4xl md:text-6xl block mt-3">
            ونصيغ تجارب أصيلة
          </span>
        </h1>

        <p className="max-w-2xl text-[#333333] text-base md:text-xl font-medium leading-relaxed mb-8 md:mb-10">
          مساحات داخلية مصممة بعناية، حيث تلتقي الخامات الطبيعية والتفاصيل
          الشرقية الدافئة مع الراحة اليومية في تناغم تام وتصميم لا يحده زمن.
        </p>

        <Link
          href="#contact"
          className="bg-[#222222] text-white px-8 sm:px-10 py-4 min-h-[48px] rounded-full text-base font-bold hover:bg-black transition-all shadow-xl hover:shadow-2xl"
        >
          ابدأ مشروعك
        </Link>
      </div>

      {/* Image Gallery Strip */}
      <div className="w-full flex justify-center items-center gap-3 md:gap-5 px-2 md:px-8 h-[35vh] md:h-[45vh]">
        {[
          {
            id: 1,
            src: "/hero/1.jpg",
            alt: "تصميم داخلي 1",
            offset: "translate-y-4",
          },
          {
            id: 2,
            src: "/hero/2.jpg",
            alt: "تصميم داخلي 2",
            offset: "translate-y-8",
          },
          {
            id: 3,
            src: "/hero/3.jpg",
            alt: "تصميم داخلي رئيسي",
            offset: "translate-y-12 scale-105 z-10",
          },
          {
            id: 4,
            src: "/hero/4.jpg",
            alt: "تصميم داخلي 4",
            offset: "translate-y-8",
          },
          {
            id: 5,
            src: "/hero/5.jpg",
            alt: "تصميم داخلي 5",
            offset: "translate-y-4",
          },
        ].map((img) => (
          <div
            key={img.id}
            className={`relative w-1/5 h-full overflow-hidden rounded-t-full rounded-b-md transform transition-transform duration-700 hover:scale-105 ${img.offset}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/20 to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
