import {  Code,Database, Network  } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl  md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-primary">
              Full-Stack Developer | Passionate Learner | Problem Solver
            </h3>

            <p className="text-muted-foreground text-justify">
              Hi, I&apos;m Vikas. I&apos;m a software engineer with a strong
              focus on full-stack web development. My expertise spans across
              frontend technologies like React,Angular,Javascript,ElectronJS and Ionic, along with
              backend technologies such as Java, Spring Boot, JPA. With a degree in
              Computer Science and a drive to constantly enhance my skills, I
              create scalable and efficient web solutions.
            </p>

            <p className="text-muted-foreground text-justify">
              I thrive on building user-centric applications that solve
              real-world problems. Whether it&apos;s optimizing performance or
              creating seamless user experiences, I am passionate about writing
              clean, efficient, and maintainable code. Outside of work, I love
              exploring new technologies, contributing to open-source projects,
              and challenging myself to learn more each day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/public/Vikas Gupta's Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, high-performance web applications using
                    modern technologies like React, Java and Spring Boo.
                    Focused on developing scalable backends and dynamic
                    frontends.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    API Development & Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Designing and implementing RESTful APIs with Express.js to
                    support dynamic, data-driven applications. Integrating
                    third-party services to enhance application functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground">
                    Designing efficient database schemas and handling data
                    persistence using MongoDB and SQL databases. Skilled in
                    creating optimized queries and ensuring data integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
