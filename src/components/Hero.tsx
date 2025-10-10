import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Dondapati Devi Durga
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              B.Tech CSE (AIML) Student | Aspiring Software Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I’m a passionate and dedicated Computer Science student specializing
            in Artificial Intelligence and Machine Learning. I enjoy solving
            real-world problems through code and exploring software development,
            cloud technologies, and Java programming. Always eager to learn,
            build, and innovate.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
              onClick={() => scrollToSection("skills")}
            >
              View My Skills
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-secondary/50 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
      </button>
    </section>
  );
};
