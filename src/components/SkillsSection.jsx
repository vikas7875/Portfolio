import { useState } from "react";
import { cn } from "@/lib/utils";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  // FaDocker,
  FaFigma,
  // FaDatabase,
  FaExternalLinkAlt,
  FaJenkins,
  FaJava 
} from "react-icons/fa";
import {
  SiTypescript,
  // SiNextdotjs,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiPostgresql,
  SiAmazonec2,
} from "react-icons/si";
const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: <FaHtml5 className="text-red-500" />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: <FaReact className="text-blue-500" />,
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  // {
  //   name: "Next.js",
  //   level: 80,
  //   category: "frontend",
  //   icon: <SiNextdotjs className="text-shadow-gray-800" />,
  // },

  // Backend
  {
    name: "Java",
    level: 80,
    category: "backend",
    icon: <FaJava className="text-green-500" />,
  },
  {
    name: "Spring Boot",
    level: 75,
    category: "backend",
    icon: <BiLogoSpringBoot className="text-gray-500" />,
  },
  {
    name: "JPA",
    level: 70,
    category: "backend",
    icon: <BiLogoSpringBoot className="text-green-700" />,
  },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
    icon: <SiPostgresql className="text-blue-600" />,
  },
  {
    name: "GraphQL",
    level: 60,
    category: "backend",
    icon: <SiGraphql className="text-pink-500" />,
  },

  // Tools
  {
    name: "AWS EC2",
    level: 70,
    category: "tools",
    icon: <SiAmazonec2 className="text-white" />,
  },
  {
    name: "Jenkins",
    level: 70,
    category: "tools",
    icon: <FaJenkins className="text-white" />,
  },
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: <FaGithub className="text-white" />,
  },
  // {
  //   name: "Docker",
  //   level: 70,
  //   category: "tools",
  //   icon: <FaDocker className="text-blue-400" />,
  // },
  {
    name: "Postman",
    level: 60,
    category: "tools",
    icon: <SiPostman className="text-red-500" />,
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",
    icon: <FaFigma className="text-purple-500" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <FaExternalLinkAlt className="text-blue-600" />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-2xl">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
