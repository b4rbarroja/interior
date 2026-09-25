"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

interface Category {
  id: string;
  label: string;
  projects: Project[];
}

const categoriesData: Category[] = [
  {
    id: "coffeeshop",
    label: "كوفي شوب",
    projects: [
      {
        id: 1,
        title: "تصميم مقهى عصري - طراز مينيمال",
        location: "الرياض، السعودية",
        image: "/coffeeShops/2ad20fdb95d24127b8ede6d3972406f2.png",
      },
      {
        id: 2,
        title: "تصميم داخلي لكافيه وقهوة مختصة",
        location: "جدة، السعودية",
        image: "/coffeeShops/7fffd798d472f5c61b32623b83e6c7c0.png",
      },
      {
        id: 3,
        title: "تصميم مقهى تجاري - مساحة مفتوحة",
        location: "دبي، الإمارات",
        image: "/coffeeShops/83d28cbb61c0427777e3e9c9f3931eaf.jpg",
      },
      {
        id: 4,
        title: "تصميم كافيه مودرن بإضاءة خافتة",
        location: "الخبر، السعودية",
        image: "/coffeeShops/c3dbabbe8c3418f1574c4b41c61a7802.png",
      },
    ],
  },
  {
    id: "hotels",
    label: "فنادق",
    projects: [
      {
        id: 5,
        title: "تصميم داخلي لبهو فندق فاخر",
        location: "العلا، السعودية",
        image: "/Hotels/469dd1ad147ac65cddb72d2e391556a1.png",
      },
      {
        id: 6,
        title: "تصميم أجنحة فندقية مودرن",
        location: "دبي، الإمارات",
        image: "/Hotels/47d032f4db21e71007d85a9a88bdb516.png",
      },
      {
        id: 7,
        title: "تصميم الاستقبال والـ Lounge الفندقي",
        location: "أبوظبي، الإمارات",
        image: "/Hotels/9e4cb9a1d630c8507615059eaf1a9418.png",
      },
      {
        id: 8,
        title: "تصميم فندق بوتيك فاخر",
        location: "مسقط، عمان",
        image: "/Hotels/fa7e38e410e71829ec5a35746ff94f60.png",
      },
    ],
  },
  {
    id: "exterior",
    label: "تصميم خارجي",
    projects: [
      {
        id: 9,
        title: "تصميم واجهة فيلا مودرن",
        location: "الرياض، السعودية",
        image: "/Exterior design/1233db5e6ea359ee3634b2ab998e3381.png",
      },
      {
        id: 10,
        title: "تصميم معماري لمجمع سكني",
        location: "جدة، السعودية",
        image: "/Exterior design/383d4374d54affde4e9e3b81e424f7d8.png",
      },
      {
        id: 11,
        title: "تصميم واجهة تجارية إدارية",
        location: "الكويت",
        image: "/Exterior design/b7d3829698c790053e99bd0afe095b94.png",
      },
      {
        id: 12,
        title: "تصميم واجهة فيلا كلاسيك حديثة",
        location: "الدوحة، قطر",
        image: "/Exterior design/d574fba8bc06420505474bac9ec9b2eb.png",
      },
    ],
  },
  {
    id: "malls",
    label: "مراكز تجارية",
    projects: [
      {
        id: 13,
        title: "تصميم داخلي لمجمع تجاري فاخر",
        location: "الرياض، السعودية",
        image: "/Malls/351f46c691dd967900ba014f908512b3.png",
      },
      {
        id: 14,
        title: "تصميم ممرات ومساحات المول",
        location: "دبي، الإمارات",
        image: "/Malls/401ace208a7aaacee8fe0e762c42c7ff.png",
      },
      {
        id: 15,
        title: "تصميم معرض تجاري حديث",
        location: "جدة، السعودية",
        image: "/Malls/ca62c25bef1c39087f1e1149c59cdd68.png",
      },
      {
        id: 16,
        title: "تصميم واجهات المحلات والتسوق",
        location: "المنامة، البحرين",
        image: "/Malls/f7967c97433e9a16e9d79cd4ec726079.jpg",
      },
    ],
  },
  {
    id: "moroccan",
    label: "طراز مغربي",
    projects: [
      {
        id: 17,
        title: "تصميم مجلس بطراز مغربي أصيل",
        location: "مراكش، المغرب",
        image: "/Morocco/ad3c1eb4092bb304c14b6cbc77a5c686.png",
      },
      {
        id: 18,
        title: "تصميم صالة استقبال بنقوش مغربية",
        location: "الرياض، السعودية",
        image: "/Morocco/e52da293eff71e7829b6b289eb61dab6.png",
      },
      {
        id: 19,
        title: "تصميم فناء داخلي بطراز أندلسي مغربي",
        location: "فاس، المغرب",
        image: "/Morocco/eacdbf955cc314186b3fef9d4f99b0ed.png",
      },
      {
        id: 20,
        title: "تصميم مدخل فيلا بالزخارف المغربية",
        location: "أبوظبي، الإمارات",
        image: "/Morocco/f9657f1fd7fdec759c1a1f57ad412c30.png",
      },
    ],
  },
  {
    id: "gardens",
    label: "حدائق",
    projects: [
      {
        id: 21,
        title: "تصميم حديقة منزلية ومساحات خضراء",
        location: "الرياض، السعودية",
        image: "/Gardens/28f68d132de9d26b8104a55389a72ada.png",
      },
      {
        id: 22,
        title: "تصميم جلسات خارجية وتراس مودرن",
        location: "دبي، الإمارات",
        image: "/Gardens/35eb47860a49e5f97c9e65f73dd1d5d2.png",
      },
      {
        id: 23,
        title: "تصميم لاندسكيب وفيلا بمسابح خارجية",
        location: "مسقط، عمان",
        image: "/Gardens/85bf601af5167d417272788c1d51afc9.png",
      },
      {
        id: 24,
        title: "تصميم حديقة سطح (Roof Garden)",
        location: "جدة، السعودية",
        image: "/Gardens/f25ccef970bbe4f7ace92cdf4255f93e.png",
      },
    ],
  },
  {
    id: "kitchens",
    label: "مطابخ",
    projects: [
      {
        id: 25,
        title: "تصميم مطبخ مودرن بالرخام والخشب",
        location: "الرياض، السعودية",
        image: "/Kitchens/0e680e3db79c5e39f6f25507ca878149.png",
      },
      {
        id: 26,
        title: "تصميم مطبخ مفتوح بنظام الجزيرة (Island)",
        location: "الكويت",
        image: "/Kitchens/794ae01d8094eebe7989183d58863240.png",
      },
      {
        id: 27,
        title: "تصميم مطبخ عصري بخامات فاخرة",
        location: "دبي، الإمارات",
        image: "/Kitchens/7a63db3f9448643badd7341b992d6aa5.png",
      },
      {
        id: 28,
        title: "تصميم مطبخ مينيمال بإضاءة مخفية",
        location: "الدوحة، قطر",
        image: "/Kitchens/8d20aa6c5ca01d22c581916c69dd1fb2.png",
      },
    ],
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("coffeeshop");

  const activeCategory = categoriesData.find((cat) => cat.id === activeTab);

  return (
    <section
      dir="rtl"
      className="bg-[#F7F4EF] text-[#222222] font-sans py-14 sm:py-20 md:py-32 px-6 md:px-12 border-t border-gray-200/60 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-arch font-bold leading-tight max-w-3xl">
            مساحات صُممت لتُلهم، <br />
            <span className="text-[#6B5E51] font-normal block mt-2 text-2xl sm:text-3xl md:text-5xl">
              تصفح مشاريعنا بحسب التصنيف
            </span>
          </h2>
        </motion.div>

        {/* Categories Navigation Bar */}
        <div className="flex justify-center items-center mb-10 md:mb-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-white/70 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-gray-200/80 shadow-sm relative">
            {categoriesData.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative px-4 py-3 md:px-5 md:py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap z-10 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 hover:text-[#222222]"
                  }`}
                >
                  {/* Sliding Background Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#222222] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Geometric Aligned Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {activeCategory?.projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Geometric Cut-Corner Container */}
                <div
                  className="w-full h-[360px] md:h-[400px] overflow-hidden shadow-md relative bg-[#EAE6DF] border border-gray-200/80 transition-all duration-300 group-hover:shadow-xl"
                  style={{
                    clipPath:
                      "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* Location Badge */}
                  <span className="absolute top-5 right-5 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-sm border border-white/20">
                    {project.location}
                  </span>
                </div>

                {/* Title Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-arch font-bold text-[#222222] group-hover:text-[#6B5E51] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
