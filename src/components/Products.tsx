import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";

const products = [
  {
    title: "Premium Product 1",
    description: "High-quality solution designed to solve specific problems. Features advanced capabilities and modern design.",
    price: "$99",
    rating: 4.8,
    reviews: 124,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    gradient: "from-primary/30 to-secondary/30"
  },
  {
    title: "Premium Product 2",
    description: "Professional-grade product with cutting-edge technology. Perfect for those seeking excellence.",
    price: "$149",
    rating: 4.9,
    reviews: 89,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    gradient: "from-secondary/30 to-accent/30"
  },
  {
    title: "Premium Product 3",
    description: "Ultimate solution combining innovation and reliability. Trusted by professionals worldwide.",
    price: "$199",
    rating: 5.0,
    reviews: 156,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    gradient: "from-accent/30 to-primary/30"
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our premium collection of products designed with excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title}
              className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all group animate-slide-up hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-56 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="relative z-10 text-center p-4">
                  <p className="text-foreground/80 font-medium">Product Image</p>
                </div>
                <button 
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all z-20"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold flex-1">{product.title}</h3>
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-2">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground group-hover:shadow-glow transition-all"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
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
