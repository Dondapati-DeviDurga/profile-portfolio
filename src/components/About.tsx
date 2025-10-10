import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I’m <span className="text-primary font-semibold">Dondapati Devi Durga</span>, 
              a final-year <span className="font-medium">B.Tech Computer Science and Engineering (AIML)</span> student 
              from <span className="font-medium">BVC College of Engineering, Andhra Pradesh</span>. 
              With a current CGPA of 8.24, I’m passionate about building efficient, creative, 
              and user-friendly software solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I’ve completed an internship in <span className="font-medium">Core and Advanced Java</span> 
              where I worked on mini-projects to strengthen my understanding of 
              object-oriented programming and database integration using JDBC. 
              I also hold certifications in <span className="font-medium">Java Programming (NPTEL)</span> 
              and <span className="font-medium">Cloud Computing</span>, 
              which helped me gain deeper insights into software and cloud technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy solving logical problems, collaborating with teams, and learning new technologies. 
              Beyond coding, I love <span className="font-medium">listening to music</span>, 
              <span className="font-medium">watching movies</span>, and engaging in 
              <span className="font-medium">public speaking</span> activities.
            </p>

            {/* Achievements Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-3xl font-bold text-primary">8.24</div>
                <div className="text-sm text-muted-foreground mt-2">Current CGPA</div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground mt-2">Certifications</div>
              </Card>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="w-full h-full bg-muted/30 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  Your professional photo or avatar illustration can go here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
