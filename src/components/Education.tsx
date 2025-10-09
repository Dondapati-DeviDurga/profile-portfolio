import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor's / Master's Degree",
    field: "Your Field of Study",
    institution: "University Name",
    year: "2018 - 2022",
    description: "Relevant coursework, achievements, or honors"
  },
  {
    degree: "Professional Certification",
    field: "Certification Name",
    institution: "Issuing Organization",
    year: "2023",
    description: "Brief description of the certification"
  }
];

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-primary">{edu.field}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
