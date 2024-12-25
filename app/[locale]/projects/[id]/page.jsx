import React from "react";
import { getProject } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import ErrorPage from "@/app/[locale]/projects/error";
import { technologyIcons } from "@/lib/technologyIcons";
import initTranslations from "../../../i18n";
import TranslationsProvider from "@/components/TranslationProvider";

const i18nNamespaces = ["projects"];

const ProjectPage = async ({ params }) => {
  const { id, locale } = await params;

  if (!id) return new Error();

  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const project = getProject(id);

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          {t(project.title)}
        </h1>
        {project.tagInfo && (
          <div className="text-center mb-4">
            <span
              className="px-2 py-1 text-sm text-white rounded"
              style={{ backgroundColor: project.tagInfo.color }}
            >
              {project.tagInfo.icon} {project.tagInfo.id}
            </span>
          </div>
        )}
        <Image
          src={project.image}
          alt={t(project.title)}
          layout="responsive"
          width={1920} // Larghezza originale dell'immagine
          height={1080} // Altezza originale dell'immagine
          className="rounded-xl shadow-lg mb-8 border border-gray-200"
        />
        <p className="text-gray-700 mb-8">
          {t(project.detailedDescription) || t(project.description)}
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t("Technologies")}</h2>
          <div className="flex flex-wrap">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg shadow-md mr-2 mb-2"
              >
                {technologyIcons[tech] || (
                  <span className="text-gray-700">{tech}</span>
                )}
                <span className="text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            href={project.url}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {t("Visit the Site")}
          </Link>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ProjectPage;
