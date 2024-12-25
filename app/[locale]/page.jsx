import React from "react";
import Link from "next/link";
import Ship12 from "../../components/Ship12";
import { skills } from "@/lib/technologyIcons";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider";

const i18nNamespaces = ["homepage", "ship12"];

const HomePage = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const months = [
    t("months.january", { ns: "ship12" }),
    t("months.february", { ns: "ship12" }),
    t("months.march", { ns: "ship12" }),
    t("months.april", { ns: "ship12" }),
    t("months.may", { ns: "ship12" }),
    t("months.june", { ns: "ship12" }),
    t("months.july", { ns: "ship12" }),
    t("months.august", { ns: "ship12" }),
    t("months.september", { ns: "ship12" }),
    t("months.october", { ns: "ship12" }),
    t("months.november", { ns: "ship12" }),
    t("months.december", { ns: "ship12" }),
  ];

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-primary">
              {t("greeting")}
            </h1>
            <p className="text-xl text-gray-700 mb-6">{t("jobTitle")}</p>
            <Link
              href="/projects"
              className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-primary transition duration-200"
            >
              {t("exploreProjects")}
            </Link>
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <img
              src="/profile.png"
              alt="Matteo Colucci Profile Picture"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="w-full border-t border-gray-300 my-8"></div>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("featuredProject")}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            {t("featuredProjectDescription")}
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

          <Ship12 months={months} />
        </section>

        <div className="w-full border-t border-gray-300 my-8"></div>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("skillsTechnologies")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 border rounded-lg shadow-sm transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-gray-700 text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full hover:from-blue-500 hover:to-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              <span>{t("learnMore")}</span> <span className="text-lg">→</span>
            </Link>
          </div>
        </section>

        <div className="w-full border-t border-gray-300 my-8"></div>

        <section className="container mx-auto px-4 py-20" id="contact">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("contact")}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            {t("contactDescription")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/matteocolucci/"
              className="flex items-center space-x-4 p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-transform duration-200"
            >
              <FaLinkedin className="text-blue-600 text-4xl" />
              <span className="text-gray-700 text-lg">{t("linkedin")}</span>
            </a>
            <a
              href="https://github.com/clccmatteo"
              className="flex items-center space-x-4 p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-transform duration-200"
            >
              <FaXTwitter className="text-black text-4xl" />
              <span className="text-gray-700 text-lg">{t("github")}</span>
            </a>
            <a
              href="mailto:clccmatteo@gmail.com"
              className="flex items-center space-x-4 p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-transform duration-200"
            >
              <CiMail className="fas fa-envelope text-blue-600 text-4xl"></CiMail>
              <span className="text-gray-700 text-lg">{t("email")}</span>
            </a>
          </div>
        </section>
      </div>
    </TranslationsProvider>
  );
};

export default HomePage;
