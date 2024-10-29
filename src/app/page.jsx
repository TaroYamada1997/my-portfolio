"use client";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("about");

  const socials = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/TaroYamada1997",
    },
    {
      name: "X",
      icon: "fab fa-twitter",
      url: "https://x.com/m1_h74",
    },
    { name: "Blog", icon: "fas fa-blog", url: "https://myblog.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
      <header className="bg-transparent text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/profile.jpg"
            alt="伊勢谷 将太のプロフィール写真"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-[#444] shadow-2xl object-cover"
          />
          <h1 className="text-7xl font-roboto font-bold bg-gradient-to-r from-[#fff] to-[#999] text-transparent bg-clip-text mb-4">
            伊勢谷 将太
          </h1>
          <p className="text-2xl font-roboto mt-4 text-gray-400">
            Webエンジニア
          </p>
        </div>
      </header>

      <nav className="bg-[#0f3460] bg-opacity-90 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap">
            <li
              className={`cursor-pointer py-4 px-6 font-roboto ${
                activeTab === "about"
                  ? "text-[#2c3e50] border-b-2 border-[#2c3e50]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("about")}
            >
              プロフィール
            </li>
            <li
              className={`cursor-pointer py-4 px-6 font-roboto ${
                activeTab === "skills"
                  ? "text-[#2c3e50] border-b-2 border-[#2c3e50]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              スキル
            </li>
            <li
              className={`cursor-pointer py-4 px-6 font-roboto ${
                activeTab === "contact"
                  ? "text-[#2c3e50] border-b-2 border-[#2c3e50]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              お問い合わせ
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeTab === "about" && (
          <div className="bg-[#0f3460] bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#e94560] border-opacity-20">
            <h2 className="text-3xl font-roboto font-bold text-white mb-6">
              プロフィール
            </h2>
            <p className="font-roboto text-gray-300 leading-relaxed mb-8 text-lg">
              フロントエンド、バックエンド、インフラと幅広い経験があります。
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#e94560] text-white rounded-full hover:bg-[#533483] transition-all duration-300 shadow-lg"
                >
                  <i className={`${social.icon} text-xl`}></i>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === "skills" && (
            <Skills></Skills>
        )}

        {activeTab === "contact" && (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default MainComponent;