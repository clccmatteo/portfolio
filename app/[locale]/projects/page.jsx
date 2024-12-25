import React from "react";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Image from "next/image";

const i18nNamespaces = ["projects"];

const ProjectsPage = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const projects = getAllProjects().map((project) => ({
    ...project,
    description: t(project.description),
    detailedDescription: t(project.detailedDescription),
  }));

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="mb-8">{t("description")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={project.previewImage}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  {project.tagInfo && (
                    <span
                      className={`text-white ml-2 px-2 py-1 text-sm rounded`}
                      style={{ backgroundColor: project.tagInfo.color }}
                    >
                      {project.tagInfo.icon} {project.tagInfo.id}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 truncate-2-lines">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {t("learnMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ProjectsPage;
