import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using HTML, CSS, and Bootstrap to showcase my academic journey, technical skills, and projects. Designed a fully responsive and clean interface suitable for both desktop and mobile users.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "gradient-1",
  },
  {
    title: "House Price Prediction using Linear Regression",
    description:
      "A machine learning project that predicts house prices based on various features such as area, number of rooms, and location. Implemented using Python, Linear Regression, and data visualization libraries for performance analysis.",
    technologies: ["Python", "Machine Learning", "Linear Regression", "Pandas", "Matplotlib"],
    image: "gradient-2",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the projects I’ve built, combining my technical knowledge with creativity and problem-solving.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${
                  index === 0
                    ? "from-primary/40 to-accent/40"
                    : "from-accent/40 to-primary/40"
                } flex items-center justify-center group-hover:scale-105 transition-transform`}
              >
                <p className="text-muted-foreground text-center px-4">
                  {project.title}
                </p>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
