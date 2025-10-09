import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    icon: Server,
    title: "Backend Development",
    items: ["Node.js", "Python", "REST APIs", "GraphQL"]
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["HTML5", "CSS3", "JavaScript", "WebGL"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    items: ["React Native", "PWA", "Responsive Design"]
  },
  {
    icon: Palette,
    title: "Design",
    items: ["UI/UX", "Figma", "Adobe XD", "Prototyping"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
