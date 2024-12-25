import React from "react";
import Timeline from "@/components/Timeline/Timeline";
import { FaUser, FaFlag } from "react-icons/fa"; // Import icons
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Link from "next/link";

const i18nNamespaces = ["about"];

const AboutPage = async ({ params }) => {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="bg-gray-100 p-8">
        <h1 className="text-center font-bold text-4xl mb-8">{t("title")}</h1>
        <section className="mb-8">
          <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <FaUser className="mr-2" /> {t("profile")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="text-gray-700 font-light">
                {t("name")}: Matteo Colucci
                <br />
                {t("birthDate")}: 14 novembre 2005
                <br />
                {t("city")}: Milano, MI
              </div>
              <p className="text-gray-700 font-light">{t("description")}</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">{t("educationAndCareer")}</h2>
          <Timeline locale={locale} />
        </section>
        <section className="mb-8">
          <div className="bg-[#f3f4f6] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FaFlag className="mr-2" /> {t("languages")}
            </h2>
            <ul className="flex space-x-4 mt-4">
              <li className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
                <span className="mr-2">🇮🇹</span> {t("italian")}
              </li>
              <li className="bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-700 transition duration-300 flex items-center">
                <span className="mr-2">🇬🇧</span> {t("english")}
              </li>
            </ul>
          </div>
        </section>
        <Link
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          {t("backToHome")}
        </Link>
      </div>
    </TranslationsProvider>
  );
};

export default AboutPage;
