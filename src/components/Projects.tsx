import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Name 1",
    description: "A brief description of what this project does and the problem it solves. Highlight the key features and technologies used.",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "gradient-1"
  },
  {
    title: "Project Name 2",
    description: "Another exciting project showcasing your skills. Describe the impact and the technical challenges you overcame.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    image: "gradient-2"
  },
  {
    title: "Project Name 3",
    description: "Your third featured project. Explain what makes it special and what you learned from building it.",
    technologies: ["Python", "FastAPI", "MongoDB"],
    image: "gradient-3"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${
                index === 0 ? 'from-primary/40 to-accent/40' :
                index === 1 ? 'from-accent/40 to-primary/40' :
                'from-primary/30 to-accent/30'
              } flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <p className="text-muted-foreground text-center px-4">
                  Project Screenshot
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
