// Array di progetti
const projects = [
  {
    id: "Portfolio",
    tag: "Portfolio",
    title: "Portfolio",
    description: "portfolioDescription",
    detailedDescription: "portfolioDetailedDescription",
    previewImage: "/profile.png",
    image: "/portfolio.png",
    url: "https://matteocolucci.com",
    technologies: ["Next.js", "Tailwind CSS"],
  },
];

// Array di tag
const tags = [
  {
    id: "Ship 12",
    icon: "🚀",
    color: "#FF4136",
  },
  {
    id: "Portfolio",
    icon: "📁",
    color: "#0074D9",
  },
];

// Funzione per ottenere tutti i progetti
export function getAllProjects() {
  return projects.map((project) => ({
    ...project,
    tagInfo: tags.find((tag) => tag.id === project.tag) || null,
  }));
}

// Funzione per ottenere un progetto per ID
export function getProject(id) {
  const project = projects.find((project) => project.id === id);
  if (!project) return null;

  return {
    ...project,
    tagInfo: tags.find((tag) => tag.id === project.tag) || null,
  };
}

// Funzione per ottenere tutti i tag
export function getAllTags() {
  return tags;
}
