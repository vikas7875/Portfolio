import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brainwave Application",
    description:
      "A modern and responsive landing website featuring parallax animations, smooth scrolling, and reusable components.",
    image: "/projects/brainwave.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://sujit-brainwave.netlify.app/",
    githubUrl: "https://github.com/Sujit0077/Brainave",
  },
  {
    id: 2,
    title: "React Admin Dashboard",
    description:
      "Feature-rich admin dashboard with interactive data visualizations, theme switching, and CRUD operations using Syncfusion components.",
    image: "/projects/react_admin_dashboard.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://sujitdashboard.netlify.app/",
    githubUrl: "https://github.com/Sujit0077/dashboard",
  },
  {
    id: 3,
    title: "Nike Website",
    description:
      "Fully responsive e-commerce website showcasing Nike products with dynamic displays and interactive UI.",
    image: "/projects/nike.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://sujitnike.netlify.app/",
    githubUrl: "https://github.com/Sujit0077/Nike",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    description:
      "Classic two-player Tic-Tac-Toe game with editable player names, smooth gameplay, and responsive UI.",
    image: "/projects/tictactoe.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://sujittictactoe.netlify.app/",
    githubUrl: "https://github.com/Sujit0077/Tic-Tac-Toe1",
  },
  {
    id: 5,
    title: "Place Picker Website",
    description:
      "Interactive platform to select and organize places with proximity-based sorting and efficient state management.",
    image: "/projects/placepicker.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sujit0077/Place-picker",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex flex-col sm:flex-row justify-start items-right gap-4 mt-10">
          <button
            className="cosmic-button w-fit flex items-center gap-2"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "More Projects"} <ArrowRight size={16} />
          </button>

          <a
            className="cosmic-button w-fit flex items-center gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
