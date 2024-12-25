import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDotnet,
} from "react-icons/si";

export const technologyIcons = {
  "Next.js": <SiNextdotjs className="text-blue-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500 text-2xl" />,
  React: <SiReact className="text-blue-600 text-2xl" />,
  "Node.js": <SiNodedotjs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
};

export const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-blue-500 text-2xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-2xl" />,
  },
  { name: "React", icon: <SiReact className="text-blue-600 text-2xl" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-2xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-500 text-2xl" /> }, // Added .NET
];
