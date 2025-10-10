import { Card } from "@/components/ui/card";
import { Code, Database, Wrench, Users, Brain, Clock } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    items: ["Java", "Python", "C"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL"]
  },
  {
    icon: Wrench,
    title: "Tools & IDEs",
    items: ["Eclipse", "VS Code", "Git", "GitHub"]
  },
  {
    icon: Brain,
    title: "Certifications & Knowledge",
    items: [
      "Core & Advanced Java (HQL Edu Tech)",
      "NPTEL – Programming in Java",
      "NPTEL – Cloud Computing",
      "Java Fundamentals – Oracle Academy"
    ]
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Time Management"
    ]
  },
  {
    icon: Clock,
    title: "Additional Interests",
    items: [
      "Coding Competitions",
      "Technical Fests",
      "Public Speaking",
      "Listening to Music",
      "Watching Movies"
    ]
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
            Technologies and abilities that define my professional and academic journey
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
