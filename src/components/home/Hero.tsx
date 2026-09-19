import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/40">
      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-8 items-center section-spacing min-h-[600px]">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-6 z-10">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-semibold shadow-sm text-primary">
            <span className="flex size-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            New Collection 2026
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Elevate Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Everyday Lifestyle</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-[42rem] leading-relaxed">
            Discover our curated collection of premium electronics, fashion, and modern home essentials designed for the way you live today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Button size="lg" className="gap-2 w-full sm:w-auto h-12 px-8 text-base" asChild>
              <Link to="/products">
                <ShoppingBag className="size-5" />
                Shop Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-background" asChild>
              <Link to="/products?category=all">
                Explore Products
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Customer" 
                    className="size-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span><strong className="text-foreground">10k+</strong> Happy Customers</span>
            </div>
          </div>
        </div>
        
        {/* Image Content */}
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden lg:rounded-l-none lg:rounded-r-2xl xl:rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&h=1200&fit=crop" 
            alt="Premium lifestyle products" 
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
