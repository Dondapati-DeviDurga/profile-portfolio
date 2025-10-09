import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Add your professional background here. Talk about your journey, 
              what drives you, and what makes you unique in your field.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Share your key achievements, experiences, and what you're passionate about. 
              This is where you tell your story.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
              </Card>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="w-full h-full bg-muted/30 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  Your professional photo or illustration can go here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
