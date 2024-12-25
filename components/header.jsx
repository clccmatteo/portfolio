import React from "react";
import Link from "next/link";
import LanguageChanger from "./LanguageChanger";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import HeaderSticky from "./HeaderSticky";

const i18nNamespaces = ["header"];

const Header = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <HeaderSticky>
        <div className="container w-full mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <Link href="/">Matteo Colucci</Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-secondary"
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-secondary"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-700 hover:text-secondary"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <LanguageChanger />
              </li>
            </ul>
          </nav>
        </div>
      </HeaderSticky>
    </TranslationsProvider>
  );
};

export default Header;
